/**
 * URL slugs for video episode pages (/videos/:slug).
 *
 * A slug is "<slugified-title>-<youtubeId>". The trailing YouTube ID is the
 * lookup key and the permanence guarantee: episode titles can be edited on
 * YouTube, and a title-only slug would silently 404 every previously shared
 * or indexed link when that happens. The ID is immutable.
 *
 * YouTube video IDs are exactly 11 characters of [A-Za-z0-9_-], so the ID is
 * always recoverable as the final 11 characters of the slug.
 */

const YOUTUBE_ID_LENGTH = 11;
const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

/** Lowercases and hyphenates a title the same way Sanity slugifies posts. */
export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // strip diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
}

/** Builds the /videos/:slug path segment for an episode. */
export function makeVideoSlug(title: string, youtubeId: string): string {
  const base = slugifyTitle(title);
  return base ? `${base}-${youtubeId}` : youtubeId;
}

/**
 * Recovers the YouTube ID from a slug, or null when the tail cannot be a
 * YouTube ID (wrong length/characters) — the caller renders a 404 for that.
 */
export function extractVideoId(slug: string | undefined): string | null {
  if (!slug || slug.length < YOUTUBE_ID_LENGTH) return null;
  const id = slug.slice(-YOUTUBE_ID_LENGTH);
  return YOUTUBE_ID_PATTERN.test(id) ? id : null;
}
