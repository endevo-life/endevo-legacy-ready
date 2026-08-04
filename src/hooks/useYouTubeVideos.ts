import { useState, useEffect } from "react";

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

/** Fetch all items from any YouTube playlist ID (paginated) */
async function fetchPlaylistItems(
  playlistId: string,
  apiKey: string,
): Promise<YouTubeVideo[]> {
  const all: YouTubeVideo[] = [];
  let pageToken: string | undefined = undefined;

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error("Failed to fetch playlist items.");
    const data = await res.json();

    const DELETED = new Set(["deleted video", "private video"]);
    for (const item of data.items ?? []) {
      const videoId = item.snippet?.resourceId?.videoId;
      const title: string = item.snippet?.title ?? "";
      if (!videoId || DELETED.has(title.toLowerCase())) continue;
      all.push({
        id: videoId,
        title,
        description: item.snippet.description ?? "",
        thumbnail:
          item.snippet.thumbnails?.maxres?.url ??
          item.snippet.thumbnails?.high?.url ??
          item.snippet.thumbnails?.medium?.url ??
          "",
        publishedAt: item.snippet.publishedAt,
      });
    }
    pageToken = data.nextPageToken;
  } while (pageToken);

  return all;
}

/** Fetch videos from a specific playlist */
export function useYouTubePlaylist(playlistId: string) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string;
    if (!apiKey || !playlistId) {
      setError("YouTube API key or playlist ID is not configured.");
      setLoading(false);
      return;
    }
    fetchPlaylistItems(playlistId, apiKey)
      .then(setVideos)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : "Unknown error"),
      )
      .finally(() => setLoading(false));
  }, [playlistId]);

  return { videos, loading, error };
}

/**
 * Derives the Shorts-only playlist ID from a channel ID.
 * Channel ID "UCxxxxxxx" → Shorts playlist "UUSHxxxxxxx"
 * (Undocumented but widely used YouTube pattern)
 */
export function shortsPlaylistId(channelId: string): string {
  return "UUSH" + channelId.slice(2);
}

/** Fetch all videos from the channel's uploads playlist (legacy) */
export function useYouTubeVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string;
    const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID as string;

    if (!apiKey || !channelId) {
      setError("YouTube API key or Channel ID is not configured.");
      setLoading(false);
      return;
    }

    async function fetchVideos() {
      try {
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`,
        );
        if (!channelRes.ok) throw new Error("Failed to fetch channel data.");
        const channelData = await channelRes.json();
        const uploadsPlaylistId =
          channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
        if (!uploadsPlaylistId) throw new Error("No uploads playlist found.");
        const items = await fetchPlaylistItems(uploadsPlaylistId, apiKey);
        setVideos(items);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "Unknown error fetching videos.",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return { videos, loading, error };
}

/**
 * Fetches one video's metadata by ID for the /videos/:slug episode page.
 *
 * Uses the videos endpoint rather than playlistItems so the description is
 * the full one and publishedAt is the video's real publish date (the
 * playlist's publishedAt is the date it was added to the playlist).
 *
 * `notFound` is distinct from `error`: an unknown ID renders the real 404
 * page, while a transient fetch failure renders a retryable, noindex error
 * state — a crawler must never see a 404 for an episode that exists.
 */
export function useYouTubeVideoDetails(videoId: string | null) {
  const [video, setVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string;
    if (!videoId) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    if (!apiKey) {
      setError("YouTube API key is not configured.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    setNotFound(false);

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch video details.");
        return res.json();
      })
      .then((data) => {
        const item = data.items?.[0];
        if (!item) {
          setNotFound(true);
          return;
        }
        setVideo({
          id: videoId,
          title: item.snippet?.title ?? "",
          description: item.snippet?.description ?? "",
          thumbnail:
            item.snippet?.thumbnails?.maxres?.url ??
            item.snippet?.thumbnails?.high?.url ??
            item.snippet?.thumbnails?.medium?.url ??
            "",
          publishedAt: item.snippet?.publishedAt ?? "",
        });
      })
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : "Unknown error"),
      )
      .finally(() => setLoading(false));
  }, [videoId]);

  return { video, loading, error, notFound };
}
