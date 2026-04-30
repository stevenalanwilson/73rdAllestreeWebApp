import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'
import { NavigationBar } from '@/components/NavigationBar'

export default function CubsLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="cubs">
      <NavigationBar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </SectionProvider>
  )
}
