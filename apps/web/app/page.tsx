import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dev Environment Check',
}

// ── Types ──────────────────────────────────────────────────────────────────

interface ColourSwatch {
  label: string
  hex: string
  tailwindBg: string
}

interface EnvVar {
  key: string
  label: string
}

// ── Data ───────────────────────────────────────────────────────────────────

const COLOUR_SWATCHES: ColourSwatch[] = [
  { label: 'Group Red',    hex: '#B31C27', tailwindBg: 'bg-group-red' },
  { label: 'Scout Navy',   hex: '#001323', tailwindBg: 'bg-scout-navy' },
  { label: 'Scout Purple', hex: '#4D2177', tailwindBg: 'bg-scout-purple' },
  { label: 'Scout Teal',   hex: '#00A794', tailwindBg: 'bg-scout-teal' },
  { label: 'Squirrels',    hex: '#9B1C1C', tailwindBg: 'bg-squirrels' },
  { label: 'Beavers',      hex: '#004F6E', tailwindBg: 'bg-beavers' },
  { label: 'Cubs',         hex: '#4A5E06', tailwindBg: 'bg-cubs' },
  { label: 'Scouts',       hex: '#0F3D0F', tailwindBg: 'bg-scouts' },
]

const STACK_ITEMS = [
  { name: 'Next.js',    version: '14',  style: 'bg-scout-navy text-white' },
  { name: 'TypeScript', version: '5.x', style: 'bg-beavers text-white' },
  { name: 'Tailwind',   version: '3',   style: 'bg-scouts text-white' },
  { name: 'Turbo',      version: '2.x', style: 'bg-scout-purple text-white' },
  { name: 'pnpm',       version: '9.x', style: 'bg-cubs text-white' },
]

const ENV_VARS: EnvVar[] = [
  { key: 'NEXT_PUBLIC_SITE_URL', label: 'Site URL (public)' },
  { key: 'SANITY_PROJECT_ID',    label: 'Sanity project ID' },
  { key: 'SANITY_DATASET',       label: 'Sanity dataset' },
  { key: 'SANITY_API_TOKEN',     label: 'Sanity API token' },
]

// ── Sub-components ─────────────────────────────────────────────────────────

function StatusBadge({ ok }: { ok: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        ok ? 'bg-cubs text-white' : 'bg-squirrels text-white'
      }`}
    >
      {ok ? 'Set' : 'Not set'}
    </span>
  )
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-4 text-lg font-bold text-scout-navy">
      {children}
    </h2>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function DevCheckPage() {
  const envStatus = ENV_VARS.map((v) => ({
    ...v,
    isSet: Boolean(process.env[v.key]),
  }))

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">

        {/* Header */}
        <header className="rounded-2xl bg-scout-navy p-8 text-center">
          <div aria-hidden="true" className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-group-red" />
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            73rd Allestree Scout Group
          </h1>
          <p className="mt-2 text-lg text-gray-300">Derby, UK</p>
        </header>

        {/* Dev environment status */}
        <section aria-labelledby="status-heading" className="rounded-2xl border-2 border-cubs bg-white p-6">
          <SectionHeading id="status-heading">Development environment status</SectionHeading>
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cubs text-white font-bold text-lg"
            >
              ✓
            </span>
            <div>
              <p className="font-semibold text-scout-navy">Development environment ready</p>
              <p className="text-sm text-gray-600">
                Next.js dev server is running on{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">
                  localhost:3000
                </code>
              </p>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section aria-labelledby="stack-heading" className="rounded-2xl bg-white p-6 shadow-sm">
          <SectionHeading id="stack-heading">Tech stack</SectionHeading>
          <ul className="flex flex-wrap gap-3" role="list">
            {STACK_ITEMS.map((item) => (
              <li key={item.name}>
                <span className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold ${item.style}`}>
                  {item.name}
                  <span className="rounded bg-white/20 px-1.5 py-0.5 text-xs font-normal">
                    v{item.version}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Brand colour tokens */}
        <section aria-labelledby="colours-heading" className="rounded-2xl bg-white p-6 shadow-sm">
          <SectionHeading id="colours-heading">Brand colour tokens</SectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            Visual check that Tailwind tokens resolve to the correct hex values.
          </p>
          <ul
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            role="list"
            aria-label="Brand colour swatches"
          >
            {COLOUR_SWATCHES.map((swatch) => (
              <li key={swatch.label} className="overflow-hidden rounded-lg border border-gray-200">
                <div
                  className={`${swatch.tailwindBg} h-16`}
                  aria-hidden="true"
                />
                <div className="bg-white px-3 py-2">
                  <p className="text-xs font-semibold text-scout-navy">{swatch.label}</p>
                  <p className="font-mono text-xs text-gray-500">{swatch.hex}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Environment variables */}
        <section aria-labelledby="env-heading" className="rounded-2xl bg-white p-6 shadow-sm">
          <SectionHeading id="env-heading">Environment variables</SectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            Copy{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">.env.example</code>
            {' '}to{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">.env.local</code>
            {' '}and fill in the values.
          </p>
          <ul className="divide-y divide-gray-100" role="list">
            {envStatus.map(({ key, label, isSet }) => (
              <li key={key} className="flex items-center justify-between py-3">
                <div>
                  <code className="text-sm font-mono font-semibold text-scout-navy">{key}</code>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
                <StatusBadge ok={isSet} />
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-xs text-gray-400">
            This page confirms the dev environment is configured — it will be replaced by the real homepage.
          </p>
        </footer>

      </div>
    </main>
  )
}
