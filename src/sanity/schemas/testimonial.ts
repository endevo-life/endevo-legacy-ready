import type { Rule } from "sanity";

/**
 * Client testimonial.
 *
 * Mirrors the fields the Typeform/GHL testimonial request collects, so a
 * response can be transcribed into Sanity without inventing data. The consent
 * checkbox is required and defaults to false: a testimonial the client has not
 * agreed to publish must never reach the site by accident.
 *
 * Media is either a photo, a video, or both. Video is uploaded as a file rather
 * than a URL so it lives in Sanity's CDN alongside everything else — the two
 * existing filmed testimonials are self-hosted MP4s today.
 */
export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document" as const,
  groups: [
    { name: "content", title: "Testimonial", default: true },
    { name: "media", title: "Photo & Video" },
    { name: "publishing", title: "Publishing" },
  ],
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      group: "content",
      validation: (R: Rule) => R.required(),
    },
    {
      name: "role",
      title: "Role or Title",
      description: "Optional — e.g. Realtor, Business Coach.",
      type: "string",
      group: "content",
    },
    {
      name: "relationship",
      title: "Relationship to ENDevo",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Client (current or past)", value: "client" },
          { title: "Partner", value: "partner" },
          { title: "Podcast guest", value: "guest" },
          { title: "Colleague", value: "colleague" },
        ],
      },
    },
    {
      name: "quote",
      title: "Testimonial",
      description: "The client's own words. Paste verbatim — do not rewrite.",
      type: "text",
      rows: 8,
      group: "content",
      validation: (R: Rule) => R.required().min(40),
    },
    {
      name: "rating",
      title: "Rating",
      description: "Out of 5, as given on the testimonial form.",
      type: "number",
      group: "content",
      initialValue: 5,
      validation: (R: Rule) => R.required().min(1).max(5).integer(),
    },

    {
      name: "photo",
      title: "Photo",
      description:
        "Headshot supplied with the response. Leave empty for a text-only testimonial — the card falls back to initials.",
      type: "image",
      options: { hotspot: true },
      group: "media",
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Defaults to the person's name when left empty.",
        },
      ],
    },
    {
      name: "video",
      title: "Video",
      description:
        "Optional filmed testimonial. Videos are featured above the written ones.",
      type: "file",
      options: { accept: "video/*" },
      group: "media",
    },
    {
      name: "videoThumbnail",
      title: "Video Poster Frame",
      description:
        "Shown before the video plays. Falls back to the photo if empty.",
      type: "image",
      options: { hotspot: true },
      group: "media",
      hidden: ({ parent }: { parent?: { video?: unknown } }) => !parent?.video,
    },

    {
      name: "consentGiven",
      title: "Permission to publish name and photo",
      description:
        "Only tick this when the client has explicitly agreed. Unticked testimonials are never shown on the site.",
      type: "boolean",
      group: "publishing",
      initialValue: false,
      validation: (R: Rule) => R.required(),
    },
    {
      name: "featured",
      title: "Feature on the homepage",
      description:
        "Featured testimonials appear in the homepage carousel. Keep this to a handful.",
      type: "boolean",
      group: "publishing",
      initialValue: false,
    },
    {
      name: "order",
      title: "Display Order",
      description:
        "Lower numbers appear first. Leave empty to sort by submission date.",
      type: "number",
      group: "publishing",
    },
    {
      name: "submittedAt",
      title: "Submitted",
      type: "date",
      group: "publishing",
      validation: (R: Rule) => R.required(),
    },
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [
        { field: "order", direction: "asc" as const },
        { field: "submittedAt", direction: "desc" as const },
      ],
    },
    {
      title: "Newest first",
      name: "newest",
      by: [{ field: "submittedAt", direction: "desc" as const }],
    },
  ],
  preview: {
    select: {
      title: "name",
      role: "role",
      media: "photo",
      consent: "consentGiven",
      featured: "featured",
      hasVideo: "video",
    },
    prepare({
      title,
      role,
      media,
      consent,
      featured,
      hasVideo,
    }: {
      title?: string;
      role?: string;
      media?: unknown;
      consent?: boolean;
      featured?: boolean;
      hasVideo?: unknown;
    }) {
      // Surface the states that decide whether this shows on the site, so a
      // missing consent tick is visible from the list without opening the doc.
      const flags = [
        !consent && "⚠ no consent",
        featured && "★ featured",
        hasVideo && "▶ video",
      ].filter(Boolean);
      return {
        title: title || "Untitled",
        subtitle: [role, ...flags].filter(Boolean).join(" · "),
        media,
      };
    },
  },
};
