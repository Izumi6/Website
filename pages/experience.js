import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'
import ScrollProgress from '../components/ScrollProgress'
import { HiOutlineArrowLeft, HiOutlineBriefcase, HiOutlineBuildingOffice, HiOutlineMapPin, HiOutlineCalendar, HiOutlineAcademicCap, HiOutlineCheckBadge, HiOutlineBookOpen, HiOutlineDocumentText } from 'react-icons/hi2'

const experience = [
  {
    role: 'Web Development Intern',
    company: 'Veracity Software Inc',
    type: 'Full-time · On-site',
    location: 'Magarpatta City, Pune, Maharashtra',
    period: 'Feb 2026 – Mar 2026',
    duration: '2 months',
    bullets: [
      'Architected and deployed dynamic web applications through the complete Software Development Lifecycle (SDLC), from requirements gathering to production deployment.',
      'Engineered responsive, WCAG-compliant user interfaces using HTML5, CSS3, and Bootstrap, ensuring cross-browser compatibility across Chrome, Firefox, Safari, and Edge.',
      'Built interactive features and managed complex application state using JavaScript and React.js, improving page load performance and user engagement.',
      'Served as a bridge between UI/UX design and backend integration, collaborating with cross-functional teams to deliver milestones on schedule.',
      'Applied structured problem-solving methodologies to debug and resolve technical issues, delivering production-ready, resilient code.',
    ],
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'SDLC', 'REST APIs', 'Git'],
  },
]

const education = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Engineering',
    school: 'Savitribai Phule Pune University (SPPU)',
    period: '2023 – 2027',
    highlights: [
      'Specialization in Machine Learning, Embedded Systems, and Software Engineering',
      'Published research: FAMM framework for LLM agent memory management (DOI: 10.5281/zenodo.21168000)',
      'Built 6+ ML systems and 8 production web applications during coursework and independent projects',
    ],
  },
]

const researchPub = {
  title: 'FAMM: Future-Aware Adaptive Memory Management Framework for Long-Term Autonomous LLM Agents',
  authors: 'Suyash Vakhariya, Asmita Ipper',
  venue: 'Zenodo (Preprint)',
  doi: '10.5281/zenodo.21168000',
  doiUrl: 'https://doi.org/10.5281/zenodo.21168000',
  pdfUrl: 'https://zenodo.org/records/21168000/files/main.pdf',
}

const certGroups = [
  {
    issuer: 'Yuva Intern — Henry Harvin',
    color: 'from-blue-500/20 to-cyan-500/20',
    certs: [
      { title: 'Junior NLP Specialist', skills: ['NLP', 'Machine Learning'] },
      { title: 'Machine Learning Engineer', skills: ['ML', 'AI'] },
      { title: 'Cybersecurity Analyst', skills: ['Cybersecurity', 'Threat Analysis'] },
      { title: 'Junior Node.js Developer', skills: ['Node.js', 'JavaScript'] },
      { title: 'Junior Mobile App Developer', skills: ['Python', 'Mobile Dev'] },
      { title: 'AI Business Strategy Intern', skills: ['AI Strategy', 'Business'] },
      { title: 'Data Analytics Strategist', skills: ['Analytics', 'Data'] },
      { title: 'Data Science Project Manager', skills: ['Data Science', 'PM'] },
      { title: 'Business Analytics Apprentice', skills: ['Business', 'Analytics'] },
      { title: 'Entrepreneurship Program Manager', skills: ['Entrepreneurship', 'ERP'] },
      { title: 'Junior Game Developer', skills: ['Game Dev', 'Project Management'] },
    ],
  },
  {
    issuer: 'Siemens',
    color: 'from-emerald-500/20 to-green-500/20',
    certs: [
      { title: 'Certified Project Management Associate', skills: ['Project Management', 'Agile'] },
    ],
  },
  {
    issuer: 'HP (Hewlett-Packard)',
    color: 'from-blue-500/20 to-indigo-500/20',
    certs: [
      { title: 'Effective Leadership', skills: ['Leadership', 'Decision-Making'] },
      { title: 'AI for Business Professionals', skills: ['AI Applications', 'Automation'] },
      { title: 'Professional Networking for Career Growth', skills: ['Networking', 'Branding'] },
    ],
  },
  {
    issuer: 'IBM',
    color: 'from-blue-600/20 to-blue-400/20',
    certs: [
      { title: 'Generative AI for Software Development', skills: ['Generative AI', 'LLM'] },
    ],
  },
  {
    issuer: 'Tata Group',
    color: 'from-purple-500/20 to-pink-500/20',
    certs: [
      { title: 'Data Visualisation: Empowering Business with Effective Insights', skills: ['Data Viz', 'BI'] },
    ],
  },
  {
    issuer: 'Brainovision Solutions',
    color: 'from-orange-500/20 to-amber-500/20',
    certs: [
      { title: 'Java Full Stack with React JS and AI', skills: ['Java', 'React', 'AI'] },
      { title: 'Application Development with AI & Essential Skills', skills: ['App Dev', 'AI'] },
      { title: 'SDG, ESG and Industry Innovation', skills: ['Sustainability', 'Innovation'] },
    ],
  },
  {
    issuer: 'Wadhwani Foundation',
    color: 'from-teal-500/20 to-cyan-500/20',
    certs: [
      { title: 'Effective Speaking and Listening Skills', skills: ['Communication', 'Speaking'] },
    ],
  },
  {
    issuer: 'Avirat Academy',
    color: 'from-rose-500/20 to-pink-500/20',
    certs: [
      { title: 'Spoken English Course', skills: ['English', 'Public Speaking'] },
    ],
  },
]

const totalCerts = certGroups.reduce((a, g) => a + g.certs.length, 0)

function SectionHeader({ icon: Icon, label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xs font-mono tracking-[0.2em] text-primary/70 uppercase">{label}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-white">{title}</h2>
    </motion.div>
  )
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30">
      <Head>
        <title>Experience & Achievements — Suyash Vakhariya | AI Engineer</title>
        <meta name="description" content="Professional experience, education, research publications, and 22+ certifications — Suyash Vakhariya, AI Engineer & Technical Product Manager. B.E. Computer Engineering, SPPU." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />
        <meta property="og:title" content="Experience & Achievements — Suyash Vakhariya" />
        <meta property="og:description" content="Professional experience, education, research, and certifications." />
      </Head>

      <ScrollProgress />
      <ParticlesBackground />

      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-300 mb-8">
            <HiOutlineArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-4">Experience & Achievements</h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl">Professional experience, education, published research, and industry certifications.</p>
          </div>

          {/* Quick Stats Bar */}
          <div className="flex flex-wrap gap-4 mb-20 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
            {[
              { value: '1', label: 'Internship' },
              { value: '1', label: 'Research Paper' },
              { value: `${totalCerts}`, label: 'Certifications' },
              { value: '8+', label: 'Organizations' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 pr-4 border-r border-white/5 last:border-0">
                <span className="text-xl font-poppins font-bold text-primary">{s.value}</span>
                <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── EXPERIENCE ── */}
        <SectionHeader icon={HiOutlineBriefcase} label="Work" title="Professional Experience" />

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-20"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-charcoal/50 border border-primary/15 backdrop-blur-xl overflow-hidden">
              <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <HiOutlineBuildingOffice className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-2xl text-white mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{exp.company} · {exp.type}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
                    <span className="flex items-center gap-1.5"><HiOutlineCalendar className="w-3.5 h-3.5" />{exp.period} · {exp.duration}</span>
                    <span className="flex items-center gap-1.5"><HiOutlineMapPin className="w-3.5 h-3.5" />{exp.location}</span>
                  </div>

                  {/* ATS-friendly bullet points */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-gray-400 leading-relaxed font-light">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 text-[11px] font-mono text-primary/70 bg-primary/[0.06] rounded-lg border border-primary/10">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ── EDUCATION ── */}
        <SectionHeader icon={HiOutlineAcademicCap} label="Education" title="Academic Background" />

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-20"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <HiOutlineAcademicCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-xl text-white mb-1">{edu.degree} — {edu.field}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{edu.school}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-5">
                    <HiOutlineCalendar className="w-3.5 h-3.5" />{edu.period}
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-3 text-sm text-gray-400 leading-relaxed font-light">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ── PUBLICATION ── */}
        <SectionHeader icon={HiOutlineDocumentText} label="Research" title="Publication" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="p-8 rounded-2xl bg-charcoal/40 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent rounded-full" />
            <h3 className="font-poppins font-medium text-lg text-white mb-2 leading-snug">{researchPub.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{researchPub.authors} · {researchPub.venue}</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-lg text-xs font-mono text-gray-400">
                DOI <a href={researchPub.doiUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">{researchPub.doi}</a>
              </span>
              <a href={researchPub.pdfUrl} target="_blank" rel="noreferrer" className="interactive px-4 py-1.5 text-xs font-medium text-darkBg bg-primary rounded-lg hover:bg-primary/90 transition-all">
                Read Paper (PDF)
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── CERTIFICATIONS ── */}
        <SectionHeader icon={HiOutlineCheckBadge} label="Credentials" title="Certifications" />

        <p className="text-sm text-gray-500 font-light mb-8 -mt-4">
          {totalCerts} professional certifications from {certGroups.length} organizations — spanning AI/ML, cybersecurity, project management, and business analytics.
        </p>

        <div className="space-y-5">
          {certGroups.map((group, gi) => (
            <motion.div
              key={group.issuer}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.03 }}
              className="rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/10 transition-all duration-300 overflow-hidden"
            >
              {/* Issuer Header */}
              <div className={`px-6 py-4 border-b border-white/5 bg-gradient-to-r ${group.color} flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <HiOutlineCheckBadge className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-poppins font-medium text-white text-sm">{group.issuer}</h3>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono text-gray-400 bg-black/20 rounded-full backdrop-blur-sm">
                  {group.certs.length} {group.certs.length === 1 ? 'certification' : 'certifications'}
                </span>
              </div>

              {/* Certs */}
              <div className="divide-y divide-white/[0.03]">
                {group.certs.map((cert, ci) => (
                  <div key={ci} className="px-6 py-3 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 hover:bg-white/[0.015] transition-colors">
                    <span className="text-sm text-gray-300 font-light flex-1">{cert.title}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 text-[10px] font-mono text-gray-500 bg-white/5 rounded border border-white/5">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-sm font-light text-gray-500 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <p>© {new Date().getFullYear()} Suyash Vakhariya</p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <a href="https://github.com/Izumi6" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
          <p className="text-xs tracking-widest uppercase opacity-70">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </div>
  )
}
