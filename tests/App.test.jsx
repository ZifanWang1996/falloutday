import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('FalloutDay home page', () => {
  it('identifies the site as an independent Fallout 76 guide', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /fallout 76, made practical/i })).toBeInTheDocument()
    expect(screen.getByText(/unofficial fan commentary/i)).toBeInTheDocument()
  })

  it('offers the initial beginner, build, and troubleshooting routes', () => {
    render(<App />)

    const buildLinks = screen.getAllByRole('link', { name: /choose your build/i })
    expect(buildLinks).not.toHaveLength(0)
    expect(buildLinks[0]).toHaveAttribute('href', '/fo76-builds/choose-your-playstyle/')
    expect(screen.getByRole('link', { name: /first 50 levels/i })).toHaveAttribute('href', '/fo76-guides/first-50-levels/')
    expect(screen.getByRole('link', { name: /damage troubleshooting/i })).toHaveAttribute('href', '/fo76-guides/damage-troubleshooting/')
  })
})
