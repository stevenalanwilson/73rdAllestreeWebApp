import { createContext } from 'react'
import type { SectionSlug, UnitSlug, SectionConfig, UnitConfig } from '@73rd/tokens'

export interface SectionContextValue {
  section: SectionSlug | null
  unit: UnitSlug | null
  sectionConfig: SectionConfig | null
  unitConfig: UnitConfig | null
}

export const SectionContext = createContext<SectionContextValue>({
  section:       null,
  unit:          null,
  sectionConfig: null,
  unitConfig:    null,
})
