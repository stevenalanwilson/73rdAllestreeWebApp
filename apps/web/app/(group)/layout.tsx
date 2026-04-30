import type { ReactNode } from 'react'
import { NavigationBar } from '@/components/NavigationBar'

export default function GroupLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationBar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  )
}
