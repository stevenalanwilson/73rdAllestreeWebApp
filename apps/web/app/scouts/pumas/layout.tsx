import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'

export default function PumasLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="scouts" unit="pumas">
      {children}
    </SectionProvider>
  )
}
