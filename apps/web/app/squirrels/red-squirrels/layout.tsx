import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'

export default function RedSquirrelsLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="squirrels" unit="red-squirrels">
      {children}
    </SectionProvider>
  )
}
