import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import type { ReactNode } from 'react'
import { SectionProvider } from '../../context/SectionProvider'
import { UnitPage } from './UnitPage'

expect.extend(toHaveNoViolations)

const wrap =
  (section: string, unit: string) =>
  ({ children }: { children: ReactNode }) => (
    <SectionProvider section={section as 'squirrels'} unit={unit as 'red-squirrels'}>
      {children}
    </SectionProvider>
  )

describe('UnitPage', () => {
  it('renders the unit name as the page heading (Red Squirrels)', () => {
    render(<UnitPage />, { wrapper: wrap('squirrels', 'red-squirrels') })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Red Squirrels')
  })

  it('renders the section name (Beavers / Mohawks)', () => {
    render(<UnitPage />, { wrapper: wrap('beavers', 'mohawks') })
    expect(screen.getByText('Beavers')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Mohawks')
  })

  it('renders the unit name (Cubs / Lions)', () => {
    render(<UnitPage />, { wrapper: wrap('cubs', 'lions') })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Lions')
  })

  it('renders the unit name (Scouts / Pumas)', () => {
    render(<UnitPage />, { wrapper: wrap('scouts', 'pumas') })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pumas')
  })

  it('renders the waiting list CTA link', () => {
    render(<UnitPage />, { wrapper: wrap('squirrels', 'red-squirrels') })
    expect(screen.getByRole('link', { name: /waiting list/i })).toHaveAttribute('href', '/waiting-list')
  })

  it('has the correct unit accent class on the hero (Red Squirrels)', () => {
    render(<UnitPage />, { wrapper: wrap('squirrels', 'red-squirrels') })
    const hero = screen.getByRole('region', { name: /red squirrels hero/i })
    expect(hero.className).toContain('bg-squirrels-red-unit')
  })

  it('has no axe violations — Red Squirrels', async () => {
    const { container } = render(<UnitPage />, { wrapper: wrap('squirrels', 'red-squirrels') })
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no axe violations — Mohawks', async () => {
    const { container } = render(<UnitPage />, { wrapper: wrap('beavers', 'mohawks') })
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no axe violations — Lions', async () => {
    const { container } = render(<UnitPage />, { wrapper: wrap('cubs', 'lions') })
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no axe violations — Pumas', async () => {
    const { container } = render(<UnitPage />, { wrapper: wrap('scouts', 'pumas') })
    expect(await axe(container)).toHaveNoViolations()
  })
})
