import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const HologramID = dynamic(() => import('./HologramID'), { ssr: false })
const NeuromorphicProject = dynamic(() => import('./projects/NeuromorphicProject'), { ssr: false })
const CarIgnitionCard = dynamic(() => import('./projects/CarIgnitionCard'), { ssr: false })
const AICursorProject = dynamic(() => import('./projects/AICursorProject'), { ssr: false })
const BrandingSphere = dynamic(() => import('./projects/BrandingSphere'), { ssr: false })
const SpamDetector = dynamic(() => import('./projects/SpamDetector'), { ssr: false })

const projects = [
  {
    id: 0,
    title: 'Neuromorphic Computing Research',
    desc: 'A bio-inspired computational architecture mimicking neuronal firing patterns for ultra-efficient intelligent processing.',
    tech: 'Python • TensorFlow • Neural Networks',
    gradient: 'from-blue-600 to-cyan-500',
    component: 'neuromorphic',
    borderGlow: 'border-blue-500/30'
  },
  {
    id: 1,
    title: 'Car Ignition Key Card System',
    desc: 'NFC-based smart ignition system allowing cars to start using an encrypted identity card with secure authentication.',
    tech: 'NFC • Embedded Systems • Security',
    gradient: 'from-cyan-500 to-blue-500',
    component: 'carIgnition',
    borderGlow: 'border-cyan-500/30'
  },
  {
    id: 2,
    title: 'Master Card — Premium Identity',
    desc: 'A unified national identity card integrating biometrics, digital verification, emergency data, and multi-authority access levels.',
    tech: 'Three.js • React Three Fiber • Custom Shaders',
    gradient: 'from-primary to-secondary',
    component: 'hologram',
    borderGlow: 'border-primary/30'
  },
  {
    id: 3,
    title: 'AI Cursor Interaction Engine',
    desc: 'Custom AI-powered dynamic cursor system that blends motion physics and reactive visuals.',
    tech: 'React • Framer Motion • Canvas API',
    gradient: 'from-purple-500 to-pink-500',
    component: 'aiCursor',
    borderGlow: 'border-purple-500/30'
  },
  {
    id: 4,
    title: '3D Personal Branding Sphere',
    desc: '3D branding object representing my identity, design style, and digital signature.',
    tech: 'Three.js • React Three Fiber • GLSL',
    gradient: 'from-cyan-500 to-blue-500',
    component: 'branding',
    borderGlow: 'border-cyan-500/30'
  },
  {
    id: 5,
    title: 'Smart Email Spam Detector',
    desc: 'Machine learning model trained to classify emails and block spam using NLP and probabilistic filtering.',
    tech: 'Python • NLP • Machine Learning',
    gradient: 'from-red-500 to-orange-500',
    component: 'spamDetector',
    borderGlow: 'border-red-500/30'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mt-32 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-poppins font-semibold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        Selected Projects
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => {
          const ProjectComponent = 
            project.component === 'neuromorphic' ? NeuromorphicProject :
            project.component === 'carIgnition' ? CarIgnitionCard :
            project.component === 'hologram' ? HologramID :
            project.component === 'aiCursor' ? AICursorProject :
            project.component === 'branding' ? BrandingSphere :
            project.component === 'spamDetector' ? SpamDetector : null

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`project-card interactive group relative block rounded-3xl bg-white/5 border ${project.borderGlow} backdrop-blur-xl hover:bg-white/8 hover:border-opacity-60 transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6 md:p-8">
                <h3 className="font-poppins font-semibold text-xl md:text-2xl mb-3 text-gray-100 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                  {project.desc}
                </p>
                <div className="text-xs md:text-sm text-accent/80 font-mono mb-6">
                  {project.tech}
                </div>
              </div>
              
              {/* 3D Project Visualization */}
              <div className="h-[300px] md:h-[400px] relative">
                {ProjectComponent && <ProjectComponent />}
                
                {/* Electric paths effect for neuromorphic */}
                {project.component === 'neuromorphic' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                  </div>
                )}
              </div>

              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-20`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

