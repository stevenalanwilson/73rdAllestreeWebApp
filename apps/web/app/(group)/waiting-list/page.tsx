import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Join the Waiting List' }

export default function WaitingListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section aria-label="Waiting list hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            73rd Allestree Scout Group
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Join the Waiting List
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            We welcome young people from age 3 and upwards onto our waiting list. Places are
            allocated on a first-come, first-served basis.
          </p>
        </div>
      </section>

      {/* Info + form */}
      <section
        aria-labelledby="waiting-list-content-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 id="waiting-list-content-heading" className="text-2xl font-bold text-scout-navy">
              How the waiting list works
            </h2>
            <ul className="mt-6 space-y-4 text-gray-600">
              {[
                'We are open to young people from age 3 — you can join the list at any time.',
                'Places are allocated on a first-come, first-served basis as spaces arise.',
                'If your child is not admitted to their age group, they will automatically be considered for the next age section.',
                'We currently have over 180 young people across all four sections.',
                'Parents or carers who are able to help with activities 1–2 times per month may be given priority.',
              ].map((point) => (
                <li key={point} className="flex gap-3">
                  <div
                    className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-scout-purple"
                    aria-hidden="true"
                  />
                  <p className="text-sm">{point}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              If your family has additional support needs, please contact our Group Scout Leader
              directly:{' '}
              <a
                href="mailto:GSL@73DerbyScouts.org.uk"
                className="font-semibold text-scout-purple hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
              >
                GSL@73DerbyScouts.org.uk
              </a>
            </p>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-scout-navy">Add your child to the list</h2>
            <form className="mt-6 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="wl-first-name"
                    className="mb-1.5 block text-sm font-semibold text-scout-navy"
                  >
                    Parent / carer first name
                  </label>
                  <input
                    id="wl-first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="wl-last-name"
                    className="mb-1.5 block text-sm font-semibold text-scout-navy"
                  >
                    Last name
                  </label>
                  <input
                    id="wl-last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="wl-email"
                  className="mb-1.5 block text-sm font-semibold text-scout-navy"
                >
                  Email address
                </label>
                <input
                  id="wl-email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
                />
              </div>

              <div>
                <label
                  htmlFor="wl-dob"
                  className="mb-1.5 block text-sm font-semibold text-scout-navy"
                >
                  Child&apos;s date of birth
                </label>
                <input
                  id="wl-dob"
                  type="date"
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
                />
              </div>

              <div>
                <label
                  htmlFor="wl-section"
                  className="mb-1.5 block text-sm font-semibold text-scout-navy"
                >
                  Section of interest
                </label>
                <select
                  id="wl-section"
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
                >
                  <option value="">Select a section…</option>
                  <option value="squirrels">Squirrels (Ages 4–6)</option>
                  <option value="beavers">Beavers (Ages 6–8)</option>
                  <option value="cubs">Cubs (Ages 8–10.5)</option>
                  <option value="scouts">Scouts (Ages 10.5–14)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="wl-message"
                  className="mb-1.5 block text-sm font-semibold text-scout-navy"
                >
                  Anything else you&apos;d like us to know? (optional)
                </label>
                <textarea
                  id="wl-message"
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-group-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-group-red active:scale-95"
              >
                Add to waiting list
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
