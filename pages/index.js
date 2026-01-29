import Head from 'next/head'
import dynamic from 'next/dynamic'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import TechAchievements from '../components/TechAchievements'
import Contact from '../components/Contact'

const Name3D = dynamic(() => import('../components/Name3D'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darkBg via-[#0a0f1a] to-darkBg text-gray-100 overflow-x-hidden">
      <Head>
        <title>Suyash Vakhariya • 3D Portfolio</title>
        <meta name="description" content="Suyash Vakhariya — Premium 3D Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.1),transparent_50%)]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Hero />
        
        {/* 3D Rotating Name Section */}
        <section className="mt-32 md:mt-40">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            3D Identity
          </h2>
          <Name3D />
        </section>
        
        <About />
        <Skills />
        <Projects />
        <TechAchievements />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-sm opacity-60 backdrop-blur-sm border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} Suyash Vakhariya — Crafted with care
        </div>
      </footer>
    </div>
  )
}

