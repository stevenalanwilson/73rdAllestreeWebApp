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
  description: string
  uniform: string
  moreInfoUrl: string
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
  meetingTime: string
}

const SQUIRRELS_UNITS: UnitConfig[] = [
  {
    slug:        'red-squirrels',
    name:        'Red Squirrels',
    section:     'squirrels',
    unitNumber:  1,
    groupName:   '1st Drey',
    animal:      'Red Squirrel',
    accent:      'bg-squirrels-red-unit',
    accentHex:   '#CC2222',
    tint:        'bg-squirrels-light',
    tintDark:    'dark:bg-squirrels-dark',
    iconPath:    '/icons/red-squirrel.svg',
    route:       '/squirrels/red-squirrels',
    meetingTime: 'Thursdays during term time, 16:30–17:30',
  },
  {
    slug:        'grey-squirrels',
    name:        'Grey Squirrels',
    section:     'squirrels',
    unitNumber:  2,
    groupName:   '2nd Drey',
    animal:      'Grey Squirrel',
    accent:      'bg-squirrels-grey-unit',
    accentHex:   '#8A8A8A',
    tint:        'bg-squirrels-light',
    tintDark:    'dark:bg-squirrels-dark',
    iconPath:    '/icons/grey-squirrel.svg',
    route:       '/squirrels/grey-squirrels',
    meetingTime: 'Mondays during term time, 16:30–17:30',
  },
]

const BEAVERS_UNITS: UnitConfig[] = [
  {
    slug:        'mohawks',
    name:        'Mohawks',
    section:     'beavers',
    unitNumber:  1,
    groupName:   '1st Colony',
    animal:      'Beaver',
    accent:      'bg-beavers-mohawks',
    accentHex:   '#0085B2',
    tint:        'bg-beavers-light',
    tintDark:    'dark:bg-beavers-dark',
    iconPath:    '/icons/mohawk-headdress.svg',
    route:       '/beavers/mohawks',
    meetingTime: 'Thursdays during term time, 18:00–19:30',
  },
  {
    slug:        'cherokees',
    name:        'Cherokees',
    section:     'beavers',
    unitNumber:  2,
    groupName:   '2nd Colony',
    animal:      'Beaver',
    accent:      'bg-beavers-cherokees',
    accentHex:   '#003F6B',
    tint:        'bg-beavers-light',
    tintDark:    'dark:bg-beavers-dark',
    iconPath:    '/icons/cherokee-arrow.svg',
    route:       '/beavers/cherokees',
    meetingTime: 'Mondays during term time, 18:00–19:00',
  },
]

const CUBS_UNITS: UnitConfig[] = [
  {
    slug:        'lions',
    name:        'Lions',
    section:     'cubs',
    unitNumber:  1,
    groupName:   '1st Pack',
    animal:      'Lion',
    accent:      'bg-cubs-lions',
    accentHex:   '#C8850A',
    tint:        'bg-cubs-light',
    tintDark:    'dark:bg-cubs-dark',
    iconPath:    '/icons/lion-head.svg',
    route:       '/cubs/lions',
    meetingTime: 'Wednesdays during term time, 18:30–20:00',
  },
  {
    slug:        'tigers',
    name:        'Tigers',
    section:     'cubs',
    unitNumber:  2,
    groupName:   '2nd Pack',
    animal:      'Tiger',
    accent:      'bg-cubs-tigers',
    accentHex:   '#E06B00',
    tint:        'bg-cubs-light',
    tintDark:    'dark:bg-cubs-dark',
    iconPath:    '/icons/tiger-stripes.svg',
    route:       '/cubs/tigers',
    meetingTime: 'Tuesdays during term time, 18:30–20:00',
  },
]

const SCOUTS_UNITS: UnitConfig[] = [
  {
    slug:        'pumas',
    name:        'Pumas',
    section:     'scouts',
    unitNumber:  1,
    groupName:   '1st Troop',
    animal:      'Puma',
    accent:      'bg-scouts-pumas',
    accentHex:   '#7A9E3B',
    tint:        'bg-scouts-light',
    tintDark:    'dark:bg-scouts-dark',
    iconPath:    '/icons/puma-silhouette.svg',
    route:       '/scouts/pumas',
    meetingTime: 'Thursdays during term time, 20:00–21:30',
  },
  {
    slug:        'jaguars',
    name:        'Jaguars',
    section:     'scouts',
    unitNumber:  2,
    groupName:   '2nd Troop',
    animal:      'Jaguar',
    accent:      'bg-scouts-jaguars',
    accentHex:   '#C4A000',
    tint:        'bg-scouts-light',
    tintDark:    'dark:bg-scouts-dark',
    iconPath:    '/icons/jaguar-spots.svg',
    route:       '/scouts/jaguars',
    meetingTime: 'Thursdays during term time, 19:30–21:00',
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
    description:   'Squirrels are open to young people aged 4 and 5. During weekly sessions the Squirrels can enjoy outdoor activities, fun, games, stories and songs (and so much more!). They can also earn activity and challenge badges and the Chief Scout\'s Acorn Award. This is a great way to introduce young people to the Scouting movement before they go on to Beavers at 6.',
    uniform:       'red sweatshirt & polo',
    moreInfoUrl:   '#',
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
    description:   'Beaver Scouts are open to young people aged 6–8 years. During weekly sessions Beavers will play games, make things, master new skills, try new things and learn about themselves, their community and the world around us. This includes parties, visits, meeting interesting people and even sleepovers! Most of all Beaver Scouts (and their leaders and helpers) have FUN!',
    uniform:       'turquoise sweatshirt & polo',
    moreInfoUrl:   '#',
    units:         BEAVERS_UNITS,
  },
  {
    slug:          'cubs',
    name:          'Cubs',
    colour:        'bg-cubs',
    colourHex:     '#4A5E06',
    tint:          'bg-cubs-light',
    tintDark:      'dark:bg-cubs-dark',
    ageRange:      'Ages 8–10½',
    unitGroupName: 'Pack',
    iconPath:      '/icons/cub.svg',
    description:   'Cub Scouts are open to young people aged 8–10½. Cub Scouts take part in a programme packed with fun, surprises and most importantly adventure! Cubs are introduced to exciting outdoor skills and take part in adventurous activities, as well as going on camps and residential experiences. They will get the chance to try loads of different activities like exploring, climbing, hiking and cooking on camp fires. Cubs can earn badges that can be worn on their uniforms by doing these activities.',
    uniform:       'dark green sweatshirt & polo',
    moreInfoUrl:   '#',
    units:         CUBS_UNITS,
  },
  {
    slug:          'scouts',
    name:          'Scouts',
    colour:        'bg-scouts',
    colourHex:     '#0F3D0F',
    tint:          'bg-scouts-light',
    tintDark:      'dark:bg-scouts-dark',
    ageRange:      'Ages 10½–14',
    unitGroupName: 'Troop',
    iconPath:      '/icons/scout.svg',
    description:   'Scouts are open to young people aged 10½–14 years. Scouts meet weekly with some outdoor activities arranged at weekends and other times during the year. Scouts are encouraged to take part in an awards scheme through a number of challenges leading up to the Chief Scout\'s Gold Award, the highest award available in the age group.',
    uniform:       'teal green shirt',
    moreInfoUrl:   '#',
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
