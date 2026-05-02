export { PhotoGallery } from './components/PhotoGallery/PhotoGallery'
export type { PhotoItem, PhotoGalleryProps } from './components/PhotoGallery/PhotoGallery'

export { SectionProvider } from './context/SectionProvider'
export { useSectionTheme } from './hooks/useSectionTheme'
export type { SectionTheme } from './hooks/useSectionTheme'
export { SiteHeader, NavItem, NavDropdown, Breadcrumb } from './components/SiteHeader'
export type { NavItemConfig, BreadcrumbItem } from './components/SiteHeader'
export { Footer } from './components/Footer'
export { UnitPage } from './components/UnitPage'

// Re-export tokens types for consumer convenience
export type {
  SectionSlug,
  UnitSlug,
  SectionConfig,
  UnitConfig,
} from '@73rd/tokens'
export { SECTIONS, getSectionConfig, getUnitConfig } from '@73rd/tokens'
