## What does this PR do?
<!-- One sentence. Be specific: "Adds SEO component to ForEmployers page" not "SEO improvements" -->


## Type of change
- [ ] `feat` — New feature or page
- [ ] `fix` — Bug fix
- [ ] `seo` — SEO / meta tags / schema / sitemap
- [ ] `style` — CSS/Tailwind only, no logic change
- [ ] `refactor` — Code restructure, no behaviour change
- [ ] `chore` — Config, dependencies, tooling
- [ ] `docs` — Documentation only

## Related issue
Closes #<!-- issue number -->

---

## CI Gates (auto-checked — must all be green to merge)
The following run automatically. You do not need to tick these manually.
- [ ] TypeScript (`npm run typecheck`)
- [ ] ESLint (`npm run lint`)
- [ ] Build (`npm run build`)
- [ ] Code quality (no console.log, no debugger, new pages have SEO component)

---

## Manual testing checklist

**Browsers tested:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari / iOS Safari
- [ ] Edge (latest)

**Breakpoints tested:**
- [ ] Mobile 390px
- [ ] Desktop 1280px

**Functional checks:**
- [ ] Page loads without console errors
- [ ] All links on changed pages work correctly
- [ ] No layout overflow or broken text on mobile
- [ ] Images load and have alt text

**If this PR touches SEO:**
- [ ] View Page Source confirms unique `<title>` on each changed page
- [ ] View Page Source confirms `<meta name="description">` present
- [ ] `<link rel="canonical">` points to the correct URL
- [ ] sitemap.xml updated with new/changed URLs and today's `<lastmod>` date

**If this PR adds a new page:**
- [ ] Route added to `src/App.tsx` with `lazy()` import
- [ ] Page added to `public/sitemap.xml`
- [ ] `<SEO>` component present with unique title, description, canonical
- [ ] Exactly one `<h1>` on the page

---

## Screenshots
<!-- Required for any visual/UI change. Before + After preferred. -->


---

**Reviewers:** @endevo-life @nermeen
