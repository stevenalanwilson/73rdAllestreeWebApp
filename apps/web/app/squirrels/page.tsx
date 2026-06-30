'use client'

import Image from 'next/image'
import { getSectionConfig } from '@73rd/tokens'
import { SectionProvider, UnitSection, useSectionTheme } from '@73rd/ui'

const config = getSectionConfig('squirrels')

const ACTIVITY_PILLARS = [
  {
    title: 'Outdoor & Adventure',
    detail: 'Nature trails, farm visits, and exploring the outdoors — rain or shine.',
    icon: '🌿',
  },
  {
    title: 'World',
    detail: 'Learning about animals, the environment, and the wider world around them.',
    icon: '🌍',
  },
  {
    title: 'Skills for Life',
    detail: 'Simple crafts, games, and hands-on activities that build confidence and curiosity.',
    icon: '⭐',
  },
  {
    title: 'Creative',
    detail: 'Drawing, making, and imagining — every session has something to create.',
    icon: '🎨',
  },
  {
    title: 'Teamwork',
    detail: 'Fun group challenges that help little ones learn to share, listen, and cooperate.',
    icon: '🤝',
  },
  {
    title: 'Wellbeing',
    detail: 'Building self-confidence, making friends, and feeling safe and included.',
    icon: '💛',
  },
]

const TYPICAL_MEETING = [
  {
    time: 'Gathering',
    description: 'Squirrels arrive, say hello to their friends, and get ready for the evening together.',
  },
  {
    time: 'Opening',
    description: 'The Drey comes together, leaders share the plan, and the fun begins.',
  },
  {
    time: 'Activity',
    description: 'The main activity — a craft, a game, an animal visit, or an outdoor adventure.',
  },
  {
    time: 'Snack & chat',
    description: 'A short break to recharge, talk about what they\'ve been up to, and make friends.',
  },
  {
    time: 'Closing',
    description: 'The Drey wraps up, any badges are celebrated, and Squirrels head home happy.',
  },
]

const FAQS = [
  {
    q: 'When can my child join?',
    a: 'Squirrels is open to children aged 4–6. If your child is approaching 4, we can add them to our waiting list so they can join as soon as they\'re ready.',
  },
  {
    q: 'How often do they meet?',
    a: 'Each Drey meets once a week for around 45 minutes to an hour. Check the individual Drey pages for specific nights and times.',
  },
  {
    q: 'What does it cost?',
    a: 'There is a termly subscription fee covering programme activities, badge materials, and insurance. The main upfront cost is the uniform. We never want cost to be a barrier — please ask us about support if needed.',
  },
  {
    q: 'My child is quite young — will they cope?',
    a: 'Squirrels is designed specifically for 4–6 year olds. Sessions are short, gentle, and full of play. Leaders are experienced at helping little ones settle in and feel at home.',
  },
  {
    q: 'What if my child has additional needs or allergies?',
    a: 'Let us know when you get in touch. Our leaders are trained to be inclusive and will work with you to make sure Squirrels is a great experience for your child.',
  },
]

const PHOTOS = [
  {
    src: '/images/squirrels/squirrels-climbing.jpg',
    alt: 'A Squirrel climbing a climbing wall with a leader belaying below',
  },
  {
    src: '/images/squirrels/squirrels-targets.jpg',
    alt: 'Two Squirrels playing ring toss at outdoor targets on a sunny day',
  },
  {
    src: '/images/squirrels/squirrels-animals.jpg',
    alt: 'Squirrels sitting in a circle listening to a live animal handling session',
  },
  {
    src: '/images/squirrels/squirrels-farm.jpg',
    alt: 'Squirrels and leaders walking together across a farm field',
  },
  {
    src: '/images/squirrels/squirrels-nature.jpg',
    alt: 'Squirrels on a nature trail with clipboards, guided by a leader',
  },
]

const JOINING_STEPS = [
  {
    step: '1',
    title: 'Get in touch',
    detail: 'Fill in our contact form and tell us your child\'s age and preferred Drey.',
  },
  {
    step: '2',
    title: 'Come along',
    detail: 'We\'ll invite you and your child to a taster evening — no commitment, just come and see.',
  },
  {
    step: '3',
    title: 'Join the Drey',
    detail: 'If everyone\'s happy, your child joins, makes the Squirrel Promise, and the adventure begins.',
  },
]

export default function SquirrelsPage() {
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
              Join Squirrels
            </a>
            <a
              href="#our-dreys"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Meet our Dreys
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
      <section aria-label="Squirrels in action" className="overflow-hidden">
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

      {/* What is Squirrels */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <h2 id="about-heading" className="text-3xl font-extrabold text-scout-navy">
            Where the adventure begins
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Squirrels is the very first stage of Scouts, open to children aged 4–6. It was introduced
            in 2021 to give younger children the chance to experience everything Scouts has to offer —
            friendship, fun, and a sense of adventure — right from the start.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Sessions are short, playful, and packed with things to do. Whether it&apos;s meeting
            exotic animals, exploring a local farm, or taking on a climbing wall for the very first
            time, every meeting is designed to spark curiosity and build confidence in the gentlest way.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The highest award a Squirrel can earn is the{' '}
            <strong className="text-scout-navy">Chief Scout&apos;s Acorn Award</strong> — a fantastic
            achievement that sets them up perfectly for moving on to Beavers.
          </p>
        </div>
      </section>

      {/* Activity pillars + Typical meeting */}
      <section aria-label="Activities and meetings" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* What Squirrels get up to */}
            <div>
              <h2 id="activities-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
                What Squirrels get up to
              </h2>
              <p className="mb-8 text-gray-500">
                Our programme covers six areas of life — so every Squirrel finds something they love.
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
                Meetings last around 45 minutes to an hour — the perfect length for little ones.
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

      {/* Our Dreys */}
      <section
        id="our-dreys"
        aria-labelledby="units-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="units-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
          Our {config.unitGroupName}s
        </h2>
        <p className="mb-8 text-gray-500">
          The 73rd Allestree has two Squirrel Dreys, each with their own character and meeting night.
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
            Children from age 4 can join. Get in touch and we&apos;ll find the right Drey for
            your child and invite you to a free taster evening.
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
