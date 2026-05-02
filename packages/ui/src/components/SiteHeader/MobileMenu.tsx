'use client'

import { type FC, type RefObject, useEffect, useRef } from 'react'
import type { NavItemConfig } from './NavItem'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItemConfig[]
  triggerRef: RefObject<HTMLButtonElement | null>
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose, navItems, triggerRef }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) triggerRef.current?.focus()
  }, [isOpen, triggerRef])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const menu = menuRef.current
      if (!menu) return

      const focusable = menu.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-scout-navy"
    >
      {/* Header row */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-white/10">
        <div className="flex items-center gap-3">
          <img
            src="/icons/scouts-logo.svg"
            alt="Scouts"
            className="h-6 w-auto text-scout-purple"
          />
          <span className="text-sm font-bold text-scout-navy dark:text-white">
            73rd Allestree Scouts
          </span>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="rounded p-2 text-scout-navy hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple dark:text-white dark:hover:bg-white/10"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-3">
        <ul role="list" className="flex flex-col gap-0.5">
          {navItems.map((item) =>
            item.children?.length ? (
              <li key={item.label}>
                <p className="px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {item.label}
                </p>
                <ul role="list" className="flex flex-col gap-0.5">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <a
                        href={child.href}
                        aria-current={child.current ? 'page' : undefined}
                        onClick={onClose}
                        className={[
                          'flex min-h-[44px] items-center rounded-lg pl-6 pr-4 text-base font-semibold transition-colors',
                          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple',
                          child.current
                            ? 'bg-scout-purple/10 text-scout-purple'
                            : 'text-scout-navy hover:bg-gray-100 dark:text-white dark:hover:bg-white/10',
                        ].join(' ')}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={onClose}
                  className={[
                    'flex min-h-[48px] items-center rounded-lg px-4 text-base font-semibold transition-colors',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple',
                    item.current
                      ? 'bg-scout-purple/10 text-scout-purple'
                      : 'text-scout-navy hover:bg-gray-100 dark:text-white dark:hover:bg-white/10',
                  ].join(' ')}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  )
}
