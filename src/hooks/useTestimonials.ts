import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanityClient";
import type { SanityImageRef } from "./useBlogPosts";

export interface SanityTestimonial {
  _id: string;
  name: string;
  role?: string;
  relationship?: string;
  quote: string;
  rating: number;
  photo?: SanityImageRef;
  /** Resolved CDN URL of the uploaded video file, when one exists. */
  videoUrl?: string;
  videoThumbnail?: SanityImageRef;
  featured?: boolean;
  order?: number;
  submittedAt: string;
}

/**
 * consentGiven == true is part of the query, not a filter applied afterwards.
 * A testimonial nobody agreed to publish should never leave Sanity, so the
 * guard sits at the fetch rather than somewhere a future refactor could drop.
 *
 * The video asset is dereferenced to its URL here because the browser needs a
 * plain src, not a Sanity reference.
 */
const FIELDS = `
  _id, name, role, relationship, quote, rating, photo, videoThumbnail,
  featured, order, submittedAt,
  "videoUrl": video.asset->url
`;

const ALL_QUERY = `*[_type == "testimonial" && consentGiven == true]
  | order(order asc, submittedAt desc) { ${FIELDS} }`;

const FEATURED_QUERY = `*[_type == "testimonial" && consentGiven == true && featured == true]
  | order(order asc, submittedAt desc) { ${FIELDS} }`;

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: () => sanityClient.fetch<SanityTestimonial[]>(ALL_QUERY),
    staleTime: 1000 * 60 * 5,
  });
}

export function useFeaturedTestimonials() {
  return useQuery({
    queryKey: ["testimonials", "featured"],
    queryFn: () => sanityClient.fetch<SanityTestimonial[]>(FEATURED_QUERY),
    staleTime: 1000 * 60 * 5,
  });
}
