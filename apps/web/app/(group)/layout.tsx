import type { ReactNode } from 'react'
import { Footer } from '@73rd/ui'
import { NavigationBar } from '@/components/NavigationBar'

export default function GroupLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationBar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
