'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

function HouseIcon() {
  return (
    <svg
      width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  )
}

const NAV_LINKS = [
  { href: '/',           label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/outreach',   label: 'SME Outreach' },
  { href: '/sales-deck', label: 'Sales Deck' },
]

export default function NavClient() {
  const pathname = usePathname()
  const [theme, setTheme]       = useState<'dark' | 'light'>('dark')
  const [progress, setProgress] = useState(0)
  const [navHidden, setNavHidden] = useState(false)
  const [menuOpen, setMenuOpen]  = useState(false)
  const lastScrollY = useRef(0)

  // Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  // Scroll progress + nav hide/show
  useEffect(() => {
    const onScroll = () => {
      const y     = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (y / total) * 100 : 0)
      if (y > lastScrollY.current && y > 80) {
        setNavHidden(true)
        setMenuOpen(false)   // also close menu if user scrolls down
      } else {
        setNavHidden(false)
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fade-up observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const observe = () => {
      document.querySelectorAll('.fade-up:not(.in-view)').forEach(el => observer.observe(el))
    }
    observe()
    const t = setTimeout(observe, 120)
    return () => { observer.disconnect(); clearTimeout(t) }
  }, [pathname])

  return (
    <>
      {/* Progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <nav className={navHidden ? 'nav-hidden' : ''}>
        {/* Left: logo + theme toggle */}
        <div className="nav-left">
          <Link href="/" className="nav-logo" aria-label="Home">
            <HouseIcon />
          </Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀ Light' : '☾ Dark'}
          </button>
        </div>

        {/* Desktop links — hidden on mobile */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — visible on mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}