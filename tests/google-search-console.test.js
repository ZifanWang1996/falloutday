import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('Google Search Console verification', () => {
  it('publishes the owner-provided verification token in the homepage HTML', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')
    expect(html).toContain('<meta name="google-site-verification" content="u2FZ-ve0GEF0ZBBk_nwADEueuspjEg9768si5_LVvWc" />')
  })
})
