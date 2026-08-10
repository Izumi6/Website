import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'
import { HiOutlineArrowLeft, HiOutlineClock, HiOutlineCalendar } from 'react-icons/hi2'

const blogPosts = [
  {
    id: 'spiking-neural-networks',
    title: 'Building Spiking Neural Networks: A Practical Guide',
    excerpt: 'How bio-inspired computing architectures can achieve energy-efficient AI — from theory to implementation with Python and TensorFlow.',
    date: '2026-07-15',
    readTime: '8 min read',
    category: 'AI/ML Research',
    tags: ['SNN', 'Neuromorphic', 'TensorFlow', 'Python'],
    featured: true,
  },
  {
    id: 'ml-spam-detector',
    title: 'How I Built an ML-Powered Email Spam Detector',
    excerpt: 'A deep dive into NLP preprocessing, feature engineering, and probabilistic classification — achieving high-accuracy spam detection from scratch.',
    date: '2026-06-28',
    readTime: '6 min read',
    category: 'Machine Learning',
    tags: ['NLP', 'Scikit-learn', 'Classification', 'Python'],
    featured: true,
  },
  {
    id: 'shipping-7-apps-vercel',
    title: 'From Idea to Deployment: Shipping 7 Apps on Vercel',
    excerpt: 'Lessons learned from building and deploying 7 production web applications — architecture decisions, CI/CD workflows, and performance optimization.',
    date: '2026-06-10',
    readTime: '10 min read',
    category: 'Engineering',
    tags: ['Vercel', 'Next.js', 'React', 'DevOps'],
    featured: false,
  },
  {
    id: 'rfid-security-systems',
    title: 'RFID Security Systems: Bridging Hardware and Software',
    excerpt: 'Designing an NFC-based car ignition system with encrypted identity authentication — from Arduino prototyping to secure embedded C++ firmware.',
    date: '2026-05-22',
    readTime: '7 min read',
    category: 'IoT / Embedded',
    tags: ['RFID', 'NFC', 'C++', 'Arduino', 'Security'],
    featured: false,
  },
  {
    id: 'fake-news-detection-nlp',
    title: 'Fighting Misinformation with Machine Learning',
    excerpt: 'Building a fake news detection pipeline using NLP — text vectorization, model selection, and the challenges of training on real-world data.',
    date: '2026-05-05',
    readTime: '9 min read',
    category: 'AI/ML',
    tags: ['NLP', 'Fake News', 'Python', 'ML'],
    featured: false,
  },
  {
    id: 'network-intrusion-detection',
    title: 'ML-Based Network Intrusion Detection: Architecture & Lessons',
    excerpt: 'How I built a real-time network traffic analyzer that detects malicious patterns — from data preprocessing to model deployment and evaluation.',
    date: '2026-04-18',
    readTime: '8 min read',
    category: 'AI + Security',
    tags: ['Cybersecurity', 'ML', 'Python', 'Network Security'],
    featured: false,
  },
]

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog() {
  const featuredPosts = blogPosts.filter((p) => p.featured)
  const otherPosts = blogPosts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30">
      <Head>
        <title>Blog — Suyash Vakhariya | AI Engineer</title>
        <meta name="description" content="Technical articles on AI/ML, neuromorphic computing, full-stack development, and building production systems — by Suyash Vakhariya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog — Suyash Vakhariya | AI Engineer" />
        <meta property="og:description" content="Technical articles on AI/ML, neuromorphic computing, and building production systems." />
        <meta property="og:image" content="https://suyashvakhariya.com/images/suyash-hero-portrait.jpg" />
      </Head>

      <ParticlesBackground />

      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-20">

        {/* Back Link + Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-300 mb-8">
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-16">
            <span className="block text-primary font-cinzel text-sm tracking-[0.3em] mb-4 uppercase">
              Insights & Learnings
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl">
              Technical deep-dives on AI/ML research, system design, and lessons from shipping production applications.
            </p>
          </div>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xs font-mono tracking-[0.2em] text-primary/60 uppercase mb-6">Featured</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative rounded-2xl bg-charcoal/50 border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              {/* Gold accent bar */}
              <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              <div className="p-8">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-primary/80 bg-primary/10 rounded-full mb-4">
                  {post.category}
                </span>

                <h3 className="font-poppins font-semibold text-xl md:text-2xl text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-mono text-gray-500 bg-white/5 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiOutlineClock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* Other Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-xs font-mono tracking-[0.2em] text-primary/60 uppercase mb-6">All Articles</h2>
        </motion.div>

        <div className="space-y-4">
          {otherPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
              className="group relative flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase text-primary/70 bg-primary/10 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-gray-600 flex items-center gap-1">
                    <HiOutlineClock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-poppins font-medium text-lg text-white group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 font-light line-clamp-1">
                  {post.excerpt}
                </p>
              </div>

              <div className="text-xs text-gray-600 font-mono whitespace-nowrap flex items-center gap-1.5">
                <HiOutlineCalendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center p-8 rounded-2xl bg-white/[0.02] border border-dashed border-white/10"
        >
          <p className="text-gray-500 text-sm font-light">
            More articles coming soon. Follow me on{' '}
            <a href="https://www.linkedin.com/in/suyashvakhariya" target="_blank" rel="noreferrer" className="text-primary hover:underline">
              LinkedIn
            </a>{' '}
            or{' '}
            <a href="https://github.com/Izumi6" target="_blank" rel="noreferrer" className="text-primary hover:underline">
              GitHub
            </a>{' '}
            for updates.
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-sm font-light text-gray-500 border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <p>© {new Date().getFullYear()} Suyash Vakhariya</p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
            <a href="https://github.com/Izumi6" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/suyashvakhariya" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs tracking-widest uppercase opacity-70">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </div>
  )
}
