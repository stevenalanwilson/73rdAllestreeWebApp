'use client'

import { type FC, useRef, useState } from 'react'
import { useSectionTheme } from '../../hooks/useSectionTheme'
import { NavItem, type NavItemConfig } from './NavItem'
import { MobileMenu } from './MobileMenu'
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb'

interface SiteHeaderProps {
  navItems: NavItemConfig[]
  breadcrumbs?: BreadcrumbItem[]
}

export const SiteHeader: FC<SiteHeaderProps> = ({ navItems, breadcrumbs = [] }) => {
  const { sectionColour } = useSectionTheme()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <header>
      {/* ── Band 1: Scout Purple — 5px Tier 1 identity stripe ── */}
      <div aria-hidden="true" className="h-[10px] bg-scout-purple" />

      {/* ── Band 2: White — logo, group title, navigation ── */}
      <div className="bg-white shadow-sm dark:bg-scout-navy">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-10 sm:px-6 lg:px-8">

          {/* Left: Scouts wordmark + group name */}
          <a
            href="/"
            aria-label="73rd Allestree Scout Group home"
            className="flex shrink-0 items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
          >
            <img
              src="/icons/scouts-logo.svg"
              alt="Scouts"
              className="h-8 w-auto text-scout-purple dark:text-white"
            />
            <span aria-hidden="true" className="select-none text-gray-300 dark:text-white/30">|</span>
            <span className="text-lg font-bold text-scout-navy dark:text-white">
              73rd Allestree Scouts
            </span>
          </a>

          {/* Right: desktop nav + mobile hamburger */}
          <nav aria-label="Main navigation">
            <ul role="list" className="hidden items-center gap-0.5 md:flex">
              {navItems.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </ul>
          </nav>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
            className="rounded p-2 text-scout-navy hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple dark:text-white dark:hover:bg-white/10 md:hidden"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Band 3: Allestree Red — 5px identity stripe ── */}
      <div aria-hidden="true" className="h-[20px] bg-group-red" />

      {/* ── Band 4: Purple (group) / section colour (section pages) — breadcrumb ── */}
      <Breadcrumb
        items={breadcrumbs}
        backgroundColour={sectionColour}
        data-testid="section-stripe"
      />

      {/* Mobile overlay */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        triggerRef={triggerRef}
      />
    </header>
  )
}
