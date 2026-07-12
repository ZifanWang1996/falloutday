import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('static search pages', () => {
  const routes = [
    ['fo76-builds/choose-your-playstyle', 'Which Fallout 76 Build Fits Your Playstyle?'],
    ['fo76-guides/first-50-levels', 'Your First 50 Levels in Fallout 76'],
    ['fo76-guides/damage-troubleshooting', 'Why Your Fallout 76 Damage Feels Low'],
  ]

  it.each(routes)('publishes crawlable HTML for /%s/', (route, title) => {
    const path = resolve(process.cwd(), 'public', route, 'index.html')

    expect(existsSync(path)).toBe(true)
    const html = readFileSync(path, 'utf8')
    expect(html).toContain(`<title>${title} | FalloutDay</title>`)
    expect(html).toContain('rel="canonical"')
    expect(html).toContain('application/ld+json')
    expect(html).toContain(title)
  })
})
