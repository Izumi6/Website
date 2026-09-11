import Head from 'next/head'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ParticlesBackground from '../components/ParticlesBackground'
import ScrollProgress from '../components/ScrollProgress'
import { HiOutlineArrowLeft } from 'react-icons/hi2'

const ArchitectureLab = dynamic(() => import('../components/lab/ArchitectureLab'), { ssr: false })

export default function LabPage() {
  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30 vignette scan-line film-grain">
      <Head>
        <title>AI Architecture Lab — Suyash Vakhariya</title>
        <meta name="description" content="Interactive AI architecture sandbox — live SNN neuron simulator, FAMM Memory Engine visualizer, and AgentFence live security gate. Built by Suyash Vakhariya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://suyashvakhariya.in/lab" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://suyashvakhariya.in/lab" />
        <meta property="og:title" content="AI Architecture Lab — Suyash Vakhariya" />
        <meta property="og:description" content="Interactive SNN simulator, FAMM Memory Engine visualizer, and AgentFence live security gate — hands-on AI demos." />
        <meta property="og:image" content="https://suyashvakhariya.in/images/og-image.png" />
        <meta property="og:site_name" content="Suyash Vakhariya" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Architecture Lab — Suyash Vakhariya" />
        <meta name="twitter:image" content="https://suyashvakhariya.in/images/og-image.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://suyashvakhariya.in" },
                { "@type": "ListItem", "position": 2, "name": "Lab", "item": "https://suyashvakhariya.in/lab" }
              ]
            })
          }}
        />
      </Head>

      <ScrollProgress />
      <ParticlesBackground />
      <div className="floating-dust" />

      {/* Gold emblem ambient background */}
      <div className="deco-img deco-hide-mobile deco-pulse" style={{ top: '5%', right: '5%', width: '200px', height: '300px', opacity: 0.06 }}>
        <img src="/images/bg-gold-emblem.png" alt="" aria-hidden="true" loading="lazy" />
      </div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 pt-28"
      >
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <Link href="/" className="hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300">Lab</span>
          </nav>
        </motion.div>

        <ArchitectureLab />
      </motion.main>
    </div>
  )
}
