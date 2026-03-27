import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { blogPostSchema } from './src/sanity/schemas/blogPost'
import { podcastEpisodeSchema } from './src/sanity/schemas/podcastEpisode'

export default defineConfig({
  projectId: 'ebvyrev4',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: [blogPostSchema, podcastEpisodeSchema] },
})
