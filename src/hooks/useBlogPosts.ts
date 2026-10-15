import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanityClient";
import type { PortableTextBlock } from "@portabletext/react";

export interface SanityImageRef {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number };
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  /**
   * Optional editor-supplied <title>. Long titles are shortened automatically
   * (see fitTitle in SEO.tsx); this field lets an editor choose the wording
   * instead of accepting the automatic cut.
   */
  seoTitle?: string;
  slug?: string;
  date: string;
  /** Byline, also used as the author in the BlogPosting JSON-LD. */
  author?: string;
  /** Sanity's own last-edited timestamp, emitted as schema.org dateModified. */
  _updatedAt?: string;
  externalLink?: string;
  image: SanityImageRef;
  content?: PortableTextBlock[];
}

const QUERY = `*[_type == "blogPost"] | order(date desc) {
  _id, _updatedAt, title, seoTitle, "slug": slug.current, date, author, externalLink,
  image, content
}`;

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => sanityClient.fetch<SanityBlogPost[]>(QUERY),
    staleTime: 1000 * 60 * 5,
  });
}

const POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id, _updatedAt, title, seoTitle, "slug": slug.current, date, author, externalLink,
  image, content
}`;

/**
 * Fetches a single post by its URL slug for the /blog/:slug route.
 *
 * Returns `null` (not undefined) when no post matches, so the caller can tell
 * "confirmed missing — render 404" apart from "still loading".
 */
export function useBlogPost(slug: string | undefined) {
  return useQuery({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      const post = await sanityClient.fetch<SanityBlogPost | null>(
        POST_BY_SLUG_QUERY,
        { slug },
      );
      return post ?? null;
    },
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 5,
  });
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  date: string;
}

// Only posts with a slug have a page, the same rule the sitemap uses.
const POST_INDEX_QUERY = `*[_type == "blogPost" && defined(slug.current)] | order(date asc, _id asc) {
  "slug": slug.current, title, date
}`;

/**
 * Lightweight list of every addressable post, oldest first, for the
 * previous / next links on article pages. Titles and slugs only: the full
 * list query above also pulls every post's body.
 */
export function useBlogPostIndex() {
  return useQuery({
    queryKey: ["blogPostIndex"],
    queryFn: () => sanityClient.fetch<BlogPostSummary[]>(POST_INDEX_QUERY),
    staleTime: 1000 * 60 * 5,
  });
}
