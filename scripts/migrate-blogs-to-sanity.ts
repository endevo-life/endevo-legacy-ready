/**
 * Blog Migration Script — Static Array → Sanity CMS
 *
 * Reads the blogPosts array directly from Blog.tsx and pushes all posts
 * to Sanity as blogPost documents. Safe to re-run — uses createOrReplace
 * so existing docs are updated, not duplicated.
 *
 * Prerequisites:
 *   npm install -D tsx          (one-time, if not already installed)
 *
 * Get a Sanity write token:
 *   Go to https://www.sanity.io/manage → your project → API → Tokens
 *   Create a token with "Editor" permission
 *
 * Run:
 *   SANITY_WRITE_TOKEN=your_token npx tsx scripts/migrate-blogs-to-sanity.ts
 *
 * The script will:
 *   1. Upload each post's cover image to Sanity assets
 *   2. Convert content blocks (paragraph/heading/bullet/html) to PortableText
 *   3. Create or update the Sanity document
 */

import { createClient } from "@sanity/client";
import { createReadStream, readFileSync } from "fs";
import { get } from "https";
import { createWriteStream, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
import { blogPosts } from "../src/data/blogPostsData";

// ---------------------------------------------------------------------------
// Load .env.local automatically
// ---------------------------------------------------------------------------
function loadEnvLocal() {
  try {
    const envPath = resolve(process.cwd(), ".env.local");
    const lines = readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (key && !(key in process.env)) process.env[key] = val;
    }
  } catch {}
}
loadEnvLocal();

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID ?? "ebvyrev4";
const DATASET = process.env.VITE_SANITY_DATASET ?? "production";
const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN ?? "";

if (!WRITE_TOKEN) {
  console.error(
    "❌  SANITY_WRITE_TOKEN not found in .env.local or environment.",
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

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function parseDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d.toISOString().split("T")[0];
  } catch {}
  return dateStr;
}

function downloadToTemp(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const tmpFile = join(
      tmpdir(),
      `blog-img-${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`,
    );
    const file = createWriteStream(tmpFile);
    const request = (u: string) => {
      get(u, (res) => {
        if (
          (res.statusCode === 301 || res.statusCode === 302) &&
          res.headers.location
        ) {
          file.close();
          try {
            unlinkSync(tmpFile);
          } catch {}
          return request(res.headers.location);
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve(tmpFile);
        });
      }).on("error", reject);
    };
    request(url);
  });
}

async function uploadImage(url: string): Promise<any> {
  const tmpPath = await downloadToTemp(url);
  try {
    const asset = await client.assets.upload(
      "image",
      createReadStream(tmpPath),
      {
        filename: url.split("/").pop() ?? "cover.jpg",
      },
    );
    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } finally {
    try {
      unlinkSync(tmpPath);
    } catch {}
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

function toPortableText(blocks: any[]): any[] {
  if (!blocks?.length) return [];
  const result: any[] = [];

  for (const block of blocks) {
    const key = () => Math.random().toString(36).slice(2, 10);
    const plain = block.type === "html" ? stripHtml(block.text) : block.text;

    if (block.type === "heading") {
      result.push({
        _type: "block",
        _key: key(),
        style: "h3",
        markDefs: [],
        children: [{ _type: "span", _key: key(), text: plain, marks: [] }],
      });
    } else if (block.type === "bullet") {
      result.push({
        _type: "block",
        _key: key(),
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [{ _type: "span", _key: key(), text: plain, marks: [] }],
      });
    } else {
      // paragraph or html → plain paragraph
      result.push({
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: [{ _type: "span", _key: key(), text: plain, marks: [] }],
      });
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log(`\n🚀  Migrating ${blogPosts.length} blog posts to Sanity...\n`);

  let success = 0;
  let failed = 0;

  for (const post of blogPosts) {
    const docId = "blog-" + slugify(post.title);
    const shortTitle = post.title.slice(0, 55);
    process.stdout.write(`  → "${shortTitle}…" `);

    try {
      // Upload cover image
      let imageRef: any = undefined;
      if (post.image) {
        try {
          imageRef = await uploadImage(post.image);
        } catch {
          process.stdout.write(`[image failed] `);
        }
      }

      const doc: any = {
        _id: docId,
        _type: "blogPost",
        title: post.title,
        slug: { _type: "slug", current: slugify(post.title) },
        date: parseDate(post.date),
        content: toPortableText(post.content ?? []),
      };
      if (imageRef) doc.image = imageRef;
      if (post.link) doc.externalLink = post.link;

      await client.createOrReplace(doc);
      console.log("✓");
      success++;
    } catch (err: any) {
      console.log(`✗  ${err.message}`);
      failed++;
    }
  }

  console.log(`\n✅  Done — ${success} migrated, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

main();
