'use client'

import { type FC, useCallback, useEffect, useRef, useState } from 'react'

export interface PhotoItem {
  src: string
  thumbSrc: string
  alt: string
}

export interface PhotoGalleryProps {
  photos: PhotoItem[]
  heading?: string
}

export const PhotoGallery: FC<PhotoGalleryProps> = ({ photos, heading }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastFocusedRef = useRef<HTMLButtonElement | null>(null)

  const open = (index: number, trigger: HTMLButtonElement) => {
    lastFocusedRef.current = trigger
    setActiveIndex(index)
  }

  const close = useCallback(() => {
    setActiveIndex(null)
    lastFocusedRef.current?.focus()
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }, [photos.length])

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length))
  }, [photos.length])

  useEffect(() => {
    if (activeIndex !== null) {
      closeButtonRef.current?.focus()
    }
  }, [activeIndex])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex, close, prev, next])

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null

  return (
    <section aria-label={heading ?? 'Photo gallery'}>
      {heading && (
        <h2 className="mb-6 text-2xl font-bold text-scout-navy">{heading}</h2>
      )}

      <ul
        role="list"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4"
      >
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={(e) => open(index, e.currentTarget)}
              className="group block w-full overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-scout-purple"
              aria-label={`View photo: ${photo.alt}`}
            >
              <img
                src={photo.thumbSrc}
                alt={photo.alt}
                className="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-scout-navy/90"
            onClick={close}
          />

          {/* Panel */}
          <div className="relative z-10 flex max-h-screen w-full max-w-5xl flex-col items-center px-4 py-8">

            {/* Close */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close photo lightbox"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <p className="mb-3 text-sm font-medium text-white/60">
              {activeIndex! + 1} / {photos.length}
            </p>

            {/* Image */}
            <div className="relative flex max-h-[75vh] w-full items-center justify-center">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            {/* Caption */}
            <p className="mt-3 text-sm text-white/80">{activePhoto.alt}</p>

            {/* Prev / Next */}
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
