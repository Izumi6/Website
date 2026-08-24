import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const HologramID = dynamic(() => import('./HologramID'), { ssr: false })
const NeuromorphicProject = dynamic(() => import('./projects/NeuromorphicProject'), { ssr: false })
const CarIgnitionCard = dynamic(() => import('./projects/CarIgnitionCard'), { ssr: false })
const AICursorProject = dynamic(() => import('./projects/AICursorProject'), { ssr: false })
const SpamDetector = dynamic(() => import('./projects/SpamDetector'), { ssr: false })

const featuredProjects = [
  {
    id: 'neuromorphic',
    title: 'Neuromorphic Computing SNN',
    desc: 'Bio-inspired spiking neural network architecture mimicking neuronal firing patterns for ultra-efficient intelligent processing and signal classification.',
    tech: ['Python', 'TensorFlow', 'Neural Networks', 'SNN'],
    github: 'https://github.com/Izumi6/neuromorphic-computing-snn',
    live: null,
    component: 'neuromorphic',
    category: 'AI/ML Research',
  },
  {
    id: 'spam-detector',
    title: 'Email Spam Detection System',
    desc: 'Machine learning model trained to classify emails and block spam using NLP techniques and probabilistic filtering with high accuracy.',
    tech: ['Python', 'Scikit-learn', 'NLP', 'ML'],
    github: 'https://github.com/Izumi6/Email-Spam-Detection-System-',
    live: null,
    component: 'spamDetector',
    category: 'AI/ML',
  },
  {
    id: 'car-ignition',
    title: 'RFID Car Ignition System',
    desc: 'NFC/RFID-based smart ignition system allowing vehicles to start using an encrypted identity card with secure multi-factor authentication.',
    tech: ['C++', 'RFID', 'Embedded Systems', 'IoT'],
    github: 'https://github.com/Izumi6/RFID-Based-Car-Ignition-System',
    live: null,
    component: 'carIgnition',
    category: 'IoT / Embedded',
  },
]

const deployedProjects = [
  {
    id: 'worksphere',
    title: 'WorkSphere OS',
    desc: 'Enterprise workflow & team management platform with task tracking, internal messaging, knowledge base, scheduling, and role-based user management — powered by JWT auth and MongoDB.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Izumi6/Worksphere-os',
    live: 'https://worksphere-os.vercel.app',
    category: 'Full-Stack SaaS',
  },
  {
    id: 'agent-fence',
    title: 'AgentFence',
    desc: 'The local security gate for AI coding agents. Detects secret leaks (tokens, API keys), destructive commands (rm -rf, force-push), and unsafe network egress before execution with native Model Context Protocol (MCP) server support.',
    tech: ['Node.js', 'MCP Protocol', 'AI Security', 'DevSecOps', 'CLI'],
    github: 'https://github.com/Izumi6/agent-fence',
    live: 'https://izumi6.github.io/agent-fence/',
    category: 'AI Security & Tooling',
  },
  {
    id: 'cloud-secure',
    title: 'CloudSecure',
    desc: 'Enterprise cloud security platform with real-time threat monitoring, compliance dashboards, and automated incident response workflows.',
    tech: ['JavaScript', 'React', 'Cloud Security'],
    github: 'https://github.com/Izumi6/cloud-secure',
    live: 'https://cloud-secure-c411.vercel.app',
    category: 'Cloud Security',
  },
  {
    id: 'price-pulse',
    title: 'PricePulse',
    desc: 'Smart electronics price comparison across Amazon, Flipkart & Croma. Search, filter, sort, and find the best deals in India.',
    tech: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
    github: 'https://github.com/Izumi6/Price-Pulse',
    live: 'https://izumi6.github.io/Price-Pulse/',
    category: 'Full-Stack',
  },
  {
    id: 'smart-study',
    title: 'Smart Study Planner',
    desc: 'All-in-one smart study workspace with Pomodoro focus timer, AI revision schedule generator, active recall flashcard vault, and GPA tracker.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API', 'Productivity'],
    github: 'https://github.com/Izumi6/Smart-Study-Planner',
    live: 'https://izumi6.github.io/Smart-Study-Planner/',
    category: 'EdTech & Productivity',
  },
  {
    id: 'edunet',
    title: 'Edunet Dashboard',
    desc: 'Education analytics platform with student performance tracking, course management, and interactive data visualization dashboards.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Education'],
    github: 'https://github.com/Izumi6/edunet',
    live: 'https://edunet.vercel.app',
    category: 'EdTech',
  },
]

const aiProjects = [
  {
    id: 'fake-news',
    title: 'Fake News Detection',
    desc: 'NLP-powered misinformation classifier using advanced text analysis and machine learning to identify fake news articles with high precision.',
    tech: ['Python', 'NLP', 'ML', 'Classification'],
    github: 'https://github.com/Izumi6/Fake-News-Detection-System',
    category: 'AI/ML',
  },
  {
    id: 'movie-rec',
    title: 'Movie Recommendation System',
    desc: 'Collaborative filtering recommendation engine that analyzes user preferences and movie metadata to deliver personalized suggestions.',
    tech: ['Python', 'ML', 'Recommendation'],
    github: 'https://github.com/Izumi6/Movie-Recommendation-System',
    category: 'AI/ML',
  },
  {
    id: 'network-ids',
    title: 'Network Intrusion Detection',
    desc: 'ML-based cybersecurity system that monitors network traffic patterns and detects malicious intrusion attempts in real-time.',
    tech: ['Python', 'ML', 'Cybersecurity'],
    github: 'https://github.com/Izumi6/-Network-Intrusion-Detection-System',
    category: 'AI + Security',
  },
  {
    id: 'ai-api-monitor',
    title: 'AI API Security Monitor',
    desc: 'Intelligent API threat detection system that uses ML to identify anomalous API access patterns and potential security breaches.',
    tech: ['Python', 'API Security', 'ML'],
    github: 'https://github.com/Izumi6/ai-api-security-monitor',
    category: 'AI + Security',
  },
]

function ProjectCard({ project, index, hasVisual }) {
  const ProjectComponent =
    project.component === 'neuromorphic' ? NeuromorphicProject :
    project.component === 'carIgnition' ? CarIgnitionCard :
    project.component === 'spamDetector' ? SpamDetector : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl bg-charcoal border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shine-sweep gradient-border"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Visual (if available) */}
      {hasVisual && ProjectComponent && (
        <div className="relative h-[240px] bg-black/40">
          <ProjectComponent />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Colored top bar if no 3D visual */}
      {!hasVisual && (
        <div className="h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
      )}

      <div className="relative p-6 md:p-8 z-10">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-primary/80 bg-primary/10 rounded-full mb-4">
          {project.category}
        </span>

        <h3 className="font-poppins font-medium text-xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 font-light">
          {project.desc}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 text-[11px] font-mono text-gray-400 bg-white/5 rounded-md border border-white/5 hover:border-primary/20 hover:text-primary/80 transition-all duration-200">
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="interactive flex items-center gap-2 px-4 py-2 text-xs font-medium text-darkBg bg-primary rounded-lg hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="interactive flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-300 border border-white/10 rounded-lg hover:border-primary/30 hover:text-primary transition-all duration-300"
          >
            <FaGithub className="w-3.5 h-3.5" />
            Source Code
          </a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mt-8 md:mt-12">
      <SectionHeading
        label="Selected Works"
        title="Projects"
        description="From AI research to production web apps — built, shipped, and deployed."
      />

      {/* Featured Projects (with 3D visuals) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h3 className="text-xs font-mono tracking-[0.2em] text-primary/60 uppercase mb-6">Featured — AI / ML / Systems</h3>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} hasVisual={true} />
        ))}
      </div>

      {/* Deployed Projects (with live links) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h3 className="text-xs font-mono tracking-[0.2em] text-primary/60 uppercase mb-6">Deployed — Live on Vercel</h3>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {deployedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} hasVisual={false} />
        ))}
      </div>

      {/* AI/ML Projects (GitHub only) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h3 className="text-xs font-mono tracking-[0.2em] text-primary/60 uppercase mb-6">More AI/ML — Research & Security</h3>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {aiProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} hasVisual={false} />
        ))}
      </div>

      {/* View All on GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <a
          href="https://github.com/Izumi6?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="interactive inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300 font-mono tracking-wide group"
        >
          <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          View all 22 repositories on GitHub →
        </a>
      </motion.div>
    </section>
  )
}
