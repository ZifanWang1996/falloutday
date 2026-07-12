import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('comparison and routine content cluster', () => {
  const routes = [
    ['fo76-builds/heavy-gunner-vs-commando-vs-melee', 'Heavy Gunner, Commando, or Melee?'],
    ['fo76-guides/perk-synergy', 'Fallout 76 Perks Without the Spreadsheet'],
    ['fo76-guides/casual-30-minute-routine', 'The 30-Minute Fallout 76 Session'],
  ]

  it.each(routes)('publishes reviewed original guidance for /%s/', (route, title) => {
    const file = resolve(process.cwd(), 'public', route, 'index.html')
    expect(existsSync(file)).toBe(true)
    const html = readFileSync(file, 'utf8')
    expect(html).toContain(title)
    expect(html).toContain('Last reviewed: July 2026')
    expect(html).toContain('rel="canonical"')
    expect(html).toContain('application/ld+json')
  })

  it('adds every new page to sitemap discovery', () => {
    const sitemap = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8')
    for (const [route] of routes) expect(sitemap).toContain(`https://falloutday.online/${route}/`)
  })
})
