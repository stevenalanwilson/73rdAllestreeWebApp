import type { Metadata } from 'next'
import { SECTIONS } from '@73rd/tokens'

export const metadata: Metadata = {
  title: '73rd Allestree Scout Group',
  description:
    'Scouting for young people aged 4–14 in Allestree, Derby. Squirrels, Beavers, Cubs and Scouts.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section aria-label="Welcome" className="bg-scout-purple py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div aria-hidden="true" className="mb-6 h-1 w-16 rounded-full bg-group-red" />
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            73rd Allestree<br />
            Scout Group
          </h1>
          <p className="mt-6 max-w-xl text-xl text-white/70">
            Adventure, friendship, and skills for young people aged 4–14 in Allestree, Derby.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-group-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
            >
              Join us
            </a>
            <a
              href="/about"
              className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
            >
              About the group
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section
        aria-labelledby="sections-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2
          id="sections-heading"
          className="mb-2 text-3xl font-extrabold tracking-tight text-scout-navy"
        >
          Our sections
        </h2>
        <p className="mb-10 text-gray-500">
          Find the right section for your child&apos;s age group.
        </p>
        <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SECTIONS.map((section) => (
            <li key={section.slug}>
              <a
                href={`/${section.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
              >
                <div className={`${section.colour} h-2`} aria-hidden="true" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {section.ageRange}
                  </p>
                  <h3 className="text-xl font-bold text-scout-navy group-hover:text-scout-purple">
                    {section.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-500">
                    Two {section.unitGroupName.toLowerCase()}s of young adventurers meeting weekly.
                  </p>
                  <span className="mt-4 text-sm font-semibold text-scout-purple">
                    Find out more →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Join CTA */}
      <section aria-label="Join the group" className="bg-group-red py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/80">
            Get in touch and we&apos;ll help you find the right section for your child.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-group-red transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
          >
            Contact us
          </a>
        </div>
      </section>

    </div>
  )
}
