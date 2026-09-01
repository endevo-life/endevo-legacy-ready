import type { Rule } from "sanity";

export const blogPostSchema = {
  name: "blogPost",
  title: "Blog Post",
  type: "document" as const,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (R: Rule) => R.required(),
    },
    {
      name: "seoTitle",
      title: "SEO Title (optional)",
      type: "string",
      description:
        "Overrides the browser/search-result title. Leave blank to use the Title above, which is shortened automatically if it exceeds 70 characters. Set this when you want to control exactly how a long title is shortened.",
      validation: (R: Rule) =>
        R.max(70).warning(
          "Search engines truncate titles beyond 70 characters.",
        ),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (R: Rule) => R.required(),
    },
    {
      name: "date",
      title: "Publication Date",
      type: "date",
      validation: (R: Rule) => R.required(),
    },
    {
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (R: Rule) => R.required(),
    },
    {
      name: "externalLink",
      title: "External Share Link",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "author",
      title: "Author Name",
      type: "string",
      description: "Author's full name for byline and schema.org markup",
    },
  ],
};
