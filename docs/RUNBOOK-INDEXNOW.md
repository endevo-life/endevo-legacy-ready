# IndexNow Runbook

Fast URL discovery for Bing (and other IndexNow participants) by pinging them
when content changes, instead of waiting for a crawl.

## Setup (already done)

- **Key:** `8d05ac69ee57489386f164883207fb11` (generated in Bing IndexNow portal)
- **Key file:** `public/8d05ac69ee57489386f164883207fb11.txt` — Vercel serves it at
  `https://www.endevo.life/8d05ac69ee57489386f164883207fb11.txt`
- **Script:** `scripts/indexnow.mjs` (npm script: `indexnow`)

The key is **not a secret** — IndexNow requires it to be publicly reachable at the
domain root to prove ownership, so it is committed on purpose.

## How to submit URLs

> Submit only **after** a deploy is live, so the key file and the pages are
> actually reachable. Submitting before deploy will fail.

Submit every URL in `public/sitemap.xml`:

```bash
npm run indexnow
```

Submit one or more specific URLs (e.g. after publishing a single blog post):

```bash
node scripts/indexnow.mjs https://www.endevo.life/blog/my-new-post
```

A successful response is **HTTP 200** (received) or **202** (accepted/pending).

## When to run it

- After a deploy that adds or meaningfully changes pages.
- After publishing/editing a blog or news article (submit just that URL).
- No need to run it on every deploy with no content change.

## Verifying

1. Confirm the key file is live:
   `curl -i https://www.endevo.life/8d05ac69ee57489386f164883207fb11.txt`
   (expect HTTP 200 and the key as plain text).
2. Run `npm run indexnow` and confirm HTTP 200/202.
3. In **Bing Webmaster Tools → IndexNow**, confirm submissions are received.

## Notes

- Only URLs on `www.endevo.life` can be submitted with this key.
- IndexNow shares submissions across participants (Bing, Yandex, etc.).
- IndexNow speeds **discovery/recrawl** — it does not guarantee indexing. Google
  does not use IndexNow; use Search Console "Request Indexing" for Google.
