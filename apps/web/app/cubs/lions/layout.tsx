import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'

export default function LionsLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="cubs" unit="lions">
      {children}
    </SectionProvider>
  )
}
