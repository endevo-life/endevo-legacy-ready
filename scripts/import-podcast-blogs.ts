/**
 * Import articles from digitallegacypodcast.com/blog into Sanity.
 *
 * The podcast site publishes a written article for each episode. Those are real
 * articles — not show notes — and several already live in Sanity because they
 * were migrated by hand. This script finds the ones that are not here yet and
 * brings them across with their date, cover image, and body intact.
 *
 * Why scrape rather than read a feed: the site's only feed is the podcast RSS,
 * which carries episode show notes rather than article bodies. The article
 * prose is server-rendered into the blog page's HTML, so that is the source.
 *
 * Safe to re-run. Anything already in Sanity — matched on title or slug — is
 * skipped, so this never duplicates a post. Nothing is deleted or overwritten.
 *
 * Usage:
 *   npx tsx scripts/import-podcast-blogs.ts --dry     # report only, no writes
 *   npx tsx scripts/import-podcast-blogs.ts           # import what is missing
 *   npx tsx scripts/import-podcast-blogs.ts --limit 3 # import the first three
 *
 * Requires SANITY_WRITE_TOKEN in .env.local (same token the migration used).
 */

import { createClient } from "@sanity/client";
import {
  createReadStream,
  createWriteStream,
  readFileSync,
  unlinkSync,
} from "fs";
import { get as httpsGet } from "https";
import { tmpdir } from "os";
import { join, resolve } from "path";

// ---------------------------------------------------------------------------
// Env
// ---------------------------------------------------------------------------
function loadEnvLocal() {
  try {
    const lines = readFileSync(
      resolve(process.cwd(), ".env.local"),
      "utf-8",
    ).split("\n");
    for (const line of lines) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const i = t.indexOf("=");
      if (i === -1) continue;
      const k = t.slice(0, i).trim();
      const v = t.slice(i + 1).trim();
      if (k && !(k in process.env)) process.env[k] = v;
    }
  } catch {}
}
loadEnvLocal();

const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID ?? "";
const DATASET = process.env.VITE_SANITY_DATASET ?? "production";
const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN ?? "";
const BASE = "https://digitallegacypodcast.com";

const DRY = process.argv.includes("--dry");
const limitFlag = process.argv.indexOf("--limit");
const LIMIT = limitFlag !== -1 ? Number(process.argv[limitFlag + 1]) : Infinity;

if (!WRITE_TOKEN && !DRY) {
  console.error(
    "SANITY_WRITE_TOKEN not found in .env.local. Use --dry to preview.",
  );
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-01-01",
  token: WRITE_TOKEN,
  useCdn: false,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Compare titles and slugs on words alone, so punctuation never causes a
 *  false "missing" and a duplicate import. */
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** The site appends "-1" to slugs; strip it before comparing. */
const slugKey = (slug: string) =>
  norm(slug.replace(/-\d+$/, "").replace(/-/g, " "));

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function decode(s: string): string {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&rsquo;|&apos;/g, "’")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&mdash;/g, "—")
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

const strip = (s: string) => decode(s.replace(/<[^>]+>/g, ""));

/**
 * Headings that are page furniture rather than part of the article. These are
 * dropped wherever they appear but do not themselves end the body — "About
 * This Blog" sits *above* the prose, so treating it as a terminator would cut
 * the article before it starts.
 */
const DROP_HEADINGS = new Set([
  "about this blog",
  "recent posts",
  "share this post",
  "subscribe",
]);

/**
 * Headings that mark the end of the article. Everything from here down is
 * navigation, comments, or citation furniture. "Editorial sources" and
 * "Listen and take the next step" close the newer pieces; "Related Blog" and
 * "Comments" close the older ones.
 */
const END_HEADINGS = new Set([
  "related blog",
  "related blogs",
  "comments",
  "leave a comment",
  "editorial sources",
  "sources",
  "listen and take the next step",
]);

/**
 * Pull the article out of a blog page.
 *
 * The body is server-rendered, so the block elements in document order are the
 * article. Headings after "Related Blog" or "Comments" mark the end of the
 * prose, and everything from there on is site furniture.
 */
function extractArticle(html: string) {
  const title = strip(
    (html.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1] || "",
  )
    .replace(/\s*-\s*My Website\s*$/i, "")
    .trim();

  const img =
    (html.match(/property="og:image"\s+content="([^"]+)"/) || [])[1] ||
    (html.match(/<img[^>]+src="(https:\/\/storageapi\.podup\.com[^"]+)"/) ||
      [])[1] ||
    null;

  // Scope to the article container before reading anything. The full page also
  // contains an inline <style> block and a "related posts" rail carrying
  // paragraphs from *other* articles — scraping the whole document pulled both
  // in, which is how one import picked up 6.8KB of CSS and a stray paragraph
  // from an unrelated piece.
  const start = html.indexOf("detail-text");
  const region = start === -1 ? html : html.slice(start);

  // Walk headings and paragraphs together so document order is preserved.
  const nodes: { kind: "h3" | "p"; text: string }[] = [];
  const re = /<(h[23]|p)[^>]*>([\s\S]*?)<\/\1>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(region))) {
    const text = strip(m[2]);
    if (!text) continue;
    // Any CSS or script that survived the container scope: rules and selectors
    // read as long "paragraphs" but never contain sentence punctuation.
    if (/[{};]\s*$/.test(text) || text.includes("{") || text.includes("</"))
      continue;
    if (m[1] === "p") {
      if (text.length > 60) nodes.push({ kind: "p", text });
    } else {
      nodes.push({ kind: "h3", text });
    }
  }

  // Cut at the first terminating heading that follows real prose. The prose
  // check matters: a terminator appearing before any paragraph is furniture
  // above the article, not the end of it.
  let end = nodes.length;
  for (let i = 0; i < nodes.length; i++) {
    if (
      nodes[i].kind === "h3" &&
      END_HEADINGS.has(nodes[i].text.toLowerCase())
    ) {
      if (nodes.slice(0, i).some((n) => n.kind === "p")) {
        end = i;
        break;
      }
    }
  }

  // The page renders the opening paragraph twice — once in a preview card, and
  // that copy runs the standfirst and first paragraph together, so it is a
  // superset rather than an exact match. Drop any early paragraph that simply
  // contains a later one; comparing only adjacent equals would leave it in.
  const kept = nodes
    .slice(0, end)
    .filter(
      (n) => !(n.kind === "h3" && DROP_HEADINGS.has(n.text.toLowerCase())),
    );

  // Only the very first paragraph is the preview-card copy. Restrict the check
  // to index 0 — a wider window removed real paragraphs whose text happened to
  // contain a later short line, which cost one article more than half its body.
  const body = kept.filter((n, i) => {
    if (i !== 0 || n.kind !== "p") return true;
    return !kept
      .slice(1, 4)
      .some((o) => o.kind === "p" && n.text.includes(o.text));
  });

  // The published date is rendered as visible text ("Aug 25, 2026"); there is
  // no <time> element or JSON-LD on these pages to read it from.
  const dm = html.match(
    /\b((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},\s+20\d\d)\b/,
  );
  let pageDate: string | null = null;
  if (dm) {
    const d = new Date(dm[1]);
    if (!isNaN(d.getTime())) pageDate = d.toISOString().slice(0, 10);
  }

  return { title, img, body, pageDate };
}

/** PortableText blocks in the same shape the existing posts use: normal + h3. */
function toPortableText(body: { kind: "h3" | "p"; text: string }[]) {
  return body.map((n, i) => ({
    _key: `b${i}${Math.random().toString(36).slice(2, 7)}`,
    _type: "block",
    style: n.kind === "h3" ? "h3" : "normal",
    markDefs: [],
    children: [
      {
        _key: `s${i}${Math.random().toString(36).slice(2, 7)}`,
        _type: "span",
        marks: [],
        text: n.text,
      },
    ],
  }));
}

function downloadToTemp(url: string): Promise<string> {
  return new Promise((res, rej) => {
    const tmp = join(
      tmpdir(),
      `pb-${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`,
    );
    const file = createWriteStream(tmp);
    const go = (u: string, depth = 0) => {
      if (depth > 5) return rej(new Error("too many redirects"));
      httpsGet(u, (r) => {
        if (
          (r.statusCode === 301 || r.statusCode === 302) &&
          r.headers.location
        ) {
          file.close();
          try {
            unlinkSync(tmp);
          } catch {}
          return go(r.headers.location, depth + 1);
        }
        r.pipe(file);
        file.on("finish", () => {
          file.close();
          res(tmp);
        });
      }).on("error", rej);
    };
    go(url);
  });
}

async function uploadImage(url: string) {
  const tmp = await downloadToTemp(url);
  try {
    const asset = await client.assets.upload("image", createReadStream(tmp), {
      filename: url.split("/").pop() ?? "cover.jpg",
    });
    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } finally {
    try {
      unlinkSync(tmp);
    } catch {}
  }
}

/** Episode pubDates from the podcast feed, keyed for title matching — the
 *  blog pages themselves do not carry a reliable machine-readable date. */
async function feedDates(): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  try {
    const xml = await (await fetch(`${BASE}/rss`)).text();
    for (const item of xml.split("<item>").slice(1)) {
      const t = (item.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1] || "";
      const d = (item.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1] || "";
      const title = t
        .replace(/^<!\[CDATA\[/, "")
        .replace(/\]\]>$/, "")
        .trim();
      const date = new Date(d.trim());
      if (title && !isNaN(date.getTime())) {
        map.set(norm(title.split("|")[0]), date.toISOString().slice(0, 10));
      }
    }
  } catch {}
  return map;
}

async function discoverSlugs(): Promise<string[]> {
  const found = new Set<string>();
  for (let page = 1; page <= 20; page++) {
    const url = page === 1 ? `${BASE}/blog` : `${BASE}/blog?page=${page}`;
    let html: string;
    try {
      const r = await fetch(url);
      if (!r.ok) break;
      html = await r.text();
    } catch {
      break;
    }
    const before = found.size;
    for (const mm of html.matchAll(/\/blog\/([a-z0-9-]+)/g)) found.add(mm[1]);
    if (found.size === before) break;
  }
  return [...found];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
(async () => {
  console.log(DRY ? "DRY RUN — nothing will be written\n" : "");

  const slugs = await discoverSlugs();
  console.log(`Articles found on podcast site : ${slugs.length}`);

  const existing = await client.fetch<{ title: string; slug?: string }[]>(
    '*[_type=="blogPost"]{title,"slug":slug.current}',
  );
  const keys = new Set<string>();
  existing.forEach((p) => {
    keys.add(norm(p.title));
    if (p.slug) keys.add(slugKey(p.slug));
  });
  console.log(`Posts already in Sanity        : ${existing.length}`);

  const missing = slugs.filter((s) => !keys.has(slugKey(s)));
  console.log(`Missing from Sanity            : ${missing.length}\n`);
  if (!missing.length) return console.log("Nothing to import.");

  const dates = await feedDates();
  let done = 0;
  let skipped = 0;

  for (const slug of missing.slice(0, LIMIT)) {
    const url = `${BASE}/blog/${slug}`;
    try {
      const html = await (await fetch(url)).text();
      const { title, img, body, pageDate } = extractArticle(html);

      if (!title || body.filter((b) => b.kind === "p").length < 3) {
        console.log(`  skip  ${slug} — too little prose extracted`);
        skipped++;
        continue;
      }
      // Title match can succeed where the slug match failed.
      if (keys.has(norm(title))) {
        console.log(`  skip  ${slug} — title already in Sanity`);
        skipped++;
        continue;
      }

      // The page's own date wins; the feed is a fallback for pages that do not
      // render one. Today's date is the last resort and would be wrong, so it
      // is flagged rather than applied silently.
      const date = pageDate ?? dates.get(norm(title)) ?? null;
      if (!date) {
        console.log(`  skip  ${slug} — no publication date found`);
        skipped++;
        continue;
      }
      const chars = body.reduce((n, b) => n + b.text.length, 0);
      console.log(`  ${DRY ? "would add" : "adding"}  ${title.slice(0, 58)}`);
      console.log(
        `         date ${date} · ${body.length} blocks · ${chars} chars · img ${img ? "yes" : "NO"}`,
      );

      if (DRY) {
        done++;
        continue;
      }

      const doc: Record<string, unknown> = {
        _type: "blogPost",
        title,
        slug: { _type: "slug", current: slugify(title) },
        date,
        content: toPortableText(body),
        // Point back at the original so the canonical relationship is explicit.
        externalLink: url,
      };
      if (img) doc.image = await uploadImage(img);

      await client.create(doc);
      keys.add(norm(title));
      done++;
    } catch (e) {
      console.log(`  FAIL  ${slug} — ${(e as Error).message}`);
      skipped++;
    }
  }

  console.log(
    `\n${DRY ? "Would import" : "Imported"}: ${done}   Skipped: ${skipped}`,
  );
  if (!DRY && done) {
    console.log(
      "\nNext: npm run build   (regenerates sitemap + prerenders the new pages)",
    );
  }
})();
