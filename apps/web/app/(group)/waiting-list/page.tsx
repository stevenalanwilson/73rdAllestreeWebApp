import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Join the Waiting List' }

const OSM_WAITING_LIST_URL =
  'https://www.onlinescoutmanager.co.uk/waiting-list/73rd-derby-allestree-waiting-list/5b8bd114-7ed5-49df-a8df-455605bb0b8a/apply'

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
            We welcome young people from age 4 upwards. Despite having capacity for over 180
            young people across our sections, demand is high — add your child to the list as
            early as you can.
          </p>
        </div>
      </section>

      {/* How it works + callouts */}
      <section
        aria-labelledby="how-it-works-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="how-it-works-heading" className="mb-10 text-3xl font-extrabold text-scout-navy">
          How the waiting list works
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-xl border border-gray-100 bg-white p-8 lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-scout-navy">The basics</h3>
            <ul className="space-y-4">
              {[
                'The waiting list is open from age 4 — you can join at any time.',
                'Places are offered on a first-come, first-served basis as spaces become available.',
                'We will contact you as soon as a place opens up in the right section for your child.',
              ].map((point) => (
                <li key={point} className="flex gap-3">
                  <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-scout-purple" aria-hidden="true" />
                  <p className="text-sm text-gray-600">{point}</p>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-8 text-lg font-bold text-scout-navy">Automatic progression</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your child will be placed on the waiting list for the section most appropriate for
              their age. If they reach the next age range without receiving a place, we will
              automatically move them to the waiting list for the next section — you don&apos;t
              need to do anything.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              {[
                { label: 'Squirrels', sub: 'Ages 4–6', colour: 'bg-squirrels-red-600' },
                { label: 'Beavers', sub: 'Ages 6–8', colour: 'bg-beavers-teal-700' },
                { label: 'Cubs', sub: 'Ages 8–10½', colour: 'bg-cubs-green-700' },
                { label: 'Scouts', sub: 'Ages 10½–14', colour: 'bg-scouts-green-900' },
              ].map(({ label, sub, colour }, i, arr) => (
                <div key={label} className="flex items-center gap-2">
                  <span className={`${colour} rounded px-3 py-1.5 text-white`}>
                    {label} <span className="font-normal opacity-80">· {sub}</span>
                  </span>
                  {i < arr.length - 1 && <span className="text-gray-400" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-scout-purple p-8 text-white">
            <h3 className="mb-3 text-lg font-bold">Could you help?</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Sometimes our section sizes are limited by the number of adult volunteers rather than
              physical space. If you&apos;re able to help at meetings{' '}
              <strong className="text-white">1–2 times per month</strong>, you may be given
              priority on the waiting list.
            </p>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              You don&apos;t need any experience — just enthusiasm and a DBS check, which we
              arrange for you.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-scout-purple transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Find out more
            </a>
          </div>

        </div>
      </section>

      {/* Apply CTA + discuss */}
      <section aria-labelledby="apply-heading" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <h2 id="apply-heading" className="text-3xl font-extrabold text-scout-navy">
                Ready to apply?
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Applications are managed through Online Scout Manager — the system used by
                Scout groups across the UK. Click below to open the form. It takes around
                two minutes to complete.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                You&apos;ll need your child&apos;s date of birth and your contact details
                including address and phone number.
              </p>
              <a
                href={OSM_WAITING_LIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-group-red px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-group-red"
              >
                Apply for the waiting list
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm6.75-3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V3.81l-6.22 6.22a.75.75 0 0 1-1.06-1.06l6.22-6.22H11a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
              </a>
              <p className="mt-3 text-xs text-gray-400">Opens in a new tab · Powered by Online Scout Manager</p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
                <h3 className="text-xl font-bold text-scout-navy">Want to discuss first?</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  If you think your child may need additional support, or you&apos;d like to
                  talk things through before joining the list, please get in touch with our
                  Group Scout Leader directly.
                </p>
                <a
                  href="mailto:GSL@73DerbyScouts.org.uk"
                  className="mt-5 inline-block font-semibold text-scout-purple hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
                >
                  GSL@73DerbyScouts.org.uk
                </a>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
                <h3 className="text-xl font-bold text-scout-navy">Registered charity</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  The 73rd Allestree Scout Group is a registered charity. Subscription fees go
                  directly towards programme activities, equipment, and keeping scouting
                  accessible to all young people in our community.
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Charity no. 520628
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
