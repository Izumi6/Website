'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function SignatureLogo() {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsAnimated(true)
  }, [])

  // Simplified signature path - you can replace this with your actual signature path
  const signaturePath = "M 20 50 Q 40 30, 60 50 T 100 50 Q 120 30, 140 50 T 180 50 M 200 30 L 220 70 M 240 30 L 240 70 L 260 50 L 280 70 M 300 30 L 300 70 L 320 50 L 340 70"

  return (
    <motion.div
      className="fixed top-6 left-6 z-50 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
        <img
          src="/images/suyash-hero-portrait.jpg"
          alt="Suyash Vakhariya Logo"
          className="w-full h-full object-cover"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>
    </motion.div>
  )
}

