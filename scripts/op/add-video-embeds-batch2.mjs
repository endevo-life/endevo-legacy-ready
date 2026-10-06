/**
 * Adds a youtubeEmbed block to the 4 most recent posts that lacked one.
 *
 * Unlike fix-blog-video-links.mjs, these posts never carried a plain-text
 * YouTube URL to convert — they only referred to the episode in prose
 * ("Listen to the full conversation with ..."). The video ids below were
 * matched by GUEST NAME against the channel's 496-video catalog, which is
 * reliable where title-similarity matching was not: each post names its
 * guest, and the channel titles follow "Topic | Guest Name".
 *
 * The embed is appended as the last block, after the closing prose, since
 * there is no link paragraph to replace in place.
 *
 * Idempotent: skips any document that already has a youtubeEmbed block.
 *
 * Usage: node scripts/op/add-video-embeds-batch2.mjs [--dry-run]
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const DRY_RUN = process.argv.includes("--dry-run");

function loadEnvLocal() {
  const lines = readFileSync(join(ROOT, ".env.local"), "utf-8").split("\n");
  const env = {};
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith("#") || !t.includes("=")) continue;
    const i = t.indexOf("=");
    env[t.slice(0, i).trim()] = t.slice(i + 1).trim();
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

/** Post id -> the episode it is written from, matched by guest name. */
const TARGETS = [
  {
    id: "WILUFON6mVSmWk98Ba7J4R",
    title: "Your Will Is a Rudimentary Document",
    videoId: "0pWZscDyJ98",
    guest: "Dr. Cory Goldberg",
  },
  {
    id: "DYbAN5ZAD2mPcI1tW7LeQo",
    title: "Planning for a Special Needs Child: Lifetime of Care",
    videoId: "zM8nKSuIAkE",
    guest: "Julie Hoffman-Hogan",
  },
  {
    id: "WILUFON6mVSmWk98BYbMHX",
    title: "Planning for Digital Legacy Transfer With Ease Online",
    videoId: "Y4-CUPljeEE",
    guest: "Franco Della Torre",
  },
  {
    id: "WILUFON6mVSmWk98BYbDqc",
    title: "Why Talking About Death Helps Us Live More Fully",
    videoId: "X7V1TyuGwFg",
    guest: "Jill McClennen",
  },
];

let n = 0;
const key = () => `kvid${Date.now()}${n++}`;

async function addEmbed({ id, title, videoId, guest }) {
  const doc = await client.getDocument(id);
  if (!doc) {
    console.log(`⚠ ${title}: document not found, skipping`);
    return;
  }

  const content = doc.content ?? [];
  if (content.some((b) => b._type === "youtubeEmbed")) {
    console.log(`✓ ${title}: already has an embed, skipping`);
    return;
  }

  console.log(`→ ${title}`);
  console.log(`    appending ${videoId} (${guest})`);

  const newContent = [
    ...content,
    {
      _type: "youtubeEmbed",
      _key: key(),
      videoId,
      caption: `Watch the full conversation with ${guest}`,
    },
  ];

  if (DRY_RUN) {
    console.log("    (dry run — not writing)");
    return;
  }

  await client.patch(id).set({ content: newContent }).commit();
  console.log("    ✅ patched");
}

async function main() {
  console.log(
    DRY_RUN
      ? "DRY RUN — no documents will be changed.\n"
      : "LIVE RUN — patching documents.\n",
  );
  for (const t of TARGETS) await addEmbed(t);
  console.log("\nDone.");
}

main().catch((err) => {
  console.error("FAILED:", err.statusCode ?? "", err.message);
  process.exit(1);
});
