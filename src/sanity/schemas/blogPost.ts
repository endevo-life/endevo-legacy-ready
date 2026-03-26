import type { Rule } from 'sanity'

export const blogPostSchema = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document' as const,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R: Rule) => R.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R: Rule) => R.required(),
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: (R: Rule) => R.required(),
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (R: Rule) => R.required(),
    },
    {
      name: 'externalLink',
      title: 'External Share Link',
      description: 'The canonical URL used for social sharing (e.g. on digitallegacypodcast.com)',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  orderings: [
    {
      title: 'Publication Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' as const }],
    },
  ],
}
