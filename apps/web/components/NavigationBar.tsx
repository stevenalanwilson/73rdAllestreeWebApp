'use client'

import { usePathname } from 'next/navigation'
import { SiteHeader, useSectionTheme } from '@73rd/ui'
import type { NavItemConfig, BreadcrumbItem } from '@73rd/ui'

const BASE_NAV_ITEMS: NavItemConfig[] = [
  { label: 'Home',         href: '/' },
  { label: 'About',        href: '/about' },
  {
    label: 'Our Sections',
    href: '',
    children: [
      { label: 'Squirrels', href: '/squirrels' },
      { label: 'Beavers',   href: '/beavers' },
      { label: 'Cubs',      href: '/cubs' },
      { label: 'Scouts',    href: '/scouts' },
    ],
  },
  { label: 'Out & About',  href: '/out-and-about' },
  { label: 'Hall Booking', href: '/hall-booking' },
  { label: 'Our Vehicles', href: '/our-vehicles' },
  { label: 'News',         href: '/news' },
  { label: 'Contact',      href: '/contact' },
]

function buildBreadcrumbs(
  pathname: string,
  sectionName: string | null,
  unitName: string | null,
): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]

  if (segments[0] && sectionName) {
    crumbs.push({ label: sectionName, href: `/${segments[0]}` })
  }
  if (segments[1] && unitName) {
    crumbs.push({ label: unitName, href: `/${segments[0]}/${segments[1]}` })
  }

  return crumbs
}

export function NavigationBar() {
  const pathname = usePathname()
  const { sectionName, unitName } = useSectionTheme()

  const navItems = BASE_NAV_ITEMS.map((item) => {
    if (item.children?.length) {
      return {
        ...item,
        current: false,
        children: item.children.map((child) => ({
          ...child,
          current: pathname === child.href || pathname.startsWith(child.href + '/'),
        })),
      }
    }
    return {
      ...item,
      current:
        item.href === '/'
          ? pathname === '/'
          : Boolean(item.href) && (pathname === item.href || pathname.startsWith(item.href + '/')),
    }
  })

  const breadcrumbs = buildBreadcrumbs(pathname, sectionName, unitName)

  return <SiteHeader navItems={navItems} breadcrumbs={breadcrumbs} />
}
