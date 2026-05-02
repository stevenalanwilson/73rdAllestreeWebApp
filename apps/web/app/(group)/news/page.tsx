import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'News & Updates' }

const PLACEHOLDER_NEWS = [
  {
    id: 1,
    title: 'Summer camp 2026 — sign-up now open',
    date: '1 May 2026',
    excerpt: 'Places are filling fast for this year\'s residential camp. Leaders will share details at the next meeting.',
  },
  {
    id: 2,
    title: 'Group AGM — all leaders and parents welcome',
    date: '15 April 2026',
    excerpt: 'Join us for the annual general meeting to hear how the group has been getting on and what\'s planned for the year ahead.',
  },
  {
    id: 3,
    title: 'Cubs earn their Outdoors badges',
    date: '3 April 2026',
    excerpt: 'Lions and Tigers had a fantastic weekend in the Peak District, completing navigation challenges and earning their Outdoors badges.',
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section aria-label="News hero" className="bg-scout-purple py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            73rd Allestree Scout Group
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">News &amp; Updates</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Keep up to date with what&apos;s happening across the group.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section
        aria-labelledby="news-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="news-heading" className="sr-only">Latest news</h2>
        <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_NEWS.map((article) => (
            <li key={article.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {article.date}
                  </p>
                  <h3 className="text-lg font-bold text-scout-navy">{article.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-gray-500">{article.excerpt}</p>
                  <a
                    href="#"
                    className="mt-4 text-sm font-semibold text-scout-purple hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
