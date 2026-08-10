import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'
import ScrollProgress from '../components/ScrollProgress'
import { HiOutlineArrowLeft, HiOutlineBriefcase, HiOutlineBuildingOffice, HiOutlineMapPin, HiOutlineCalendar, HiOutlineAcademicCap, HiOutlineCheckBadge } from 'react-icons/hi2'

const experience = [
  {
    role: 'Web Development Intern',
    company: 'Veracity Software Inc',
    type: 'Full-time · On-site',
    location: 'Magarpatta City, Pune, Maharashtra, India',
    period: 'Feb 2026 – Mar 2026 · 2 months',
    description: 'Played a pivotal role in architecting and deploying dynamic web applications, guiding projects through the complete Project Development Lifecycle. Served as a critical bridge between design concepts and seamless IT integration, engineering highly responsive, user-centric interfaces utilizing HTML5, CSS, and the Bootstrap framework. Leveraged JavaScript and React.js to build sophisticated interactive features, manage complex application state, and optimize performance. Applied strategic planning to ensure development milestones were met and backend integrations were executed flawlessly. Employed rigorous problem-solving methodologies to consistently deliver resilient, cross-browser compatible solutions.',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Site Development', 'UI/UX', 'Project Lifecycle'],
  },
]

const certGroups = [
  {
    issuer: 'Yuva Intern by Henry Harvin',
    date: 'Jun 2026',
    certs: [
      { title: 'Junior NLP Specialist', skills: ['NLP', 'Machine Learning', 'Text Processing'] },
      { title: 'Machine Learning Engineer', skills: ['Machine Learning', 'AI', 'Deep Learning'] },
      { title: 'Cybersecurity Analyst', skills: ['Cybersecurity', 'AI for Cybersecurity', 'Threat Analysis'] },
      { title: 'Junior Node.js Developer', skills: ['Node.js', 'JavaScript', 'Backend'] },
      { title: 'Junior Mobile App Developer', skills: ['Python', 'Mobile Development', 'Programming'] },
      { title: 'Virtual AI Business Strategy Intern', skills: ['Business Development', 'Strategic Planning', 'AI Strategy'] },
      { title: 'Data Analytics Strategist', skills: ['Data Analysis', 'Decision Making', 'Analytics'] },
      { title: 'Data Science Project Manager', skills: ['Data Analysis', 'Project Management'] },
      { title: 'Virtual Business Analytics Apprentice', skills: ['Business Management', 'Analytics'] },
      { title: 'Entrepreneurship Program Manager', skills: ['Entrepreneurship', 'ERP', 'Leadership'] },
      { title: 'Junior Game Developer', skills: ['Game Development', 'Project Management'] },
    ],
  },
  {
    issuer: 'Siemens',
    date: 'Jan 2026',
    certs: [
      { title: 'Certified Project Management Associate', skills: ['Project Management', 'Excel', 'Agile'] },
    ],
  },
  {
    issuer: 'HP',
    date: 'Jan 2026',
    certs: [
      { title: 'Effective Leadership', skills: ['Team Leadership', 'Decision-Making', 'Communication'] },
      { title: 'AI for Business Professionals', skills: ['AI Applications', 'Data-Driven Decisions', 'Automation'] },
      { title: 'Professional Networking for Career Growth', skills: ['Networking', 'Personal Branding', 'Communication'] },
    ],
  },
  {
    issuer: 'IBM',
    date: 'Aug 2024',
    certs: [
      { title: 'Generative AI for Software Development', skills: ['Generative AI', 'AI-Assisted Coding'] },
    ],
  },
  {
    issuer: 'Tata Group',
    date: 'Oct 2025',
    certs: [
      { title: 'Data Visualisation: Empowering Business with Effective Insights', skills: ['Data Visualization', 'Business Intelligence'] },
    ],
  },
  {
    issuer: 'Brainovision Solutions India',
    date: '2024 – 2025',
    certs: [
      { title: 'Java Full Stack with React JS and AI', skills: ['Java Full Stack', 'React.js', 'AI'] },
      { title: 'Application Development with AI & Essential Skills', skills: ['App Development', 'AI Integration'] },
      { title: 'SDG, ESG and Industry Innovation', skills: ['Sustainability', 'Innovation'] },
    ],
  },
  {
    issuer: 'Wadhwani Foundation',
    date: '',
    certs: [
      { title: 'Effective Speaking and Listening Skills', skills: ['Public Speaking', 'Communication'] },
    ],
  },
  {
    issuer: 'Avirat Spoken English Academy',
    date: 'Oct 2025',
    certs: [
      { title: 'Spoken English Course', skills: ['Spoken English', 'Public Speaking', 'Fluency'] },
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30">
      <Head>
        <title>Experience & Achievements — Suyash Vakhariya</title>
        <meta name="description" content="Professional experience and certifications — Suyash Vakhariya, AI Engineer & Technical Product Manager." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />
      </Head>

      <ScrollProgress />
      <ParticlesBackground />

      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-20">

        {/* Back + Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-300 mb-8">
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-20">
            <span className="block text-primary font-cinzel text-sm tracking-[0.3em] mb-4 uppercase">Career</span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-4">Experience & Achievements</h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl">Professional experience, certifications, and credentials.</p>
          </div>
        </motion.div>

        {/* ── EXPERIENCE ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-3 mb-8">
            <HiOutlineBriefcase className="w-5 h-5 text-primary" />
            <h2 className="text-xs font-mono tracking-[0.2em] text-primary/70 uppercase">Professional Experience</h2>
          </div>
        </motion.div>

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mb-20"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-charcoal/50 border border-primary/15 backdrop-blur-xl overflow-hidden">
              <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Company Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <HiOutlineBuildingOffice className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-2xl text-white mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{exp.company} · {exp.type}</p>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
                    <span className="flex items-center gap-1.5"><HiOutlineCalendar className="w-3.5 h-3.5" />{exp.period}</span>
                    <span className="flex items-center gap-1.5"><HiOutlineMapPin className="w-3.5 h-3.5" />{exp.location}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">{exp.description}</p>

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

        {/* ── CERTIFICATIONS ── */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-8">
            <HiOutlineAcademicCap className="w-5 h-5 text-primary" />
            <h2 className="text-xs font-mono tracking-[0.2em] text-primary/70 uppercase">Certifications & Credentials</h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {certGroups.map((group, gi) => (
            <motion.div
              key={group.issuer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="group rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/15 transition-all duration-300 overflow-hidden"
            >
              {/* Issuer Header */}
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <HiOutlineCheckBadge className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium text-white text-sm">{group.issuer}</h3>
                    {group.date && <p className="text-[11px] text-gray-500 mt-0.5">{group.date}</p>}
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono text-gray-500 bg-white/5 rounded-full">
                  {group.certs.length} {group.certs.length === 1 ? 'cert' : 'certs'}
                </span>
              </div>

              {/* Certs List */}
              <div className="divide-y divide-white/[0.03]">
                {group.certs.map((cert, ci) => (
                  <div key={ci} className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:bg-white/[0.02] transition-colors">
                    <span className="text-sm text-gray-300 font-light flex-1">{cert.title}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((s) => (
                        <span key={s} className="px-2 py-0.5 text-[10px] font-mono text-gray-500 bg-white/5 rounded border border-white/5">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-gray-600 font-mono tracking-wider">
            {certGroups.reduce((acc, g) => acc + g.certs.length, 0)} certifications from {certGroups.length} organizations
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
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <a href="https://github.com/Izumi6" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
          <p className="text-xs tracking-widest uppercase opacity-70">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </div>
  )
}
