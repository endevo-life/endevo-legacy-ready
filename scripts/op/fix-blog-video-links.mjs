/**
 * One-off migration for the 4 posts published via publish-blog-posts.mjs.
 *
 * Those posts embedded their YouTube link as a plain-text paragraph
 * ("Watch the full conversation: https://..."), which PortableTextBody only
 * turns into a real link when the URL is a proper Portable Text link mark —
 * a bare string is rendered as inert text. This replaces that paragraph
 * with a real `youtubeEmbed` block (added to the blogPost schema in this
 * same change) so the video actually plays on the page.
 *
 * Idempotent: running it twice is a no-op the second time, since it only
 * acts on a plain-text paragraph matching the known pattern — once that
 * paragraph is replaced, there is nothing left for it to match.
 *
 * Usage: node scripts/op/fix-blog-video-links.mjs [--dry-run]
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const DRY_RUN = process.argv.includes("--dry-run");

function loadEnvLocal() {
  const path = join(ROOT, ".env.local");
  const lines = readFileSync(path, "utf-8").split("\n");
  const env = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const i = trimmed.indexOf("=");
    env[trimmed.slice(0, i).trim()] = trimmed.slice(i + 1).trim();
  }
  return env;
}

const env = loadEnvLocal();
if (!env.SANITY_WRITE_TOKEN) {
  console.error("SANITY_WRITE_TOKEN not found in .env.local — aborting.");
  process.exit(1);
}

const client = createClient({
  projectId: env.VITE_SANITY_PROJECT_ID,
  dataset: env.VITE_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const DOC_IDS = [
  "blogpost-when-life-insurance-does-not-pay",
  "blogpost-grief-that-arrives-before-the-actual-death",
  "blogpost-who-will-know-what-to-do-when-you-cannot",
  "blogpost-why-pet-loss-deserves-more-compassion-and-better-planning",
];

const LINK_PATTERN =
  /^Watch the full conversation: https:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]+)$/;

let keyCounter = 0;
const key = () => `kfix${Date.now()}${keyCounter++}`;

async function fixDoc(id) {
  const doc = await client.getDocument(id);
  if (!doc) {
    console.log(`⚠ ${id}: not found, skipping`);
    return;
  }

  const content = doc.content ?? [];
  const idx = content.findIndex((block) => {
    if (block._type !== "block") return false;
    const text = (block.children ?? []).map((c) => c.text ?? "").join("");
    return LINK_PATTERN.test(text);
  });

  if (idx === -1) {
    console.log(
      `✓ ${id}: no plain-text link found (already fixed, or never had one)`,
    );
    return;
  }

  const text = (content[idx].children ?? []).map((c) => c.text ?? "").join("");
  const match = text.match(LINK_PATTERN);
  const videoId = match[1];

  console.log(
    `→ ${id}: replacing plain-text link with youtubeEmbed (${videoId})`,
  );

  const newContent = [...content];
  newContent[idx] = {
    _type: "youtubeEmbed",
    _key: key(),
    videoId,
    caption: "Watch the full conversation",
  };

  if (DRY_RUN) {
    console.log("  (dry run — not writing)");
    return;
  }

  await client.patch(id).set({ content: newContent }).commit();
  console.log("  ✅ patched");
}

async function main() {
  console.log(
    DRY_RUN
      ? "DRY RUN — no documents will be changed.\n"
      : "LIVE RUN — patching documents.\n",
  );
  for (const id of DOC_IDS) {
    await fixDoc(id);
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error("FAILED:", err.statusCode ?? "", err.message);
  process.exit(1);
});
