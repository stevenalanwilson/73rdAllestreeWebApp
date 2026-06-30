'use client'

import Image from 'next/image'
import { getSectionConfig } from '@73rd/tokens'
import { SectionProvider, UnitSection, useSectionTheme } from '@73rd/ui'

const config = getSectionConfig('beavers')

const ACTIVITY_PILLARS = [
  {
    title: 'Outdoor & Adventure',
    detail: 'Camping, hiking, pond dipping, and exploring the natural world around Derby.',
    icon: '🌲',
  },
  {
    title: 'World',
    detail: 'Learning about different cultures, faiths, and how we can make a difference globally.',
    icon: '🌍',
  },
  {
    title: 'Skills for Life',
    detail: 'Cooking, first aid basics, tying knots — practical skills that stay with them forever.',
    icon: '🔧',
  },
  {
    title: 'Creative',
    detail: 'Arts, crafts, music, and hands-on building projects that spark imagination.',
    icon: '🎨',
  },
  {
    title: 'Teamwork',
    detail: 'Working together on challenges, games, and community projects builds real confidence.',
    icon: '🤝',
  },
  {
    title: 'Wellbeing',
    detail: 'Understanding emotions, staying active, and caring for themselves and others.',
    icon: '💛',
  },
]

const TYPICAL_MEETING = [
  {
    time: 'Opening',
    description: 'The Colony gathers, says the Beaver Promise, and leaders share what\'s planned for the evening.',
  },
  {
    time: 'Activity',
    description: 'The main event — a game, a craft, a challenge, or something completely unexpected.',
  },
  {
    time: 'Break',
    description: 'A few minutes to catch their breath, have a drink, and chat with friends.',
  },
  {
    time: 'Second activity',
    description: 'A second activity, often linking to a badge or upcoming adventure.',
  },
  {
    time: 'Closing',
    description: 'Beavers share what they enjoyed, badges are awarded, and the Colony closes for the evening.',
  },
]

const FAQS = [
  {
    q: 'When can my child join?',
    a: 'Children can join Beavers from age 5¾ and stay until they move up to Cubs at 8. If your child is younger, we can add them to our waiting list.',
  },
  {
    q: 'How often do they meet?',
    a: 'Each Colony meets once a week for around an hour. Check the individual Colony pages for specific nights and times.',
  },
  {
    q: 'What does it cost?',
    a: 'There is a termly subscription fee which covers programme activities, badge materials, and insurance. The main upfront cost is the uniform. We never want cost to be a barrier — please ask us about support if needed.',
  },
  {
    q: 'Do they need to be able to swim or have any prior skills?',
    a: 'Not at all. Beavers is for everyone, whatever their abilities. Leaders plan activities that are accessible and fun for all.',
  },
  {
    q: 'What if my child has allergies or additional needs?',
    a: 'Let us know when you get in touch. Our leaders are trained to be inclusive and will discuss how we can make Beavers work for your child.',
  },
]

const PHOTOS = [
  {
    src: '/images/beavers/beavers-lego-optimized.jpg',
    alt: 'Beavers sorting through a giant pile of Lego bricks together',
  },
  {
    src: '/images/beavers/beavers-teeth-optimized.jpg',
    alt: 'Beavers brushing the teeth of a giant model mouth at a science museum',
  },
  {
    src: '/images/beavers/beavers-nature-optimized.jpg',
    alt: 'Beavers and leaders exploring nature on a sunny hillside',
  },
  {
    src: '/images/beavers/beavers-planetarium-optimized.jpg',
    alt: 'Beavers watching a presentation at a planetarium',
  },
  {
    src: '/images/beavers/beavers-bbq-optimized.jpg',
    alt: 'Beavers gathering around a barbecue in the woods',
  },
]

const JOINING_STEPS = [
  {
    step: '1',
    title: 'Get in touch',
    detail: 'Fill in our contact form and tell us your child\'s age and preferred Colony.',
  },
  {
    step: '2',
    title: 'Come along',
    detail: 'We\'ll invite you and your child to a taster evening — no commitment, just come and see.',
  },
  {
    step: '3',
    title: 'Join the Colony',
    detail: 'If everyone\'s happy, your child joins, makes the Beaver Promise, and the adventure begins.',
  },
]

export default function BeaversPage() {
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
              Join Beavers
            </a>
            <a
              href="#our-colonies"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Meet our Colonies
            </a>
            <a
              href="/waiting-list"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join the waiting list
            </a>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section aria-label="Beavers in action" className="overflow-hidden">
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

      {/* What is Beavers */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="about-heading" className="text-3xl font-extrabold text-scout-navy">
              The start of something great
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Beavers is the second stage of Scouts, open to children aged 6–8. It&apos;s where
              curiosity is celebrated, friendships are made, and young people discover what they&apos;re
              capable of — often for the first time.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Each week brings something new. One evening they might be building a rocket; the next,
              learning to cook over a campfire or visiting a science museum. Every activity is designed
              to be fun first — the skills and values follow naturally.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The highest award a Beaver can earn is the{' '}
              <strong className="text-scout-navy">Chief Scout&apos;s Bronze Award</strong> — a
              nationally recognised achievement that marks the completion of their Beaver journey
              before moving up to Cubs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Colonies */}
      <section
        id="our-colonies"
        aria-labelledby="units-heading"
        className="bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="units-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
            Our {config.unitGroupName}s
          </h2>
          <p className="mb-8 text-gray-500">
            The 73rd Allestree has two Beaver Colonies, each with their own character and meeting night.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {config.units.map((unit) => (
              <SectionProvider key={unit.slug} section={config.slug} unit={unit.slug}>
                <UnitSection id={unit.slug} />
              </SectionProvider>
            ))}
          </div>
        </div>
      </section>

      {/* Six activity pillars + Typical meeting */}
      <section aria-label="Activities and meetings" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* What Beavers get up to */}
            <div>
              <h2 id="activities-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
                What Beavers get up to
              </h2>
              <p className="mb-8 text-gray-500">
                Our programme covers six areas of life — so every Beaver finds something they love.
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
                Meetings last around an hour and follow a simple, familiar rhythm that Beavers quickly love.
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

      {/* Joining steps */}
      <section
        aria-labelledby="joining-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
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
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="faq-heading"
        className="bg-white py-16"
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
            Children from age 5¾ can join. Get in touch and we&apos;ll find the right Colony
            for your child and invite you to a free taster evening.
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
