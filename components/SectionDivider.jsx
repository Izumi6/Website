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
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="absolute flex items-center justify-center"
      >
        <img
          src="/images/bg-gold-emblem.png"
          alt=""
          aria-hidden="true"
          className="w-8 h-12 md:w-10 md:h-14 object-contain"
          style={{ mixBlendMode: 'screen', opacity: 0.2 }}
          loading="lazy"
        />
      </motion.div>

      {/* Center glow */}
      <div className="absolute w-32 h-8 bg-primary/5 blur-2xl rounded-full" />
    </div>
  )
}
