import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 pt-20">

      {/* Text Content */}
      <motion.div
        className="z-20 flex-1 order-2 md:order-1"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="block text-primary font-cinzel text-lg tracking-[0.2em] mb-4 uppercase">
            CEO and Founder
          </span>
          <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight mb-6">
            <span className="block text-white">Suyash</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-gradient">
              Vakhariya
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl max-w-xl text-gray-400 leading-relaxed font-light"
        >
          Driving innovation at the intersection of technology and design. Building scalable solutions and defining digital luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-darkBg font-semibold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-all duration-300 hover:border-primary/50"
          >
            Contact
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 flex items-center gap-8 text-sm text-gray-500 font-mono tracking-wider"
        >
          <a href="mailto:vakhariyasuyash@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
            <span>EMAIL</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
          </a>
          <a href="https://www.linkedin.com/in/suyashvakhariya" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
            <span>LINKEDIN</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
          </a>
        </motion.div>
      </motion.div>

      {/* Portrait Image */}
      <motion.div
        className="flex-1 order-1 md:order-2 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
          {/* Cinematic Glow Behind */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-110 animate-pulse" />

          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5 shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <img
              src="/assets/hero-portrait.png"
              alt="Suyash Vakhariya"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
            {/* Overlay Gradient for cinematic look */}
            <div className="absolute inset-0 bg-gradient-to-tr from-darkBg/60 via-transparent to-primary/10 mix-blend-overlay" />
          </div>

          {/* Floating badge or decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-4 -left-4 md:bottom-10 md:-left-10 bg-darkBg/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-gray-300">OPEN TO WORK</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}

