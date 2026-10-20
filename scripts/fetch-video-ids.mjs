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

import {
  readFileSync,
  existsSync,
  writeFileSync,
  mkdirSync,
  rmSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

/**
 * Unlisted re-uploads of episodes that also exist as a public video. Each
 * gave the same conversation a second indexable URL; vercel.json 301s the
 * old URLs to the public copy.
 */
const DUPLICATE_IDS = new Set([
  "mu0KJ58RM7E", // Omar Alvarez → fePaWfUT-0M
  "gSGRd5cBX4o", // Mark Rozner → SonHlJQdIMc
  "F9WU0RmFWUs", // Bradley Berman → T8bDMPgohvM
]);

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
  const playlistIds = [
    process.env.VITE_YOUTUBE_LONG_FORM_PLAYLIST_ID,
    // Season 2 is a separate playlist; both are fetched so every episode gets
    // a prerendered page and a sitemap entry.
    process.env.VITE_YOUTUBE_SEASON_TWO_PLAYLIST_ID,
  ].filter(Boolean);
  if (!apiKey || playlistIds.length === 0) {
    throw new Error(
      "VITE_YOUTUBE_API_KEY / playlist ids are not " +
        "set — cannot resolve video episode URLs. Set them in the build " +
        "environment.",
    );
  }

  const DELETED = new Set(["deleted video", "private video"]);
  const episodes = [];
  // A video listed in two playlists must not produce two pages.
  const seen = new Set();

  for (const playlistId of playlistIds) {
    let pageToken;

    do {
      const url = new URL(
        "https://www.googleapis.com/youtube/v3/playlistItems",
      );
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
        if (seen.has(videoId)) continue;
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
        seen.add(videoId);
        episodes.push({
          slug: makeVideoSlug(title, videoId),
          videoId,
          title,
          publishedAt: (item.snippet?.publishedAt ?? "").slice(0, 10),
        });
      }
      pageToken = data.nextPageToken;
    } while (pageToken);
  }

  // Playlist items carry neither the video's privacy status nor its real
  // publish date, so look every episode up on the videos endpoint (50 IDs
  // per call). Private or removed videos get no page. Unlisted ones keep
  // theirs — many older episodes are unlisted on YouTube and are still the
  // only copy — except the known re-uploads in DUPLICATE_IDS.
  const details = new Map();
  for (let i = 0; i < episodes.length; i += 50) {
    const ids = episodes.slice(i, i + 50).map((e) => e.videoId);
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("part", "snippet,status");
    url.searchParams.set("id", ids.join(","));
    url.searchParams.set("key", apiKey);
    const res = await fetch(url, {
      headers: { Referer: "https://www.endevo.life/" },
    });
    if (!res.ok) {
      throw new Error(
        `YouTube videos query failed: HTTP ${res.status} ${res.statusText}. ` +
          "Video episode details could not be resolved.",
      );
    }
    const data = await res.json();
    for (const item of data.items ?? []) details.set(item.id, item);
  }

  const keptEpisodes = [];
  for (const episode of episodes) {
    const item = details.get(episode.videoId);
    const status = item?.status?.privacyStatus;
    if (!item || status === "private") {
      console.warn(
        `  ⚠️  skipping ${status ?? "unavailable"} video: "${episode.title.slice(0, 50)}" (${episode.videoId})`,
      );
      continue;
    }
    if (DUPLICATE_IDS.has(episode.videoId)) {
      console.warn(
        `  ⚠️  skipping duplicate upload: "${episode.title.slice(0, 50)}" (${episode.videoId})`,
      );
      continue;
    }
    const thumbs = item.snippet?.thumbnails ?? {};
    keptEpisodes.push({
      ...episode,
      // Same shape as YouTubeVideo in src/hooks/useYouTubeVideos.ts.
      details: {
        id: episode.videoId,
        title: item.snippet?.title ?? episode.title,
        description: item.snippet?.description ?? "",
        thumbnail:
          thumbs.maxres?.url ?? thumbs.high?.url ?? thumbs.medium?.url ?? "",
        publishedAt: item.snippet?.publishedAt ?? "",
      },
    });
  }

  if (keptEpisodes.length === 0) {
    throw new Error(
      "YouTube returned no episodes. Refusing to emit a sitemap with zero " +
        "video URLs, which would deindex every episode page.",
    );
  }

  return keptEpisodes;
}

/**
 * Writes one JSON file per episode to public/data/videos/<id>.json, which
 * the build copies into dist. Episode pages read their metadata from these
 * same-origin files instead of calling the YouTube API in the browser.
 *
 * The API key is referrer-locked, and Google's renderer does not reliably
 * send our referer, so its client-side call failed. The page then rendered
 * its noindex error state and Search Console excluded episodes that were
 * live. A static file on our own domain has no such dependency.
 */
export function writeVideoDataFiles(episodes) {
  const dir = join(ROOT, "public", "data", "videos");
  // Start clean so a removed or unlisted video does not leave a stale file.
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  for (const episode of episodes) {
    writeFileSync(
      join(dir, `${episode.videoId}.json`),
      JSON.stringify(episode.details),
      "utf-8",
    );
  }
  return episodes.length;
}
