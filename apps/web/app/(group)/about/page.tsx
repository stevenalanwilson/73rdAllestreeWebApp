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
            achieve since our founding.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        aria-labelledby="about-content-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
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
                { name: 'Squirrels', ages: 'Ages 4–6',    href: '/squirrels', colour: 'bg-squirrels' },
                { name: 'Beavers',   ages: 'Ages 6–8',    href: '/beavers',   colour: 'bg-beavers' },
                { name: 'Cubs',      ages: 'Ages 8–10.5', href: '/cubs',      colour: 'bg-cubs' },
                { name: 'Scouts',    ages: 'Ages 10.5–14', href: '/scouts',   colour: 'bg-scouts' },
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
    </div>
  )
}
