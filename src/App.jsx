const guides = [
  {
    eyebrow: 'Start here',
    title: 'Choose your build',
    description: 'Find a practical Fallout 76 playstyle based on how you play—not a one-size-fits-all “best build.”',
    href: '/fo76-builds/choose-your-playstyle/',
  },
  {
    eyebrow: 'New wastelanders',
    title: 'First 50 levels',
    description: 'A calm, build-agnostic plan for survival, carry weight, ammo, perks, and your next upgrade.',
    href: '/fo76-guides/first-50-levels/',
  },
  {
    eyebrow: 'Fix the friction',
    title: 'Damage troubleshooting',
    description: 'A step-by-step checklist for low damage, low AP, ammo pressure, and fragile setups.',
    href: '/fo76-guides/damage-troubleshooting/',
  },
]

export default function App() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="FalloutDay home">Fallout<span>Day</span></a>
        <div className="nav-links">
          <a href="/fo76-builds/">Builds</a>
          <a href="/fo76-guides/">Guides</a>
          <a href="/about/">About</a>
        </div>
      </nav>

      <section className="hero" aria-labelledby="site-title">
        <p className="kicker">Independent player guides · Fallout 76</p>
        <h1 id="site-title">Fallout 76, <em>made practical.</em></h1>
        <p className="lede">Clear build choices, useful first steps, and honest commentary for players who want to spend more time exploring and less time decoding spreadsheets.</p>
        <div className="actions">
          <a className="button primary" href="/fo76-builds/choose-your-playstyle/">Choose your build</a>
          <a className="button secondary" href="/fo76-guides/first-50-levels/">Start at level one</a>
        </div>
      </section>

      <section className="guide-section" aria-labelledby="guide-heading">
        <div className="section-heading">
          <p className="kicker">No jargon. No grind theater.</p>
          <h2 id="guide-heading">Practical routes through Appalachia.</h2>
        </div>
        <div className="cards">
          {guides.map((guide, index) => (
            <a className="guide-card" href={guide.href} key={guide.href}>
              <span className="card-number">0{index + 1}</span>
              <p className="card-eyebrow">{guide.eyebrow}</p>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <span className="read-link">Read guide <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-heading">
        <p className="kicker">Our editorial promise</p>
        <h2 id="principles-heading">A guide should tell you what to do next.</h2>
        <ul>
          <li><strong>Playstyle first.</strong> Every recommendation explains who it serves and what it asks of you.</li>
          <li><strong>Budget-aware paths.</strong> Start with what you can realistically get, then upgrade with purpose.</li>
          <li><strong>Version-transparent advice.</strong> Time-sensitive pages are reviewed and dated—never quietly recycled.</li>
        </ul>
      </section>

      <footer>
        <p>FalloutDay is unofficial fan commentary and is not affiliated with, endorsed by, or sponsored by Bethesda Softworks, ZeniMax Media, or Microsoft.</p>
        <a href="/about/">Editorial policy &amp; contact</a>
      </footer>
    </main>
  )
}
