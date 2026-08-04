/**
 * Fetches long-form podcast episodes from the YouTube playlist at build
 * time. Shared by generate-sitemap.mjs and prerender.mjs so the two lists
 * cannot drift apart — the same guarantee fetch-blog-slugs.mjs provides
 * for blog posts.
 *
 * Only the long-form playlist gets pages: Shorts are seconds-long clips
 * and a page per Short would be thin-content noise.
 *
 * The YouTube API key is referrer-locked, so requests send the deployed
 * site's referer — the same reason the prerenderer proxies the page's own
 * YouTube calls.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

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

/** Mirrors src/lib/videoSlug.ts (this script cannot import TypeScript). */
function slugifyTitle(title) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
}

function makeVideoSlug(title, youtubeId) {
  const base = slugifyTitle(title);
  return base ? `${base}-${youtubeId}` : youtubeId;
}

/**
 * Returns every long-form episode as { slug, videoId, title, publishedAt },
 * newest first.
 *
 * Throws rather than returning an empty list on failure — a silent empty
 * result would regenerate a sitemap with every episode missing, the same
 * failure mode the blog module guards against.
 */
export async function fetchVideoEpisodes() {
  loadEnv();

  const apiKey = process.env.VITE_YOUTUBE_API_KEY;
  const playlistId = process.env.VITE_YOUTUBE_LONG_FORM_PLAYLIST_ID;

  if (!apiKey || !playlistId) {
    throw new Error(
      "VITE_YOUTUBE_API_KEY / VITE_YOUTUBE_LONG_FORM_PLAYLIST_ID are not " +
        "set — cannot resolve video episode URLs. Set them in the build " +
        "environment.",
    );
  }

  const DELETED = new Set(["deleted video", "private video"]);
  const episodes = [];
  let pageToken;

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const res = await fetch(url, {
      // The key's referrer allowlist includes the deployed site.
      headers: { Referer: "https://www.endevo.life/" },
    });
    if (!res.ok) {
      throw new Error(
        `YouTube playlist query failed: HTTP ${res.status} ${res.statusText}. ` +
          "Video episode URLs could not be resolved.",
      );
    }
    const data = await res.json();

    for (const item of data.items ?? []) {
      const videoId = item.snippet?.resourceId?.videoId;
      const title = item.snippet?.title ?? "";
      if (!videoId || DELETED.has(title.toLowerCase())) continue;
      // Only videos OWNED by our channel get pages. A third-party video
      // saved into the playlist by mistake (it has happened) must not
      // receive an indexable page on our domain.
      const ownChannel = process.env.VITE_YOUTUBE_CHANNEL_ID;
      const owner = item.snippet?.videoOwnerChannelId;
      if (ownChannel && owner && owner !== ownChannel) {
        console.warn(
          `  ⚠️  skipping third-party video in playlist: "${title.slice(0, 50)}"`,
        );
        continue;
      }
      episodes.push({
        slug: makeVideoSlug(title, videoId),
        videoId,
        title,
        publishedAt: (item.snippet?.publishedAt ?? "").slice(0, 10),
      });
    }
    pageToken = data.nextPageToken;
  } while (pageToken);

  if (episodes.length === 0) {
    throw new Error(
      "YouTube returned no episodes. Refusing to emit a sitemap with zero " +
        "video URLs, which would deindex every episode page.",
    );
  }

  return episodes;
}
