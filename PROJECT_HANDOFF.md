# FalloutDay — Project Handoff & Resume Record

**Recorded:** 2026-07-12 UTC  
**Status:** `PAUSED_AT_OWNER_REQUEST / LIVE_AND_MONITORED`  
**Domain:** https://falloutday.online/  
**Repository:** https://github.com/ZifanWang1996/falloutday  
**Branch / verified commit:** `main` / `2f892b4414946b9faa4d5e9868d8d78ed209f16f`

## What is live

- Vercel production deployment serves `https://falloutday.online/` and `https://www.falloutday.online/`.
- HTTPS, deep-link routing, static SEO pages, `robots.txt`, and `sitemap.xml` are live.
- Current sitemap: **18 URLs**.
- Google Search Console verification meta tag is live on the homepage.
- The owner reported Google Search Console verification and sitemap submission completed on 2026-07-12.
- Plausible is enabled using the owner-provided `plausible.shipsolo.io` script.
- EffectiveCPM is enabled only as a clearly labelled **Sponsored placement** after the FAQ on `/fo76-guides/first-50-levels/`.

## Content inventory

### Build guides (5)

1. `/fo76-builds/choose-your-playstyle/`
2. `/fo76-builds/budget-commando/`
3. `/fo76-builds/solo-builds/`
4. `/fo76-builds/heavy-gunner-vs-commando-vs-melee/`
5. `/fo76-builds/fun-idea-to-viable-build/`

### Player guides (7)

1. `/fo76-guides/first-50-levels/`
2. `/fo76-guides/damage-troubleshooting/`
3. `/fo76-guides/returning-player-checklist/`
4. `/fo76-guides/perk-synergy/`
5. `/fo76-guides/casual-30-minute-routine/`
6. `/fo76-guides/build-doctor/`
7. `/fo76-guides/event-prep-checklist/`

Each guide is static HTML and includes a title, description, canonical URL, Article JSON-LD, visible FAQ, internal links, a `Last reviewed: July 2026` line, and an independent fan-site disclaimer.

## Safety and compliance decisions

- FalloutDay is an **unofficial fan commentary** site: it must not imply affiliation with Bethesda Softworks, ZeniMax Media, or Microsoft.
- Do not copy Wiki/competitor text, build databases, game files, data dumps, official logos, or unlicensed visual material.
- Keep official facts, testing observations, and editorial opinions distinct.
- Keep the non-affiliation statement visible.
- No public contact mailbox yet; the owner explicitly deferred this.

## Advertising guardrails

- Keep EffectiveCPM limited to the single labelled post-content placement.
- Do not place it on the homepage, navigation, Privacy, Terms, or within instructional steps.
- Immediately remove it if it produces popups, popunders, forced redirects/new tabs, downloads, inappropriate/deceptive creative, layout obstruction, or mobile overflow.
- Do not add a second placement before at least 7 days of clean behavior and real data.
- Detailed checklist: `AD_TRIAL_REVIEW.md`.

## Monitoring and operations

- Scheduled job: `falloutday-weekly-site-health` (`37c106bca31c`).
- Schedule: weekly Monday 10:00 China time, for 8 runs; it reports to this Telegram thread.
- It checks core HTTP endpoints, sitemap URL count, and the advertising trial placement. It does not alter code, DNS, ads, or third-party dashboards.
- Search Console instructions: `SEARCH_CONSOLE_SUBMISSION.md`.
- Editorial review procedure: `EDITORIAL_REVIEW_CADENCE.md`.

## Deferred work / resume backlog

### After Google has data (roughly 7–14 days)

1. Review Search Console **Pages**, **Performance**, and **Sitemaps** for indexing, impressions, queries, and crawl warnings.
2. Compare Search Console landing pages with Plausible entry pages.
3. Review EffectiveCPM impressions, revenue, fill rate, and any policy notices.
4. Review the single ad placement on a real narrow mobile viewport.

### After 2–4 weeks of data

1. Pick the next content updates from real search queries and entry pages—not guesses.
2. Refresh guides that need an official-source or gameplay review; update `Last reviewed` only after real review.
3. Decide whether to retain, remove, or cautiously expand the single ad placement.
4. Optionally add `contact@falloutday.online` via domain email routing and a contact/corrections/copyright page, when the owner is ready.

## Verification snapshot at pause

- Homepage HTTP: `200`
- Sitemap HTTP: `200`
- Sitemap URL count: `18`
- Full automated test suite at the last site-code deployment: `37 passed`
- No uncommitted repository changes at the handoff commit.
