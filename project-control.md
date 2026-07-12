# Project Control Board — FalloutDay

- **Project:** FalloutDay
- **Status:** `PAUSED_AT_OWNER_REQUEST / LIVE_AND_MONITORED`
- **Domain:** https://falloutday.online/
- **Repository:** https://github.com/ZifanWang1996/falloutday
- **Branch / latest verified commit:** `main` / `2f892b4414946b9faa4d5e9868d8d78ed209f16f`
- **Site type:** independent US-English Fallout 76 fan commentary and guide site
- **Monetization:** one controlled, labelled EffectiveCPM post-content trial placement
- **Source of truth:** `PROJECT_HANDOFF.md` plus this file

## Current verified production state — 2026-07-12 UTC

- `https://falloutday.online/` is live over HTTPS.
- `https://www.falloutday.online/` is configured as a production URL.
- `robots.txt` and `sitemap.xml` are live; sitemap contains 18 URLs.
- Google Search Console verification meta tag is present on the homepage; owner confirmed property verification and sitemap submission.
- Plausible is active using the owner-provided privacy-friendly analytics script.
- EffectiveCPM runs only after the FAQ on `/fo76-guides/first-50-levels/`, with a visible `Sponsored placement` label.

## Completed work

- [x] New GitHub repository created and deployed via Vercel.
- [x] Previous unrelated live template replaced with FalloutDay.
- [x] Deep-link / 404 routing fixed.
- [x] Core security headers, canonical metadata, social metadata, static crawlable pages, JSON-LD, robots, and sitemap added.
- [x] 12 original static guide pages created across Builds and Guides hubs.
- [x] About, Privacy, Terms, independent fan disclaimer, Plausible disclosure, and EffectiveCPM disclosure added.
- [x] EffectiveCPM single-placement trial implemented with test coverage.
- [x] Google Search Console verification tag deployed; owner submitted sitemap.
- [x] Weekly 8-run non-mutating site-health monitor created (`37c106bca31c`).

## Deferred by owner

- [ ] Public `contact@falloutday.online` / email routing.
- [ ] Contact, corrections, and copyright-report page.
- [ ] Any expansion of advertising beyond the current one-placement trial.
- [ ] New content should be selected after real Search Console / Plausible data appears.

## Resume rule

When asked to resume, first read `PROJECT_HANDOFF.md`, check the current production routes, inspect any Search Console/Plausible/ad data available to the current session, and then act only on the selected next backlog item. Do not re-enable, expand, or move advertisements without a fresh safety/UX review.
