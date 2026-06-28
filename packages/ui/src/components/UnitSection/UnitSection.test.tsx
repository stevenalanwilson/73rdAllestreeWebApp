import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import type { ReactNode } from 'react'
import { SectionProvider } from '../../context/SectionProvider'
import { UnitSection } from './UnitSection'

expect.extend(toHaveNoViolations)

const wrap =
  (section: string, unit: string) =>
  ({ children }: { children: ReactNode }) => (
    <SectionProvider section={section as 'squirrels'} unit={unit as 'red-squirrels'}>
      {children}
    </SectionProvider>
  )

describe('UnitSection', () => {
  it('renders the unit name as an h3 heading (Red Squirrels)', () => {
    render(<UnitSection id="red-squirrels" />, { wrapper: wrap('squirrels', 'red-squirrels') })
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Red Squirrels')
  })

  it('renders the unit name as an h3 heading (Mohawks)', () => {
    render(<UnitSection id="mohawks" />, { wrapper: wrap('beavers', 'mohawks') })
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Mohawks')
  })

  it('renders the unit name as an h3 heading (Lions)', () => {
    render(<UnitSection id="lions" />, { wrapper: wrap('cubs', 'lions') })
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Lions')
  })

  it('renders the unit name as an h3 heading (Pumas)', () => {
    render(<UnitSection id="pumas" />, { wrapper: wrap('scouts', 'pumas') })
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Pumas')
  })

  it('renders the group name (1st Drey)', () => {
    render(<UnitSection id="red-squirrels" />, { wrapper: wrap('squirrels', 'red-squirrels') })
    expect(screen.getByText('1st Drey')).toBeInTheDocument()
  })

  it('renders the meeting time', () => {
    render(<UnitSection id="red-squirrels" />, { wrapper: wrap('squirrels', 'red-squirrels') })
    expect(screen.getByText('Thursdays during term time, 16:30–17:30')).toBeInTheDocument()
  })

  it('applies the id prop to the root article element', () => {
    const { container } = render(<UnitSection id="red-squirrels" />, {
      wrapper: wrap('squirrels', 'red-squirrels'),
    })
    expect(container.querySelector('article')?.id).toBe('red-squirrels')
  })

  it('applies the unit accent class to the accent strip (Red Squirrels)', () => {
    const { container } = render(<UnitSection id="red-squirrels" />, {
      wrapper: wrap('squirrels', 'red-squirrels'),
    })
    const strip = container.querySelector('[aria-hidden="true"]')
    expect(strip?.className).toContain('bg-squirrels-red-unit')
  })

  it('has no axe violations — Red Squirrels', async () => {
    const { container } = render(<UnitSection id="red-squirrels" />, {
      wrapper: wrap('squirrels', 'red-squirrels'),
    })
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no axe violations — Mohawks', async () => {
    const { container } = render(<UnitSection id="mohawks" />, {
      wrapper: wrap('beavers', 'mohawks'),
    })
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no axe violations — Lions', async () => {
    const { container } = render(<UnitSection id="lions" />, {
      wrapper: wrap('cubs', 'lions'),
    })
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no axe violations — Pumas', async () => {
    const { container } = render(<UnitSection id="pumas" />, {
      wrapper: wrap('scouts', 'pumas'),
    })
    expect(await axe(container)).toHaveNoViolations()
  })
})
