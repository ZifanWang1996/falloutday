const guideCards = [
  { eyebrow: 'Start here', title: 'Choose your build', description: 'Find a practical Fallout 76 playstyle based on how you play—not a one-size-fits-all “best build.”', href: '/fo76-builds/choose-your-playstyle/' },
  { eyebrow: 'New wastelanders', title: 'First 50 levels', description: 'A calm, build-agnostic plan for survival, carry weight, ammo, perks, and your next upgrade.', href: '/fo76-guides/first-50-levels/' },
  { eyebrow: 'Fix the friction', title: 'Damage troubleshooting', description: 'A step-by-step checklist for low damage, low AP, ammo pressure, and fragile setups.', href: '/fo76-guides/damage-troubleshooting/' },
]

const pages = {
  '/fo76-builds/choose-your-playstyle/': {
    eyebrow: 'Build decision guide', title: 'Which Fallout 76 Build Fits Your Playstyle?',
    intro: 'Start with how you actually play: solo or team, close-range or distant, relaxed sessions or careful planning. A workable build is one you can sustain—not merely one with an impressive final screenshot.',
    sections: [['Pick your first constraint', ['Solo players should value recovery, reliable damage, and forgiving mistakes.', 'Casual sessions benefit from low-maintenance weapons and an easy resupply loop.', 'If you enjoy aiming from range, begin by comparing a ranged style before chasing a perfect endgame setup.']], ['Use a three-step upgrade path', ['Build a functional starter setup first.', 'Replace the piece that causes the most friction: damage, survivability, ammo, AP, or carry weight.', 'Only then spend time optimizing rare effects or narrow activity-specific choices.']]],
  },
  '/fo76-guides/first-50-levels/': {
    eyebrow: 'New player guide', title: 'Your First 50 Levels in Fallout 76',
    intro: 'Your early goal is not a perfect final build. It is a dependable loop: stay alive, carry what matters, keep enough ammo and healing, and learn which playstyle feels good.',
    sections: [['Priorities before perfection', ['Choose one main damage direction instead of splitting every early choice across unrelated weapons.', 'Keep a small, useful supply loop for healing, repairs, and ammunition.', 'Treat carry weight as a quality-of-life problem to solve early rather than a permanent annoyance.']], ['A simple checkpoint routine', ['After each play session, keep only equipment you can explain a use for.', 'Notice the one moment that slowed you down most, then make your next perk or gear choice answer that problem.', 'When a new build looks exciting, compare its resource needs before replacing a setup that already works.']]],
  },
  '/fo76-guides/damage-troubleshooting/': {
    eyebrow: 'Troubleshooting checklist', title: 'Why Your Fallout 76 Damage Feels Low',
    intro: 'Low damage is rarely fixed by one expensive item. Check the basic loop first: weapon condition, range, ammunition, perk synergy, enemy context, and whether your setup asks you to do too many jobs at once.',
    sections: [['Check the obvious signals', ['Is the weapon you use most supported by the choices you have made?', 'Are you fighting at the range and pace your setup was built for?', 'Is your ammunition or AP pressure forcing you into weaker decisions mid-fight?']], ['Change one variable at a time', ['Keep one repeatable activity as your test case.', 'Adjust one relevant choice, then notice damage, survival, and resource use together.', 'If a change improves one metric but makes the build frustrating to maintain, it may not be an upgrade for your playstyle.']]],
  },
  '/fo76-builds/': {
    eyebrow: 'Fallout 76 builds', title: 'Build Guides That Start With Your Playstyle',
    intro: 'Use these guides to decide what to build first, what friction to solve next, and when a more specialized setup is worth the time.',
    sections: [['Start with a decision, not a tier list', ['Choose your weapon and role around your time, confidence, and preferred activity.', 'A build that is easy to maintain is more useful than an expensive recommendation you cannot yet support.']], ['Build guide library', ['Choose your playstyle: a no-jargon starting point for solo, casual, ranged, and close-range players.', 'Budget paths and specialized comparisons will be added after each guide has a dated review.']]],
  },
  '/fo76-guides/': {
    eyebrow: 'Fallout 76 player guides', title: 'Practical Fallout 76 Guides',
    intro: 'Start with the problem in front of you—early-level decisions, low damage, resource pressure, or returning-player uncertainty—and take one useful next step.',
    sections: [['Start here', ['Your first 50 levels: build a reliable early-game loop before pursuing a final setup.', 'Damage troubleshooting: check the factors that most often cause a build to feel weak.']], ['What we add next', ['Returning-player checklists, budget progression paths, and event preparation guides.', 'Every time-sensitive topic will display its review date rather than silently claiming to be current.']]],
  },
  '/about/': {
    eyebrow: 'Independent player guides', title: 'About FalloutDay',
    intro: 'FalloutDay is a fan-run editorial project for players who want practical Fallout 76 guidance without pretending that one build is right for everyone.',
    sections: [['Editorial promise', ['We separate official information, personal testing observations, and editorial recommendations.', 'Version-sensitive articles should show a review date and link to an official source when available.', 'We welcome corrections and will revise inaccurate or outdated guidance.']], ['Unofficial fan commentary', ['FalloutDay is not affiliated with, endorsed by, or sponsored by Bethesda Softworks, ZeniMax Media, or Microsoft.', 'We do not present ourselves as an official game resource and do not publish copied game files, data dumps, or copied guide text.']]],
  },
  '/privacy/': {
    eyebrow: 'Privacy', title: 'Privacy at FalloutDay',
    intro: 'FalloutDay is a simple editorial website. We aim to keep data collection minimal and use privacy-friendly Plausible analytics to understand aggregate site use.',
    sections: [['What we collect', ['The site does not offer accounts, comments, or newsletter signup in this version.', 'Plausible analytics is used to measure aggregate visits and page activity without advertising profiles or site-controlled tracking cookies.']], ['Your choices', ['You can use browser privacy controls or content blockers if you prefer not to load third-party analytics.', 'If the site later adds advertising, forms, or other data-processing features, this notice will be updated before those features are enabled.']]],
  },
  '/terms/': {
    eyebrow: 'Terms', title: 'Terms of Use',
    intro: 'FalloutDay provides independent fan commentary and general gameplay guidance for informational purposes.',
    sections: [['Using this site', ['Guides reflect editorial judgment and may become outdated after game changes. Verify important, version-sensitive details with official sources.', 'Do not treat this site as an official source, a guarantee of results, or a replacement for game rules and platform policies.']], ['Fan-site status', ['FalloutDay is not affiliated with, endorsed by, or sponsored by Bethesda Softworks, ZeniMax Media, or Microsoft.', 'Fallout and Fallout 76 are referenced only to identify the subject of commentary and guides.']]],
  },
}

function Nav() { return <nav className="nav" aria-label="Main navigation"><a className="brand" href="/" aria-label="FalloutDay home">Fallout<span>Day</span></a><div className="nav-links"><a href="/fo76-builds/">Builds</a><a href="/fo76-guides/">Guides</a><a href="/about/">About</a></div></nav> }
function Footer() { return <footer><p>FalloutDay is unofficial fan commentary and is not affiliated with, endorsed by, or sponsored by Bethesda Softworks, ZeniMax Media, or Microsoft.</p><div className="footer-links"><a href="/about/">About</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></div></footer> }
function Article({ page }) { return <><Nav /><article className="article"><p className="kicker">{page.eyebrow}</p><h1>{page.title}</h1><p className="article-intro">{page.intro}</p><p className="reviewed">Last reviewed: July 2026 · Guidance, not an official game source</p>{page.sections.map(([heading, points]) => <section key={heading}><h2>{heading}</h2><ul>{points.map(point => <li key={point}>{point}</li>)}</ul></section>)}<a className="button secondary article-back" href="/">← Back to FalloutDay</a></article><Footer /></> }
function Home() { return <><Nav /><section className="hero" aria-labelledby="site-title"><p className="kicker">Independent player guides · Fallout 76</p><h1 id="site-title">Fallout 76, <em>made practical.</em></h1><p className="lede">Clear build choices, useful first steps, and honest commentary for players who want to spend more time exploring and less time decoding spreadsheets.</p><div className="actions"><a className="button primary" href="/fo76-builds/choose-your-playstyle/">Choose your build</a><a className="button secondary" href="/fo76-guides/first-50-levels/">Start at level one</a></div></section><section className="guide-section" aria-labelledby="guide-heading"><div className="section-heading"><p className="kicker">No jargon. No grind theater.</p><h2 id="guide-heading">Practical routes through Appalachia.</h2></div><div className="cards">{guideCards.map((guide, index) => <a className="guide-card" href={guide.href} key={guide.href}><span className="card-number">0{index + 1}</span><p className="card-eyebrow">{guide.eyebrow}</p><h3>{guide.title}</h3><p>{guide.description}</p><span className="read-link">Read guide <span aria-hidden="true">→</span></span></a>)}</div></section><section className="principles" aria-labelledby="principles-heading"><p className="kicker">Our editorial promise</p><h2 id="principles-heading">A guide should tell you what to do next.</h2><ul><li><strong>Playstyle first.</strong> Every recommendation explains who it serves and what it asks of you.</li><li><strong>Budget-aware paths.</strong> Start with what you can realistically get, then upgrade with purpose.</li><li><strong>Version-transparent advice.</strong> Time-sensitive pages are reviewed and dated—never quietly recycled.</li></ul></section><Footer /></> }
export default function App() { const page = pages[window.location.pathname]; return page ? <Article page={page} /> : <Home /> }
