import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'
import { HiOutlineArrowLeft, HiOutlineClock, HiOutlineCalendar } from 'react-icons/hi2'
import { blogPosts } from '../data/blogPosts'

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
        <link rel="canonical" href="https://suyashvakhariya.com/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog — Suyash Vakhariya | AI Engineer" />
        <meta property="og:description" content="Technical articles on AI/ML, neuromorphic computing, and building production systems." />
        <meta property="og:image" content="https://suyashvakhariya.com/images/suyash-hero-portrait.jpg" />

        {/* Elegant serif font for the name */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
      </Head>

      <ParticlesBackground />

      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-20">

        {/* Elegant Name Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2
              className="text-3xl md:text-5xl lg:text-6xl tracking-wide text-white/90"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontStyle: 'italic' }}
            >
              Suyash Vakhariya
            </h2>
            {/* Decorative underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-3 mx-auto h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center"
            />
            {/* Subtle glow */}
            <div className="absolute -inset-8 bg-primary/5 blur-3xl rounded-full -z-10 opacity-50" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 text-sm tracking-[0.25em] uppercase text-gray-500 font-light"
          >
            Thoughts on AI, Engineering & Research
          </motion.p>
        </motion.div>

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
              className="group relative rounded-2xl bg-charcoal/50 border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <Link href={`/blog/${post.id}`} className="block">
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
                  <span className="text-primary text-xs font-medium">Read Article →</span>
                </div>
              </div>
              </Link>

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
              className="group relative flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`} className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
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
              </Link>
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
