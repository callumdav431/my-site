'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NavClient() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <nav>
      <div className="nav-left">
        <Link href="/" className="nav-logo">Home</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀ Light' : '☾ Dark'}
        </button>
      </div>
      <ul className="nav-links">
        <li><Link href="/" className={pathname === '/' ? 'active' : ''}>About</Link></li>
        <li><Link href="/experience" className={pathname === '/experience' ? 'active' : ''}>Experience</Link></li>
        <li><Link href="/outreach" className={pathname === '/outreach' ? 'active' : ''}>SME Outreach</Link></li>
        <li><Link href="/sales-deck" className={pathname === '/sales-deck' ? 'active' : ''}>Sales Deck</Link></li>
      </ul>
    </nav>
  )
}