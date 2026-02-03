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
        <meta name="description" content="Suyash Vakhariya — Cinematic Portfolio. CEO and Founder of BookAHostel.in. Solving real-world problems through scalable technology and innovative design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://suyashvakhariya.com/" />
        <meta property="og:title" content="Suyash Vakhariya — CEO & Founder" />
        <meta property="og:description" content="Cinematic Portfolio of Suyash Vakhariya. Founder of BookAHostel.in." />
        <meta property="og:image" content="https://suyashvakhariya.com/images/suyash-hero-portrait.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://suyashvakhariya.com/" />
        <meta property="twitter:title" content="Suyash Vakhariya — CEO & Founder" />
        <meta property="twitter:description" content="Cinematic Portfolio of Suyash Vakhariya. Founder of BookAHostel.in." />
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
                "https://www.instagram.com/iblamesuyash",
                "https://www.linkedin.com/in/suyashvakhariya",
                "https://bookahostel.in"
              ],
              "jobTitle": "CEO and Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "BookAHostel.in"
              },
              "description": "Founder of BookAHostel.in. Solving real-world problems through scalable technology and innovative design."
            })
          }}
        />
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

