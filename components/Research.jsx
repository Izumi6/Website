import { motion } from 'framer-motion'
import { HiOutlineDocumentText, HiOutlineAcademicCap, HiOutlineArrowTopRightOnSquare, HiOutlineBookOpen } from 'react-icons/hi2'
import SectionHeading from './SectionHeading'

const paper = {
  title: 'FAMM: Future-Aware Adaptive Memory Management Framework for Long-Term Autonomous LLM Agents',
  authors: ['Suyash Vakhariya', 'Asmita Ipper'],
  abstract: 'This paper presents FAMM, a novel memory management framework designed for long-term autonomous Large Language Model (LLM) agents. Existing LLM-based agents often struggle with context limitations, memory degradation, and inefficient retrieval during prolonged interactions. FAMM addresses these challenges through adaptive memory organization, future-aware context prioritization, intelligent retrieval mechanisms, and dynamic memory optimization to improve long-term reasoning and task continuity.',
  doi: '10.5281/zenodo.21168000',
  doiUrl: 'https://doi.org/10.5281/zenodo.21168000',
  pdfUrl: 'https://zenodo.org/records/21168000/files/main.pdf',
  recordUrl: 'https://zenodo.org/records/21168000',
  publisher: 'Zenodo',
  year: '2025',
  type: 'Preprint',
  topics: ['LLM Agents', 'Memory Management', 'Autonomous AI', 'Context Optimization', 'Retrieval Mechanisms'],
}

const researchHighlights = [
  {
    label: 'Adaptive Memory',
    desc: 'Dynamic memory organization that prioritizes relevant context across extended agent interactions.',
  },
  {
    label: 'Future-Aware Prioritization',
    desc: 'Predictive context selection that anticipates future task needs for efficient reasoning.',
  },
  {
    label: 'Intelligent Retrieval',
    desc: 'Smart retrieval mechanisms that reduce memory degradation in long-running LLM sessions.',
  },
  {
    label: 'Scalable Architecture',
    desc: 'Framework designed for real-world autonomous AI agents operating in extended environments.',
  },
]

export default function Research() {
  return (
    <section id="research" className="mt-8 md:mt-12">
      <SectionHeading
        label="Published Work"
        title="Research"
        description="Peer-reviewed contributions to AI and machine learning research."
      />

      {/* Featured Paper Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Ambient glow behind card */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 blur-3xl rounded-full -z-10" />

        <div className="relative bg-charcoal/50 border border-primary/15 rounded-3xl backdrop-blur-xl overflow-hidden shine-sweep">
          {/* Gold accent top bar */}
          <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

          <div className="p-8 md:p-12">
            {/* Paper Type + Year Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 rounded-full">
                <HiOutlineAcademicCap className="w-3 h-3" />
                {paper.type}
              </span>
              <span className="px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-gray-400 bg-white/5 border border-white/5 rounded-full">
                {paper.year}
              </span>
              <span className="px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-gray-400 bg-white/5 border border-white/5 rounded-full">
                {paper.publisher}
              </span>
            </div>

            {/* Paper Title */}
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-white leading-snug mb-4 max-w-4xl">
              {paper.title}
            </h3>

            {/* Authors */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-gray-500 font-light">By</span>
              {paper.authors.map((author, i) => (
                <span key={author} className="text-sm">
                  <span className={author === 'Suyash Vakhariya' ? 'text-primary font-medium' : 'text-gray-300 font-light'}>
                    {author}
                  </span>
                  {i < paper.authors.length - 1 && <span className="text-gray-600">, </span>}
                </span>
              ))}
            </div>

            {/* Abstract */}
            <div className="relative mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent rounded-full" />
              <p className="pl-5 text-gray-400 text-sm leading-relaxed font-light max-w-4xl">
                {paper.abstract}
              </p>
            </div>

            {/* Topic Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {paper.topics.map((topic) => (
                <span key={topic} className="px-3 py-1.5 text-[11px] font-mono text-primary/70 bg-primary/[0.06] rounded-lg border border-primary/10">
                  {topic}
                </span>
              ))}
            </div>

            {/* DOI + Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-white/5">
              {/* DOI Badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-lg">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">DOI</span>
                <a
                  href={paper.doiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-primary hover:underline"
                >
                  {paper.doi}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-darkBg bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                  <HiOutlineDocumentText className="w-4 h-4" />
                  Read Paper (PDF)
                </a>
                <a
                  href={paper.recordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-300 border border-white/10 rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                  Zenodo Record
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Research Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {researchHighlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="group relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/15 transition-all duration-300 gradient-border"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3 text-primary group-hover:bg-primary/20 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] transition-all duration-300">
              <HiOutlineBookOpen className="w-4 h-4" />
            </div>
            <h4 className="font-poppins font-medium text-white text-sm mb-1.5">{item.label}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
