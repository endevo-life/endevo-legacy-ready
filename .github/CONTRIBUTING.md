# Contributing to ENDevo Legacy Ready

**Repository:** https://github.com/endevo-life/endevo-legacy-ready  
**Stack:** React 18 · TypeScript · Vite · Tailwind CSS · React Router · Sanity CMS  
**Deploys to:** Vercel (auto-deploy on merge to `main`)

---

## Team

| Role | GitHub | Can merge to main |
|------|--------|-------------------|
| Admin | @endevo-life | ✅ Yes |
| Admin | @nermeen | ✅ Yes |
| Developer | @soyana | ❌ PR only |

---

## Branch Strategy

| Branch | Purpose | Protected |
|--------|---------|-----------|
| `main` | Production — live at endevo.life | ✅ Yes |
| `feature/*` | New features | No |
| `fix/*` | Bug fixes | No |
| `hotfix/*` | Critical prod fixes (merge fast) | No |
| `seo/*` | SEO changes | No |

**Rules:**
- Never commit directly to `main` — always open a PR
- Branch from `main`, not from another feature branch
- Delete your branch after it's merged

```bash
# Start every task like this
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

---

## Commit Message Convention

Format: `type: short description` (lowercase, no period, under 72 chars)

| Type | When to use |
|------|-------------|
| `feat` | New page, component, or feature |
| `fix` | Bug fix |
| `seo` | SEO-specific changes (meta tags, schema, sitemap) |
| `style` | CSS/Tailwind changes, no logic change |
| `refactor` | Code restructure, no behaviour change |
| `chore` | Dependencies, config, tooling |
| `docs` | Documentation only |

**Examples:**
```
feat: add FAQ page with schema markup
fix: resolve hash scroll timing on lazy routes
seo: add SEO component to ForEmployers and ForIndividuals pages
style: replace inline hex colors with Tailwind tokens
```

---

## CI/CD Gates — Automated Checks on Every PR

All 4 gates must be green before a PR can be merged. These run automatically on GitHub Actions when you open or update a PR.

| Gate | Command | What it blocks |
|------|---------|----------------|
| TypeScript | `npm run typecheck` | Type errors |
| ESLint | `npm run lint` | Code quality violations |
| Build | `npm run build` | Broken imports, compile errors |
| Code Quality | (automated grep) | `console.log`, `debugger`, `eslint-disable`, TODOs in new code, new pages missing SEO component |

**If a gate fails:** Fix the issue and push again. Do not ask an admin to bypass the check — the gate exists to protect the production site.

Run checks locally before pushing:
```bash
npm run typecheck   # TypeScript check
npm run lint        # ESLint
npm run build       # Full build
```

---

## Code Standards

### TypeScript
- No `as any` — use proper types. For React refs use `React.RefObject<HTMLDivElement>` not `as any`
- No `@ts-ignore` or `@ts-expect-error` without a comment explaining why
- No empty catch blocks — always log or handle errors: `catch (err) { console.error(err); }`

### React / Components
- Every new page in `src/pages/` **must** include the `<SEO>` component (CI will block the PR if missing)
- Only one `<h1>` per page
- Always include `alt` text on `<img>` tags. Decorative images use `alt=""` + `aria-hidden="true"`
- No `console.log()` — use `console.error()` only for genuine errors
- No `debugger` statements

### Styling
- Use Tailwind classes — not inline `style={{}}` objects with hardcoded values
- Brand colors are defined in `tailwind.config.ts` — use `text-brand-orange`, `bg-brand-navy` etc.
- Do not hardcode hex values like `#D95D26` inline — find the Tailwind token

### SEO — Required for Every New Page
```tsx
// Every page file must have this at the top of the return statement
import SEO from "@/components/SEO";

<SEO
  title="Descriptive Page Title | ENDevo"
  description="One sentence, 140–160 characters, written for someone searching Google."
  canonical="/the-route-path"
/>
```
- Title: include the main keyword first, then `| ENDevo`
- Description: 140–160 characters, no brand jargon, written for search intent
- Canonical: the route path starting with `/` (e.g. `/wws-employers`)

---

## Pull Request Process

### 1. Before opening a PR — run locally
```bash
npm run typecheck   # must pass
npm run lint        # must pass
npm run build       # must pass
```

### 2. Open the PR
- Base branch: `main`
- Title: use the same format as commit messages (`feat: ...`, `fix: ...`)
- Fill in the PR template completely — especially screenshots for UI changes

### 3. Review
- At least 1 admin approval required before merging
- Address all review comments before re-requesting review
- Do not force-push after review has started — it invalidates review history

### 4. After merge
```bash
git checkout main
git pull origin main
git branch -d your-branch-name
```

---

## Adding a New Page — Full Checklist

When creating a new page file in `src/pages/`:

- [ ] File added to `src/App.tsx` with a `<Route>` — use `lazy()` import
- [ ] `<SEO>` component included with unique title, description, and canonical
- [ ] Exactly one `<h1>` tag on the page
- [ ] URL added to `public/sitemap.xml` with `<lastmod>` set to today's date
- [ ] Page renders correctly at 390px (mobile) and 1280px (desktop)
- [ ] No `console.log` statements
- [ ] All images have `alt` text

---

## Testing Requirements

### Every PR must be tested in:
| Browser | Minimum |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest (or iOS Safari via Chrome DevTools device emulation) |
| Edge | Latest |

### Mobile breakpoints to check:
- 390px — iPhone 14
- 360px — Android (Samsung Galaxy)
- 768px — Tablet

### What to verify:
1. Page loads without console errors
2. All links navigate to the correct destination
3. No layout overflow or broken text
4. Images load (check Network tab)
5. For SEO changes: right-click → View Page Source → confirm `<title>` and `<meta name="description">` are correct

---

## Getting Help

- Slack: ping @nermeen or @endevo-life
- GitHub Issues: open an issue for bugs or questions
- Reference: see `src/docs/` for project guides and intern onboarding docs
