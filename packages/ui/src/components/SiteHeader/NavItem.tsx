import { type FC } from 'react'

export interface NavItemConfig {
  label: string
  href: string
  current?: boolean
}

interface NavItemProps {
  item: NavItemConfig
}

export const NavItem: FC<NavItemProps> = ({ item }) => (
  <li>
    <a
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      className={[
        'block rounded px-3 py-1.5 text-sm font-semibold',
        'transition-all duration-150 ease-in-out',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple',
        'active:scale-95 active:opacity-80',
        item.current
          ? 'bg-scout-purple/10 text-scout-purple hover:bg-scout-purple/20'
          : 'text-scout-navy hover:bg-scout-purple/10 hover:text-scout-purple active:bg-scout-purple/20',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {item.label}
    </a>
  </li>
)
