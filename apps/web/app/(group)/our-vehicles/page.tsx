import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Our Vehicles' }

const VEHICLES = [
  {
    name: 'Brenda',
    type: 'Peugeot Boxer minibus',
    seats: 17,
    notes: 'Roof rack and towbar fitted.',
    pricing: { evening: '£25', daily: '£65', weekend: '£100', weekly: '£300', extraMiles: '£1.25/mi' },
  },
  {
    name: 'Elaine',
    type: 'Ford Transit 15-seater',
    seats: 15,
    notes: '3,500 kg — driveable on a standard car licence.',
    pricing: { evening: '£20', daily: '£55', weekend: '£85', weekly: '£250', extraMiles: '£1.00/mi' },
  },
  {
    name: 'Margaret',
    type: 'LDV Maxus minibus',
    seats: 15,
    notes: 'Tail-lift fitted — suitable for wheelchair users.',
    pricing: { evening: '£15', daily: '£45', weekend: '£70', weekly: '£200', extraMiles: '£0.80/mi' },
  },
  {
    name: 'Gerald',
    type: 'Twin-axle trailer',
    seats: null,
    notes: '2,700 kg gross / 1,900 kg payload. Solar panel and lithium battery.',
    pricing: { evening: null, daily: null, weekend: '£35', weekly: '£100', extraMiles: null },
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
          <p className="mt-4 max-w-xl text-lg text-white/80">
            We operate a small fleet of vehicles available for hire by Scout groups and
            community organisations.
          </p>
        </div>
      </section>

      {/* Vehicle cards */}
      <section
        aria-labelledby="vehicles-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="vehicles-heading" className="mb-8 text-2xl font-bold text-scout-navy">
          The fleet
        </h2>
        <ul role="list" className="grid gap-6 sm:grid-cols-2">
          {VEHICLES.map((v) => (
            <li key={v.name}>
              <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-scout-navy">{v.name}</h3>
                <p className="mt-1 text-sm font-semibold text-scout-purple">{v.type}</p>
                {v.seats && (
                  <p className="mt-1 text-sm text-gray-500">{v.seats} seats</p>
                )}
                <p className="mt-2 flex-1 text-sm text-gray-500">{v.notes}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing table */}
      <section
        aria-labelledby="pricing-heading"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <h2 id="pricing-heading" className="mb-6 text-2xl font-bold text-scout-navy">
          Hire rates
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th scope="col" className="px-4 py-3 text-left font-semibold text-scout-navy">Vehicle</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-scout-navy">Evening<br /><span className="font-normal text-gray-500 text-xs">6–10 pm</span></th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-scout-navy">Daily</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-scout-navy">Weekend</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-scout-navy">Weekly</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-scout-navy">Extra miles</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {VEHICLES.map((v) => (
                <tr key={v.name}>
                  <td className="px-4 py-3 font-semibold text-scout-navy">{v.name}</td>
                  <td className="px-4 py-3 text-gray-600">{v.pricing.evening ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{v.pricing.daily ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{v.pricing.weekend ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{v.pricing.weekly ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{v.pricing.extraMiles ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          A Section 19 permit is required to drive our minibuses. Online booking and email
          confirmation required for all hires.
        </p>
      </section>

      {/* Booking CTA */}
      <section aria-label="Book a vehicle" className="bg-scout-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Interested in hiring one of our vehicles?</h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Get in touch to check availability and arrange your booking.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-scout-navy transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
          >
            Contact us
          </a>
        </div>
      </section>
    </div>
  )
}
