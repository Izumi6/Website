import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-16 md:py-20">
      {/* Main line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-center"
      />

      {/* Center emblem accent */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="absolute flex items-center justify-center pointer-events-none"
      >
        <img
          src="/images/bg-gold-emblem.png"
          alt=""
          aria-hidden="true"
          className="w-12 h-16 md:w-16 md:h-22 object-contain"
          style={{ mixBlendMode: 'screen', opacity: 0.8 }}
          loading="lazy"
        />
      </motion.div>

      {/* Center glow */}
      <div className="absolute w-40 h-10 bg-primary/20 blur-2xl rounded-full pointer-events-none" />
    </div>
  )
}
