import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Ensure a single React instance is used across all chunks (prevents duplicate-React issues)
    dedupe: ["react", "react-dom"],
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // The data client is tiny and used by every page. It must be
            // split from the Studio: the catch-all below used to sweep
            // @sanity/client into the 1.9MB studio chunk, so the homepage
            // shipped the entire CMS admin to every visitor.
            if (
              id.includes("@sanity/client/") ||
              id.includes("@sanity/image-url/") ||
              id.includes("@sanity/eventsource") ||
              id.includes("@portabletext/react/") ||
              id.includes("@portabletext/toolkit/") ||
              id.includes("@portabletext/types/")
            ) {
              return "sanity-client";
            }
            // Sanity Studio must be checked before React so any @radix-ui
            // nested inside @sanity/ui stays in the studio chunk and avoids
            // circular deps. Only /studio ever loads this chunk.
            if (id.includes("@sanity") || id.includes("sanity")) {
              return "sanity";
            }
            // Co-locate React + Radix UI in one chunk so React.forwardRef is
            // always available when Radix UI modules initialise.
            if (
              id.includes("react-dom") ||
              id.includes("react-router-dom") ||
              id.includes("/react/") ||
              id.includes("@radix-ui")
            ) {
              return "react-vendor";
            }
            if (
              id.includes("recharts") ||
              id.includes("d3-") ||
              id.includes("victory-")
            ) {
              return "charts";
            }
            if (id.includes("embla-carousel")) {
              return "carousel";
            }
            if (id.includes("@tanstack")) {
              return "query";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 7000, // Sanity Studio is large but lazy-loaded (only loads at /studio)
  },
}));
