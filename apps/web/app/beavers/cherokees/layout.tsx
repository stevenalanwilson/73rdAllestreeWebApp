import type { ReactNode } from 'react'
import { SectionProvider } from '@73rd/ui'

export default function CherokeesLayout({ children }: { children: ReactNode }) {
  return (
    <SectionProvider section="beavers" unit="cherokees">
      {children}
    </SectionProvider>
  )
}
