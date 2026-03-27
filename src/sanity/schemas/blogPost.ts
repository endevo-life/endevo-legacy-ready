export const blogPostSchema = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document' as const,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (R: any) => R.required(),
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: (R: any) => R.required(),
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (R: any) => R.required(),
    },
    {
      name: 'externalLink',
      title: 'External Share Link',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
