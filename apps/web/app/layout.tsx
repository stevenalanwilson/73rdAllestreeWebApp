import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '73rd Allestree Scout Group',
    template: '%s | 73rd Allestree Scout Group',
  },
  description:
    'The 73rd Allestree Scout Group, Derby — Squirrels, Beavers, Cubs, and Scouts for young people aged 4–14.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
