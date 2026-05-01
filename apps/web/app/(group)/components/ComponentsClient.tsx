'use client'

import { useState } from 'react'
import { NavItem, Breadcrumb } from '@73rd/ui'
import { HomeHero } from '@/components/HomeHero'

// ── Shared layout helpers ──────────────────────────────────────────────────

function ComponentSection({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <div>
        <h2 id={id} className="text-xl font-bold text-scout-navy">
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      {children}
    </section>
  )
}

function PreviewBox({
  label,
  dark = false,
  children,
}: {
  label: string
  dark?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div
        className={`flex min-h-[80px] flex-wrap items-center gap-3 p-6 ${dark ? 'bg-scout-navy' : 'bg-white'}`}
      >
        {children}
      </div>
      <div className="border-t border-gray-100 bg-gray-50 px-4 py-2">
        <span className="font-mono text-xs text-gray-400">{label}</span>
      </div>
    </div>
  )
}

function PropRow({ name, type, description }: { name: string; type: string; description: string }) {
  return (
    <tr className="border-t border-gray-100">
      <td className="py-2.5 pr-4 align-top font-mono text-xs font-semibold text-scout-purple">
        {name}
      </td>
      <td className="py-2.5 pr-4 align-top font-mono text-xs text-gray-500">{type}</td>
      <td className="py-2.5 align-top text-xs text-gray-600">{description}</td>
    </tr>
  )
}

function PropsTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Prop
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Type
            </th>
            <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="px-4">{children}</tbody>
      </table>
    </div>
  )
}

function PackageBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-scout-purple/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-scout-purple">
      {name}
    </span>
  )
}

// ── Section colour data ────────────────────────────────────────────────────

const SECTION_COLOURS = [
  { name: 'Scout Purple', tailwind: 'bg-scout-purple', hex: '#4D2177', tier: 'Tier 1 — National' },
  { name: 'Group Red',    tailwind: 'bg-group-red',    hex: '#B31C27', tier: 'Tier 2 — Group' },
  { name: 'Squirrels',   tailwind: 'bg-squirrels',    hex: '#9B1C1C', tier: 'Tier 3 — Section' },
  { name: 'Beavers',     tailwind: 'bg-beavers',      hex: '#004F6E', tier: 'Tier 3 — Section' },
  { name: 'Cubs',        tailwind: 'bg-cubs',         hex: '#4A5E06', tier: 'Tier 3 — Section' },
  { name: 'Scouts',      tailwind: 'bg-scouts',       hex: '#0F3D0F', tier: 'Tier 3 — Section' },
]

const BREADCRUMB_VARIANTS = [
  {
    label: 'Group / general pages',
    colour: 'bg-scout-purple',
    items: [{ label: 'Home', href: '/' }],
  },
  {
    label: 'Squirrels section',
    colour: 'bg-squirrels',
    items: [{ label: 'Home', href: '/' }, { label: 'Squirrels', href: '/squirrels' }],
  },
  {
    label: 'Beavers section',
    colour: 'bg-beavers',
    items: [{ label: 'Home', href: '/' }, { label: 'Beavers', href: '/beavers' }],
  },
  {
    label: 'Cubs section',
    colour: 'bg-cubs',
    items: [{ label: 'Home', href: '/' }, { label: 'Cubs', href: '/cubs' }],
  },
  {
    label: 'Scouts section',
    colour: 'bg-scouts',
    items: [{ label: 'Home', href: '/' }, { label: 'Scouts', href: '/scouts' }],
  },
]

// ── Main client component ─────────────────────────────────────────────────

export function ComponentsClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section aria-label="Components hero" className="bg-scout-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/50">
            73rd Allestree
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Component Library
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Live previews, props, and usage notes for every shared UI component.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {[
              { label: 'SiteHeader', href: '#site-header' },
              { label: 'NavItem',    href: '#nav-item' },
              { label: 'Breadcrumb', href: '#breadcrumb' },
              { label: 'MobileMenu', href: '#mobile-menu' },
              { label: 'SectionProvider', href: '#section-provider' },
              { label: 'SectionPage',     href: '#section-page' },
              { label: 'HomeHero',        href: '#home-hero' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">

        {/* ── SiteHeader ── */}
        <ComponentSection
          id="site-header"
          title="SiteHeader"
          description="The persistent four-band page header. Always rendered at the top of every page via NavigationBar."
        >
          <PackageBadge name="@73rd/ui" />
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="font-mono text-xs text-gray-400">Live preview — see top of page</span>
            </div>
            <div className="space-y-1 p-6 text-sm text-gray-600">
              <p>The <code className="rounded bg-gray-100 px-1 font-mono text-xs">SiteHeader</code> rendered above this page is the live component. It has four bands:</p>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5">
                <li><strong>Scout Purple stripe</strong> — 10px, Tier 1 national identity</li>
                <li><strong>White nav bar</strong> — Scouts logo, group name, navigation links</li>
                <li><strong>Group Red stripe</strong> — 20px, Tier 2 group identity</li>
                <li><strong>Dynamic breadcrumb bar</strong> — Scout Purple on general pages; section colour on section pages</li>
              </ol>
            </div>
          </div>
          <PropsTable>
            <PropRow name="navItems" type="NavItemConfig[]" description="Navigation links with label, href, and optional current flag." />
            <PropRow name="breadcrumbs" type="BreadcrumbItem[]" description="Breadcrumb trail. Defaults to empty array." />
          </PropsTable>
        </ComponentSection>

        {/* ── NavItem ── */}
        <ComponentSection
          id="nav-item"
          title="NavItem"
          description="A single navigation link rendered inside the desktop nav list."
        >
          <PackageBadge name="@73rd/ui" />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <PreviewBox label="Default state">
              <ul role="list" className="flex gap-1">
                <NavItem item={{ label: 'Home', href: '/' }} />
                <NavItem item={{ label: 'Beavers', href: '/beavers' }} />
                <NavItem item={{ label: 'Cubs', href: '/cubs' }} />
              </ul>
            </PreviewBox>
            <PreviewBox label="current={true} — active page">
              <ul role="list" className="flex gap-1">
                <NavItem item={{ label: 'Home', href: '/' }} />
                <NavItem item={{ label: 'Beavers', href: '/beavers', current: true }} />
                <NavItem item={{ label: 'Cubs', href: '/cubs' }} />
              </ul>
            </PreviewBox>
          </div>
          <PropsTable>
            <PropRow name="item.label" type="string" description="Visible link text." />
            <PropRow name="item.href" type="string" description="Link destination." />
            <PropRow name="item.current" type="boolean?" description="Marks this link as the active page. Adds aria-current='page' and purple tint styling." />
          </PropsTable>
        </ComponentSection>

        {/* ── Breadcrumb ── */}
        <ComponentSection
          id="breadcrumb"
          title="Breadcrumb"
          description="The coloured bar beneath the Group Red stripe. Background colour changes per section."
        >
          <PackageBadge name="@73rd/ui" />
          <div className="mt-4 space-y-2 overflow-hidden rounded-xl border border-gray-200">
            {BREADCRUMB_VARIANTS.map((v) => (
              <Breadcrumb key={v.label} items={v.items} backgroundColour={v.colour} data-testid={v.label} />
            ))}
            <div className="border-t border-gray-100 bg-gray-50 px-4 py-2">
              <span className="font-mono text-xs text-gray-400">All five colour variants</span>
            </div>
          </div>
          <PropsTable>
            <PropRow name="items" type="BreadcrumbItem[]" description="Array of { label, href } trail items. Last item is rendered as plain text with aria-current='page'." />
            <PropRow name="backgroundColour" type="string" description="Tailwind bg class for the bar. Driven by useSectionTheme() → sectionColour." />
            <PropRow name="data-testid" type="string?" description="Optional test ID forwarded to the nav element." />
          </PropsTable>
        </ComponentSection>

        {/* ── MobileMenu ── */}
        <ComponentSection
          id="mobile-menu"
          title="MobileMenu"
          description="Full-viewport overlay navigation for small screens. Controlled by SiteHeader — open on hamburger click, close on Escape or the close button."
        >
          <PackageBadge name="@73rd/ui" />
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="font-mono text-xs text-gray-400">Behaviour notes</span>
            </div>
            <ul className="space-y-1.5 p-6 text-sm text-gray-600">
              <li className="flex gap-2"><span className="mt-0.5 text-scout-purple">→</span> Opens when the hamburger button is tapped (visible below <code className="rounded bg-gray-100 px-1 font-mono text-xs">md</code> breakpoint)</li>
              <li className="flex gap-2"><span className="mt-0.5 text-scout-purple">→</span> Focus is trapped within the overlay while open</li>
              <li className="flex gap-2"><span className="mt-0.5 text-scout-purple">→</span> Pressing <kbd className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-xs">Esc</kbd> or clicking the close button dismisses the menu</li>
              <li className="flex gap-2"><span className="mt-0.5 text-scout-purple">→</span> Focus returns to the hamburger trigger on close</li>
              <li className="flex gap-2"><span className="mt-0.5 text-scout-purple">→</span> <code className="rounded bg-gray-100 px-1 font-mono text-xs">{'role="dialog"'}</code> + <code className="rounded bg-gray-100 px-1 font-mono text-xs">{'aria-modal="true"'}</code> for screen readers</li>
            </ul>
          </div>
          <PropsTable>
            <PropRow name="isOpen" type="boolean" description="Controls visibility of the overlay." />
            <PropRow name="onClose" type="() => void" description="Called when the menu should close." />
            <PropRow name="navItems" type="NavItemConfig[]" description="Same items as the desktop nav." />
            <PropRow name="triggerRef" type="RefObject<HTMLButtonElement>" description="Ref to the hamburger button — focus returns here on close." />
          </PropsTable>
        </ComponentSection>

        {/* ── SectionProvider ── */}
        <ComponentSection
          id="section-provider"
          title="SectionProvider + useSectionTheme"
          description="React context that broadcasts section and unit theme data down the component tree."
        >
          <PackageBadge name="@73rd/ui" />
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-scout-navy">
            <div className="border-b border-white/10 bg-white/5 px-4 py-2.5">
              <span className="font-mono text-xs text-white/40">Usage</span>
            </div>
            <pre className="overflow-x-auto p-6 text-xs leading-relaxed text-white/80">
{`// Wrap a section layout
<SectionProvider section="beavers" unit="mohawks">
  <NavigationBar />
  <main>{children}</main>
</SectionProvider>

// Consume anywhere in the tree
const {
  sectionColour,    // 'bg-beavers'
  sectionColourHex, // '#004F6E'
  unitAccent,       // 'bg-beavers-mohawks'
  unitAccentHex,    // '#0085B2'
  sectionName,      // 'Beavers'
  unitName,         // 'Mohawks'
  isGroupLevel,     // false
} = useSectionTheme()`}
            </pre>
          </div>
          <PropsTable>
            <PropRow name="section" type="SectionSlug" description="One of: squirrels | beavers | cubs | scouts" />
            <PropRow name="unit" type="UnitSlug?" description="Optional unit within the section. Unlocks unit-level accent and name." />
            <PropRow name="children" type="ReactNode" description="The subtree that will receive the context." />
          </PropsTable>
        </ComponentSection>

        {/* ── SectionPage ── */}
        <ComponentSection
          id="section-page"
          title="SectionPage"
          description="Shared section index layout: hero in section colour, unit cards, and a join CTA."
        >
          <PackageBadge name="apps/web" />
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="font-mono text-xs text-gray-400">Used by squirrels, beavers, cubs, scouts page.tsx</span>
            </div>
            <div className="space-y-1.5 p-6 text-sm text-gray-600">
              <p>A client component that reads <code className="rounded bg-gray-100 px-1 font-mono text-xs">useSectionTheme()</code> for the hero background and CTA button colour, and renders the section&apos;s two unit cards from <code className="rounded bg-gray-100 px-1 font-mono text-xs">SectionConfig.units</code>.</p>
              <p className="mt-3">Visit <a href="/beavers" className="font-semibold text-scout-purple hover:underline">/beavers</a>, <a href="/cubs" className="font-semibold text-scout-purple hover:underline">/cubs</a>, <a href="/squirrels" className="font-semibold text-scout-purple hover:underline">/squirrels</a>, or <a href="/scouts" className="font-semibold text-scout-purple hover:underline">/scouts</a> to see it live.</p>
            </div>
          </div>
          <PropsTable>
            <PropRow name="config" type="SectionConfig" description="Section data from getSectionConfig(slug). Provides name, ageRange, unitGroupName, and units array." />
          </PropsTable>
        </ComponentSection>

        {/* ── HomeHero ── */}
        <ComponentSection
          id="home-hero"
          title="HomeHero"
          description="Full-bleed photo hero for the group homepage. Background image with a Scout Purple-to-Navy gradient overlay, Group Red accent stripe, heading, strapline, and CTA buttons."
        >
          <PackageBadge name="apps/web" />
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
            <HomeHero />
            <div className="border-t border-gray-100 bg-gray-50 px-4 py-2">
              <span className="font-mono text-xs text-gray-400">Live preview — image from public/images/group-photo.jpg</span>
            </div>
          </div>
          <PropsTable>
            <PropRow name="imageSrc" type="string?" description="Path to the background photo. Defaults to /images/group-photo.jpg." />
          </PropsTable>
        </ComponentSection>

        {/* ── Colour tokens ── */}
        <ComponentSection
          id="colour-tokens"
          title="Brand colour tokens"
          description="Tailwind tokens mapped to the three-tier brand hierarchy. Never use raw hex values in components — always reference a token."
        >
          <PackageBadge name="@73rd/tokens" />
          <ul
            role="list"
            aria-label="Brand colour swatches"
            className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {SECTION_COLOURS.map((colour) => (
              <li key={colour.name} className="overflow-hidden rounded-xl border border-gray-200">
                <div className={`${colour.tailwind} h-20`} aria-hidden="true" />
                <div className="bg-white p-3">
                  <p className="text-xs font-bold text-scout-navy">{colour.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-gray-400">{colour.hex}</p>
                  <p className="mt-1 text-xs text-gray-400">{colour.tier}</p>
                </div>
              </li>
            ))}
          </ul>
        </ComponentSection>

      </div>
    </div>
  )
}
