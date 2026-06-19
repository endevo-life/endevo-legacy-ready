/**
 * Sitemap generator with git-derived lastmod.
 *
 * For each route, lastmod is the date of the most recent git commit that
 * touched any of the route's source files. This keeps lastmod truthful —
 * Google can trust it to prioritise recrawls — without manual edits.
 *
 * Run via `npm run sitemap` (also wired into the build).
 *
 * To add a page: add an entry to ROUTES below. `files` lists the source files
 * whose changes should bump that route's lastmod (the page plus any component
 * whose content is unique to it). If a file is missing or untracked, the build
 * date is used as a fallback.
 */

import { execSync } from "node:child_process";
import { writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITE_URL = "https://www.endevo.life";

// Single source of truth for the sitemap. Order is preserved in the output.
const ROUTES = [
  {
    path: "/",
    files: ["src/pages/Index.tsx"],
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/solution",
    files: ["src/pages/Solution.tsx"],
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/marketplace",
    files: ["src/pages/Marketplace.tsx"],
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/trusted-experts",
    files: ["src/pages/TrustedExperts.tsx"],
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/for-individuals",
    files: ["src/pages/ForIndividuals.tsx"],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/for-service-providers",
    files: ["src/pages/ForServiceProviders.tsx"],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/for-employers",
    files: ["src/pages/ForEmployers.tsx"],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/blog",
    files: ["src/pages/Blog.tsx"],
    changefreq: "daily",
    priority: "0.9",
  },
  {
    path: "/videos",
    files: ["src/pages/Videos.tsx"],
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/resources",
    files: ["src/pages/Resources.tsx"],
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/learn-and-listen",
    files: ["src/pages/LearnAndListen.tsx"],
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/news-and-events",
    files: ["src/pages/NewsAndEvents.tsx"],
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/company",
    files: ["src/pages/Company.tsx"],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/contact",
    files: ["src/pages/Contact.tsx"],
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/faq",
    files: ["src/pages/FAQ.tsx"],
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/case-studies/from-awareness-to-action",
    files: ["src/pages/CaseStudyAwarenessToAction.tsx"],
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/case-studies/life-in-transition",
    files: ["src/pages/CaseStudyLifeInTransition.tsx"],
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/case-studies/medical-coverage",
    files: ["src/pages/CaseStudyMedicalCoverage.tsx"],
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/case-studies/already-covered",
    files: ["src/pages/CaseStudyAlreadyCovered.tsx"],
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/case-studies/hospice-volunteer",
    files: ["src/pages/CaseStudyHospiceVolunteer.tsx"],
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/legal/privacy-policy",
    files: ["src/pages/PrivacyPolicy.tsx"],
    changefreq: "yearly",
    priority: "0.3",
  },
  {
    path: "/legal/terms-of-service",
    files: ["src/pages/TermsOfService.tsx"],
    changefreq: "yearly",
    priority: "0.3",
  },
  {
    path: "/legal/cookie-policy",
    files: ["src/pages/CookiePolicy.tsx"],
    changefreq: "yearly",
    priority: "0.3",
  },
  {
    path: "/legal/cookie-settings",
    files: ["src/pages/CookieSettings.tsx"],
    changefreq: "yearly",
    priority: "0.2",
  },
];

/** Build-date fallback (YYYY-MM-DD) for files with no git history. */
function buildDate() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Most recent commit date (YYYY-MM-DD) across the given files.
 * Falls back to the build date if none are tracked or git is unavailable.
 */
function lastmodFor(files) {
  let latest = "";
  for (const file of files) {
    if (!existsSync(join(ROOT, file))) continue;
    try {
      const out = execSync(`git log -1 --format=%cs -- "${file}"`, {
        cwd: ROOT,
        encoding: "utf-8",
      }).trim();
      if (out && out > latest) latest = out; // ISO dates sort lexically
    } catch {
      // ignore — fall through to build-date fallback
    }
  }
  return latest || buildDate();
}

function generate() {
  const urls = ROUTES.map((r) => {
    const lastmod = lastmodFor(r.files);
    return [
      "  <url>",
      `    <loc>${SITE_URL}${r.path}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${r.changefreq}</changefreq>`,
      `    <priority>${r.priority}</priority>`,
      "  </url>",
    ].join("\n");
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls.join("\n"),
    "</urlset>",
    "",
  ].join("\n");

  const outPath = join(ROOT, "public", "sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  console.log(`✅ Wrote ${ROUTES.length} URLs to public/sitemap.xml`);
}

generate();
