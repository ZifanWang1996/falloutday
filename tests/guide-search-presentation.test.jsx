import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('guide search presentation', () => {
  afterEach(() => window.history.replaceState({}, '', '/'))

  it('sets a guide-specific title and shows a visible FAQ on the first-levels page', () => {
    window.history.replaceState({}, '', '/fo76-guides/first-50-levels/')
    render(<App />)

    expect(document.title).toMatch(/first 50 levels/i)
    expect(screen.getByRole('heading', { name: /frequently asked questions/i })).toBeInTheDocument()
    expect(screen.getByText(/should i lock into one perfect build before level 50/i)).toBeInTheDocument()
  })
})
