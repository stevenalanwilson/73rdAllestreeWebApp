'use client'

import { type FC, useRef, useState, useCallback } from 'react'
import type { NavItemConfig } from './NavItem'

interface NavDropdownProps {
  item: NavItemConfig
}

export const NavDropdown: FC<NavDropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
      buttonRef.current?.focus()
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
      } else {
        const first = menuRef.current?.querySelector<HTMLElement>('a')
        first?.focus()
      }
    }
  }

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const items = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a') ?? [])
    const idx = items.indexOf(document.activeElement as HTMLElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      items[(idx + 1) % items.length]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      items[(idx - 1 + items.length) % items.length]?.focus()
    } else if (e.key === 'Escape') {
      close()
      buttonRef.current?.focus()
    } else if (e.key === 'Tab') {
      close()
    }
  }

  const isCurrent = item.current || item.children?.some((c) => c.current)

  return (
    <li
      className="relative"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onFocus={open}
        onBlur={(e) => {
          if (!menuRef.current?.contains(e.relatedTarget as Node)) close()
        }}
        onKeyDown={handleKeyDown}
        onClick={() => setIsOpen((v) => !v)}
        className={[
          'flex items-center gap-1 rounded px-3 py-1.5 text-sm font-semibold',
          'transition-all duration-150 ease-in-out',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple',
          'active:scale-95 active:opacity-80',
          isCurrent
            ? 'bg-scout-purple/10 text-scout-purple hover:bg-scout-purple/20'
            : 'text-scout-navy hover:bg-scout-purple/10 hover:text-scout-purple active:bg-scout-purple/20',
        ].join(' ')}
      >
        {item.label}
        <svg
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul
          ref={menuRef}
          role="menu"
          aria-label={`${item.label} submenu`}
          onKeyDown={handleMenuKeyDown}
          className="absolute left-0 top-full z-40 mt-1 min-w-[160px] overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg"
        >
          {item.children?.map((child) => (
            <li key={child.href} role="none">
              <a
                href={child.href}
                role="menuitem"
                aria-current={child.current ? 'page' : undefined}
                onFocus={open}
                onBlur={(e) => {
                  if (!menuRef.current?.contains(e.relatedTarget as Node)) close()
                }}
                className={[
                  'block px-4 py-2 text-sm font-semibold transition-colors',
                  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-scout-purple',
                  child.current
                    ? 'bg-scout-purple/10 text-scout-purple'
                    : 'text-scout-navy hover:bg-scout-purple/5 hover:text-scout-purple',
                ].join(' ')}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
