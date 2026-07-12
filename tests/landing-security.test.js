import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('landing page search and security configuration', () => {
  it('declares canonical and social metadata in the initial HTML', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')

    expect(html).toContain('rel="canonical" href="https://falloutday.online/"')
    expect(html).toContain('property="og:title"')
  })

  it('sets baseline browser hardening headers through Vercel', () => {
    const config = JSON.parse(readFileSync(resolve(process.cwd(), 'vercel.json'), 'utf8'))
    const headers = config.headers?.[0]?.headers ?? []
    const names = headers.map(({ key }) => key)

    expect(names).toContain('X-Content-Type-Options')
    expect(names).toContain('Referrer-Policy')
    expect(names).toContain('Permissions-Policy')
  })
})
