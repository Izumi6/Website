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
    component: 'neuromorphic',
  },
  {
    id: 1,
    title: 'Car Ignition Key Card System',
    desc: 'NFC-based smart ignition system allowing cars to start using an encrypted identity card with secure authentication.',
    tech: 'NFC • Embedded Systems • Security',
    component: 'carIgnition',
  },
  {
    id: 2,
    title: 'Master Card — Premium Identity',
    desc: 'A unified national identity card integrating biometrics, digital verification, emergency data, and multi-authority access levels.',
    tech: 'Three.js • React Three Fiber • Custom Shaders',
    component: 'hologram',
  },
  {
    id: 3,
    title: 'AI Cursor Interaction Engine',
    desc: 'Custom AI-powered dynamic cursor system that blends motion physics and reactive visuals.',
    tech: 'React • Framer Motion • Canvas API',
    component: 'aiCursor',
  },
  {
    id: 4,
    title: '3D Personal Branding Sphere',
    desc: '3D branding object representing my identity, design style, and digital signature.',
    tech: 'Three.js • React Three Fiber • GLSL',
    component: 'branding',
  },
  {
    id: 5,
    title: 'Smart Email Spam Detector',
    desc: 'Machine learning model trained to classify emails and block spam using NLP and probabilistic filtering.',
    tech: 'Python • NLP • Machine Learning',
    component: 'spamDetector',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mt-32 md:mt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <span className="block text-primary font-cinzel text-sm tracking-[0.3em] mb-4 uppercase">
          Selected Works
        </span>
        <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-white">
          Showcase
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl bg-charcoal border border-white/5 overflow-hidden hover:border-primary/30 transition-colors duration-500"
            >
              <div className="relative h-[300px] bg-black/40">
                {ProjectComponent && <ProjectComponent />}

                {/* Overlay gradient to blend 3D scene into card */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="relative p-8 z-10">
                <h3 className="font-poppins font-medium text-xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs text-primary/80 font-mono tracking-wide uppercase">
                    {project.tech}
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

