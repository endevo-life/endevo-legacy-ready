import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    // Exclude non-frontend code and build output from linting
    ignores: ["dist", "backend/**", "scripts/**"],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      // Downgraded to warn — known tech debt tracked in Asana CODE-02
      // Soyana to fix all `as any` ref patterns properly
      "@typescript-eslint/no-explicit-any": "warn",
      // Downgraded to warn — pre-existing empty catch blocks in Podcast.tsx
      "no-empty": "warn",
      // Downgraded to warn — CookieBanner uses window.gtag/fbq which have no types
      "@typescript-eslint/ban-ts-comment": "warn",
      // Downgraded to warn — tailwind.config.ts uses require()
      "@typescript-eslint/no-require-imports": "warn",
      // Downgraded to warn — pre-existing empty interfaces
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  },
);
