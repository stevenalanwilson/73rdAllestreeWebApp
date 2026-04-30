export type SectionSlug = 'squirrels' | 'beavers' | 'cubs' | 'scouts'

export type UnitSlug =
  | 'red-squirrels'
  | 'grey-squirrels'
  | 'mohawks'
  | 'cherokees'
  | 'lions'
  | 'tigers'
  | 'pumas'
  | 'jaguars'

export interface SectionConfig {
  slug: SectionSlug
  name: string
  colour: string
  colourHex: string
  tint: string
  tintDark: string
  ageRange: string
  unitGroupName: string
  iconPath: string
  units: UnitConfig[]
}

export interface UnitConfig {
  slug: UnitSlug
  name: string
  section: SectionSlug
  unitNumber: 1 | 2
  groupName: string
  animal: string
  accent: string
  accentHex: string
  tint: string
  tintDark: string
  iconPath: string
  route: string
}

const SQUIRRELS_UNITS: UnitConfig[] = [
  {
    slug:       'red-squirrels',
    name:       'Red Squirrels',
    section:    'squirrels',
    unitNumber: 1,
    groupName:  '1st Drey',
    animal:     'Red Squirrel',
    accent:     'bg-squirrels-red-unit',
    accentHex:  '#CC2222',
    tint:       'bg-squirrels-light',
    tintDark:   'dark:bg-squirrels-dark',
    iconPath:   '/icons/red-squirrel.svg',
    route:      '/squirrels/red-squirrels',
  },
  {
    slug:       'grey-squirrels',
    name:       'Grey Squirrels',
    section:    'squirrels',
    unitNumber: 2,
    groupName:  '2nd Drey',
    animal:     'Grey Squirrel',
    accent:     'bg-squirrels-grey-unit',
    accentHex:  '#8A8A8A',
    tint:       'bg-squirrels-light',
    tintDark:   'dark:bg-squirrels-dark',
    iconPath:   '/icons/grey-squirrel.svg',
    route:      '/squirrels/grey-squirrels',
  },
]

const BEAVERS_UNITS: UnitConfig[] = [
  {
    slug:       'mohawks',
    name:       'Mohawks',
    section:    'beavers',
    unitNumber: 1,
    groupName:  '1st Colony',
    animal:     'Beaver',
    accent:     'bg-beavers-mohawks',
    accentHex:  '#0085B2',
    tint:       'bg-beavers-light',
    tintDark:   'dark:bg-beavers-dark',
    iconPath:   '/icons/mohawk-headdress.svg',
    route:      '/beavers/mohawks',
  },
  {
    slug:       'cherokees',
    name:       'Cherokees',
    section:    'beavers',
    unitNumber: 2,
    groupName:  '2nd Colony',
    animal:     'Beaver',
    accent:     'bg-beavers-cherokees',
    accentHex:  '#003F6B',
    tint:       'bg-beavers-light',
    tintDark:   'dark:bg-beavers-dark',
    iconPath:   '/icons/cherokee-arrow.svg',
    route:      '/beavers/cherokees',
  },
]

const CUBS_UNITS: UnitConfig[] = [
  {
    slug:       'lions',
    name:       'Lions',
    section:    'cubs',
    unitNumber: 1,
    groupName:  '1st Pack',
    animal:     'Lion',
    accent:     'bg-cubs-lions',
    accentHex:  '#C8850A',
    tint:       'bg-cubs-light',
    tintDark:   'dark:bg-cubs-dark',
    iconPath:   '/icons/lion-head.svg',
    route:      '/cubs/lions',
  },
  {
    slug:       'tigers',
    name:       'Tigers',
    section:    'cubs',
    unitNumber: 2,
    groupName:  '2nd Pack',
    animal:     'Tiger',
    accent:     'bg-cubs-tigers',
    accentHex:  '#E06B00',
    tint:       'bg-cubs-light',
    tintDark:   'dark:bg-cubs-dark',
    iconPath:   '/icons/tiger-stripes.svg',
    route:      '/cubs/tigers',
  },
]

const SCOUTS_UNITS: UnitConfig[] = [
  {
    slug:       'pumas',
    name:       'Pumas',
    section:    'scouts',
    unitNumber: 1,
    groupName:  '1st Troop',
    animal:     'Puma',
    accent:     'bg-scouts-pumas',
    accentHex:  '#7A9E3B',
    tint:       'bg-scouts-light',
    tintDark:   'dark:bg-scouts-dark',
    iconPath:   '/icons/puma-silhouette.svg',
    route:      '/scouts/pumas',
  },
  {
    slug:       'jaguars',
    name:       'Jaguars',
    section:    'scouts',
    unitNumber: 2,
    groupName:  '2nd Troop',
    animal:     'Jaguar',
    accent:     'bg-scouts-jaguars',
    accentHex:  '#C4A000',
    tint:       'bg-scouts-light',
    tintDark:   'dark:bg-scouts-dark',
    iconPath:   '/icons/jaguar-spots.svg',
    route:      '/scouts/jaguars',
  },
]

export const SECTIONS: SectionConfig[] = [
  {
    slug:          'squirrels',
    name:          'Squirrels',
    colour:        'bg-squirrels',
    colourHex:     '#9B1C1C',
    tint:          'bg-squirrels-light',
    tintDark:      'dark:bg-squirrels-dark',
    ageRange:      'Ages 4–6',
    unitGroupName: 'Drey',
    iconPath:      '/icons/squirrel.svg',
    units:         SQUIRRELS_UNITS,
  },
  {
    slug:          'beavers',
    name:          'Beavers',
    colour:        'bg-beavers',
    colourHex:     '#004F6E',
    tint:          'bg-beavers-light',
    tintDark:      'dark:bg-beavers-dark',
    ageRange:      'Ages 6–8',
    unitGroupName: 'Colony',
    iconPath:      '/icons/beaver.svg',
    units:         BEAVERS_UNITS,
  },
  {
    slug:          'cubs',
    name:          'Cubs',
    colour:        'bg-cubs',
    colourHex:     '#4A5E06',
    tint:          'bg-cubs-light',
    tintDark:      'dark:bg-cubs-dark',
    ageRange:      'Ages 8–10.5',
    unitGroupName: 'Pack',
    iconPath:      '/icons/cub.svg',
    units:         CUBS_UNITS,
  },
  {
    slug:          'scouts',
    name:          'Scouts',
    colour:        'bg-scouts',
    colourHex:     '#0F3D0F',
    tint:          'bg-scouts-light',
    tintDark:      'dark:bg-scouts-dark',
    ageRange:      'Ages 10.5–14',
    unitGroupName: 'Troop',
    iconPath:      '/icons/scout.svg',
    units:         SCOUTS_UNITS,
  },
]

export function getSectionConfig(slug: SectionSlug): SectionConfig {
  const section = SECTIONS.find((s) => s.slug === slug)
  if (!section) {
    throw new Error(`Unknown section slug: ${slug}`)
  }
  return section
}

export function getUnitConfig(slug: UnitSlug): UnitConfig {
  for (const section of SECTIONS) {
    const unit = section.units.find((u) => u.slug === slug)
    if (unit) return unit
  }
  throw new Error(`Unknown unit slug: ${slug}`)
}
