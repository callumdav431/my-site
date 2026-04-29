import type { Metadata } from 'next'
import './globals.css'
import NavClient from './NavClient'

export const metadata: Metadata = {
  title: 'Callum Davidson',
  description: 'Computing Science with Business student at University of Stirling. Interested in tech sales and account management.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavClient />
        {children}
      </body>
    </html>
  )
}