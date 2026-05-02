import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Footer } from './Footer'

expect.extend(toHaveNoViolations)

describe('Footer', () => {
  it('renders the group name', () => {
    render(<Footer />)
    expect(screen.getByText('73rd Allestree Scout Group')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Woodlands Road')
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Allestree')
    expect(screen.getByRole('contentinfo')).toHaveTextContent('DE22 2HE')
  })

  it('renders the charity number', () => {
    render(<Footer />)
    expect(screen.getAllByText(/520628/)).toHaveLength(2)
  })

  it('renders social media links with accessible labels', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('renders all section quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Squirrels' })).toHaveAttribute('href', '/squirrels')
    expect(screen.getByRole('link', { name: 'Beavers' })).toHaveAttribute('href', '/beavers')
    expect(screen.getByRole('link', { name: 'Cubs' })).toHaveAttribute('href', '/cubs')
    expect(screen.getByRole('link', { name: 'Scouts' })).toHaveAttribute('href', '/scouts')
  })

  it('has no axe accessibility violations', async () => {
    const { container } = render(<Footer />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
