/**
 * Fetches published blog post slugs from Sanity at build time.
 *
 * Shared by generate-sitemap.mjs and prerender.mjs so the two lists can
 * never drift apart. If one knew about a post and the other did not, we
 * would either advertise a URL to Google that renders as an empty shell,
 * or prerender a page nothing links to.
 *
 * Reads credentials from the same VITE_SANITY_* variables the app uses, so
 * there is no second place to configure.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

/**
 * Loads .env.local into process.env when the variables are not already set.
 * Vercel injects real env vars at build time; locally they live in the file.
 */
function loadEnv() {
  const envPath = join(ROOT, ".env.local");
  if (!existsSync(envPath)) return;

  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

/**
 * Returns every published post as { slug, updatedAt }, newest first.
 *
 * Throws rather than returning an empty list on failure. A silent empty
 * result would regenerate a sitemap with all 76 posts missing and quietly
 * undo the indexing work — the build must fail loudly instead.
 */
export async function fetchBlogPosts() {
  loadEnv();

  const projectId = process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.VITE_SANITY_DATASET;

  if (!projectId || !dataset) {
    throw new Error(
      "VITE_SANITY_PROJECT_ID / VITE_SANITY_DATASET are not set — cannot " +
        "resolve blog post URLs. Set them in the build environment.",
    );
  }

  // Only posts with a slug are addressable. defined(slug.current) keeps a
  // half-created draft from emitting a /blog/undefined URL.
  const query =
    '*[_type == "blogPost" && defined(slug.current)]' +
    '{"slug": slug.current, "updatedAt": _updatedAt} | order(updatedAt desc)';

  const url =
    `https://${projectId}.apicdn.sanity.io/v2024-01-01/data/query/${dataset}` +
    `?query=${encodeURIComponent(query)}`;

  const res = await fetch(url, {
    // Sanity's CORS allowlist is origin-based; the deployed site's origin is
    // permitted, so send it explicitly for consistent behaviour on CI.
    headers: { Origin: "https://www.endevo.life" },
  });

  if (!res.ok) {
    throw new Error(
      `Sanity query failed: HTTP ${res.status} ${res.statusText}. ` +
        "Blog post URLs could not be resolved.",
    );
  }

  const body = await res.json();
  const posts = body?.result ?? [];

  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error(
      "Sanity returned no blog posts. Refusing to emit a sitemap with zero " +
        "post URLs, which would deindex every article.",
    );
  }

  return posts.map((p) => ({
    slug: p.slug,
    // _updatedAt is an ISO timestamp; the sitemap wants a plain date.
    updatedAt: (p.updatedAt ?? "").slice(0, 10),
  }));
}
