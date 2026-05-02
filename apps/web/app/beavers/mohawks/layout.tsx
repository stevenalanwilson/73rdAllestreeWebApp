import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'

export default function MohawksLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="beavers" unit="mohawks">
      {children}
    </SectionProvider>
  )
}
