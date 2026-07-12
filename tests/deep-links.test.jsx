import { render, screen } from '@testing-library/react'
import App from '../src/App'

const routeCases = [
  ['/fo76-builds/choose-your-playstyle/', /which fallout 76 build fits your playstyle/i],
  ['/fo76-guides/first-50-levels/', /your first 50 levels in fallout 76/i],
  ['/fo76-guides/damage-troubleshooting/', /why your fallout 76 damage feels low/i],
  ['/about/', /about falloutday/i],
]

describe('FalloutDay deep-link content', () => {
  afterEach(() => window.history.replaceState({}, '', '/'))

  it.each(routeCases)('renders the matching content for %s', (path, heading) => {
    window.history.replaceState({}, '', path)
    render(<App />)

    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
  })
})
