import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'

export default function JaguarsLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="scouts" unit="jaguars">
      {children}
    </SectionProvider>
  )
}
