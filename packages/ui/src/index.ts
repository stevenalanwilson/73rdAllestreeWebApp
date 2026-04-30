export { SectionProvider } from './context/SectionProvider'
export { useSectionTheme } from './hooks/useSectionTheme'
export type { SectionTheme } from './hooks/useSectionTheme'
export { SiteHeader } from './components/SiteHeader'
export type { NavItemConfig, BreadcrumbItem } from './components/SiteHeader'

// Re-export tokens types for consumer convenience
export type {
  SectionSlug,
  UnitSlug,
  SectionConfig,
  UnitConfig,
} from '@73rd/tokens'
export { SECTIONS, getSectionConfig, getUnitConfig } from '@73rd/tokens'
