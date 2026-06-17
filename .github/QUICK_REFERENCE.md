# Git Workflow Quick Reference

## For Collaborators (nermen, soyana)

### Starting New Work

```bash
git checkout main
git pull origin main
git checkout -b feature/descriptive-name
```

### While Working

```bash
# Check status
git status

# Stage changes
git add .

# Commit with message
git commit -m "feat: add feature description"

# Push to GitHub
git push origin feature/descriptive-name
```

### Creating Pull Request

1. Go to: https://github.com/endevo-life/endevo-legacy-ready
2. Click "Pull Requests" → "New Pull Request"
3. Choose your branch → Request review from admins
4. Wait for approval ✅

### After PR Merged

```bash
git checkout main
git pull origin main
git branch -d feature/descriptive-name
```

---

## For Admins (endevo-life, nermeen)

### Reviewing PRs

1. Review code changes
2. Test locally if needed:
   ```bash
   git fetch origin
   git checkout feature/branch-name
   npm install
   npm run dev
   ```
3. Approve or request changes
4. Merge to main
5. Verify Vercel deployment

### Quick Push to Main (Emergency Only)

```bash
git checkout main
git pull origin main
# make changes
git add .
git commit -m "fix: critical bug"
git push origin main
```

---

## Branch Naming Convention

| Type    | Example                    |
| ------- | -------------------------- |
| Feature | `feature/add-contact-form` |
| Bug Fix | `fix/navbar-mobile-menu`   |
| Hotfix  | `hotfix/security-patch`    |
| Docs    | `docs/update-readme`       |

---

## Commit Message Format

```
type: subject

body (optional)
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructure
- `test`: Adding tests
- `chore`: Maintenance

**Examples:**

```bash
git commit -m "feat: add cookie consent banner"
git commit -m "fix: resolve privacy policy navbar overlap"
git commit -m "docs: update contributing guidelines"
```

---

## Troubleshooting

### Merge Conflicts

```bash
git pull origin main
# Resolve conflicts in editor
git add .
git commit -m "fix: resolve merge conflicts"
git push origin feature/your-branch
```

### Reset to Match Remote

```bash
git fetch origin
git reset --hard origin/main
```

### Undo Last Commit (Not Pushed)

```bash
git reset --soft HEAD~1
```

---

## Need Help?

- 📖 Read `.github/CONTRIBUTING.md`
- 💬 Ask in team chat
- 🆘 Contact: nermeen or endevo-life
