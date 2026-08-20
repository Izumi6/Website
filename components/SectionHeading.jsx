import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeading({ label, title, description }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      {/* Label */}
      <motion.span
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="block text-primary font-cinzel text-sm tracking-[0.3em] mb-4 uppercase"
      >
        {label}
      </motion.span>

      {/* Title with animated underline */}
      <div className="relative inline-block">
        <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-white">
          {title}
        </h2>
        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
        />
      </div>

      {/* Subtle glow behind heading */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-48 h-12 bg-primary/5 blur-3xl rounded-full mt-4" />
      </div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-gray-400 font-light text-sm max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
