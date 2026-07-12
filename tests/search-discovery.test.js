import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('search discovery files', () => {
  it('publishes a robots file that points crawlers to the canonical sitemap', () => {
    const robots = readFileSync(resolve(process.cwd(), 'public/robots.txt'), 'utf8')

    expect(robots).toContain('User-agent: *')
    expect(robots).toContain('Sitemap: https://falloutday.online/sitemap.xml')
  })

  it('publishes the live content routes in the sitemap', () => {
    const sitemap = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8')

    expect(sitemap).toContain('https://falloutday.online/fo76-builds/choose-your-playstyle/')
    expect(sitemap).toContain('https://falloutday.online/fo76-guides/first-50-levels/')
    expect(sitemap).toContain('https://falloutday.online/privacy/')
  })
})
