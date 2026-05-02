'use client'

import { useContext } from 'react'
import { SectionContext } from '../../context/SectionContext'
import { useSectionTheme } from '../../hooks/useSectionTheme'

export const UnitPage = () => {
  const { unitConfig } = useContext(SectionContext)
  const { unitAccent, sectionColour, unitName, sectionName } = useSectionTheme()

  const groupName = unitConfig?.groupName ?? ''
  const animal = unitConfig?.animal ?? ''

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section
        aria-label={`${unitName ?? 'Unit'} hero`}
        className={`${unitAccent} py-20 text-white`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionName && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
              {sectionName}
            </p>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {unitName ?? 'Our Unit'}
          </h1>
          {groupName && (
            <p className="mt-2 text-lg font-semibold text-white/80">{groupName}</p>
          )}
          <p className="mt-4 max-w-xl text-base text-white/70">
            Welcome to the {unitName} — part of the 73rd Allestree{' '}
            {sectionName} section. We meet weekly for adventures, activities,
            and making friends for life.
          </p>
        </div>
      </section>

      {/* About */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="about-heading" className="text-2xl font-bold text-scout-navy">
              About the {unitName}
            </h2>
            <p className="mt-4 text-gray-600">
              The {unitName} is one of two {sectionName?.toLowerCase()} units at the 73rd Allestree
              Scout Group. Our young {animal ? `${animal.toLowerCase()}s` : 'members'} meet every week
              to explore the outdoors, develop new skills, and grow in confidence.
            </p>
            <p className="mt-4 text-gray-600">
              Whether it&apos;s campfire cooking, navigation challenges, or community service,
              every week brings something new. Come along and see what Scouting is all about.
            </p>
          </div>

          {/* What we do */}
          <div>
            <h2 className="text-2xl font-bold text-scout-navy">What we do</h2>
            <ul role="list" className="mt-4 space-y-4">
              {[
                {
                  title: 'Outdoor adventures',
                  detail: 'Hiking, camping, and exploring the great outdoors — whatever the weather.',
                },
                {
                  title: 'Skills & badges',
                  detail: 'From first aid to cooking, we earn badges that build real-world skills.',
                },
                {
                  title: 'Community & friendship',
                  detail: 'Making new friends, helping the community, and having fun together.',
                },
              ].map(({ title, detail }) => (
                <li key={title} className="flex gap-3">
                  <div
                    className={`${sectionColour} mt-1 h-5 w-5 flex-shrink-0 rounded-full`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-scout-navy">{title}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section aria-label="Join us" className={`${sectionColour} py-16 text-white`}>
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Want to join the {unitName}?</h2>
          <p className="mx-auto mt-4 max-w-md text-white/80">
            Get your child&apos;s name on the waiting list and we&apos;ll be in touch when a place
            becomes available.
          </p>
          <a
            href="/waiting-list"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-scout-navy transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Join the waiting list
          </a>
        </div>
      </section>

    </div>
  )
}
