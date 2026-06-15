# GitHub Branch Protection Setup

## Instructions for Admin (nermeen or endevo-life)

### 1. Go to Repository Settings

- Visit: https://github.com/endevo-life/endevo-legacy-ready
- Click **Settings** tab
- Click **Branches** in left sidebar

### 2. Add Branch Protection Rule for `main`

Click **"Add rule"** and configure:

#### Branch name pattern

```
main
```

#### Protect matching branches - Check these:

✅ **Require a pull request before merging**

- ✅ Require approvals: **1**
- ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require review from Code Owners (optional)

✅ **Require status checks to pass before merging**

- ✅ Require branches to be up to date before merging
- Search for Vercel checks if available

✅ **Require conversation resolution before merging**

✅ **Require linear history** (optional - keeps history clean)

✅ **Include administrators** (optional - even admins need PRs)

- ⚠️ Uncheck this if you want admins to bypass for emergencies

✅ **Restrict who can push to matching branches**

- Add: **endevo-life** and **nermeen** as allowed

✅ **Allow force pushes**

- ❌ Keep UNCHECKED for safety

✅ **Allow deletions**

- ❌ Keep UNCHECKED to prevent accidental deletion

#### Click "Create" or "Save changes"

---

## 3. Add Collaborators

Go to: https://github.com/endevo-life/endevo-legacy-ready/settings/access

### Add Team Members:

**Admin Access (can merge PRs):**

- **nermeen** - Admin role

**Write Access (can create PRs):**

- **nermen** - Write role
- **soyana** - Write role

### To Add:

1. Click **"Add people"**
2. Enter GitHub username
3. Select role:
   - **Admin** - Can merge to main
   - **Write** - Can push branches and create PRs
4. Click **"Add [username] to this repository"**

---

## 4. Set Up Vercel Integration (If not already done)

1. Go to: https://vercel.com/endevo-life/endevo-legacy-ready
2. Settings → Git
3. Ensure:
   - ✅ **Production Branch:** `main`
   - ✅ **Auto-deploy:** Enabled
   - ✅ **Preview Deployments:** All branches (for testing PRs)

---

## 5. Enable GitHub Actions (Optional - for CI/CD checks)

Create `.github/workflows/ci.yml` for automated checks:

- Runs `npm run build` on every PR
- Blocks merge if build fails
- Adds status check to PRs

---

## Verification Checklist

After setup, verify:

- [ ] Branch protection rule shows on main branch
- [ ] All team members added with correct roles
- [ ] PR template appears when creating new PR
- [ ] Contributing guidelines visible in repo
- [ ] Vercel deploys on push to main
- [ ] Preview deployments work for PR branches

---

## Team Communication

Share with team:

📧 **Email to nermen & soyana:**

```
Hi Team,

We've set up a proper Git workflow for the ENDevo project!

Repository: https://github.com/endevo-life/endevo-legacy-ready

To get started:
1. Clone the repo if you haven't: git clone https://github.com/endevo-life/endevo-legacy-ready
2. Run setup script: ./scripts/setup-git.ps1
3. Read the guides:
   - .github/CONTRIBUTING.md (full guide)
   - .github/QUICK_REFERENCE.md (quick commands)

Workflow summary:
- Create feature branches (feature/your-feature)
- Push and create Pull Requests
- Request review from nermeen or endevo-life
- After approval, we'll merge to main
- Vercel auto-deploys to production

Questions? Reach out anytime!

- Nermeen
```

---

## Support

Need help with setup?

- GitHub Docs: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches
- Contact GitHub Support
