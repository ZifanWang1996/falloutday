# Project Control Board — falloutday

- **Project:** falloutday
- **Status:** LIVE_BASELINE / CONTENT_AND_QA_RUNNING
- **Repository:** https://github.com/ZifanWang1996/falloutday
- **Baseline commit:** `dd984725d21d9f27d694fc5826689541213ecee0`
- **Production deployment:** `https://falloutday-6uzau2koi-zifanwang1996s-projects.vercel.app`
- **Production URLs:** `https://falloutday.online` and `https://www.falloutday.online`
- **Deployment evidence — 2026-07-12:** Vercel deployment `dpl_DPYPkH7vW8RYpTUu6c9kkAMA3mFe` is READY. Both production URLs returned HTTPS 200 and independently rendered the FalloutDay heading, navigation, CTAs, guide cards, and fan-commentary footer.
- **Production replacement:** complete for the initial safe homepage baseline; content/legal/SEO expansion remains required before ads.
- **Type:** Non-official Fallout fan commentary and guide site
- **Monetization:** Advertising — disabled until editorial, legal-disclosure, UX, and production QA gates pass
- **Launch target:** ASAP
- **Source of truth:** this file + `stage-dag.md` + `kanban-plan.md`

## Confirmed facts
- **Domain:** `falloutday.online`
- **Editorial scope:** Fallout player guides and news commentary, including Fallout 76 builds and general tips.
- **Rights position:** fan commentary; no claimed official licence.
- **Live-site observation — 2026-07-12 UTC:** `https://falloutday.online` redirects to `https://www.falloutday.online/`; the responding host reports `server: Vercel` and `x-powered-by: Next.js`.
- **Live content observation — 2026-07-12 UTC:** homepage currently presents unrelated `Nano Banana Pro` / `ShipAny` AI-image-product template content. It is not a Fallout content site.
- **DNS observation — 2026-07-12 UTC:** apex A record returned `216.198.79.1`; authoritative NS returned `launch1.spaceship.net` and `launch2.spaceship.net`. This is not evidence that a source repository is available or that a safe production replacement is authorized.
- A local project/source folder named `falloutday` was not found before the project-control documents were created.

## Immediate product position (working draft)
`FalloutDay` will be positioned as an independent, fan-run editorial resource for practical Fallout 76 build guides, beginner tips, and clearly sourced news commentary for US-English players. It must never imply affiliation with Bethesda, Microsoft, or any official Fallout publisher.

## Active work
- [x] Existing live-domain and hosting preflight
- [x] Project control board / DAG / Kanban created
- [ ] Search-intent, competitor, and content-opportunity research (in progress)
- [ ] PRD / route contract
- [ ] IP, privacy, disclosure, and advertising plan

## Hard blockers
- **SOURCE_REPO_REQUIRED:** Existing production source was not discovered locally. Do not overwrite the unrelated Vercel site until the original repository is identified and audited, or the owner explicitly authorizes a new clean replacement baseline.
- **OWNER_RELEASE_APPROVAL_REQUIRED:** No production DNS, Vercel project, or domain assignment change is authorized by the current information.

## Learner-only actions
- Provide the existing GitHub repository URL **or** explicitly authorize a new replacement repository/baseline.
- Later, explicitly approve production replacement only after preview + QA.
- Do not send passwords, DNS tokens, login cookies, or verification codes in chat.

## Automation work that continues
- Market/keyword research, PRD, content architecture, non-infringing editorial policy, and ad-readiness plan.
