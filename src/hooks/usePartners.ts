import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanityClient";
import type { SanityImageRef } from "./useBlogPosts";

export type PartnerCategory =
  | "legal"
  | "financial"
  | "physical"
  | "digital"
  | "beliefs";

export interface SanityPartner {
  _id: string;
  name: string;
  logo: SanityImageRef;
  tagline: string;
  description: string;
  category: PartnerCategory;
  url: string;
  buttonText: string;
  featured?: boolean;
  order?: number;
}

/**
 * Readiness Hub partners, active ones only.
 *
 * `active != false` rather than `active == true` so a document created before
 * the field existed still shows, instead of silently vanishing from the Hub.
 *
 * Featured partners sort first, then explicit order, then alphabetically —
 * the last step keeps the list stable when order is left blank.
 */
const QUERY = `*[_type == "partner" && active != false]
  | order(featured desc, order asc, name asc) {
    _id, name, logo, tagline, description, category, url, buttonText,
    featured, order
  }`;

export function usePartners() {
  return useQuery({
    queryKey: ["partners"],
    queryFn: () => sanityClient.fetch<SanityPartner[]>(QUERY),
    staleTime: 1000 * 60 * 5,
  });
}
