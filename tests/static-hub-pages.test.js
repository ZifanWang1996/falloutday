import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('static site hubs and policy pages', () => {
  const routes = [
    ['fo76-builds', 'Build Guides That Start With Your Playstyle'],
    ['fo76-guides', 'Practical Fallout 76 Guides'],
    ['about', 'About FalloutDay'],
    ['privacy', 'Privacy at FalloutDay'],
    ['terms', 'Terms of Use'],
  ]

  it.each(routes)('publishes crawlable HTML for /%s/', (route, title) => {
    const file = resolve(process.cwd(), 'public', route, 'index.html')
    expect(existsSync(file)).toBe(true)

    const html = readFileSync(file, 'utf8')
    expect(html).toContain(`<title>${title} | FalloutDay</title>`)
    expect(html).toContain('rel="canonical"')
    expect(html).toContain('application/ld+json')
  })
})
