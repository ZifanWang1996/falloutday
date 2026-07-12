import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('first twelve guide library', () => {
  const routes = [
    ['fo76-guides/build-doctor', 'Build Doctor: Five Signs You Should Change Your Setup'],
    ['fo76-builds/fun-idea-to-viable-build', 'From “Fun Idea” to Viable Build'],
    ['fo76-guides/event-prep-checklist', 'Fallout 76 Event Prep Without the Panic'],
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
  it('publishes all new routes in sitemap.xml', () => {
    const sitemap = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8')
    for (const [route] of routes) expect(sitemap).toContain(`https://falloutday.online/${route}/`)
  })
})
