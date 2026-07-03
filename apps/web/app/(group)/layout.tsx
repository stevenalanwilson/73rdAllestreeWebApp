import type { ReactNode } from 'react'
import { Footer } from '@73rd/ui'
import { SECTIONS } from '@73rd/tokens'
import { NavigationBar } from '@/components/NavigationBar'
import { FLAGS } from '@/lib/flags'

const FOOTER_LINKS = [
  ...SECTIONS.filter((section) => FLAGS.sections[section.slug]).map((section) => ({
    label: section.name,
    href: `/${section.slug}`,
  })),
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
  { label: 'Component library', href: '/components' },
]

export default function GroupLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationBar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer links={FOOTER_LINKS} />
    </>
  )
}
