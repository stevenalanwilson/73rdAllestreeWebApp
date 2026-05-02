import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — 73rd Allestree Scout Group',
  description:
    'Learn about the 73rd Allestree Scout Group — our history, our sections, and our community in Allestree, Derby.',
}

const HISTORY: Array<{
  text: string
  photo?: { src: string; alt: string; caption: string }
}> = [
  {
    text: 'Scouts started meeting in Allestree in October 1911 on the site of what is now the Shell Garage! We formally registered as a member of The Scout Association in 1931 with 12 Wolf Cubs and 2 leaders, by then meeting in St Edmund\'s church hall. By 1944 the group were meeting in the old school near the church, having grown to 20 Cubs and 35 Scouts.',
  },
  {
    text: 'In 1947 the group moved to a site beside the Derwent, off North Avenue in Darley Abbey, meeting in a wooden hut — "Tawasenthia" — bought from the Bemrose School for £10.',
    photo: {
      src: '/images/history/tawasenthia-hut.jpg',
      alt: 'The original wooden hut "Tawasenthia" beside the River Derwent in Darley Abbey',
      caption: 'The "Tawasenthia" hut in Darley Abbey, home of the 73rd from 1947.',
    },
  },
  {
    text: 'By 1952 the bank of the Derwent was eroding away and the search for a new site commenced. By 1956 the hut was at risk of falling into the river, and meetings were moved to the newly built Woodlands School.',
  },
  {
    text: 'In 1961 the current site on Woodlands Road was purchased from the Ministry of Works. A new wooden hut was built for £2,100 and opened by the County Commissioner on 29th September. The group now had 30 Cubs, 24 Scouts and 6 Senior Scouts.',
    photo: {
      src: '/images/history/hq-opening-1961.jpg',
      alt: 'County Commissioner Mr. Clive Bemrose chats with three Queen\'s Scouts after opening the new headquarters of the 73rd Derby (Allestree) Scouts Group in Woodlands Road, Allestree',
      caption: 'County Commissioner Mr. Clive Bemrose opens the new headquarters on Woodlands Road, 29 September 1961.',
    },
  },
  {
    text: '1965 — A new Cub pack is formed, taking membership to 100. 1968 — Viking Venture Scout Unit is formed. By 1971–72 a new 22\'×20\' Compton building is erected behind the Scout hut for the Venture Scouts — the garage you see today. 1973 — A second Scout troop opens and membership reaches 150.',
  },
  {
    text: '1981 — The group has grown to over 200 members! The old wooden hut is demolished in August and construction on the new building commences at a cost of £59,950. Meetings move back to Woodlands School during the build.',
    photo: {
      src: '/images/history/hq-construction-1981.jpg',
      alt: 'Steel framework of the new Scout headquarters under construction in 1981',
      caption: 'The new headquarters taking shape in 1981 at a cost of £59,950.',
    },
  },
  {
    text: '1982 — The new building is complete and opened by HRH Princess Margaret. The 73rd Allestree Scout Group has been meeting here ever since.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section aria-label="About hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            73rd Allestree Scout Group
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Based in Allestree, Derby, we have been helping young people grow, explore, and
            achieve since our founding in 1911.
          </p>
        </div>
      </section>

      {/* Our Story + Our Sections */}
      <section
        aria-labelledby="about-content-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 id="about-content-heading" className="text-2xl font-bold text-scout-navy">
              Our Story
            </h2>
            <p className="mt-4 text-gray-600">
              The 73rd Allestree Scout Group serves young people aged 4 to 14 across four sections:
              Squirrels, Beavers, Cubs, and Scouts. Each section gives young people the skills,
              confidence, and friendships to thrive.
            </p>
            <p className="mt-4 text-gray-600">
              We are part of the Scout Association — a worldwide movement committed to empowering
              young people to create positive change.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-scout-navy">Our Sections</h2>
            <ul role="list" className="mt-4 space-y-3">
              {[
                { name: 'Squirrels', ages: 'Ages 4–6',     href: '/squirrels', colour: 'bg-squirrels' },
                { name: 'Beavers',   ages: 'Ages 6–8',     href: '/beavers',   colour: 'bg-beavers' },
                { name: 'Cubs',      ages: 'Ages 8–10.5',  href: '/cubs',      colour: 'bg-cubs' },
                { name: 'Scouts',    ages: 'Ages 10.5–14', href: '/scouts',    colour: 'bg-scouts' },
              ].map((section) => (
                <li key={section.href}>
                  <a
                    href={section.href}
                    className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
                  >
                    <span
                      className={`${section.colour} h-3 w-3 flex-shrink-0 rounded-full`}
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-scout-navy group-hover:text-scout-purple">
                      {section.name}
                    </span>
                    <span className="ml-auto text-sm text-gray-500">{section.ages}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* History */}
      <section
        aria-labelledby="history-heading"
        className="border-t border-gray-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left — narrative */}
            <div className="lg:col-span-2">
              <h2 id="history-heading" className="text-2xl font-bold text-scout-navy">
                Our History
              </h2>
              <div aria-hidden="true" className="mt-3 mb-8 h-1 w-12 rounded-full bg-group-red" />

              <div className="space-y-8">
                {HISTORY.map(({ text, photo }, index) => (
                  <div key={index}>
                    <p className="text-gray-600 leading-relaxed">{text}</p>

                    {photo && (
                      <figure className="mt-5">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full object-cover grayscale"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="mt-2 text-center text-sm italic text-gray-500">
                          {photo.caption}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — reserved for future components */}
            <div />

          </div>
        </div>
      </section>

    </div>
  )
}
