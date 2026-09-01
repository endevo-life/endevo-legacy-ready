/**
 * Replace the cover image on one Sanity blogPost.
 * Usage: npx tsx swap-cover.ts <slug> <imagePath>
 */
import { createClient } from "@sanity/client";
import { createReadStream, readFileSync } from "fs";
import { resolve } from "path";

function loadEnvLocal() {
  const lines = readFileSync(resolve(process.cwd(), ".env.local"), "utf-8").split("\n");
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

const [slug, imagePath] = process.argv.slice(2);
if (!slug || !imagePath) {
  console.error("Usage: npx tsx swap-cover.ts <slug> <imagePath>");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID ?? "",
  dataset: process.env.VITE_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN ?? "",
  useCdn: false,
});

(async () => {
  const post = await client.fetch<{ _id: string; title: string } | null>(
    '*[_type=="blogPost" && slug.current==$slug][0]{_id,title}',
    { slug },
  );
  if (!post) {
    console.error(`No post with slug "${slug}"`);
    process.exit(1);
  }
  console.log(`Post : ${post.title}`);

  const asset = await client.assets.upload("image", createReadStream(imagePath), {
    filename: `${slug}-cover.jpeg`,
  });
  console.log(`Asset: ${asset._id} (${asset.metadata?.dimensions?.width}x${asset.metadata?.dimensions?.height})`);

  await client
    .patch(post._id)
    .set({ image: { _type: "image", asset: { _type: "reference", _ref: asset._id } } })
    .commit();
  console.log("Cover replaced.");
})();
