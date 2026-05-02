import type { Metadata } from 'next'
import { SECTIONS } from '@73rd/tokens'
import { HomeHero } from '@/components/HomeHero'

export const metadata: Metadata = {
  title: '73rd Allestree Scout Group',
  description:
    'Scouting for young people aged 4–14 in Allestree, Derby. Squirrels, Beavers, Cubs and Scouts.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <HomeHero />

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

      {/* Skills */}
      <section
        aria-labelledby="skills-heading"
        className="bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="skills-heading"
            className="mb-2 text-3xl font-extrabold tracking-tight text-scout-navy"
          >
            Skills for life
          </h2>
          <p className="mb-10 text-gray-500">
            Scouting builds the skills young people need to thrive.
          </p>
          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { skill: 'Teamwork',            description: 'Working together to solve problems and achieve shared goals.',        colour: 'bg-scout-purple' },
              { skill: 'Leadership',          description: 'Building confidence to step up, make decisions, and inspire others.', colour: 'bg-beavers' },
              { skill: 'Communication',       description: 'Expressing ideas clearly and listening to others.',                    colour: 'bg-scouts' },
              { skill: 'Time Management',     description: 'Balancing activities, planning ahead, and meeting commitments.',       colour: 'bg-group-red' },
              { skill: 'Planning',            description: 'Setting goals, thinking ahead, and seeing projects through.',          colour: 'bg-cubs' },
              { skill: 'Cultural Awareness',  description: 'Celebrating diversity and developing a global outlook.',               colour: 'bg-squirrels' },
            ].map(({ skill, description, colour }) => (
              <li key={skill} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div
                  className={`${colour} mt-0.5 h-8 w-8 flex-shrink-0 rounded-lg`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-bold text-scout-navy">{skill}</h3>
                  <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission stripe */}
      <section aria-label="Our mission" className="bg-scout-navy py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <blockquote className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            &ldquo;We change lives by offering 4 to 14 year olds fun and challenging activities,
            unique experiences, everyday adventure and the chance to help others.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-white/50">
            Registered Charity No. 520628 &middot; Part of The Scout Association
          </p>
        </div>
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
