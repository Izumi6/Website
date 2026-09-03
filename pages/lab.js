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
        <meta name="description" content="Interactive research sandbox — live SNN neuron simulator and FAMM Memory Engine visualizer. Built by Suyash Vakhariya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://suyashvakhariya.in/lab" />
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />

        <meta property="og:title" content="AI Architecture Lab — Suyash Vakhariya" />
        <meta property="og:description" content="Interactive SNN simulator and FAMM Memory Engine visualizer — live research demos." />
        <meta property="og:url" content="https://suyashvakhariya.in/lab" />
        <meta property="og:type" content="website" />
      </Head>

      <ScrollProgress />
      <ParticlesBackground />
      <div className="floating-dust" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 pt-28"
      >
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-300"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </motion.div>

        <ArchitectureLab />
      </motion.main>
    </div>
  )
}
