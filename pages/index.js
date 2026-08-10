import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Research from '../components/Research'
import TechAchievements from '../components/TechAchievements'
import CurrentStatus from '../components/CurrentStatus'
import Contact from '../components/Contact'
import ParticlesBackground from '../components/ParticlesBackground'
import ScrollProgress from '../components/ScrollProgress'

const Name3D = dynamic(() => import('../components/Name3D'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30">
      <Head>
        <title>Suyash Vakhariya — AI Engineer & Technical Product Manager</title>
        <meta name="description" content="Suyash Vakhariya — AI Engineer & Technical Product Manager. Building production AI systems — from ML pipelines and neural networks to user-facing products deployed on Vercel." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://suyashvakhariya.com/" />
        <meta property="og:title" content="Suyash Vakhariya — AI Engineer & Technical Product Manager" />
        <meta property="og:description" content="AI Engineer & Technical Product Manager. Building production AI systems — from ML pipelines to user-facing products." />
        <meta property="og:image" content="https://suyashvakhariya.com/images/suyash-hero-portrait.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://suyashvakhariya.com/" />
        <meta property="twitter:title" content="Suyash Vakhariya — AI Engineer & Technical Product Manager" />
        <meta property="twitter:description" content="AI Engineer & Technical Product Manager. Building production AI systems — from ML pipelines to user-facing products." />
        <meta property="twitter:image" content="https://suyashvakhariya.com/images/suyash-hero-portrait.jpg" />

        {/* Schema.org JSON-LD for Google Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Suyash Vakhariya",
              "url": "https://suyashvakhariya.com",
              "image": "https://suyashvakhariya.com/images/suyash-hero-portrait.jpg",
              "sameAs": [
                "https://github.com/Izumi6",
                "https://www.linkedin.com/in/suyashvakhariya",
                "https://www.instagram.com/iblamesuyash"
              ],
              "jobTitle": "AI Engineer & Technical Product Manager",
              "description": "AI Engineer & Technical Product Manager. Building production AI systems — from ML pipelines and neural networks to user-facing products."
            })
          }}
        />
      </Head>

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Cinematic Ambient Background */}
      <ParticlesBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <Hero />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24 opacity-30" />

        <About />
        <Projects />
        <Research />
        <Skills />
        <TechAchievements />
        <CurrentStatus />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 text-center text-sm font-light text-gray-500 border-t border-white/5 mt-32">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <p>© {new Date().getFullYear()} Suyash Vakhariya</p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <a href="https://github.com/Izumi6" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/suyashvakhariya" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs tracking-widest uppercase opacity-70">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </div>
  )
}
