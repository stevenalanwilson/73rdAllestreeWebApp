'use client'

import { type FC, type ReactNode, useMemo } from 'react'
import type { SectionSlug, UnitSlug } from '@73rd/tokens'
import { getSectionConfig, getUnitConfig } from '@73rd/tokens'
import { SectionContext } from './SectionContext'

interface SectionProviderProps {
  section: SectionSlug
  unit?: UnitSlug
  children: ReactNode
}

export const SectionProvider: FC<SectionProviderProps> = ({ section, unit, children }) => {
  const value = useMemo(
    () => ({
      section,
      unit:          unit ?? null,
      sectionConfig: getSectionConfig(section),
      unitConfig:    unit ? getUnitConfig(unit) : null,
    }),
    [section, unit],
  )

  return <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
}
