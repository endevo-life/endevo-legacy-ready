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
import { fetchVideoEpisodes } from "./fetch-video-ids.mjs";

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

/** An individual video episode page, e.g. /videos/some-episode-<id>. */
function isVideoRoute(route) {
  return route.startsWith("/videos/");
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
  const episodes = await fetchVideoEpisodes();
  const ROUTES = [
    ...STATIC_ROUTES,
    ...posts.map((p) => `/blog/${p.slug}`),
    ...episodes.map((e) => `/videos/${e.slug}`),
  ];
  console.log(
    `  Routes: ${STATIC_ROUTES.length} static + ${posts.length} blog posts + ${episodes.length} video episodes = ${ROUTES.length}`,
  );

  const server = await startServer();

  // The browser is deliberately short-lived — see the batch loop below.
  // Vercel build logs showed Chromium crashing partway through the
  // 101-route run ("Connection closed" cascades after ~9 routes on the
  // parallel build and mid-run on the old sequential one), taking every
  // remaining route with it. Memory accumulates across pages in the
  // constrained build container until the process is killed; a browser
  // that only ever renders one batch cannot get there.
  let browser = await launchBrowser();

  /** Errors that mean the whole browser died, not just this route. */
  const BROWSER_DEATH =
    /Connection closed|Target closed|Browser has disconnected|frame was detached|Protocol error/i;

  // Single-flight relaunch: when several concurrent workers hit the dead
  // browser at once, only one relaunch happens and the rest await it.
  let relaunching = null;
  function reviveBrowser() {
    if (!relaunching) {
      relaunching = (async () => {
        try {
          await browser.close();
        } catch {
          /* already gone */
        }
        browser = await launchBrowser();
      })().finally(() => {
        relaunching = null;
      });
    }
    return relaunching;
  }

  // The same Sanity queries repeat across all 101 pages (post list on
  // /blog, one post-by-slug per article), so proxied responses are cached
  // for the run. Cuts ~100 redundant round trips to Sanity and removes it
  // as a rate-limiting risk under concurrency.
  const apiCache = new Map();

  /** Renders one route in its own page and writes the HTML. Throws on any
   *  quality-gate failure so the caller can count it. */
  async function renderRoute(route) {
    const page = await browser.newPage();
    try {
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
        // The YouTube Data API needs the same treatment as Sanity: its key
        // is referrer-locked to the deployed site, so a request from the
        // localhost prerender page is rejected and video routes would
        // render empty. Proxy both through Node with the header each API
        // trusts.
        const isSanity = url.includes(".sanity.io");
        const isYouTube = url.includes("googleapis.com/youtube");
        if (!isSanity && !isYouTube) {
          req.continue().catch(() => {});
          return;
        }
        try {
          let cached = apiCache.get(url);
          if (!cached) {
            const upstream = await fetch(url, {
              headers: isSanity
                ? { Origin: SANITY_ALLOWED_ORIGIN }
                : { Referer: `${SANITY_ALLOWED_ORIGIN}/` },
            });
            cached = {
              status: upstream.status,
              contentType:
                upstream.headers.get("content-type") ?? "application/json",
              body: Buffer.from(await upstream.arrayBuffer()),
            };
            // Only successful responses are worth replaying.
            if (cached.status === 200) apiCache.set(url, cached);
          }
          req.respond({
            status: cached.status,
            contentType: cached.contentType,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: cached.body,
          });
        } catch {
          req.abort().catch(() => {});
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 45000,
      });

      // Every page must have committed its own SEO tags before capture.
      // react-helmet-async injects them asynchronously after render and
      // marks them data-rh; under concurrency, static pages captured
      // before that commit shipped with the fallback title and no
      // og:image (/contact and / both hit this in testing). The SEO
      // component always sets a description, so its data-rh meta is a
      // reliable readiness signal on every route.
      await page.waitForFunction(
        () => !!document.querySelector('meta[name="description"][data-rh]'),
        { timeout: 45000, polling: 100 },
      );

      // networkidle0 fires when the network settles, which for a
      // Sanity-backed route happens BEFORE React Query has resolved and
      // rendered the content. Capturing there would write an empty shell —
      // exactly the "posts are invisible to Google" bug this fixes. So for
      // CMS routes, wait for real rendered content to appear.
      if (isPostRoute(route)) {
        // An article page is ready once its body text has rendered AND its
        // own <title> has applied. Helmet commits the title asynchronously
        // after the body renders, and under concurrency that gap is wide
        // enough to lose the race — the first parallel run captured 50
        // pages whose body was ready but whose title was still the
        // site-wide fallback. Waiting on both closes the race; the
        // post-capture guard below stays as a backstop.
        await page.waitForFunction(
          () => {
            const article = document.querySelector("article");
            if (!article) return false;
            // Guard against capturing the loading skeleton.
            if (document.querySelector(".animate-pulse")) return false;
            if ((article.textContent ?? "").trim().length <= 200) return false;
            return !document.title.startsWith("ENDevo — Legacy Readiness");
          },
          { timeout: 45000, polling: 250 },
        );
      } else if (route === "/videos") {
        // The listing is ready once long-form episode cards link to their
        // own pages.
        await page.waitForFunction(
          () => document.querySelectorAll('a[href^="/videos/"]').length > 0,
          { timeout: 45000, polling: 250 },
        );
      } else if (route === "/blog") {
        // The listing is ready once post cards link to their own pages.
        // Its cards are short titles, so an article-length check never
        // passes here.
        await page.waitForFunction(
          () => document.querySelectorAll('a[href^="/blog/"]').length > 0,
          { timeout: 45000, polling: 250 },
        );
      }

      const html = await page.content();

      // Never write a post page that lacks its own <title>. A page falling
      // back to the site-wide default means the SEO component did not run,
      // and shipping it would tell Google the article is a duplicate of the
      // homepage.
      if (
        (isPostRoute(route) || isVideoRoute(route)) &&
        html.includes(FALLBACK_TITLE)
      ) {
        throw new Error(
          "rendered with the fallback site title — SEO tags did not apply",
        );
      }

      const outDir = route === "/" ? distDir : join(distDir, route);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), html, "utf-8");
    } finally {
      await page.close().catch(() => {});
    }
  }

  // Routes render concurrently through a small worker pool. Sequential
  // rendering took ~8-9 minutes for 101 routes; that long build window is
  // what let production deploys collide with preview builds and get
  // silently dropped (see the Vercel deploy reliability ticket). Each
  // worker uses its own page (tab) inside the one shared browser.
  // 4 keeps headroom on 4-core CI/build machines. 6 tabs saturated a dev
  // laptop enough that long articles lost their 45s wait; anything that
  // still loses a race gets the sequential retry pass below.
  // Vercel's build container is memory-constrained and runs the
  // self-contained @sparticuz/chromium; four concurrent tabs of a heavy
  // React app there is a real OOM risk, so it gets 2. Local machines and
  // GitHub runners (full puppeteer Chrome) get 4. Even at 2, the shared
  // Sanity cache and per-tab pipelining beat the old one-at-a-time loop.
  const DEFAULT_CONCURRENCY = process.env.VERCEL ? 2 : 4;
  const CONCURRENCY = Number(
    process.env.PRERENDER_CONCURRENCY || DEFAULT_CONCURRENCY,
  );
  console.log(`  Concurrency: ${CONCURRENCY} pages`);

  // Routes render in batches, and each batch gets a FRESH browser. This is
  // the actual fix for the Vercel deploy failures: Chromium's memory grows
  // across pages in the constrained build container until the process is
  // killed, and a dead browser fails every remaining route with
  // "Connection closed". A browser that renders at most one batch has a
  // bounded lifetime, so it cannot accumulate its way to an OOM kill.
  const BATCH_SIZE = Number(process.env.PRERENDER_BATCH || 25);
  let passed = 0;
  let failed = 0;
  const needsRetry = [];
  // Caps how often one route may take the browser down with it before it
  // is sent to the final retry pass instead of being requeued — otherwise
  // a single pathological page could crash-loop the whole run.
  const deathsByRoute = new Map();

  for (let start = 0; start < ROUTES.length; start += BATCH_SIZE) {
    const batch = ROUTES.slice(start, start + BATCH_SIZE);
    const queue = [...batch];

    async function worker() {
      for (;;) {
        const route = queue.shift();
        if (route === undefined) return;
        try {
          await renderRoute(route);
          console.log(`  ✅  ${route}`);
          passed++;
        } catch (err) {
          if (BROWSER_DEATH.test(err.message ?? "")) {
            // The browser died under this route. Relaunch (single-flight
            // across workers) so the rest of the batch is not doomed, and
            // give the route another turn.
            console.warn(`  ♻️  browser died at ${route} — relaunching`);
            await reviveBrowser();
            const deaths = (deathsByRoute.get(route) ?? 0) + 1;
            deathsByRoute.set(route, deaths);
            if (deaths <= 2) {
              queue.push(route);
            } else {
              needsRetry.push(route);
            }
          } else {
            // Defer the retry instead of retrying immediately: a route
            // that lost a timeout race under full concurrency would just
            // lose it again under the same load. It gets a second chance
            // below, after all batches finish, on an otherwise idle
            // machine.
            needsRetry.push(route);
          }
        }
      }
    }

    await Promise.all(
      Array.from({ length: Math.min(CONCURRENCY, batch.length) }, worker),
    );

    // Fresh browser for the next batch; the current one has served its
    // bounded lifetime.
    try {
      await browser.close();
    } catch {
      /* already gone */
    }
    if (start + BATCH_SIZE < ROUTES.length) browser = await launchBrowser();
  }

  // Sequential retry pass, on a fresh browser, for anything that failed
  // under concurrency.
  if (needsRetry.length > 0) {
    browser = await launchBrowser();
    for (const route of needsRetry) {
      try {
        await renderRoute(route);
        console.log(`  ✅  ${route} (retry)`);
        passed++;
      } catch (err) {
        console.error(`  ❌  ${route} — ${err.message}`);
        failed++;
      }
    }
    await browser.close();
  }
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
