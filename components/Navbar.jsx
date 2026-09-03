'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Research', href: '/#research' },
  { label: 'Lab', href: '/lab' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Uses', href: '/uses' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const router = useRouter()

  // Track scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section via Intersection Observer (only on home page)
  useEffect(() => {
    if (router.pathname !== '/') return

    const sectionIds = ['home', 'about', 'projects', 'skills', 'achievements', 'contact']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [router.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    setMobileOpen(false)

    // If it's a hash link on the same page, smooth scroll
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '')

      if (router.pathname === '/') {
        e.preventDefault()
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      // If on a different page, let Next.js handle navigation to /#section
    }
  }

  const isActive = (href) => {
    if (href === '/lab') return router.pathname === '/lab'
    if (href === '/blog') return router.pathname === '/blog' || router.pathname.startsWith('/blog/')
    if (href === '/experience') return router.pathname === '/experience'
    if (href === '/uses') return router.pathname === '/uses'
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '')
      return router.pathname === '/' && activeSection === sectionId
    }
    return false
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-darkBg/70 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo — SV Monogram */}
            <Link href="/" className="group relative flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <span className="text-primary font-poppins font-bold text-lg tracking-tight">
                  SV
                </span>
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}

                  {/* Active indicator dot */}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Resume CTA + GitHub */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/Izumi6"
                target="_blank"
                rel="noreferrer"
                className="interactive p-2 text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="/Suyash_Vakhariya_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="interactive px-5 py-2 text-sm font-medium text-primary border border-primary/40 rounded-full hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              >
                Resume
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 6 : 0,
                }}
                className="block w-6 h-0.5 bg-current origin-center transition-colors"
              />
              <motion.span
                animate={{
                  opacity: mobileOpen ? 0 : 1,
                  x: mobileOpen ? 10 : 0,
                }}
                className="block w-6 h-0.5 bg-current"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -6 : 0,
                }}
                className="block w-6 h-0.5 bg-current origin-center transition-colors"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-darkBg/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-8 py-4 text-2xl font-medium tracking-wide transition-colors duration-300 ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-gray-300 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Resume + GitHub */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="flex items-center gap-4 mt-8"
              >
                <a
                  href="https://github.com/Izumi6"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="/Suyash_Vakhariya_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 text-sm font-medium text-primary border border-primary/40 rounded-full hover:bg-primary/10"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
