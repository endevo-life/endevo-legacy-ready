/**
 * Build-time prerender script.
 * Starts a local static server of dist/, visits each route with modern Puppeteer,
 * and saves the rendered HTML so Googlebot/Bingbot get real content on first crawl.
 *
 * Runs automatically after `npm run build` via the postbuild script.
 */

import { createServer } from "node:http";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { fetchBlogPosts } from "./fetch-blog-slugs.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const PORT = 3033;

const STATIC_ROUTES = [
  "/",
  "/solution",
  "/marketplace",
  "/trusted-experts",
  "/for-individuals",
  "/for-service-providers",
  "/for-employers",
  "/company",
  "/faq",
  "/contact",
  "/resources",
  "/blog",
  "/videos",
  "/learn-and-listen",
  "/news-and-events",
  "/case-studies/from-awareness-to-action",
  "/case-studies/life-in-transition",
  "/case-studies/medical-coverage",
  "/case-studies/already-covered",
  "/case-studies/hospice-volunteer",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/cookie-policy",
  "/legal/cookie-settings",
  "/myfinalplaybook/app/privacy",
];

/**
 * Routes that render Sanity content and therefore need to wait for the CMS
 * fetch to resolve before the HTML is captured. Individual /blog/:slug
 * pages are added to this set as they are discovered.
 */
const SANITY_ROUTES = new Set(["/blog"]);

/** An individual article page, e.g. /blog/some-slug. */
function isPostRoute(route) {
  return route.startsWith("/blog/");
}

function isSanityRoute(route) {
  return SANITY_ROUTES.has(route) || isPostRoute(route);
}

/**
 * The site-wide default <title>. A CMS route still showing this means the
 * per-page SEO tags never applied, so the capture must be rejected.
 */
const FALLBACK_TITLE =
  "<title>ENDevo — Legacy Readiness &amp; Digital Preparedness</title>";

/** An origin Sanity's CORS allowlist accepts. See the interception note below. */
const SANITY_ALLOWED_ORIGIN = "https://www.endevo.life";

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

function startServer() {
  const server = createServer((req, res) => {
    const urlPath = req.url.split("?")[0];
    let filePath = join(distDir, urlPath);

    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath).toLowerCase();
      res.writeHead(200, {
        "Content-Type": MIME[ext] || "application/octet-stream",
      });
      res.end(content);
    } catch {
      // Fall back to index.html for SPA routes
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(readFileSync(join(distDir, "index.html")));
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
      import("@sparticuz/chromium"),
      import("puppeteer-core"),
    ]);
    return puppeteerCore.default.launch({
      args: [...chromium.args, "--disable-dev-shm-usage"],
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
    headless: true,
  });
}

async function prerender() {
  console.log("\n🔍 Starting prerender…");
  console.log(
    `  Environment: ${process.env.VERCEL ? "Vercel (@sparticuz/chromium)" : "local/CI (puppeteer)"}`,
  );

  // Blog posts come from Sanity, so the route list is resolved at build
  // time rather than hardcoded. Throws if Sanity is unreachable — better a
  // failed build than silently shipping 76 unprerendered article pages that
  // serve the homepage's HTML to Googlebot.
  const posts = await fetchBlogPosts();
  const ROUTES = [...STATIC_ROUTES, ...posts.map((p) => `/blog/${p.slug}`)];
  console.log(
    `  Routes: ${STATIC_ROUTES.length} static + ${posts.length} blog posts = ${ROUTES.length}`,
  );

  const server = await startServer();

  const browser = await launchBrowser();

  let passed = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();

      // Suppress console noise from the app
      page.on("console", () => {});
      page.on("pageerror", () => {});

      // The page is served from localhost, which is not in Sanity's CORS
      // allowlist, so the browser's own fetch would be blocked (403) and
      // every CMS route would render empty. Proxy those requests through
      // Node instead — server-side fetch is not subject to CORS — and send
      // the deployed site's origin, which Sanity does allow.
      //
      // Interception is enabled on every page, not just CMS routes: once
      // it is on, EVERY request must be explicitly continued or the page
      // hangs waiting on unanswered requests.
      await page.setRequestInterception(true);
      page.on("request", async (req) => {
        const url = req.url();
        if (!url.includes(".sanity.io")) {
          req.continue().catch(() => {});
          return;
        }
        try {
          const upstream = await fetch(url, {
            headers: { Origin: SANITY_ALLOWED_ORIGIN },
          });
          const body = Buffer.from(await upstream.arrayBuffer());
          req.respond({
            status: upstream.status,
            contentType:
              upstream.headers.get("content-type") ?? "application/json",
            headers: { "Access-Control-Allow-Origin": "*" },
            body,
          });
        } catch {
          req.abort().catch(() => {});
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // networkidle0 fires when the network settles, which for a
      // Sanity-backed route happens BEFORE React Query has resolved and
      // rendered the content. Capturing there would write an empty shell —
      // exactly the "posts are invisible to Google" bug this fixes. So for
      // CMS routes, wait for real rendered content to appear.
      if (isPostRoute(route)) {
        // An article page is ready once its body text has rendered.
        await page.waitForFunction(
          () => {
            const article = document.querySelector("article");
            if (!article) return false;
            // Guard against capturing the loading skeleton.
            if (document.querySelector(".animate-pulse")) return false;
            return (article.textContent ?? "").trim().length > 200;
          },
          { timeout: 30000, polling: 250 },
        );
      } else if (route === "/blog") {
        // The listing is ready once post cards link to their own pages.
        // Its cards are short titles, so an article-length check never
        // passes here.
        await page.waitForFunction(
          () => document.querySelectorAll('a[href^="/blog/"]').length > 0,
          { timeout: 30000, polling: 250 },
        );
      }

      const html = await page.content();

      // Never write a post page that lacks its own <title>. A page falling
      // back to the site-wide default means the SEO component did not run,
      // and shipping it would tell Google the article is a duplicate of the
      // homepage.
      if (isPostRoute(route) && html.includes(FALLBACK_TITLE)) {
        throw new Error(
          "rendered with the fallback site title — SEO tags did not apply",
        );
      }

      const outDir = route === "/" ? distDir : join(distDir, route);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), html, "utf-8");

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

  console.log(
    `\n  Prerendered ${passed}/${ROUTES.length} routes (${failed} failed)\n`,
  );

  if (failed > 0) process.exit(1);
}

prerender().catch((err) => {
  console.error("Prerender script failed:", err);
  process.exit(1);
});
