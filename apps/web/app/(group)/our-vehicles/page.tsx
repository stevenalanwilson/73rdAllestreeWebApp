import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Our Vehicles' }

interface Vehicle {
  name: string
  type: string
  seats: number | null
  towCapacity?: string
  licence: string
  bestFor: string
  notes: string
  image: string | null
  pricing: {
    evening: string | null
    daily: string | null
    weekend: string | null
    weekly: string | null
    extraMiles: string | null
    includedMiles: string | null
  }
}

const VEHICLES: Vehicle[] = [
  {
    name: 'Brenda',
    type: 'Peugeot Boxer minibus',
    seats: 17,
    licence: 'Section 19 minibus permit required',
    bestFor: 'Large groups, camps, and trips needing extra kit capacity',
    notes: 'Roof rack and towbar fitted — ideal when you need to bring trailers or extra luggage along.',
    image: null,
    pricing: { evening: '£25', daily: '£65', weekend: '£100', weekly: '£300', extraMiles: '£1.25/mi', includedMiles: '100 miles' },
  },
  {
    name: 'Elaine',
    type: 'Ford Transit 15-seater',
    seats: 15,
    licence: 'Standard car licence (category B)',
    bestFor: 'Day trips and away days where a permit holder isn\'t available',
    notes: 'Weighs 3,500 kg, so it can be driven on a standard car licence — no minibus permit needed.',
    image: '/images/vehicles/elaine.jpg',
    pricing: { evening: '£20', daily: '£55', weekend: '£85', weekly: '£250', extraMiles: '£1.00/mi', includedMiles: '100 miles' },
  },
  {
    name: 'Alison',
    type: 'Ford Transit minibus',
    seats: null,
    licence: 'Section 19 minibus permit required',
    bestFor: 'Camps and big away days',
    notes: 'The newest addition to our fleet — full details and seat count to follow shortly.',
    image: '/images/vehicles/alison.jpg',
    pricing: { evening: '£25', daily: '£65', weekend: '£100', weekly: '£300', extraMiles: '£1.25/mi', includedMiles: '100 miles' },
  },
  {
    name: 'Gerald',
    type: 'Twin-axle trailer',
    seats: null,
    towCapacity: '2,700 kg gross / 1,900 kg payload',
    licence: 'Standard car licence with appropriate towing entitlement',
    bestFor: 'Camping kit, equipment, and gear that won\'t fit in a minibus',
    notes: 'Fitted with a solar panel and lithium battery, so it can power kit on site without a generator.',
    image: null,
    pricing: { evening: null, daily: null, weekend: '£35', weekly: '£100', extraMiles: null, includedMiles: null },
  },
]

const REQUIREMENTS = [
  {
    title: 'Driver age',
    detail: 'Drivers must be between 25 and 70 years old.',
  },
  {
    title: 'Clean driving record',
    detail: 'No accidents or endorsements on your licence in the past 5 years.',
  },
  {
    title: 'Minibus permit',
    detail: 'A valid Section 19 permit is required to drive Brenda or Alison. Elaine can be driven on a standard car licence.',
  },
  {
    title: 'Booking & confirmation',
    detail: 'All hires are arranged online with email confirmation before the vehicle is released.',
  },
]

const BOOKING_STEPS = [
  {
    step: '1',
    title: 'Check availability',
    detail: 'Get in touch with your preferred dates and which vehicle you need.',
  },
  {
    step: '2',
    title: 'Confirm by email',
    detail: 'We\'ll confirm the booking, pricing, and collection details in writing.',
  },
  {
    step: '3',
    title: 'Collect & go',
    detail: 'Pick up the vehicle, complete a quick handover check, and you\'re on your way.',
  },
]

export default function OurVehiclesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section aria-label="Our vehicles hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            73rd Allestree Scout Group
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Vehicles</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            We maintain a small fleet of minibuses and a trailer to support our own sections on
            trips and camps — and we hire them out to other Scout groups, charities, and
            community organisations when they&apos;re not in use.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#fleet"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-scout-purple transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View the fleet
            </a>
            <a
              href="#hire-rates"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See hire rates
            </a>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section
        id="fleet"
        aria-labelledby="vehicles-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="vehicles-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
          The fleet
        </h2>
        <p className="mb-10 text-gray-500">
          Four vehicles, each suited to a different job — from big camps to a quick day trip.
        </p>
        <ul role="list" className="grid gap-6 sm:grid-cols-2">
          {VEHICLES.map((v) => (
            <li key={v.name}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {v.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={v.image}
                      alt={`${v.name}, our ${v.type.toLowerCase()}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center bg-gray-100 text-sm text-gray-400">
                    Photo coming soon
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-scout-navy">{v.name}</h3>
                    {v.seats && (
                      <span className="rounded-full bg-scout-purple/10 px-3 py-1 text-xs font-semibold text-scout-purple">
                        {v.seats} seats
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-semibold text-scout-purple">{v.type}</p>

                  <p className="mt-3 text-sm font-semibold text-scout-navy">Best for</p>
                  <p className="text-sm text-gray-500">{v.bestFor}</p>

                  <p className="mt-3 flex-1 text-sm text-gray-500">{v.notes}</p>

                  <div className="mt-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <p>
                      <span className="font-semibold text-gray-600">Licence: </span>
                      {v.licence}
                    </p>
                    {v.towCapacity && (
                      <p className="mt-1">
                        <span className="font-semibold text-gray-600">Capacity: </span>
                        {v.towCapacity}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Hiring requirements */}
      <section aria-labelledby="requirements-heading" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="requirements-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
            Hiring requirements
          </h2>
          <p className="mb-10 text-gray-500">
            Before you book, check you meet these requirements — it&apos;ll save time when we
            confirm your hire.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REQUIREMENTS.map(({ title, detail }) => (
              <div key={title} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <p className="font-bold text-scout-navy">{title}</p>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire rates */}
      <section
        id="hire-rates"
        aria-labelledby="pricing-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="pricing-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
          Hire rates
        </h2>
        <p className="mb-10 text-gray-500">
          All rates include a mileage allowance shown below — extra miles are charged at the
          rate listed.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {VEHICLES.map((v) => (
            <div key={v.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-scout-navy">{v.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{v.type}</span>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400">Evening</dt>
                  <dd className="mt-0.5 font-semibold text-scout-navy">{v.pricing.evening ?? '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400">Daily</dt>
                  <dd className="mt-0.5 font-semibold text-scout-navy">{v.pricing.daily ?? '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400">Weekend</dt>
                  <dd className="mt-0.5 font-semibold text-scout-navy">{v.pricing.weekend ?? '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400">Weekly</dt>
                  <dd className="mt-0.5 font-semibold text-scout-navy">{v.pricing.weekly ?? '—'}</dd>
                </div>
              </dl>

              {(v.pricing.includedMiles || v.pricing.extraMiles) && (
                <p className="mt-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
                  {v.pricing.includedMiles && (
                    <>
                      <span className="font-semibold text-gray-600">{v.pricing.includedMiles}</span> included
                      {v.pricing.extraMiles && <> · </>}
                    </>
                  )}
                  {v.pricing.extraMiles && (
                    <>
                      <span className="font-semibold text-gray-600">{v.pricing.extraMiles}</span> after that
                    </>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Evening hire covers 6–10pm. All hires require online booking and email confirmation.
        </p>
      </section>

      {/* Booking process */}
      <section aria-labelledby="booking-heading" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="booking-heading" className="mb-2 text-3xl font-extrabold text-scout-navy">
            How to book
          </h2>
          <p className="mb-10 text-gray-500">
            Three simple steps from enquiry to driving away.
          </p>
          <ol role="list" className="grid gap-6 sm:grid-cols-3">
            {BOOKING_STEPS.map(({ step, title, detail }) => (
              <li key={step} className="flex gap-4">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-scout-purple text-lg font-extrabold text-white"
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

      {/* Booking CTA */}
      <section aria-label="Book a vehicle" className="bg-scout-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Interested in hiring one of our vehicles?</h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Get in touch to check availability and arrange your booking — whether you&apos;re
            another Scout group, a charity, or a local community organisation.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-scout-navy transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
          >
            Contact us
          </a>
        </div>
      </section>

    </div>
  )
}
