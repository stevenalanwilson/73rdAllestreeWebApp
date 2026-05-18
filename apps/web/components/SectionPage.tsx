'use client'

import { type FC } from 'react'
import { useSectionTheme } from '@73rd/ui'
import type { SectionConfig } from '@73rd/tokens'

interface SectionPageProps {
  config: SectionConfig
}

export const SectionPage: FC<SectionPageProps> = ({ config }) => {
  const { sectionColour, sectionColourHex } = useSectionTheme()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        aria-label={`${config.name} section hero`}
        className={`${sectionColour} py-20 text-white`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            {config.ageRange}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {config.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {config.description}
          </p>
        </div>
      </section>

      {/* Units */}
      <section
        aria-labelledby="units-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="units-heading" className="mb-8 text-2xl font-bold text-scout-navy">
          Our {config.unitGroupName}s
        </h2>
        <ul role="list" className="grid gap-6 sm:grid-cols-2">
          {config.units.map((unit) => (
            <li key={unit.slug}>
              <a
                href={unit.route}
                className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: unit.accentHex }}
                  aria-hidden="true"
                >
                  <span className="text-xl font-bold">{unit.name[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-scout-navy group-hover:text-scout-purple">
                  {unit.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{unit.groupName}</p>
                <p className="mt-3 text-sm text-gray-600">
                  {unit.meetingTime}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Uniform & more info */}
      <section
        aria-label="Uniform and further information"
        className="bg-white py-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="flex flex-col gap-4 sm:flex-row sm:gap-12">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-widest text-gray-400">Uniform</dt>
              <dd className="mt-1 text-gray-700 capitalize">{config.uniform}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-widest text-gray-400">More information</dt>
              <dd className="mt-1">
                <a
                  href={config.moreInfoUrl}
                  className="text-scout-purple underline hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
                >
                  Being a {config.name.slice(0, -1)} | Scouts
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Join CTA */}
      <section
        aria-label="Join us"
        className="bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-scout-navy">
            Ready to join {config.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-600">
            Get in touch and we&apos;ll help you find the right {config.unitGroupName.toLowerCase()}
            for your child.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
            style={{ backgroundColor: sectionColourHex }}
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  )
}
