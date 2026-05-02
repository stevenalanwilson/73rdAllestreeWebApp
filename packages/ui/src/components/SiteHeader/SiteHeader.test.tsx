import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import type { ReactNode } from 'react'
import { SectionProvider } from '../../context/SectionProvider'
import { SiteHeader } from './SiteHeader'
import type { NavItemConfig } from './NavItem'

expect.extend(toHaveNoViolations)

const GROUP_NAV: NavItemConfig[] = [
  { label: 'Home',    href: '/',        current: true },
  { label: 'Beavers', href: '/beavers' },
  { label: 'Contact', href: '/contact' },
]

const beaversWrapper = ({ children }: { children: ReactNode }) => (
  <SectionProvider section="beavers">{children}</SectionProvider>
)

describe('SiteHeader', () => {
  it('renders the group name', () => {
    render(<SiteHeader navItems={GROUP_NAV} />)
    expect(screen.getByText('73rd Allestree Scouts')).toBeInTheDocument()
  })

  it('home link has correct href and aria-label', () => {
    render(<SiteHeader navItems={GROUP_NAV} />)
    const homeLink = screen.getByRole('link', {
      name: /73rd allestree scout group home/i,
    })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('marks the current nav item with aria-current="page"', () => {
    render(<SiteHeader navItems={GROUP_NAV} />)
    const currentLink = screen.getByRole('link', { name: 'Home' })
    expect(currentLink).toHaveAttribute('aria-current', 'page')
  })

  it('does not set aria-current on non-current items', () => {
    render(<SiteHeader navItems={GROUP_NAV} />)
    const link = screen.getByRole('link', { name: 'Beavers' })
    expect(link).not.toHaveAttribute('aria-current')
  })

  it('does not render a section stripe on group-level pages', () => {
    render(<SiteHeader navItems={GROUP_NAV} />)
    expect(screen.queryByTestId('section-stripe')).not.toBeInTheDocument()
  })

  it('renders a section stripe on section pages', () => {
    render(<SiteHeader navItems={GROUP_NAV} />, { wrapper: beaversWrapper })
    expect(screen.getByTestId('section-stripe')).toBeInTheDocument()
  })

  it('renders the section name badge on section pages', () => {
    render(<SiteHeader navItems={GROUP_NAV} />, { wrapper: beaversWrapper })
    expect(screen.getByText('Beavers')).toBeInTheDocument()
  })

  it('does not render a section badge on group-level pages', () => {
    render(<SiteHeader navItems={GROUP_NAV} />)
    expect(screen.queryByLabelText(/current section/i)).not.toBeInTheDocument()
  })

  describe('mobile menu', () => {
    it('hamburger button is present', () => {
      render(<SiteHeader navItems={GROUP_NAV} />)
      expect(
        screen.getByRole('button', { name: /open navigation menu/i }),
      ).toBeInTheDocument()
    })

    it('menu opens when hamburger is clicked', async () => {
      const user = userEvent.setup()
      render(<SiteHeader navItems={GROUP_NAV} />)
      const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
      expect(hamburger).toHaveAttribute('aria-expanded', 'false')

      await user.click(hamburger)

      expect(hamburger).toHaveAttribute('aria-expanded', 'true')
      expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
    })

    it('menu closes when close button is clicked', async () => {
      const user = userEvent.setup()
      render(<SiteHeader navItems={GROUP_NAV} />)
      await user.click(screen.getByRole('button', { name: /open navigation menu/i }))
      await user.click(screen.getByRole('button', { name: /close navigation menu/i }))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('menu closes on Escape key', async () => {
      const user = userEvent.setup()
      render(<SiteHeader navItems={GROUP_NAV} />)
      await user.click(screen.getByRole('button', { name: /open navigation menu/i }))
      await user.keyboard('{Escape}')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('focus returns to hamburger after menu closes', async () => {
      const user = userEvent.setup()
      render(<SiteHeader navItems={GROUP_NAV} />)
      const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
      await user.click(hamburger)
      await user.click(screen.getByRole('button', { name: /close navigation menu/i }))

      await waitFor(() => {
        expect(document.activeElement).toBe(hamburger)
      })
    })
  })

  describe('accessibility', () => {
    it('group-level header has no axe violations', async () => {
      const { container } = render(<SiteHeader navItems={GROUP_NAV} />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('section-level header has no axe violations', async () => {
      const { container } = render(<SiteHeader navItems={GROUP_NAV} />, {
        wrapper: beaversWrapper,
      })
      expect(await axe(container)).toHaveNoViolations()
    })

    it('mobile menu open state has no axe violations', async () => {
      const user = userEvent.setup()
      const { container } = render(<SiteHeader navItems={GROUP_NAV} />)
      await user.click(screen.getByRole('button', { name: /open navigation menu/i }))
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})
