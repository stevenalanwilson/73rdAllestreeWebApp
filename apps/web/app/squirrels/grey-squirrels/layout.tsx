import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'

export default function GreySquirrelsLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="squirrels" unit="grey-squirrels">
      {children}
    </SectionProvider>
  )
}
