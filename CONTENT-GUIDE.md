# ENDevo Content Management Guide

---

## Overview

There are two roles for managing content on endevo.life:

| Role                            | Who                              | How                                           |
| ------------------------------- | -------------------------------- | --------------------------------------------- |
| **Developer**                   | Technical team (VSCode)          | Edit schemas, add fields, change page layouts |
| **Content Creator / Publisher** | Jann, Soyana, non-technical team | Go to endevo.life/studio — no code needed     |

---

---

# PART 1 — CONTENT CREATOR / PUBLISHER

### (Non-Technical — No coding required)

---

## How to Log In

1. Go to **endevo.life/studio** in your browser
2. Click **"Sign in with Google"**
3. Use your **hello@endevo.life** Gmail account (or personal Gmail if invited)
4. You're in

> First time? You need to be invited first. Ask the developer to invite your email from sanity.io/manage → Members → Invite.

---

## Adding a Blog Post

1. Go to **endevo.life/studio**
2. In the left sidebar, click **"Blog Post"**
3. Click the **"+"** button (top right of the list)
4. Fill in the fields:

| Field                   | What to enter                                                                     |
| ----------------------- | --------------------------------------------------------------------------------- |
| **Title**               | The blog post headline                                                            |
| **Slug**                | Click **"Generate"** — do not type manually                                       |
| **Publication Date**    | Pick the date                                                                     |
| **Cover Image**         | Click the image area → upload from your computer or drag & drop                   |
| **External Share Link** | Optional — paste the original article URL (used for share buttons)                |
| **Content**             | Type your article here — use the toolbar for headings, bullet points, bold, links |

5. When ready, click **"Publish"** (bottom right)
6. The post will appear on **endevo.life/blog** within 30 seconds — no deployment needed

> **To edit an existing post:** Click it from the list → make changes → click **"Publish"**
> **To delete a post:** Open it → click the three dots menu (top right) → Delete

---

## Adding a Video / Podcast Episode

1. Go to **endevo.life/studio**
2. In the left sidebar, click **"Podcast Episode"**
3. Click the **"+"** button
4. Fill in the fields:

| Field                | What to enter                                         |
| -------------------- | ----------------------------------------------------- |
| **Episode Title**    | The episode name                                      |
| **Guest Name**       | Guest's full name                                     |
| **Publication Date** | Pick the date                                         |
| **Video URL**        | Paste the YouTube link (e.g. https://youtu.be/abc123) |
| **Cover Image**      | Upload a thumbnail image                              |
| **Description**      | Write a summary of the episode                        |

5. Click **"Publish"**
6. The episode appears on **endevo.life/videos** immediately

> **Tip:** Always use a YouTube URL — not the raw .mp4 link. YouTube embeds play directly on the page.

---

## What Pages Are Connected to Sanity

| Content Type in Studio | Shows up on        |
| ---------------------- | ------------------ |
| Blog Post              | endevo.life/blog   |
| Podcast Episode        | endevo.life/videos |

---

## Tips for Content Creators

- **Images:** Any size works but landscape (wider than tall) looks best for cover images. Minimum 800px wide recommended.
- **Slugs:** Always click "Generate" — never type the slug manually
- **Draft vs Published:** Content stays invisible on the site until you click **Publish**
- **Editing live content:** You can edit and re-publish anytime. Changes go live in ~30 seconds.
- **Deleting:** Only delete if you're sure — there is no recycle bin

---

---

# PART 2 — DEVELOPER

### (Technical — VSCode)

---

## Project Structure (Sanity-related files)

```
src/
├── sanity/
│   ├── sanity.config.ts          ← registers all schemas into the Studio
│   └── schemas/
│       ├── blogPost.ts           ← Blog Post field definitions
│       └── podcastEpisode.ts     ← Podcast Episode field definitions
│
├── lib/
│   ├── sanityClient.ts           ← connects to Sanity API
│   └── sanityImageUrl.ts         ← generates image URLs from Sanity assets
│
├── hooks/
│   ├── useBlogPosts.ts           ← fetches blog posts from Sanity
│   └── usePodcastEpisodes.ts     ← fetches podcast episodes from Sanity
│
└── pages/
    ├── Blog.tsx                  ← renders blog posts (Sanity + hardcoded)
    ├── Videos.tsx                ← renders podcast episodes from Sanity
    └── SanityStudio.tsx          ← embeds the Studio at /studio
```

---

## Adding a New Field to an Existing Content Type

**Example: Add a "Subtitle" field to Blog Post**

1. Open `src/sanity/schemas/blogPost.ts`
2. Add the new field inside the `fields` array:

```typescript
{
  name: 'subtitle',
  title: 'Subtitle',
  type: 'string',
},
```

3. Save the file — the Studio refreshes automatically at localhost:8080/studio
4. To display it on the blog page, update `src/hooks/useBlogPosts.ts`:
   - Add `subtitle` to the GROQ query: `_id, title, subtitle, date, ...`
   - Add `subtitle?: string` to the `SanityBlogPost` interface
5. Use `post.subtitle` wherever needed in `src/pages/Blog.tsx`

---

## Adding a New Content Type (e.g. "Team Member")

1. Create `src/sanity/schemas/teamMember.ts`:

```typescript
export const teamMemberSchema = {
  name: "teamMember",
  title: "Team Member",
  type: "document" as const,
  fields: [
    { name: "name", title: "Full Name", type: "string" },
    { name: "role", title: "Role / Title", type: "string" },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    },
    { name: "bio", title: "Bio", type: "text" },
  ],
};
```

2. Register it in `src/sanity/sanity.config.ts`:

```typescript
import { teamMemberSchema } from './schemas/teamMember'

// Add to the types array:
schema: { types: [blogPostSchema, podcastEpisodeSchema, teamMemberSchema] },
```

3. Create a hook in `src/hooks/useTeamMembers.ts` to fetch it
4. Use it in whatever page you need

---

## Adding a New Page Connected to Sanity

1. Create the schema (see above)
2. Create a hook in `src/hooks/`
3. Create the page in `src/pages/`
4. Add the route to `src/App.tsx`
5. Optionally add it to the navbar in `src/components/ResponsiveNavbar.tsx`

---

## Environment Variables

| Variable                 | Value        | Where                                                |
| ------------------------ | ------------ | ---------------------------------------------------- |
| `VITE_SANITY_PROJECT_ID` | `ebvyrev4`   | `.env.local` (local) + Vercel dashboard (production) |
| `VITE_SANITY_DATASET`    | `production` | `.env.local` (local) + Vercel dashboard (production) |

> **Important:** After adding env vars to Vercel, trigger a manual redeploy. Vite bakes env vars into the bundle at build time.

---

## Sanity Dashboard (sanity.io/manage)

Use this for:

- Inviting new editors (Members → Invite)
- Managing CORS origins (API → CORS Origins)
- Viewing API usage and limits
- Generating API tokens if needed

**CORS origins that must be added:**

- `http://localhost:8080` — local development
- `https://endevo.life` — production
- `https://www.endevo.life` — production www

---

## Deploying Changes

1. Test on `localhost:8080` first
2. Commit to the `feat/sanity-cms-trial` branch
3. When approved, merge to `main`
4. Vercel auto-deploys on push to `main`

> **Schema changes** (adding/editing fields) require a code deploy to appear in production Studio.
> **Content changes** (publishing posts/episodes) go live instantly — no deploy needed.

---

## Free Tier Limits (Sanity)

| Limit           | Free tier       |
| --------------- | --------------- |
| Users (editors) | 3               |
| Storage         | 5 GB            |
| API requests    | 250,000 / month |
| Bandwidth       | 10 GB / month   |

Sufficient for current usage. Upgrade only if limits are hit.
