'use client'

import { motion } from 'framer-motion'

export default function FloatingPill({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="copilot-floating-pill"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      animate={{
        boxShadow: [
          '0 0 16px rgba(99,102,241,0.3)',
          '0 0 28px rgba(99,102,241,0.55)',
          '0 0 16px rgba(99,102,241,0.3)',
        ],
      }}
      transition={{
        boxShadow: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }}
      aria-label="Open Suyash AI Copilot"
    >
      <span className="copilot-pill-icon">💬</span>
      <span className="copilot-pill-text">Ask Suyash AI</span>
      <kbd className="copilot-pill-kbd">⌘K</kbd>
    </motion.button>
  )
}
