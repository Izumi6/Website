import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-20">
      <motion.div
        className="z-20 flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-7xl font-poppins font-bold leading-tight mb-4"
        >
          Suyash{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">
            Vakhariya
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl max-w-xl text-gray-300 leading-relaxed"
        >
          I build immersive 3D experiences, interactive web apps, and sleek UI systems that blend design and code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="interactive group relative inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary shadow-glow-lg transform-gpu hover:scale-[1.05] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-medium">See Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="interactive inline-block px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-[1.05] transition-all duration-300 font-medium"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-sm space-y-2 opacity-80"
        >
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+91 9356179232</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <a href="mailto:vakhariyasuyash@gmail.com" className="interactive hover:text-primary transition-colors">
              vakhariyasuyash@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>🔗</span>
            <a
              href="https://www.linkedin.com/in/suyashvakhariya"
              target="_blank"
              rel="noreferrer"
              className="interactive underline hover:text-primary transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative flex-1"
      >
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm shadow-glow-lg">
          <ThreeScene />
          <div className="absolute inset-0 bg-gradient-to-t from-darkBg/50 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  )
}

