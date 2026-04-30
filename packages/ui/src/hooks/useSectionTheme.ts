'use client'

import { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'

export interface SectionTheme {
  sectionColour:    string
  sectionColourHex: string
  unitAccent:       string
  unitAccentHex:    string
  unitTint:         string
  unitTintDark:     string
  unitIcon:         string | null
  unitName:         string | null
  sectionName:      string | null
  sectionIconPath:  string | null
  isGroupLevel:     boolean
}

export function useSectionTheme(): SectionTheme {
  const { sectionConfig, unitConfig } = useContext(SectionContext)

  if (!sectionConfig) {
    return {
      sectionColour:    'bg-scout-purple',
      sectionColourHex: '#4D2177',
      unitAccent:       'bg-scout-purple',
      unitAccentHex:    '#4D2177',
      unitTint:         'bg-white',
      unitTintDark:     'dark:bg-scout-navy',
      unitIcon:         null,
      unitName:         null,
      sectionName:      null,
      sectionIconPath:  null,
      isGroupLevel:     true,
    }
  }

  return {
    sectionColour:    sectionConfig.colour,
    sectionColourHex: sectionConfig.colourHex,
    unitAccent:       unitConfig?.accent       ?? sectionConfig.colour,
    unitAccentHex:    unitConfig?.accentHex     ?? sectionConfig.colourHex,
    unitTint:         unitConfig?.tint          ?? sectionConfig.tint,
    unitTintDark:     unitConfig?.tintDark      ?? sectionConfig.tintDark,
    unitIcon:         unitConfig?.iconPath      ?? null,
    unitName:         unitConfig?.name          ?? null,
    sectionName:      sectionConfig.name,
    sectionIconPath:  sectionConfig.iconPath,
    isGroupLevel:     false,
  }
}
