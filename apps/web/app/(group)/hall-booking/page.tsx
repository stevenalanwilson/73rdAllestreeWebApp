import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Hall Booking' }

export default function HallBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section aria-label="Hall booking hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            73rd Allestree Scout Group
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Hall Booking</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Our hall is available for community hire when not in use by the Scout group.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        aria-labelledby="hall-content-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="hall-content-heading" className="text-2xl font-bold text-scout-navy">
              About the hall
            </h2>
            <p className="mt-4 text-gray-600">
              The 73rd Allestree Scout Group headquarters is located on Woodlands Road, Allestree.
              The hall is a versatile space suitable for meetings, parties, training sessions,
              and community events.
            </p>
            <p className="mt-4 text-gray-600">
              The building is equipped with a kitchen, toilets, and ample parking. It is available
              for hire on evenings and weekends when not being used by our sections.
            </p>
            <address className="mt-6 not-italic rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-600 shadow-sm">
              <p className="font-semibold text-scout-navy">Location</p>
              <p className="mt-1">
                Woodlands Road<br />
                Allestree<br />
                Derby, DE22 2HE
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-scout-navy">How to book</h2>
            <p className="mt-4 text-gray-600">
              To enquire about availability and pricing, please get in touch using the contact
              form. Include your preferred date, times, and the nature of your event and we will
              get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center rounded-lg bg-scout-purple px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple active:scale-95"
            >
              Enquire about booking
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
