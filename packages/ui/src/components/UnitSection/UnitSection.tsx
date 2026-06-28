'use client'

import { type FC } from 'react'
import { useContext } from 'react'
import { SectionContext } from '../../context/SectionContext'
import { useSectionTheme } from '../../hooks/useSectionTheme'

export interface UnitSectionProps {
  id: string
}

export const UnitSection: FC<UnitSectionProps> = ({ id }) => {
  const { unitConfig } = useContext(SectionContext)
  const { unitAccent, unitName } = useSectionTheme()

  const headingId = `${id}-heading`

  return (
    <article
      id={id}
      aria-labelledby={headingId}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-scout-navy"
    >
      {/* Accent strip */}
      <div className={`${unitAccent} h-2`} aria-hidden="true" />

      <div className="p-6">
        {/* Unit name & group name */}
        <h3
          id={headingId}
          className="text-xl font-bold text-scout-navy dark:text-white"
        >
          {unitName ?? 'Unit'}
        </h3>
        {unitConfig?.groupName && (
          <p className="mt-1 text-sm font-semibold text-gray-500 dark:text-gray-400">
            {unitConfig.groupName}
          </p>
        )}

        {/* Meeting time */}
        {unitConfig?.meetingTime && (
          <dl className="mt-4">
            <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              When we meet
            </dt>
            <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              {unitConfig.meetingTime}
            </dd>
          </dl>
        )}
      </div>
    </article>
  )
}
