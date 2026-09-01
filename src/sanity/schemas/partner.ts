import type { Rule } from "sanity";

/**
 * Readiness Hub partner.
 *
 * One document per partner card on /marketplace. Adding a partner should be a
 * Studio task, not a code change: previously each one was a hardcoded object in
 * TrustedPartnersSection, so every new listing needed a PR and a deploy.
 *
 * Categories match the four readiness pillars the Hub is organized by, plus
 * Beliefs. The value strings are the same ones the page already filters on, so
 * CMS entries and any remaining hardcoded ones sort into the same buckets.
 */
export const partnerSchema = {
  name: "partner",
  title: "Readiness Hub Partner",
  type: "document" as const,
  fields: [
    {
      name: "name",
      title: "Partner Name",
      type: "string",
      validation: (R: Rule) => R.required(),
    },
    {
      name: "logo",
      title: "Logo",
      description:
        "Transparent PNG or SVG reads best on the card background. Upload at 2x the display size for sharpness on retina screens.",
      type: "image",
      options: { hotspot: true },
      validation: (R: Rule) => R.required(),
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Defaults to '<Partner name> logo' when left empty.",
        },
      ],
    },
    {
      name: "tagline",
      title: "Tagline",
      description: "One line, shown under the logo.",
      type: "string",
      validation: (R: Rule) => R.required().max(160),
    },
    {
      name: "description",
      title: "Description",
      description:
        "Two or three sentences on what the partner does and why it belongs in the Hub.",
      type: "text",
      rows: 4,
      validation: (R: Rule) => R.required(),
    },
    {
      name: "category",
      title: "Readiness Category",
      description: "Which pillar this partner sits under in the Hub.",
      type: "string",
      options: {
        list: [
          { title: "Legal", value: "legal" },
          { title: "Financial", value: "financial" },
          { title: "Physical", value: "physical" },
          { title: "Digital", value: "digital" },
          { title: "Beliefs", value: "beliefs" },
        ],
        layout: "radio",
      },
      validation: (R: Rule) => R.required(),
    },
    {
      name: "url",
      title: "Destination URL",
      description:
        "Where the card links to. Include any ENDevo referral or UTM parameters here — this is the exact link visitors follow.",
      type: "url",
      validation: (R: Rule) => R.required().uri({ scheme: ["http", "https"] }),
    },
    {
      name: "buttonText",
      title: "Button Text",
      description: "e.g. Learn More, Get Started, Sign Up.",
      type: "string",
      initialValue: "Learn More",
      validation: (R: Rule) => R.required().max(24),
    },
    {
      name: "featured",
      title: "Featured Partner",
      description:
        "Featured partners appear before the rest in their category.",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "order",
      title: "Display Order",
      description:
        "Lower numbers appear first within a category. Leave empty to sort alphabetically.",
      type: "number",
    },
    {
      name: "active",
      title: "Show on the site",
      description:
        "Untick to retire a partner without deleting the record and losing its history.",
      type: "boolean",
      initialValue: true,
      validation: (R: Rule) => R.required(),
    },
  ],
  orderings: [
    {
      title: "Category, then display order",
      name: "byCategory",
      by: [
        { field: "category", direction: "asc" as const },
        { field: "order", direction: "asc" as const },
        { field: "name", direction: "asc" as const },
      ],
    },
    {
      title: "Name A–Z",
      name: "byName",
      by: [{ field: "name", direction: "asc" as const }],
    },
  ],
  preview: {
    select: {
      title: "name",
      category: "category",
      media: "logo",
      active: "active",
      featured: "featured",
    },
    prepare({
      title,
      category,
      media,
      active,
      featured,
    }: {
      title?: string;
      category?: string;
      media?: unknown;
      active?: boolean;
      featured?: boolean;
    }) {
      const flags = [
        active === false && "⚠ hidden",
        featured && "★ featured",
      ].filter(Boolean);
      return {
        title: title || "Untitled partner",
        subtitle: [category, ...flags].filter(Boolean).join(" · "),
        media,
      };
    },
  },
};
