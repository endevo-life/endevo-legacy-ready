# Dev Notes – Privacy Policy route

Quick orientation so you understand *why* each change is where it is. Read this
once, then follow [handoff-privacy-route.md](handoff-privacy-route.md) for the
exact steps.

## How routing works here
- The app uses **Expo Router v4** – routing is **file-based**. A file at
  `app/privacy.tsx` automatically becomes the route `/privacy`. No central route
  config to edit.
- The root navigator is [app/_layout.tsx](../app/_layout.tsx). It declares a
  `<Stack>` with one `<Stack.Screen name="..." />` per screen. Adding your screen
  to the Stack is what gives it the shared options (dark background, slide
  animation, no default header). That's why Step 3 adds `<Stack.Screen name="privacy" />`.
- Screens live flat in `app/` (e.g. `index`, `question`, `email`, `results`,
  `plan`, `day`). The `(quiz)` / `(plan)` folders are **route groups** – the
  parentheses mean the folder name does NOT appear in the URL, it's just for
  organizing files. Your new screen is a standalone page, so put it directly at
  `app/privacy.tsx` (not inside a group).

## Navigation API you'll use
- `import { useRouter } from "expo-router"` – `const router = useRouter()`.
- `router.push("/privacy")` to open it, `router.back()` to go back.
- The `as any` on `router.push("/privacy" as any)` is a small type-cast some of
  the existing screens already use (see `app/index.tsx` line 45) because the
  generated route types can lag. It's fine to keep.

## Styling / theme
- Everything pulls from `@/constants/theme` ([src/constants/theme.ts](../src/constants/theme.ts)):
  `COLORS`, `FONTS`, `SPACING`, plus `GRADIENTS`, `RADIUS`, `SHADOWS`.
- The `@/` alias maps to `src/` (configured in `tsconfig.json` paths).
- **Before assuming a token name exists, open theme.ts and confirm.** The sample
  screen uses `COLORS.accent`, `COLORS.muted`, `COLORS.white`, `COLORS.background`,
  `FONTS.sizes.{xs,sm,md,lg}`, `FONTS.weights.{semibold,bold}`, and
  `SPACING.{xs,sm,md,lg,xl}`. If one is named differently, just swap it – the
  screen doesn't depend on any specific value.
- `SafeAreaView` comes from `react-native-safe-area-context` (NOT from
  `react-native`). The provider is already mounted in `_layout.tsx`, so you can
  use `SafeAreaView` directly.

## Copy rules (project-wide, enforced)
- **Never** use the word "tier" in user-facing text – use **"Band"**.
- **Never** use "Americans" – use "people", "adults", or "families".
- The privacy screen copy already follows these. Keep it that way if you edit it.

## Two copies of the policy – don't confuse them
1. `store-assets/privacy-policy.html` – the **public, hosted** version. This is
   the URL Google Play requires. Source of truth.
2. `app/privacy.tsx` – an **in-app convenience screen** so users can read it
   without leaving the app. It's a shortened mirror, not the legal master.
   If the policy wording changes materially, update **both**.

## Testing checklist
- `npm run typecheck` – must be clean (this is `tsc --noEmit`).
- `npm start`, open in Expo Go:
  - Tap the "Privacy Policy" link on the welcome screen – screen opens.
  - "‹ Back" returns to welcome.
  - The `hello@endevo.life` line opens the mail app (test on a real device;
    simulators may not have mail configured).

## Git workflow (repo rules – important)
- **No direct commits to `main`.** Branch with a `feat/` or `fix/` prefix.
- Open a **PR into `main`** (not `master` – this repo's default branch is `main`).
- Do **not** add a "Generated with Claude" or co-author trailer to commits/PRs.

## What's already done for you
- The hosted HTML is filled in with the real entity (ENDevo, Inc.) and contact
  (hello@endevo.life), analytics references removed (analytics is OFF at launch),
  and push-token wording corrected. Only `[DATE]` and `[MAILING ADDRESS]` remain –
  Niki fills those, not you.
- The full step-by-step with paste-ready code is in
  [handoff-privacy-route.md](handoff-privacy-route.md).
