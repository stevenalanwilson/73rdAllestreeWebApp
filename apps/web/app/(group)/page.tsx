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
              {
                skill: 'Teamwork',
                description: 'Working together to solve problems and achieve shared goals.',
                colour: 'text-scout-purple',
                icon: (
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
              {
                skill: 'Leadership',
                description: 'Building confidence to step up, make decisions, and inspire others.',
                colour: 'text-beavers',
                icon: (
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ),
              },
              {
                skill: 'Communication',
                description: 'Expressing ideas clearly and listening to others.',
                colour: 'text-scouts',
                icon: (
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                ),
              },
              {
                skill: 'Time Management',
                description: 'Balancing activities, planning ahead, and meeting commitments.',
                colour: 'text-group-red',
                icon: (
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
              },
              {
                skill: 'Planning',
                description: 'Setting goals, thinking ahead, and seeing projects through.',
                colour: 'text-cubs',
                icon: (
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                ),
              },
              {
                skill: 'Cultural Awareness',
                description: 'Celebrating diversity and developing a global outlook.',
                colour: 'text-squirrels',
                icon: (
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="h-8 w-8 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
            ].map(({ skill, description, colour, icon }) => (
              <li key={skill} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className={`${colour} mt-0.5`}>
                  {icon}
                </div>
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
