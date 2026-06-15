import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { blogPostSchema } from "./schemas/blogPost";
import { podcastEpisodeSchema } from "./schemas/podcastEpisode";

export const sanityConfig = defineConfig({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  plugins: [structureTool(), visionTool()],
  schema: { types: [blogPostSchema, podcastEpisodeSchema] },
});
