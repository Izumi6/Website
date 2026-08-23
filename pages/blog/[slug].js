import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import ParticlesBackground from '../../components/ParticlesBackground'
import ScrollProgress from '../../components/ScrollProgress'
import { blogPosts } from '../../data/blogPosts'
import { HiOutlineArrowLeft, HiOutlineClock, HiOutlineCalendar, HiOutlineTag } from 'react-icons/hi2'

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Simple markdown-like renderer
function renderContent(content) {
  const lines = content.trim().split('\n')
  const elements = []
  let inCodeBlock = false
  let codeLines = []
  let codeLang = ''
  let inTable = false
  let tableRows = []
  let listItems = []

  function flushList() {
    if (listItems.length > 0) {
      elements.push(<ul key={`ul-${elements.length}`} className="space-y-2 my-4 pl-4">{listItems}</ul>)
      listItems = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <div key={`code-${i}`} className="my-6 rounded-xl bg-[#0d0d14] border border-white/5 overflow-hidden">
            {codeLang && <div className="px-4 py-1.5 text-[10px] font-mono text-gray-500 border-b border-white/5 uppercase">{codeLang}</div>}
            <pre className="p-4 overflow-x-auto text-sm leading-relaxed"><code className="text-gray-300 font-mono text-[13px]">{codeLines.join('\n')}</code></pre>
          </div>
        )
        codeLines = []
        inCodeBlock = false
      } else {
        flushList()
        codeLang = line.trim().replace('```', '')
        inCodeBlock = true
      }
      continue
    }
    if (inCodeBlock) { codeLines.push(line); continue }

    // Table
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) { flushList(); inTable = true; tableRows = [] }
      const cells = line.split('|').filter(c => c.trim()).map(c => c.trim())
      if (!cells.every(c => /^[-:]+$/.test(c))) tableRows.push(cells)
      continue
    } else if (inTable) {
      const header = tableRows[0]
      const body = tableRows.slice(1)
      elements.push(
        <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-xl border border-white/5">
          <table className="w-full text-sm">
            <thead><tr className="bg-white/[0.03]">{header.map((h, hi) => <th key={hi} className="px-4 py-2.5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{h}</th>)}</tr></thead>
            <tbody>{body.map((row, ri) => <tr key={ri} className="border-t border-white/5">{row.map((c, ci) => <td key={ci} className="px-4 py-2.5 text-gray-300 font-light">{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )
      inTable = false; tableRows = []
    }

    // Headings
    if (line.startsWith('## ')) { flushList(); elements.push(<h2 key={i} className="text-2xl font-poppins font-semibold text-white mt-12 mb-4">{line.replace('## ', '')}</h2>); continue }
    if (line.startsWith('### ')) { flushList(); elements.push(<h3 key={i} className="text-xl font-poppins font-medium text-white mt-8 mb-3">{line.replace('### ', '')}</h3>); continue }

    // Horizontal rule
    if (line.trim() === '---') { flushList(); elements.push(<hr key={i} className="my-8 border-white/5" />); continue }

    // List items
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const text = line.trim().replace(/^[-*]\s+/, '')
      listItems.push(<li key={`li-${i}`} className="flex gap-3 text-gray-400 leading-relaxed font-light"><span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2.5" /><span dangerouslySetInnerHTML={{ __html: inlineFormat(text) }} /></li>)
      continue
    }

    // Numbered list
    if (/^\d+\.\s/.test(line.trim())) {
      const text = line.trim().replace(/^\d+\.\s+/, '')
      const num = line.trim().match(/^(\d+)\./)[1]
      listItems.push(<li key={`li-${i}`} className="flex gap-3 text-gray-400 leading-relaxed font-light"><span className="flex-shrink-0 text-primary/60 font-mono text-xs mt-0.5">{num}.</span><span dangerouslySetInnerHTML={{ __html: inlineFormat(text) }} /></li>)
      continue
    }

    flushList()

    // Empty line
    if (line.trim() === '') continue

    // Paragraph
    elements.push(<p key={i} className="text-gray-400 leading-relaxed font-light my-4" dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />)
  }

  flushList()
  return elements
}

function inlineFormat(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-medium">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="text-gray-300">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-primary/10 text-primary/80 rounded text-xs font-mono">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noreferrer">$1</a>')
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({ params: { slug: post.id } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.id === params.slug)
  return { props: { post } }
}

export default function BlogPost({ post }) {
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30">
      <Head>
        <title>{post.title} — Suyash Vakhariya</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content="Suyash Vakhariya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />
        <link rel="canonical" href={`https://suyashvakhariya.in/blog/${post.id}`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://suyashvakhariya.in/blog/${post.id}`} />
        <meta property="og:site_name" content="Suyash Vakhariya" />
        <meta property="article:author" content="Suyash Vakhariya" />
        <meta property="article:published_time" content={post.date} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "author": { "@type": "Person", "name": "Suyash Vakhariya", "url": "https://suyashvakhariya.in" },
          "datePublished": post.date,
          "publisher": { "@type": "Person", "name": "Suyash Vakhariya" },
          "url": `https://suyashvakhariya.in/blog/${post.id}`,
          "keywords": post.tags.join(', '),
        })}} />
      </Head>

      <ScrollProgress />
      <ParticlesBackground />

      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pt-28 md:pt-36 pb-20">

        {/* Back */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-8">
            <HiOutlineArrowLeft className="w-4 h-4" /> All Articles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <span className="inline-block px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-poppins font-bold text-white leading-tight mb-6">{post.title}</h1>
          <p className="text-lg text-gray-400 font-light mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
            <span className="flex items-center gap-1.5"><HiOutlineCalendar className="w-3.5 h-3.5" />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><HiOutlineClock className="w-3.5 h-3.5" />{post.readTime}</span>
          </div>

          <div className="flex items-center gap-3 mb-10">
            <img src="/images/suyash-hero-portrait.jpg" alt="Suyash Vakhariya" className="w-8 h-8 rounded-full object-cover" />
            <div>
              <span className="text-sm text-white font-medium block leading-tight">Suyash Vakhariya</span>
              <span className="text-xs text-gray-500">AI Engineer & Technical Product Manager</span>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-primary/30 via-white/10 to-transparent mb-8" />
        </motion.header>

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose-custom"
        >
          {renderContent(post.content)}
        </motion.article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/5">
          <HiOutlineTag className="w-4 h-4 text-gray-500 mt-0.5" />
          {post.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-[11px] font-mono text-primary/60 bg-primary/[0.06] rounded-lg border border-primary/10">{tag}</span>
          ))}
        </div>

        {/* Author Card */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="flex items-center gap-4">
            <img src="/images/suyash-hero-portrait.jpg" alt="Suyash" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="text-white font-medium text-sm">Suyash Vakhariya</h4>
              <p className="text-xs text-gray-500 mt-0.5">AI Engineer & Technical Product Manager. Building production AI systems.</p>
              <div className="flex gap-3 mt-2 text-xs">
                <a href="https://github.com/Izumi6" target="_blank" rel="noreferrer" className="text-primary hover:underline">GitHub</a>
                <a href="https://linkedin.com/in/suyashvakhariya" target="_blank" rel="noreferrer" className="text-primary hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-poppins font-semibold text-white mb-6">More Articles</h3>
            <div className="space-y-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.id}`} className="block p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/15 transition-all duration-300 group">
                  <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors">{rp.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{rp.readTime} · {rp.category}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="relative z-10 py-12 text-center text-sm font-light text-gray-500 border-t border-white/5 mt-16">
        <p>© {new Date().getFullYear()} Suyash Vakhariya</p>
      </footer>
    </div>
  )
}
