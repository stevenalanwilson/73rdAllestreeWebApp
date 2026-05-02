import type { ReactNode } from 'react'
import { SectionProvider, Footer } from '@73rd/ui'
import { NavigationBar } from '@/components/NavigationBar'

export default function SquirrelsLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="squirrels">
      <NavigationBar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </SectionProvider>
  )
}
