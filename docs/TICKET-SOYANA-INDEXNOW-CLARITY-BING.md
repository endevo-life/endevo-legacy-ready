# SEO-INDEX-01: IndexNow + Microsoft Clarity + Bing Webmaster Setup

**Assignee:** Soyana  
**Priority:** High  
**Created:** 2026-06-09  
**Status:** Ready

## Goal

Implement IndexNow end-to-end for faster URL discovery and complete Microsoft Clarity + Bing Webmaster Tools setup for indexing verification and behavior analytics.

## Scope

- IndexNow setup (4 steps)
- Bing Webmaster Tools verification and URL submission checks
- Microsoft Clarity property setup and tracking validation
- Documentation of keys, verification, and test evidence

## Tasks

### 1. Generate API Key (IndexNow)

- Generate IndexNow API key from Bing IndexNow get started page.
- Save the key securely for project usage.
- Record the generated key filename expected by IndexNow (example: `<key>.txt`).

**Reference:**

- https://www.bing.com/indexnow/getstarted#implementation

### 2. Host API Key File

- Create UTF-8 text file containing only the key value.
- Host key file in website root (preferred) so it resolves as:
  - `https://<domain>/<key>.txt`
- For this Vite app, place the file in `public/` so it is served at root after deploy.
- Validate with browser/curl that the key file is publicly accessible and returns the expected plain text.

**Reference:**

- https://www.indexnow.org/documentation

### 3. Submit URLs to IndexNow

- Implement URL submission flow (single + bulk) to IndexNow endpoint.
- Ensure payload includes:
  - `host`
  - `key`
  - `keyLocation`
  - `urlList` (for bulk)
- Submit at least:
  - homepage
  - key service pages
  - blog/news pages
- Capture request/response evidence.

**Reference:**

- https://www.bing.com/indexnow/getstarted#implementation

### 4. Verify URLs in Bing Webmaster Tools

- Confirm domain is verified in Bing Webmaster Tools.
- Validate that submitted URLs are received/processed.
- Export or screenshot proof of successful submission and indexing status.

**Reference:**

- https://www.bing.com/indexnow/getstarted#implementation

### 5. Microsoft Clarity Setup

- Create or confirm Clarity project for production domain.
- Add Clarity tracking snippet to site globally.
- Verify script loads in production and events are received.
- Enable and validate:
  - session recordings
  - heatmaps
  - rage/dead click signals
- Confirm no CSP or script-blocking issues.

**Reference:**

- https://clarity.microsoft.com/

### 6. Bing Webmaster Tools (Additional checks)

- Confirm sitemap submitted and processed.
- Validate robots.txt accessibility and directives.
- Review crawl/index coverage issues and log findings.
- Confirm ownership and site health status are green.

## Acceptance Criteria

- IndexNow key file is publicly reachable on production domain.
- At least 10 priority URLs submitted via IndexNow with successful responses.
- Bing Webmaster Tools shows URL submissions received.
- Clarity is collecting production traffic (recordings + heatmaps available).
- Evidence package shared (screenshots/logs/links) + short runbook added to docs.

## Deliverables

- IndexNow key file deployed at root.
- URL submission script/process documented.
- Verification screenshots from Bing Webmaster Tools.
- Clarity project link and verification screenshots.
- Implementation summary note with any blockers/next steps.

## Notes

- Do not commit secrets to git if additional credentials are introduced.
- If automated URL submission is added in CI/CD, keep rate and retry behavior documented.
