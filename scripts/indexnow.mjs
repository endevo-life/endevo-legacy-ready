/**
 * IndexNow bulk submission.
 * Reads every URL from public/sitemap.xml and submits them to the IndexNow
 * endpoint in one request so Bing (and other IndexNow participants) discover
 * and recrawl them quickly.
 *
 * The IndexNow "key" is not a secret — it is published at
 *   https://www.endevo.life/<key>.txt
 * to prove domain ownership, so it is safe to keep in this repo.
 *
 * Usage:
 *   node scripts/indexnow.mjs            # submit all sitemap URLs
 *   node scripts/indexnow.mjs <url> ...  # submit only the given URL(s)
 */

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const HOST = "www.endevo.life";
const KEY = "8d05ac69ee57489386f164883207fb11";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

/** Pull <loc> values out of public/sitemap.xml. */
function readSitemapUrls() {
  const xml = readFileSync(
    join(__dirname, "..", "public", "sitemap.xml"),
    "utf-8",
  );
  const matches = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function submit(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  // IndexNow returns 200 (received) or 202 (accepted/pending) on success.
  const text = await res.text();
  return { status: res.status, text };
}

async function main() {
  const cliUrls = process.argv.slice(2);
  const urls = cliUrls.length > 0 ? cliUrls : readSitemapUrls();

  if (urls.length === 0) {
    console.error("No URLs to submit.");
    process.exit(1);
  }

  console.log(`\n🔔 Submitting ${urls.length} URL(s) to IndexNow…`);
  console.log(`   host: ${HOST}`);
  console.log(`   keyLocation: ${KEY_LOCATION}\n`);
  urls.forEach((u) => console.log(`   • ${u}`));

  const { status, text } = await submit(urls);

  console.log(`\n   HTTP ${status} ${text ? `— ${text}` : ""}`);

  if (status === 200 || status === 202) {
    console.log("\n✅ Submitted successfully.\n");
  } else {
    console.error(
      "\n❌ Submission failed. Common causes: key file not reachable at " +
        `${KEY_LOCATION} (deploy first), or URLs not on ${HOST}.\n`,
    );
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("IndexNow submission error:", err);
  process.exit(1);
});
