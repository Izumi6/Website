import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'
import { HiOutlineHome, HiOutlineArrowLeft } from 'react-icons/hi2'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30">
      <Head>
        <title>404 — Page Not Found | Suyash Vakhariya</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to Suyash Vakhariya's portfolio." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <ParticlesBackground />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Glitch-style 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[120px] md:text-[180px] font-poppins font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-md"
        >
          <h2 className="text-xl md:text-2xl font-poppins font-semibold text-white mb-3">
            Page not found
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href="/"
            className="interactive flex items-center gap-2 px-6 py-3 text-sm font-medium text-darkBg bg-primary rounded-lg hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
          >
            <HiOutlineHome className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="interactive flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-300 border border-white/10 rounded-lg hover:border-primary/30 hover:text-primary transition-all duration-300"
          >
            Read the Blog
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-xs text-gray-600"
        >
          {[
            { label: 'Projects', href: '/#projects' },
            { label: 'Experience', href: '/experience' },
            { label: 'Lab', href: '/lab' },
            { label: 'Uses', href: '/uses' },
            { label: 'Contact', href: '/#contact' },
          ].map(link => (
            <Link key={link.label} href={link.href} className="hover:text-primary transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
