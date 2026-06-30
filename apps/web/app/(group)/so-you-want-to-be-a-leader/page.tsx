import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'So You Want To Be A Leader?',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

const QUALIFICATIONS = [
  {
    title: 'A waterproof sense of humour',
    detail: 'You will be rained on. Repeatedly. While smiling and saying "character building!"',
  },
  {
    title: 'Advanced knot-based diplomacy',
    detail: 'Must be able to settle disputes over whose turn it is to hold the rope.',
  },
  {
    title: 'A flair for dramatic narration',
    detail: 'Bonus points if you can make "we are slightly lost" sound like part of the plan.',
  },
  {
    title: 'Industrial-strength enthusiasm',
    detail: 'Required at 6pm on a Tuesday, in a field, in the dark, in February.',
  },
  {
    title: 'A high tolerance for squash',
    detail: 'Orange squash. Lots of it. You will never not be holding a jug of squash.',
  },
  {
    title: 'Comfortable being upstaged by an 8 year old',
    detail: 'Who will, at some point, know more about knots than you do.',
  },
]

const PERKS = [
  'Unlimited access to biscuits of mysterious origin',
  'A permanent collection of borrowed gloves you will never return',
  'The ability to fold a tarp in under 4 hours',
  'First refusal on the good walkie-talkie',
  'Free outdoor showers (weather dependent, also indoor showers are unavailable)',
  'A wardrobe that is 90% fleece',
  'Legendary status among small humans who think you can do anything',
]

export default function SoYouWantToBeALeaderPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section aria-label="Leader recruitment hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            A Totally Serious Job Advert
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            So You Want To Be A Leader?
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Congratulations on stumbling onto this page. There is no link to it anywhere.
            That&apos;s how we find the special ones.
          </p>
        </div>
      </section>

      {/* Hero photo */}
      <section aria-label="A leader, mid-shift" className="bg-scout-navy">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <figure className="overflow-hidden rounded-2xl border-4 border-white/10 shadow-2xl">
            <Image
              src="/images/easter-eggs/caving-leader.jpg"
              alt="A leader, fresh out of a cave, helmet still on, energetically pointing at something only they can see"
              width={960}
              height={1280}
              sizes="(min-width: 768px) 768px, 100vw"
              className="h-auto w-full"
              priority
            />
            <figcaption className="bg-black/40 px-4 py-3 text-center text-sm italic text-white/70">
              Pictured: a leader explaining the plan for the next activity. The plan is unclear.
              The enthusiasm is not.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Job description */}
      <section
        aria-labelledby="job-heading"
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="job-heading" className="text-3xl font-extrabold text-scout-navy">
          The role, honestly described
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          We are looking for a small number of slightly unusual adults who think a good Tuesday
          evening involves a tarp, a trangia, and at least one small person asking &ldquo;are we
          nearly there yet&rdquo; within the first four minutes of a walk that has not yet started.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          No experience necessary. We will train you. Mostly through trial, error, and the
          occasional small fire that was &ldquo;completely under control, actually.&rdquo;
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          You will leave every session smelling faintly of campfire, slightly damp, and
          inexplicably happy about it.
        </p>
      </section>

      {/* Qualifications */}
      <section aria-labelledby="qualifications-heading" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="qualifications-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
            Essential qualifications
          </h2>
          <p className="mb-10 text-gray-500">
            A formal-looking list, because every good job advert needs one.
          </p>
          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {QUALIFICATIONS.map(({ title, detail }) => (
              <li key={title} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <p className="font-bold text-scout-navy">{title}</p>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Perks */}
      <section aria-labelledby="perks-heading" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="perks-heading" className="mb-6 text-3xl font-extrabold text-scout-navy">
          Generous benefits package
        </h2>
        <ul role="list" className="space-y-3">
          {PERKS.map((perk) => (
            <li key={perk} className="flex gap-3">
              <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-group-red" aria-hidden="true" />
              <p className="text-sm text-gray-600">{perk}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pay & conditions */}
      <section aria-labelledby="pay-heading" className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="pay-heading" className="mb-4 text-3xl font-extrabold text-scout-navy">
            Salary &amp; conditions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Pay is, technically, £0. However compensation includes unlimited hugs from small
            people who think you hung the moon, the deep satisfaction of watching a nervous
            8 year old become a confident Patrol Leader, and bragging rights for any pioneering
            structure that doesn&apos;t fall over before the photo is taken.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Hours are flexible, in the sense that they are mostly &ldquo;whenever it is needed,&rdquo;
            and the dress code is strictly &ldquo;whatever fleece is clean.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Apply now" className="bg-group-red py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Convinced? (We knew you would be.)
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/80">
            Get in touch and we&apos;ll find you a fleece in your size.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-group-red transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
          >
            Become a leader
          </a>
          <p className="mt-6 text-xs text-white/50">
            (No, seriously. We mean it. This is a real way to volunteer.)
          </p>
        </div>
      </section>

    </div>
  )
}
