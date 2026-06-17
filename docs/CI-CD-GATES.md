# CI/CD Gates & Branch Protection (INFRA-01)

All pull requests targeting `main` must pass automated checks before they can be
merged. This is enforced by the [`PR Checks`](../.github/workflows/pr-checks.yml)
GitHub Actions workflow plus branch-protection rules on `main`.

## The gates

The workflow runs on every PR to `main` and defines five jobs:

| Job id            | Check name          | What it enforces                                                                                          |
| ----------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| `typecheck`       | `TypeScript`        | `tsc --noEmit` — no type errors                                                                           |
| `lint`            | `ESLint`            | `eslint .` — no lint errors                                                                               |
| `build`           | `Build`             | `vite build` succeeds and emits `dist/index.html`                                                         |
| `code-quality`    | `Code Quality`      | No `console.log`, `debugger`, `eslint-disable`, unresolved TODO/FIXME; new pages import the SEO component |
| `all-checks-pass` | `All checks passed` | Fails unless all four gates above succeeded                                                               |

`All checks passed` is the single roll-up status — requiring it in branch
protection is sufficient, but we require all five for clear per-gate signal.

## Enabling branch protection (admin only)

Requires **admin** rights on the repo. Either use the GitHub UI:

> Settings → Branches → Add branch ruleset (or classic rule) for `main` →
> **Require status checks to pass before merging** → select:
> `TypeScript`, `ESLint`, `Build`, `Code Quality`, `All checks passed`.

…or apply it via the GitHub CLI:

```bash
gh auth switch --user endevo-life   # must be a repo admin

gh api -X PUT repos/endevo-life/endevo-legacy-ready/branches/main/protection \
  --input - <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["TypeScript", "ESLint", "Build", "Code Quality", "All checks passed"]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": null,
  "restrictions": null
}
JSON
```

`strict: true` means a branch must also be up to date with `main` before
merging. `enforce_admins: true` applies the rule to admins too.

## Verifying it worked

```bash
gh api repos/endevo-life/endevo-legacy-ready/branches/main/protection \
  --jq '.required_status_checks.contexts'
```

After this, no PR can merge into `main` until all checks are green.
