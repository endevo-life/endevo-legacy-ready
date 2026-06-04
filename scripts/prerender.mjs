/**
 * Build-time prerender script.
 * Starts a local static server of dist/, visits each route with modern Puppeteer,
 * and saves the rendered HTML so Googlebot/Bingbot get real content on first crawl.
 *
 * Runs automatically after `npm run build` via the postbuild script.
 */

import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const PORT = 3033;

const ROUTES = [
  '/',
  '/solution',
  '/marketplace',
  '/trusted-experts',
  '/for-individuals',
  '/for-service-providers',
  '/for-employers',
  '/company',
  '/faq',
  '/contact',
  '/resources',
  '/learn-and-listen',
  '/news-and-events',
  '/case-studies/from-awareness-to-action',
  '/case-studies/life-in-transition',
  '/case-studies/medical-coverage',
  '/case-studies/already-covered',
  '/case-studies/hospice-volunteer',
  '/legal/privacy-policy',
  '/legal/terms-of-service',
  '/legal/cookie-policy',
  '/legal/cookie-settings',
];

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.xml':  'application/xml',
  '.txt':  'text/plain',
};

function startServer() {
  const server = createServer((req, res) => {
    const urlPath = req.url.split('?')[0];
    let filePath = join(distDir, urlPath);

    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(content);
    } catch {
      // Fall back to index.html for SPA routes
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(readFileSync(join(distDir, 'index.html')));
    }
  });

  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

/**
 * Launch a browser that works in both environments:
 *  - Vercel/Lambda build containers lack Chrome's system libraries, so we use
 *    @sparticuz/chromium (a self-contained Chromium) with puppeteer-core.
 *  - Locally and in GitHub Actions, the full `puppeteer` package ships a Chrome
 *    that runs against the host's libraries, so we use that.
 */
async function launchBrowser() {
  if (process.env.VERCEL) {
    const [{ default: chromium }, puppeteerCore] = await Promise.all([
      import('@sparticuz/chromium'),
      import('puppeteer-core'),
    ]);
    return puppeteerCore.default.launch({
      args: [...chromium.args, '--disable-dev-shm-usage'],
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const { default: puppeteer } = await import('puppeteer');
  return puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: true,
  });
}

async function prerender() {
  console.log('\n🔍 Starting prerender…');
  console.log(`  Environment: ${process.env.VERCEL ? 'Vercel (@sparticuz/chromium)' : 'local/CI (puppeteer)'}`);

  const server = await startServer();

  const browser = await launchBrowser();

  let passed = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();

      // Suppress console noise from the app
      page.on('console', () => {});
      page.on('pageerror', () => {});

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      const html = await page.content();

      const outDir = route === '/' ? distDir : join(distDir, route);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), html, 'utf-8');

      console.log(`  ✅  ${route}`);
      passed++;
      await page.close();
    } catch (err) {
      console.error(`  ❌  ${route} — ${err.message}`);
      failed++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n  Prerendered ${passed}/${ROUTES.length} routes (${failed} failed)\n`);

  if (failed > 0) process.exit(1);
}

prerender().catch((err) => {
  console.error('Prerender script failed:', err);
  process.exit(1);
});
