'use client'

import Image from 'next/image'
import { getSectionConfig } from '@73rd/tokens'
import { SectionProvider, UnitSection, useSectionTheme } from '@73rd/ui'

const config = getSectionConfig('scouts')

const ACTIVITY_PILLARS = [
  {
    title: 'Outdoor & Adventure',
    detail: 'Caving, climbing, camping, and expeditions that push comfort zones in a good way.',
    icon: '🧗',
  },
  {
    title: 'World',
    detail: 'International trips, community projects, and understanding the wider world.',
    icon: '🌍',
  },
  {
    title: 'Skills for Life',
    detail: 'First aid, navigation, and practical skills built through hands-on scenarios.',
    icon: '🩹',
  },
  {
    title: 'Creative',
    detail: 'Designing challenges, building kit, and problem-solving as a team.',
    icon: '🎨',
  },
  {
    title: 'Teamwork',
    detail: 'Patrol-based activities that build leadership and rely on everyone pulling together.',
    icon: '🤝',
  },
  {
    title: 'Wellbeing',
    detail: 'Building resilience, confidence, and independence through real challenges.',
    icon: '💛',
  },
]

const TYPICAL_MEETING = [
  {
    time: 'Gathering',
    description: 'Scouts arrive, catch up with their patrol, and get set for the evening.',
  },
  {
    time: 'Opening',
    description: 'The Troop comes together, leaders set out the plan for the evening.',
  },
  {
    time: 'Main activity',
    description: 'Patrol challenges, skills practice, or a hands-on activity like first aid or caving prep.',
  },
  {
    time: 'Patrol time',
    description: 'Scouts work in their patrols — planning, problem-solving, and supporting each other.',
  },
  {
    time: 'Closing',
    description: 'The Troop wraps up, badges and achievements are recognised, and Scouts head home.',
  },
]

const FAQS = [
  {
    q: 'When can my child join?',
    a: 'Scouts is open to young people aged 10½–14. If your child is moving up from Cubs, we\'ll arrange the transition for you.',
  },
  {
    q: 'How often do they meet?',
    a: 'Each Troop meets once a week, with additional weekend activities, camps, and expeditions through the year.',
  },
  {
    q: 'What does it cost?',
    a: 'There is a termly subscription fee covering programme activities, badge materials, and insurance. Camps and expeditions are charged separately. We never want cost to be a barrier — please ask us about support if needed.',
  },
  {
    q: 'Is it safe — caving, climbing, that sort of thing?',
    a: 'All activities are run by trained, qualified leaders following Scout Association safety guidelines. Risk assessments are carried out for every activity, and equipment is checked and maintained to a high standard.',
  },
  {
    q: 'What if my child has additional needs or allergies?',
    a: 'Let us know when you get in touch. Our leaders are trained to be inclusive and will work with you to make sure Scouts is a great experience for your child.',
  },
]

const PHOTOS = [
  {
    src: '/images/scouts/scouts-first-aid.jpg',
    alt: 'A Scout practising first aid casualty care on a teammate',
  },
  {
    src: '/images/scouts/scouts-caving.jpg',
    alt: 'Scouts exploring a narrow cave passage with helmet torches',
  },
  {
    src: '/images/scouts/scouts-cpr.jpg',
    alt: 'Scouts practising CPR on training manikins',
  },
  {
    src: '/images/scouts/scouts-indoor-game.jpg',
    alt: 'Scouts playing an indoor game, reaching up together',
  },
  {
    src: '/images/scouts/scouts-bin-bag-game.jpg',
    alt: 'Scouts taking part in an outdoor team challenge with bin bags',
  },
]

const JOINING_STEPS = [
  {
    step: '1',
    title: 'Get in touch',
    detail: 'Fill in our contact form and tell us your child\'s age and preferred Troop.',
  },
  {
    step: '2',
    title: 'Come along',
    detail: 'We\'ll invite you and your child to a taster evening — no commitment, just come and see.',
  },
  {
    step: '3',
    title: 'Join the Troop',
    detail: 'If everyone\'s happy, your child joins, makes the Scout Promise, and the adventure begins.',
  },
]

export default function ScoutsPage() {
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
              Join Scouts
            </a>
            <a
              href="#our-troops"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Meet our Troops
            </a>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section aria-label="Scouts in action" className="overflow-hidden">
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

      {/* What is Scouts */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <h2 id="about-heading" className="text-3xl font-extrabold text-scout-navy">
            Bigger challenges, bigger adventures
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Scouts is open to young people aged 10½–14, picking up where Cubs leaves off with
            bigger challenges and more independence. Activities lean into real skill-building —
            caving, first aid, navigation, expeditions — alongside the teamwork and friendship
            that runs through every section.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Scouts work in patrols, taking on more responsibility for planning and leading
            activities themselves. It&apos;s where young people start to genuinely lead — not
            just take part.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The highest award a Scout can earn is the{' '}
            <strong className="text-scout-navy">Chief Scout&apos;s Gold Award</strong> — a
            nationally recognised achievement that marks the completion of their Scout journey.
          </p>
        </div>
      </section>

      {/* Activity pillars + Typical meeting */}
      <section aria-label="Activities and meetings" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* What Scouts get up to */}
            <div>
              <h2 id="activities-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
                What Scouts get up to
              </h2>
              <p className="mb-8 text-gray-500">
                Our programme covers six areas of life — so every Scout finds something they love.
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
                Meetings last around an hour and a half — longer for camps, expeditions, and trips.
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

      {/* Our Troops */}
      <section
        id="our-troops"
        aria-labelledby="units-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="units-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
          Our {config.unitGroupName}s
        </h2>
        <p className="mb-8 text-gray-500">
          The 73rd Allestree has two Scout Troops, each with their own character and meeting night.
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
            Young people from age 10½ can join. Get in touch and we&apos;ll find the right
            Troop for your child and invite you to a free taster evening.
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
