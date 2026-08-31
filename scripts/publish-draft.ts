/**
 * Publish a drafted article to Sanity as a blogPost.
 *
 * Takes the JSON produced during drafting — title, date, and an ordered list of
 * blocks — converts it to PortableText in the same shape the existing posts
 * use, uploads a cover image, and creates the document.
 *
 * The cover comes from the episode's YouTube thumbnail rather than the podcast
 * feed artwork. The feed carries only 38 unique images across 85 episodes, one
 * of them reused sixteen times, so half the blog would share covers; YouTube
 * has a distinct high-resolution still per episode showing that conversation's
 * guest.
 *
 * Usage:
 *   npx tsx scripts/publish-draft.ts <draft.json> [--dry]
 *
 * Safe to re-run: a post whose title already exists in Sanity is skipped.
 */

import { createClient } from "@sanity/client";
import { createReadStream, createWriteStream, readFileSync, unlinkSync } from "fs";
import { get as httpsGet } from "https";
import { tmpdir } from "os";
import { join, resolve } from "path";

function loadEnvLocal() {
  try {
    const lines = readFileSync(resolve(process.cwd(), ".env.local"), "utf-8").split("\n");
    for (const line of lines) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const i = t.indexOf("=");
      if (i === -1) continue;
      const k = t.slice(0, i).trim();
      if (k && !(k in process.env)) process.env[k] = t.slice(i + 1).trim();
    }
  } catch {}
}
loadEnvLocal();

const DRY = process.argv.includes("--dry");
const draftPath = process.argv[2];
if (!draftPath) {
  console.error("Usage: npx tsx scripts/publish-draft.ts <draft.json> [--dry]");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID ?? "",
  dataset: process.env.VITE_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN ?? "",
  useCdn: false,
});

type Draft = {
  episodeFile: string;
  episodeTitle: string;
  date: string;
  title: string;
  videoId?: string | null;
  blocks: { style: "normal" | "h3"; text: string }[];
};

const draft: Draft = JSON.parse(readFileSync(draftPath, "utf8"));

const slugify = (t: string) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

const rid = () => Math.random().toString(36).slice(2, 9);

const toPortableText = (blocks: Draft["blocks"]) =>
  blocks.map((b) => ({
    _key: rid(),
    _type: "block",
    style: b.style,
    markDefs: [],
    children: [{ _key: rid(), _type: "span", marks: [], text: b.text }],
  }));

/** The episode's YouTube id, looked up from the title recorded at build time. */
function findVideoId(episodeTitle: string): string | null {
  try {
    const map: { videoId: string; title: string }[] = JSON.parse(
      readFileSync("transcripts/_video-ids.json", "utf8"),
    );
    const norm = (s: string) =>
      s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
    const target = norm(episodeTitle.split("|")[0]);
    const hit = map.find((m) => {
      const t = norm(m.title.split("|")[0]);
      return t === target || t.includes(target) || target.includes(t);
    });
    return hit?.videoId ?? null;
  } catch {
    return null;
  }
}

function downloadToTemp(url: string): Promise<string> {
  return new Promise((res, rej) => {
    const tmp = join(tmpdir(), `cover-${Date.now()}-${rid()}.jpg`);
    const file = createWriteStream(tmp);
    const go = (u: string, depth = 0) => {
      if (depth > 5) return rej(new Error("too many redirects"));
      httpsGet(u, (r) => {
        if ((r.statusCode === 301 || r.statusCode === 302) && r.headers.location) {
          file.close();
          try {
            unlinkSync(tmp);
          } catch {}
          return go(r.headers.location, depth + 1);
        }
        if (r.statusCode !== 200) return rej(new Error(`HTTP ${r.statusCode}`));
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

(async () => {
  console.log(DRY ? "DRY RUN — nothing will be written\n" : "");

  const existing = await client.fetch<string[]>('*[_type=="blogPost"].title');
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (existing.some((t) => norm(t) === norm(draft.title))) {
    console.log(`Already in Sanity, skipping: ${draft.title}`);
    return;
  }

  const videoId = draft.videoId ?? findVideoId(draft.episodeTitle);
  const paragraphs = draft.blocks.filter((b) => b.style === "normal").length;
  const headings = draft.blocks.filter((b) => b.style === "h3").length;
  const chars = draft.blocks.reduce((n, b) => n + b.text.length, 0);

  console.log(`Title    : ${draft.title}`);
  console.log(`From     : ${draft.episodeTitle.slice(0, 58)}`);
  console.log(`Date     : ${draft.date}`);
  console.log(`Slug     : ${slugify(draft.title)}`);
  console.log(`Body     : ${paragraphs} paragraphs, ${headings} headings, ${chars} chars`);
  console.log(`Cover    : ${videoId ? `youtube ${videoId}` : "NONE — needs one manually"}`);

  if (DRY) return;

  const doc: Record<string, unknown> = {
    _type: "blogPost",
    title: draft.title,
    slug: { _type: "slug", current: slugify(draft.title) },
    date: draft.date,
    author: "Niki Weiss",
    content: toPortableText(draft.blocks),
  };

  if (videoId) {
    // maxresdefault is not generated for every upload; hqdefault always exists.
    for (const q of ["maxresdefault", "hqdefault"]) {
      try {
        const tmp = await downloadToTemp(`https://img.youtube.com/vi/${videoId}/${q}.jpg`);
        const asset = await client.assets.upload("image", createReadStream(tmp), {
          filename: `${videoId}-${q}.jpg`,
        });
        doc.image = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
        unlinkSync(tmp);
        console.log(`  cover uploaded (${q})`);
        break;
      } catch (e) {
        console.log(`  ${q} failed: ${(e as Error).message}`);
      }
    }
  }

  const created = await client.create(doc);
  console.log(`\nCreated ${created._id}`);
  console.log("Next: npm run build");
})();
