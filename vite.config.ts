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
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react-router-dom') || id.includes('/react/')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            if (id.includes('recharts') || id.includes('d3-') || id.includes('victory-')) {
              return 'charts';
            }
            if (id.includes('embla-carousel')) {
              return 'carousel';
            }
            if (id.includes('@tanstack')) {
              return 'query';
            }
            if (id.includes('@sanity') || id.includes('sanity') || id.includes('@portabletext')) {
              return 'sanity';
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 7000, // Sanity Studio is large but lazy-loaded (only loads at /studio)
  },
}));
