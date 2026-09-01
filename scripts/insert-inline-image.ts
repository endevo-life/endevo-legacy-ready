/**
 * Insert an inline image into a blogPost's body, directly after a heading.
 *
 * Usage:
 *   npx tsx scripts/insert-inline-image.ts <slug> <imagePath> <headingText> [alt]
 *
 * The heading match is case-insensitive on the block's joined text. If the
 * heading appears more than once the first match wins; if it appears zero
 * times nothing is written and the available headings are listed instead —
 * inserting an image after the wrong section would be worse than failing.
 *
 * Re-running with the same image filename replaces nothing and adds a second
 * copy, so check before re-running rather than treating this as idempotent.
 */

import { createClient } from "@sanity/client";
import { createReadStream, readFileSync } from "fs";
import { basename, resolve } from "path";

function loadEnvLocal() {
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
    if (k && !(k in process.env)) process.env[k] = t.slice(i + 1).trim();
  }
}
loadEnvLocal();

const [slug, imagePath, headingText, alt] = process.argv.slice(2);
if (!slug || !imagePath || !headingText) {
  console.error(
    "Usage: npx tsx scripts/insert-inline-image.ts <slug> <imagePath> <headingText> [alt]",
  );
  process.exit(1);
}

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID ?? "",
  dataset: process.env.VITE_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN ?? "",
  useCdn: false,
});

type Block = {
  _type: string;
  _key: string;
  style?: string;
  children?: { text?: string }[];
};

const textOf = (b: Block) =>
  (b.children ?? []).map((c) => c.text ?? "").join("");

(async () => {
  const post = await client.fetch<{
    _id: string;
    title: string;
    content: Block[];
  } | null>(
    '*[_type=="blogPost" && slug.current==$slug][0]{_id,title,content}',
    { slug },
  );
  if (!post) {
    console.error(`No post with slug "${slug}"`);
    process.exit(1);
  }

  const headings = post.content.filter(
    (b) => b._type === "block" && b.style && b.style !== "normal",
  );
  const target = headings.find((b) =>
    textOf(b).toLowerCase().includes(headingText.toLowerCase()),
  );
  if (!target) {
    console.error(
      `No heading matching "${headingText}" in "${post.title}". Headings:`,
    );
    headings.forEach((h) => console.error(`  - ${textOf(h)}`));
    process.exit(1);
  }

  const idx = post.content.findIndex((b) => b._key === target._key);
  console.log(`Post    : ${post.title}`);
  console.log(
    `After   : "${textOf(target)}" (block ${idx + 1} of ${post.content.length})`,
  );

  const asset = await client.assets.upload(
    "image",
    createReadStream(imagePath),
    {
      filename: basename(imagePath),
    },
  );
  console.log(`Asset   : ${asset._id}`);

  const imageBlock = {
    _type: "image",
    _key: `img${Math.random().toString(36).slice(2, 9)}`,
    asset: { _type: "reference", _ref: asset._id },
    ...(alt ? { alt } : {}),
  };

  const content = [...post.content];
  content.splice(idx + 1, 0, imageBlock as unknown as Block);

  await client.patch(post._id).set({ content }).commit();
  console.log(`Inserted. Body is now ${content.length} blocks.`);
})();
