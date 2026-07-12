# FalloutDay v0.1 PRD

## Product decision
FalloutDay is an independent, US-English editorial site for practical **Fallout 76** build guidance, beginner help, and dated news commentary. It will compete on clear choices, upgrade paths, and troubleshooting—not a copied wiki or a full character calculator.

## Audience
1. New players who need a first-50-level priority path.
2. Returning players who need to reassess their setup.
3. Casual solo players seeking budget-conscious guidance.
4. Players who need to diagnose low damage, low survivability, ammo pressure, or carry-weight friction.

## v0 launch route contract
| Route | Job | Initial state |
|---|---|---|
| `/` | Explain the editorial promise and direct users to highest-intent guides | Implemented preview baseline |
| `/fo76-builds/` | Build hub | Planned |
| `/fo76-builds/choose-your-playstyle/` | Playstyle decision guide | Planned |
| `/fo76-builds/budget-commando/` | Budget Commando upgrade path | Planned |
| `/fo76-guides/` | Guide hub | Planned |
| `/fo76-guides/first-50-levels/` | First-50-levels priority plan | Planned |
| `/fo76-guides/damage-troubleshooting/` | Damage/survival troubleshooting checklist | Planned |
| `/about/` | Author, editorial process, policy, corrections and contact | Planned |
| `/privacy/`, `/terms/` | Required before advertising | Planned |

## Initial editorial backlog
1. Which Fallout 76 Build Fits Your Playstyle? A No-Jargon Decision Guide
2. Your First 50 Levels in Fallout 76: A Build-Agnostic Priority Plan
3. The Budget Commando Path: What to Prioritize Before Chasing Perfect Gear
4. Solo Fallout 76 Builds: How to Trade Damage for Reliability
5. Why Your Fallout 76 Damage Feels Low: A Practical Troubleshooting Checklist
6. A Returning Player’s Fallout 76 Reset Checklist
7. Heavy Gunner, Commando, or Melee? A Time-and-Resource Comparison
8. Fallout 76 Perks Without the Spreadsheet
9. The 30-Minute Fallout 76 Session
10. Build Doctor: Five Signs You Should Change Your Setup
11. From Fun Idea to Viable Build
12. Fallout 76 Event Prep Without the Panic

## Non-goals
- No copied Wiki/database text, scraped build listings, game-file distribution, or complex perk calculator in v0.
- No player accounts, user submissions, or comments in v0.
- No ad scripts before legal pages, original content threshold, contact path, and production UX QA.

## Quality requirements
- Every guide identifies player type, solo/team fit, budget, difficulty, alternatives, and `Last reviewed` date.
- Version-sensitive claims link to an official source or declare their test conditions/date.
- Mobile-first reading: summary first, anchor navigation, short steps, and tables/checklists where useful.
- Use Article, BreadcrumbList and only visible, truthful FAQ schema.

## Release boundary
The current live domain serves unrelated Vercel template content. This GitHub repository is a new replacement baseline only. It cannot be connected to `falloutday.online` or replace production until preview review, legal pages, content readiness, QA, and explicit owner release approval.
