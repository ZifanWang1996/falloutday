import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('next content cluster', () => {
  const routes = [
    ['fo76-builds/budget-commando', 'The Budget Commando Path'],
    ['fo76-guides/returning-player-checklist', 'A Returning Player’s Fallout 76 Reset Checklist'],
    ['fo76-builds/solo-builds', 'Solo Fallout 76 Builds'],
  ]

  it.each(routes)('publishes static original guidance for /%s/', (route, title) => {
    const file = resolve(process.cwd(), 'public', route, 'index.html')
    expect(existsSync(file)).toBe(true)
    const html = readFileSync(file, 'utf8')

    expect(html).toContain(title)
    expect(html).toContain('Last reviewed: July 2026')
    expect(html).toContain('rel="canonical"')
    expect(html).toContain('application/ld+json')
  })

  it('adds every new route to sitemap discovery', () => {
    const sitemap = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8')
    for (const [route] of routes) expect(sitemap).toContain(`https://falloutday.online/${route}/`)
  })
})
