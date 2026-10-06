import { notFound } from 'next/navigation'
import type { SectionSlug } from '@73rd/tokens'

/**
 * Feature flags for this deployment. Flip a value, commit, and let it ride
 * through the normal staging → main promotion flow — there is no separate
 * system to keep in sync between environments.
 */
export const FLAGS = {
  /** Whole pages that can be hidden entirely (404s when off). */
  pages: {
    // Intentionally false on main — News content isn't ready for a public
    // audience yet. Left true here so it can still be reviewed on staging.
    news: true,
  },

  /** Individual features within a page that can be hidden. */
  features: {
    // Intentionally false on main — hire pricing isn't confirmed for
    // public display yet. Left true here so it can still be reviewed on staging.
    vehicleHireRates: true,
  },

  /** Whole Scout sections (and their unit pages) that can be hidden. */
  sections: {
    squirrels: true,
    beavers: true,
    cubs: true,
    scouts: true,
  } satisfies Record<SectionSlug, boolean>,
} as const

type PageFlag = keyof typeof FLAGS.pages
type FeatureFlag = keyof typeof FLAGS.features

/** Call at the top of a page component to 404 it when its flag is off. */
export function requirePageFlag(flag: PageFlag): void {
  if (!FLAGS.pages[flag]) notFound()
}

/** Call at the top of a section page component to 404 it when disabled. */
export function requireSectionFlag(section: SectionSlug): void {
  if (!FLAGS.sections[section]) notFound()
}

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return FLAGS.features[flag]
}
