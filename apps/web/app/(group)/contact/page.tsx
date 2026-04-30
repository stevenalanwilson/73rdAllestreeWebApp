export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section aria-label="Contact hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            Get in touch
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Interested in joining or have a question? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="contact-form-heading" className="mb-8 text-2xl font-bold text-scout-navy">
          Send us a message
        </h2>
        <form className="space-y-6" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="mb-1.5 block text-sm font-semibold text-scout-navy">
                First name
              </label>
              <input
                id="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="mb-1.5 block text-sm font-semibold text-scout-navy">
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-scout-navy">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
            />
          </div>

          <div>
            <label htmlFor="section" className="mb-1.5 block text-sm font-semibold text-scout-navy">
              Section of interest
            </label>
            <select
              id="section"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
            >
              <option value="">Select a section…</option>
              <option value="squirrels">Squirrels (Ages 4–6)</option>
              <option value="beavers">Beavers (Ages 6–8)</option>
              <option value="cubs">Cubs (Ages 8–10.5)</option>
              <option value="scouts">Scouts (Ages 10.5–14)</option>
              <option value="general">General enquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-scout-navy">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-scout-navy focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/30"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-scout-purple px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple active:scale-95"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  )
}
