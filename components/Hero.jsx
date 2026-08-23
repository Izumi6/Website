import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import TypingRoles from './TypingRoles'

const stats = [
  { value: 6, suffix: '+', label: 'AI/ML Projects' },
  { value: 8, suffix: '', label: 'Deployed Apps' },
  { value: 22, suffix: '', label: 'GitHub Repos' },
]

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const duration = 1500
    const stepTime = duration / end
    const timer = setInterval(() => {
      start++
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-poppins font-bold text-primary tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 pt-28 md:pt-32">

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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-inter text-sm tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <TypingRoles />
          </span>

          {/* Name in elegant calligraphic script */}
          <div className="relative mt-4 mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="leading-[1.1]"
            >
              <span
                className="block text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Suyash
              </span>
              <motion.span
                className="block text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] text-transparent bg-clip-text bg-gradient-to-r from-primary via-white/90 to-primary bg-[length:300%_auto]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                Vakhariya
              </motion.span>
            </motion.h1>

            {/* Decorative underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-[1px] w-48 md:w-72 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent origin-left mt-2"
            />

            {/* Glow behind name */}
            <div className="absolute -inset-6 bg-primary/[0.03] blur-3xl rounded-full -z-10" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl max-w-xl text-gray-400 leading-relaxed font-light"
        >
          I build production AI systems and ship products. From <span className="text-white font-medium">ML pipelines</span> to <span className="text-white font-medium">user-facing applications</span> — bridging research and real-world impact.
        </motion.p>

        {/* Proof Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-6"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-xs text-gray-500 uppercase tracking-wider leading-tight font-medium">
                {stat.label.split(' ').map((word, j) => (
                  <span key={j} className="block">{word}</span>
                ))}
              </span>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-white/10 ml-3" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-darkBg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>

          <a
            href="https://github.com/Izumi6"
            target="_blank"
            rel="noreferrer"
            className="interactive flex items-center gap-2 px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-14 flex items-center gap-6"
        >
          <a href="https://github.com/Izumi6" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm text-gray-500 font-mono tracking-wider hover:text-primary transition-colors duration-300">
            <FaGithub className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <a href="https://www.linkedin.com/in/suyashvakhariya" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm text-gray-500 font-mono tracking-wider hover:text-primary transition-colors duration-300">
            <FaLinkedin className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <a href="mailto:vakhariyasuyash@gmail.com" className="group flex items-center gap-2 text-sm text-gray-500 font-mono tracking-wider hover:text-primary transition-colors duration-300">
            <HiOutlineMail className="w-4 h-4" />
            <span>EMAIL</span>
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
          {/* Multi-layer cinematic glow */}
          <motion.div
            animate={{
              scale: [1.1, 1.2, 1.1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1.3, 1.2],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute inset-0 bg-white/5 blur-[80px] rounded-full"
          />

          {/* Rotating ring accent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full border border-dashed border-primary/10"
          />

          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5 shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <img
              src="/images/suyash-hero-portrait.jpg"
              alt="Suyash Vakhariya"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
            {/* Overlay Gradient for cinematic look */}
            <div className="absolute inset-0 bg-gradient-to-tr from-darkBg/60 via-transparent to-primary/10 mix-blend-overlay" />
          </div>
        </div>
      </motion.div>

    </section>
  )
}
