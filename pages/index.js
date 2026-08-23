import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
import SectionDivider from '../components/SectionDivider'
import { HiOutlineArrowUp } from 'react-icons/hi2'

const Name3D = dynamic(() => import('../components/Name3D'), { ssr: false })

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30 vignette scan-line film-grain">
      <Head>
        <title>Suyash Vakhariya — AI Engineer & Technical Product Manager | Pune, India</title>
        <meta name="description" content="Suyash Vakhariya is an AI Engineer & Technical Product Manager from Pune, India. Building production AI systems — from ML pipelines, neural networks, and spiking neural networks to user-facing products deployed on Vercel. Published researcher in LLM agent memory management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Suyash Vakhariya, AI Engineer, Technical Product Manager, Machine Learning, Neural Networks, Spiking Neural Networks, Full Stack Developer, Pune, India, NLP, Python, TensorFlow, React, Next.js, FAMM, LLM Agents, Neuromorphic Computing" />
        <meta name="author" content="Suyash Vakhariya" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://suyashvakhariya.in" />

        {/* Favicon */}
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
        <link rel="alternate" hrefLang="en" href="https://suyashvakhariya.in" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://suyashvakhariya.in/" />
        <meta property="og:title" content="Suyash Vakhariya — AI Engineer & Technical Product Manager" />
        <meta property="og:description" content="AI Engineer & Technical Product Manager from Pune, India. Building production AI systems — from ML pipelines to user-facing products. Published researcher in LLM memory management." />
        <meta property="og:image" content="https://suyashvakhariya.in/images/suyash-hero-portrait.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Suyash Vakhariya — AI Engineer" />
        <meta property="og:site_name" content="Suyash Vakhariya" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Suyash" />
        <meta property="profile:last_name" content="Vakhariya" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://suyashvakhariya.in/" />
        <meta name="twitter:title" content="Suyash Vakhariya — AI Engineer & Technical Product Manager" />
        <meta name="twitter:description" content="AI Engineer from Pune building production ML systems, neural networks, and deployed web apps. Published researcher." />
        <meta name="twitter:image" content="https://suyashvakhariya.in/images/suyash-hero-portrait.jpg" />
        <meta name="twitter:image:alt" content="Suyash Vakhariya — AI Engineer" />

        {/* Schema.org: Person (enhanced for Knowledge Graph + GEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://suyashvakhariya.in/#person",
              "name": "Suyash Vakhariya",
              "givenName": "Suyash",
              "familyName": "Vakhariya",
              "url": "https://suyashvakhariya.in",
              "image": {
                "@type": "ImageObject",
                "url": "https://suyashvakhariya.in/images/suyash-hero-portrait.jpg",
                "width": 400,
                "height": 400
              },
              "sameAs": [
                "https://github.com/Izumi6",
                "https://www.linkedin.com/in/suyashvakhariya",
                "https://www.instagram.com/iblamesuyash",
                "https://zenodo.org/records/21168000"
              ],
              "jobTitle": "AI Engineer & Technical Product Manager",
              "description": "AI Engineer and Technical Product Manager from Pune, India. Specializes in building production machine learning systems, neural networks, and full-stack web applications. Published researcher in LLM agent memory management (FAMM framework).",
              "knowsAbout": [
                "Artificial Intelligence", "Machine Learning", "Neural Networks",
                "Spiking Neural Networks", "Neuromorphic Computing", "Natural Language Processing",
                "Python", "TensorFlow", "React", "Next.js", "Node.js",
                "Full-Stack Development", "Cloud Security", "IoT", "Embedded Systems",
                "Technical Product Management", "LLM Agents"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Savitribai Phule Pune University",
                "sameAs": "https://en.wikipedia.org/wiki/Savitribai_Phule_Pune_University"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "nationality": {
                "@type": "Country",
                "name": "India"
              }
            })
          }}
        />

        {/* Schema.org: WebSite (enables sitelinks search box in Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Suyash Vakhariya",
              "url": "https://suyashvakhariya.in",
              "description": "Personal portfolio and blog of Suyash Vakhariya — AI Engineer & Technical Product Manager",
              "author": { "@id": "https://suyashvakhariya.in/#person" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://suyashvakhariya.in/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Schema.org: FAQ (GEO — helps AI answer engines cite your site) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does Suyash Vakhariya do?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Suyash Vakhariya is an AI Engineer and Technical Product Manager from Pune, India. He builds production AI/ML systems including spam detectors, fake news classifiers, recommendation engines, and network intrusion detection systems. He has also deployed 8 production web applications on Vercel and published research on LLM agent memory management."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the FAMM framework?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FAMM (Future-Aware Adaptive Memory Management) is a research framework designed by Suyash Vakhariya and Asmita Ipper for managing memory in long-term autonomous LLM agents. It addresses context limitations, memory degradation, and retrieval inefficiency through adaptive memory organization and future-aware context prioritization. Published on Zenodo with DOI 10.5281/zenodo.21168000."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are Suyash Vakhariya's technical skills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Suyash Vakhariya is skilled in Python, TensorFlow, Scikit-learn, React, Next.js, Node.js, TypeScript, Three.js, C++, Arduino, Docker, AWS, and PostgreSQL. His expertise spans AI/ML engineering, full-stack development, cloud infrastructure, IoT/embedded systems, and technical product management."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is neuromorphic computing and spiking neural networks?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Neuromorphic computing is a bio-inspired approach to computation that mimics biological neural systems. Spiking Neural Networks (SNNs) are the third generation of neural networks that communicate through discrete electrical spikes rather than continuous values, offering energy-efficient AI processing suitable for edge computing and IoT devices. Suyash Vakhariya has built SNN architectures for signal classification."
                  }
                }
              ]
            })
          }}
        />

        {/* Schema.org: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://suyashvakhariya.in" }
              ]
            })
          }}
        />
      </Head>

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Cinematic Ambient Background */}
      <ParticlesBackground />

      {/* Floating dust layer */}
      <div className="floating-dust" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10"
      >
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Research />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <TechAchievements />
        <SectionDivider />
        <CurrentStatus />
        <SectionDivider />
        <Contact />
      </motion.main>

      {/* Footer */}
      <footer className="relative z-10 mt-32">
        {/* Gradient separator */}
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-20 h-2 bg-primary/10 blur-lg rounded-full" />
        </div>

        <div className="py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-primary/30 text-gray-500 hover:text-primary transition-all duration-300 text-sm mb-4"
            >
              <HiOutlineArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Back to Top
            </motion.button>

            {/* Nav links */}
            <div className="flex items-center gap-6 text-xs">
              <a href="#home" className="text-gray-500 hover:text-primary transition-colors duration-300">Home</a>
              <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
              <a href="#projects" className="text-gray-500 hover:text-primary transition-colors duration-300">Projects</a>
              <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
              <a href="#research" className="text-gray-500 hover:text-primary transition-colors duration-300">Research</a>
              <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
              <Link href="/blog" className="text-gray-500 hover:text-primary transition-colors duration-300">Blog</Link>
              <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
              <a href="https://github.com/Izumi6" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors duration-300">GitHub</a>
              <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
              <a href="https://www.linkedin.com/in/suyashvakhariya" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors duration-300">LinkedIn</a>
            </div>

            {/* Copyright */}
            <p className="text-sm font-light text-gray-600">
              © {new Date().getFullYear()} Suyash Vakhariya
            </p>

            {/* Built with badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-[11px] tracking-widest uppercase text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse" />
              Built with Next.js · Deployed on Vercel
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
