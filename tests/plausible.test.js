import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('analytics integration', () => {
  it('loads the approved privacy-friendly Plausible script and initializes it', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')

    expect(html).toContain('https://plausible.shipsolo.io/js/pa-pN1Nf7v4_Mz-hY36hk4LS.js')
    expect(html).toContain('plausible.init()')
  })
})
