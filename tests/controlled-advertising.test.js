import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const adScript = 'https://pl30330012.effectivecpmnetwork.com/1a6b2dcf02f6ad805d105cd449207649/invoke.js'
const adContainer = 'container-1a6b2dcf02f6ad805d105cd449207649'

describe('controlled advertising trial', () => {
  it('places the approved low-interruption placement only after guide content', () => {
    const guide = readFileSync(resolve(process.cwd(), 'public/fo76-guides/first-50-levels/index.html'), 'utf8')

    expect(guide).toContain('Sponsored placement')
    expect(guide).toContain(adScript)
    expect(guide).toContain(adContainer)
    expect(guide.indexOf('Sponsored placement')).toBeGreaterThan(guide.indexOf('Frequently asked questions'))
  })

  it('keeps ad code out of the homepage and policy pages', () => {
    for (const file of ['index.html', 'public/privacy/index.html', 'public/terms/index.html']) {
      const html = readFileSync(resolve(process.cwd(), file), 'utf8')
      expect(html).not.toContain(adScript)
    }
  })

  it('discloses the actual advertising script on the privacy page', () => {
    const privacy = readFileSync(resolve(process.cwd(), 'public/privacy/index.html'), 'utf8')
    expect(privacy).toContain('EffectiveCPMNetwork')
    expect(privacy).toContain('advertising')
  })
})
