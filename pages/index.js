import Head from 'next/head'
import dynamic from 'next/dynamic'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import TechAchievements from '../components/TechAchievements'
import Contact from '../components/Contact'
import ParticlesBackground from '../components/ParticlesBackground'

const Name3D = dynamic(() => import('../components/Name3D'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30">
      <Head>
        <title>Suyash Vakhariya</title>
        <meta name="description" content="Suyash Vakhariya — Cinematic Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cinematic Ambient Background */}
      <ParticlesBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <Hero />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24 opacity-30" />

        <About />
        <Skills />
        <Projects />
        <TechAchievements />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 text-center text-sm font-light text-gray-500 border-t border-white/5 mt-32">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <p>© {new Date().getFullYear()} Suyash Vakhariya</p>
          <p className="text-xs tracking-widest uppercase opacity-70">Designed & Built with Cinematic Vision</p>
        </div>
      </footer>
    </div>
  )
}

