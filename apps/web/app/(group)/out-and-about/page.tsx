import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Out & About' }

const ACTIVITIES = [
  {
    title: 'Camping & residential',
    description:
      'From overnight camps in the woods to week-long summer adventures, our young people experience the outdoors in all its forms.',
  },
  {
    title: 'Hiking & navigation',
    description:
      'Map reading, compass work, and long walks across the Peak District — building independence and resilience along the way.',
  },
  {
    title: 'Community projects',
    description:
      'Litter picks, charity fundraisers, and local volunteering. Making a difference in Allestree and beyond.',
  },
]

export default function OutAndAboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section aria-label="Out and about hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            73rd Allestree Scout Group
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Out &amp; About</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Adventure, exploration, and community — here&apos;s some of what we get up to.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section
        aria-labelledby="activities-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="activities-heading" className="mb-8 text-2xl font-bold text-scout-navy">
          What we get up to
        </h2>
        <ul role="list" className="grid gap-6 sm:grid-cols-3">
          {ACTIVITIES.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-scout-navy">{title}</h3>
              <p className="mt-3 text-sm text-gray-500">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Photo gallery placeholder */}
      <section
        aria-labelledby="gallery-heading"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <h2 id="gallery-heading" className="mb-6 text-2xl font-bold text-scout-navy">
          Gallery
        </h2>
        <ul
          role="list"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {Array.from({ length: 8 }, (_, i) => (
            <li
              key={i}
              className="aspect-square rounded-xl bg-gray-200 flex items-center justify-center text-xs text-gray-400"
              aria-label="Photo coming soon"
            >
              Photo coming soon
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
