import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'

export default function TigersLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="cubs" unit="tigers">
      {children}
    </SectionProvider>
  )
}
