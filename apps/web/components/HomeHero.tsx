import Image from 'next/image'

interface HomeHeroProps {
  imageSrc?: string
}

export function HomeHero({ imageSrc = '/images/group-photo.jpg' }: HomeHeroProps) {
  return (
    <section aria-label="Welcome" className="relative flex min-h-[620px] items-end overflow-hidden">

      {/* Background photo */}
      <Image
        src={imageSrc}
        alt="73rd Allestree Scouts setting off on an adventure"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay — dark at bottom for text, purple tint at top for brand */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-scout-navy via-scout-navy/60 to-scout-purple/40"
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-group-red/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            #SkillsForLife
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            73rd Derby (Allestree)<br />Scout Group
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Woodlands Road, Allestree, Derby, DE22 2HE
          </p>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Fun and challenging activities, unique experiences, everyday adventure — and the chance to help others. For young people aged 4–14 in Allestree, Derby.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/waiting-list"
              className="rounded-lg bg-group-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
            >
              Join the waiting list
            </a>
            <a
              href="/about"
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
            >
              About the group
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
