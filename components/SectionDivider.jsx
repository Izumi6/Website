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

      {/* Center diamond accent */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        className="absolute w-2 h-2 bg-primary/40 border border-primary/30"
      />

      {/* Center glow */}
      <div className="absolute w-32 h-8 bg-primary/5 blur-2xl rounded-full" />
    </div>
  )
}
