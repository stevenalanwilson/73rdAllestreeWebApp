import { type FC } from 'react'

export interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  backgroundColour: string
  'data-testid'?: string
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  items,
  backgroundColour,
  'data-testid': testId,
}) => (
  <nav
    aria-label="Breadcrumb"
    data-testid={testId ?? 'breadcrumb-bar'}
    className={`${backgroundColour} py-[5px]`}
  >
    <ol
      role="list"
      className="mx-auto flex max-w-7xl items-center gap-1 px-4 text-sm font-light sm:px-6 lg:px-8"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && (
              <span aria-hidden="true" className="select-none text-white/40">
                /
              </span>
            )}
            {isLast ? (
              <span aria-current="page" className="text-white/90">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="text-white/60 hover:text-white/90 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
              >
                {item.label}
              </a>
            )}
          </li>
        )
      })}
    </ol>
  </nav>
)
