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
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            './src/components/ui/accordion.tsx',
            './src/components/ui/alert-dialog.tsx',
            './src/components/ui/alert.tsx',
            './src/components/ui/button.tsx',
            './src/components/ui/input.tsx',
            './src/components/ui/tooltip.tsx',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
