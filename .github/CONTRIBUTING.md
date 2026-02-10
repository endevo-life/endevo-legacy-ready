# Contributing to ENDevo Legacy Ready

## Team Members & Roles

### Admins (Can merge to main)
- **endevo-life** - Primary admin account
- **nermeen** - Admin access

### Collaborators (Create PRs)
- **nermen** - Developer
- **soyana** - Developer

## Branch Strategy

### Main Branches
- `main` - Production branch (protected, deploys to Vercel)

### Development Branches
- `dev` - Staging/development branch (optional)
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches
- `hotfix/*` - Critical production fixes

## Workflow

### 1. Creating a New Feature

```bash
# Always start from latest main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Working on Your Branch

```bash
# Make changes and commit regularly
git add .
git commit -m "feat: description of changes"

# Push your branch to GitHub
git push origin feature/your-feature-name
```

### 3. Creating a Pull Request

1. Go to GitHub repository: https://github.com/endevo-life/endevo-legacy-ready
2. Click "Pull Requests" tab
3. Click "New Pull Request"
4. Select:
   - **base:** `main`
   - **compare:** `feature/your-feature-name`
5. Fill in PR template:
   - Title: Clear description
   - Description: What changed and why
   - Screenshots (if UI changes)
6. Request review from admins
7. Wait for approval before merging

### 4. After PR is Merged

```bash
# Switch back to main and update
git checkout main
git pull origin main

# Delete your local feature branch
git branch -d feature/your-feature-name

# Delete remote feature branch (optional, GitHub can do this automatically)
git push origin --delete feature/your-feature-name
```

## Commit Message Convention

Use conventional commits format:

```
feat: add new privacy policy page
fix: resolve cookie consent banner issue
docs: update README
style: format code
refactor: restructure component
test: add unit tests
chore: update dependencies
```

## Before Creating a PR

✅ Checklist:
- [ ] Code builds without errors (`npm run build`)
- [ ] No console errors or warnings
- [ ] Tested locally
- [ ] Followed code style
- [ ] Updated documentation if needed
- [ ] Commit messages are clear

## Code Review Process

1. **Developer** creates PR
2. **Reviewer** (Admin) reviews code
3. **Reviewer** requests changes OR approves
4. **Developer** addresses feedback
5. **Admin** merges to main
6. **Vercel** automatically deploys

## Common Commands

```bash
# Check current branch
git branch

# See all branches
git branch -a

# Switch branches
git checkout branch-name

# Update from main while on feature branch
git checkout feature/your-branch
git pull origin main

# Resolve conflicts and commit
git add .
git commit -m "fix: resolve merge conflicts"
```

## Getting Help

- Check this guide first
- Ask in team chat
- Review existing PRs for examples
- Contact admins: nermeen or endevo-life
