'use client'

import Image from 'next/image'
import { getSectionConfig } from '@73rd/tokens'
import { SectionProvider, UnitSection, useSectionTheme } from '@73rd/ui'

const config = getSectionConfig('cubs')

const ACTIVITY_PILLARS = [
  {
    title: 'Outdoor & Adventure',
    detail: 'Cycling, axe throwing, pioneering, and camps that build skill and confidence outdoors.',
    icon: '🚵',
  },
  {
    title: 'World',
    detail: 'Learning about other cultures, communities, and how to make a positive difference.',
    icon: '🌍',
  },
  {
    title: 'Skills for Life',
    detail: 'Knots, pioneering builds, and practical challenges that teach real, transferable skills.',
    icon: '🪢',
  },
  {
    title: 'Creative',
    detail: 'Designing and building — from raft frames to craft projects — with hands-on problem solving.',
    icon: '🎨',
  },
  {
    title: 'Teamwork',
    detail: 'Working in Sixes on builds and challenges that only come together with everyone pulling their weight.',
    icon: '🤝',
  },
  {
    title: 'Wellbeing',
    detail: 'Growing in confidence, trying new things, and learning to manage a bit of healthy risk.',
    icon: '💛',
  },
]

const TYPICAL_MEETING = [
  {
    time: 'Gathering',
    description: 'Cubs arrive, catch up with their Six, and get ready for the evening.',
  },
  {
    time: 'Opening',
    description: 'The Pack comes together, leaders set out the plan for the evening.',
  },
  {
    time: 'Main activity',
    description: 'A hands-on activity — pioneering, axe throwing, a cycle ride, or a skills challenge.',
  },
  {
    time: 'Six time',
    description: 'Cubs work in their Sixes, building teamwork and a bit of friendly competition.',
  },
  {
    time: 'Closing',
    description: 'The Pack wraps up, badges and achievements are recognised, and Cubs head home.',
  },
]

const FAQS = [
  {
    q: 'When can my child join?',
    a: 'Cubs is open to young people aged 8–10½. If your child is moving up from Beavers, we\'ll arrange the transition for you.',
  },
  {
    q: 'How often do they meet?',
    a: 'Each Pack meets once a week for around an hour and a half, with additional weekend activities and camps through the year.',
  },
  {
    q: 'What does it cost?',
    a: 'There is a termly subscription fee covering programme activities, badge materials, and insurance. Camps are charged separately. We never want cost to be a barrier — please ask us about support if needed.',
  },
  {
    q: 'Is it safe — axe throwing, cycling, that sort of thing?',
    a: 'All activities are run by trained, qualified leaders following Scout Association safety guidelines, with risk assessments carried out for every session and well-maintained equipment.',
  },
  {
    q: 'What if my child has additional needs or allergies?',
    a: 'Let us know when you get in touch. Our leaders are trained to be inclusive and will work with you to make sure Cubs is a great experience for your child.',
  },
]

const PHOTOS = [
  {
    src: '/images/cubs/cycling.jpg',
    alt: 'Cubs and leaders pausing on a cycle ride along a tree-lined path',
  },
  {
    src: '/images/cubs/axe-throwing-1.jpg',
    alt: 'A Cub throwing an axe at a target during an outdoor session',
  },
  {
    src: '/images/cubs/axe-throwing-2.jpg',
    alt: 'Cubs taking turns axe throwing at wooden targets',
  },
  {
    src: '/images/cubs/pioneering-1.jpg',
    alt: 'Cubs tying knots and lashing poles together for a pioneering project',
  },
  {
    src: '/images/cubs/pioneering-2.jpg',
    alt: 'Cubs and leaders building a large pioneering structure together',
  },
]

const JOINING_STEPS = [
  {
    step: '1',
    title: 'Get in touch',
    detail: 'Fill in our contact form and tell us your child\'s age and preferred Pack.',
  },
  {
    step: '2',
    title: 'Come along',
    detail: 'We\'ll invite you and your child to a taster evening — no commitment, just come and see.',
  },
  {
    step: '3',
    title: 'Join the Pack',
    detail: 'If everyone\'s happy, your child joins, makes the Cub Promise, and the adventure begins.',
  },
]

export default function CubsPage() {
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
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ color: sectionColourHex }}
            >
              Join Cubs
            </a>
            <a
              href="#our-packs"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Meet our Packs
            </a>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section aria-label="Cubs in action" className="overflow-hidden">
        <div className="flex h-56 sm:h-72 lg:h-80">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative flex-1 overflow-hidden"
              aria-hidden="true"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="20vw"
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* What is Cubs */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <h2 id="about-heading" className="text-3xl font-extrabold text-scout-navy">
            Where independence starts to grow
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Cubs is open to young people aged 8–10½, picking up where Beavers leaves off with
            bigger adventures and more responsibility. It&apos;s a brilliant mix of outdoor
            challenge, hands-on skills, and good old-fashioned fun — cycling, axe throwing,
            pioneering builds, and everything in between.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Cubs work together in small teams called Sixes, learning to cooperate, take the lead,
            and back each other up — skills that carry on into Scouts and beyond.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The highest award a Cub can earn is the{' '}
            <strong className="text-scout-navy">Chief Scout&apos;s Silver Award</strong> — a
            nationally recognised achievement that marks the completion of their Cub journey
            before moving up to Scouts.
          </p>
        </div>
      </section>

      {/* Activity pillars + Typical meeting */}
      <section aria-label="Activities and meetings" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* What Cubs get up to */}
            <div>
              <h2 id="activities-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
                What Cubs get up to
              </h2>
              <p className="mb-8 text-gray-500">
                Our programme covers six areas of life — so every Cub finds something they love.
              </p>
              <ul role="list" className="grid gap-4 sm:grid-cols-2">
                {ACTIVITY_PILLARS.map(({ title, detail, icon }) => (
                  <li key={title} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                    <span className="text-3xl" aria-hidden="true">{icon}</span>
                    <p className="mt-3 font-bold text-scout-navy">{title}</p>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical meeting */}
            <div>
              <h2 id="meeting-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
                A typical meeting night
              </h2>
              <p className="mb-8 text-gray-500">
                Meetings last around an hour and a half, with extra sessions for camps and trips.
              </p>
              <ol role="list" className="relative border-l-2 pl-0" style={{ borderColor: sectionColourHex }}>
                {TYPICAL_MEETING.map(({ time, description }, i) => (
                  <li key={time} className={`ml-8 ${i < TYPICAL_MEETING.length - 1 ? 'pb-8' : ''}`}>
                    <span
                      className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: sectionColourHex }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p className="font-bold text-scout-navy">{time}</p>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* Our Packs */}
      <section
        id="our-packs"
        aria-labelledby="units-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="units-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
          Our {config.unitGroupName}s
        </h2>
        <p className="mb-8 text-gray-500">
          The 73rd Allestree has two Cub Packs, each with their own character and meeting night.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {config.units.map((unit) => (
            <SectionProvider key={unit.slug} section={config.slug} unit={unit.slug}>
              <UnitSection id={unit.slug} />
            </SectionProvider>
          ))}
        </div>
      </section>

      {/* Joining steps */}
      <section
        aria-labelledby="joining-heading"
        className="bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="joining-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
            How to join
          </h2>
          <p className="mb-10 text-gray-500">
            Getting started is straightforward — here&apos;s what happens when you reach out.
          </p>
          <ol role="list" className="grid gap-6 sm:grid-cols-3">
            {JOINING_STEPS.map(({ step, title, detail }) => (
              <li key={step} className="flex gap-4">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white"
                  style={{ backgroundColor: sectionColourHex }}
                  aria-hidden="true"
                >
                  {step}
                </span>
                <div>
                  <p className="font-bold text-scout-navy">{title}</p>
                  <p className="mt-1 text-sm text-gray-500">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="faq-heading"
        className="bg-gray-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="mb-10 text-3xl font-extrabold text-scout-navy">
            Common questions
          </h2>
          <dl className="grid gap-x-12 sm:grid-cols-2">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="border-t border-gray-100 py-6">
                <dt className="font-semibold text-scout-navy">{q}</dt>
                <dd className="mt-2 text-sm text-gray-500 leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Join CTA */}
      <section
        aria-label="Join us"
        className="py-20"
        style={{ backgroundColor: sectionColourHex }}
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to join {config.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/80">
            Young people from age 8 can join. Get in touch and we&apos;ll find the right
            Pack for your child and invite you to a free taster evening.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ color: sectionColourHex }}
            >
              Get in touch
            </a>
            <a
              href="/waiting-list"
              className="inline-flex items-center rounded-lg border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join the waiting list
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
