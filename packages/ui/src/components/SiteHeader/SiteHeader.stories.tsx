import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { SectionProvider } from '../../context/SectionProvider'
import { SiteHeader } from './SiteHeader'

const SAMPLE_NAV: Array<{ label: string; href: string; current?: boolean }> = [
  { label: 'Home',      href: '/' },
  { label: 'Squirrels', href: '/squirrels' },
  { label: 'Beavers',   href: '/beavers' },
  { label: 'Cubs',      href: '/cubs' },
  { label: 'Scouts',    href: '/scouts' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
]

const meta: Meta<typeof SiteHeader> = {
  title:     'Components/SiteHeader',
  component: SiteHeader,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    navItems: SAMPLE_NAV,
  },
}

export default meta
type Story = StoryObj<typeof SiteHeader>

export const GroupLevel: Story = {
  name: 'Group level (no section)',
}

export const SquirrelsSection: Story = {
  name: 'Squirrels section',
  decorators: [
    (Story) => (
      <SectionProvider section="squirrels">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const BeaversSection: Story = {
  name: 'Beavers section',
  decorators: [
    (Story) => (
      <SectionProvider section="beavers">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const CubsSection: Story = {
  name: 'Cubs section',
  decorators: [
    (Story) => (
      <SectionProvider section="cubs">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const ScoutsSection: Story = {
  name: 'Scouts section',
  decorators: [
    (Story) => (
      <SectionProvider section="scouts">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const MohawksUnit: Story = {
  name: 'Beavers – Mohawks unit',
  decorators: [
    (Story) => (
      <SectionProvider section="beavers" unit="mohawks">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const MobileMenuOpen: Story = {
  name: 'Mobile menu open',
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const hamburger = canvas.getByRole('button', { name: /open navigation menu/i })
    await userEvent.click(hamburger)
    await expect(canvas.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
  },
}
