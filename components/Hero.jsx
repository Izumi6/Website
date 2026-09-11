import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineArrowDown, HiOutlineDocumentArrowDown } from 'react-icons/hi2'
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

      {/* Gold streaks — luminous ambient background behind text side */}
      <div className="deco-img deco-hide-mobile" style={{ top: '8%', left: '-8%', width: '65%', height: '80%', opacity: 0.35 }}>
        <img src="/images/bg-gold-streaks.png" alt="" aria-hidden="true" loading="lazy" />
      </div>

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

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl mb-8"
        >
          Building at the frontier of artificial intelligence, neuro-symbolic systems, and high-impact digital products.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-6 mb-8"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-xs text-gray-400 uppercase tracking-wider leading-tight font-medium">
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
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-black font-inter font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Work
              <HiOutlineArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary/20 text-white font-inter font-medium text-sm tracking-wide hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
          >
            Get In Touch
          </a>

          <a
            href="/resume.pdf"
            download="Suyash_Vakhariya_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-gray-400 hover:text-primary font-inter text-sm tracking-wide transition-colors duration-300"
          >
            <HiOutlineDocumentArrowDown className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center gap-6 pt-2"
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

      {/* Portrait Image — photo inside the gold circle frame */}
      <motion.div
        className="flex-1 order-1 md:order-2 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Outer container — sized to the exact aspect ratio of the gold circle artwork (576:1024) */}
        <div
          className="relative w-[280px] sm:w-[320px] md:w-[370px] lg:w-[410px]"
          style={{ aspectRatio: '576 / 1024' }}
        >
          {/* Portrait photo — seated mathematically inside the golden ring */}
          {/* In the 576x1024 image, circle center is X=50%, Y=22.95%, inner diameter is 61.5% */}
          <div
            className="absolute rounded-full overflow-hidden shadow-2xl shadow-black ring-2 ring-primary/40"
            style={{
              width: '61.5%',
              aspectRatio: '1 / 1',
              top: '22.95%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          >
            <img
              src="/images/suyash-hero-portrait.jpg"
              alt="Suyash Vakhariya — AI Engineer and Technical Product Manager, Pune, India"
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
            {/* Cinematic subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-darkBg/20 via-transparent to-primary/10 mix-blend-overlay pointer-events-none" />
          </div>

          {/* The gold circle frame artwork — overlays with screen blend so the luminous golden ring wraps around the photo */}
          <motion.div
            animate={{
              scale: [1, 1.012, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 2 }}
          >
            <img
              src="/images/bg-gold-circle.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ mixBlendMode: 'screen' }}
              loading="eager"
            />
          </motion.div>

          {/* Golden ambient aura behind the ring */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[65%] aspect-square bg-primary/30 blur-[60px] rounded-full pointer-events-none"
            style={{
              top: '22.95%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          />
        </div>
      </motion.div>

    </section>
  )
}
