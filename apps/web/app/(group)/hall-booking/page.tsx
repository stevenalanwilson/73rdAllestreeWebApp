import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hall Hire — 73rd Allestree Scout Group',
  description:
    'Hire Mitchell Hall in Allestree, Derby. Spacious, flexible daytime venue with parking, kitchen, and climbing wall. From £18/hr.',
}

const FACILITIES = [
  { label: 'Large open-plan main hall' },
  { label: 'Flexible seating and table layouts' },
  { label: 'Projector and screen' },
  { label: 'Indoor climbing wall' },
  { label: 'Fully fitted kitchen' },
  { label: 'Male, female and accessible toilets' },
  { label: 'On-site parking + free parking nearby' },
]

const IDEAL_FOR = [
  'Yoga and Pilates classes',
  'Baby and toddler groups',
  'Coffee mornings',
  'Community meetings',
  'Workshops and wellbeing sessions',
  'Training days',
]

export default function HallBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section aria-label="Hall hire hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            73rd Allestree Scout Group
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Hire Our Hall</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            A spacious, clean and flexible daytime venue in Allestree with on-site parking —
            perfect for classes, groups and community events.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-group-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
            >
              Enquire now
            </a>
            <a
              href="#pricing"
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
            >
              See pricing
            </a>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section aria-label="Hall photos" className="bg-white pt-1">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-1 lg:grid-cols-4">
            {/* Interior — spans 2 columns */}
            <div className="col-span-2 row-span-2">
              <img
                src="/images/hall-booking/interior.jpg"
                alt="The main hall — large open-plan space with polished floor and climbing wall"
                className="h-full w-full object-cover"
                style={{ minHeight: '320px' }}
              />
            </div>
            <div>
              <img
                src="/images/hall-booking/seating-idea-1.jpg"
                alt="Hall set up in theatre style with chairs facing a projector screen"
                className="h-full w-full object-cover aspect-video"
              />
            </div>
            <div>
              <img
                src="/images/hall-booking/seating-idea-2.jpg"
                alt="Hall set up with tables and chairs in a classroom layout"
                className="h-full w-full object-cover aspect-video"
              />
            </div>
            <div>
              <img
                src="/images/hall-booking/kitchen.jpg"
                alt="Fully fitted kitchen with oven, microwave, kettle and sink"
                className="h-full w-full object-cover aspect-video"
              />
            </div>
            <div>
              <img
                src="/images/hall-booking/exterior.jpg"
                alt="Exterior of Mitchell Hall with on-site car park"
                className="h-full w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        aria-labelledby="hall-content-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left — details */}
          <div className="lg:col-span-2">
            <h2 id="hall-content-heading" className="text-2xl font-bold text-scout-navy">
              Mitchell Hall, Allestree
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our main hall is available Monday to Friday, 9am–4pm. It&apos;s a large, bright,
              open-plan space with a polished floor, high ceilings, and flexible layout options —
              ideal for active classes, community groups, and wellbeing sessions. The hall also
              features an indoor climbing wall, a projector and screen, and a fully fitted kitchen.
            </p>

            {/* Ideal for */}
            <h3 className="mt-10 text-lg font-bold text-scout-navy">Ideal for</h3>
            <ul role="list" className="mt-4 grid gap-2 sm:grid-cols-2">
              {IDEAL_FOR.map((use) => (
                <li key={use} className="flex items-center gap-3 text-gray-600">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 flex-shrink-0 rounded-full bg-group-red"
                  />
                  {use}
                </li>
              ))}
            </ul>

            {/* Facilities */}
            <h3 className="mt-10 text-lg font-bold text-scout-navy">Facilities</h3>
            <ul role="list" className="mt-4 grid gap-2 sm:grid-cols-2">
              {FACILITIES.map(({ label }) => (
                <li key={label} className="flex items-center gap-3 text-gray-600">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-scout-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {label}
                </li>
              ))}
            </ul>

            {/* Availability */}
            <div className="mt-10 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="font-semibold text-scout-navy">Availability</p>
              <p className="mt-1 text-gray-600">Monday – Friday, 9am – 4pm</p>
              <p className="mt-3 font-semibold text-scout-navy">Location</p>
              <address className="mt-1 not-italic text-gray-600">
                Woodlands Road, Allestree, Derby DE22 2HE
              </address>
            </div>
          </div>

          {/* Right — pricing + CTA */}
          <div id="pricing" className="flex flex-col gap-6">

            {/* Launch offer */}
            <div className="rounded-2xl bg-group-red p-6 text-white shadow-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Launch offer
              </p>
              <p className="mt-2 text-3xl font-extrabold">50% off</p>
              <p className="mt-1 text-white/90">your first booking — try the space with no risk.</p>
            </div>

            {/* Standard rate */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Standard rate
              </p>
              <p className="mt-2 text-3xl font-extrabold text-scout-navy">£18<span className="text-lg font-semibold text-gray-400"> / hr</span></p>
              <p className="mt-2 text-sm text-gray-500">
                Discounted rates available for regular weekly bookings.
              </p>
              <a
                href="/contact"
                className="mt-6 flex w-full items-center justify-center rounded-lg bg-scout-purple px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple active:scale-95"
              >
                Enquire about booking
              </a>
              <p className="mt-4 text-center text-xs text-gray-400">
                Drop us a message to arrange a viewing
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
