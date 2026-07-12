import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('Vercel route configuration', () => {
  it('rewrites deep links to the Vite application shell', () => {
    const config = JSON.parse(readFileSync(resolve(process.cwd(), 'vercel.json'), 'utf8'))

    expect(config.rewrites).toContainEqual({ source: '/(.*)', destination: '/' })
  })
})
