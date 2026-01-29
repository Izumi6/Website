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
      className="fixed top-6 left-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="200"
        height="60"
        viewBox="0 0 400 100"
        className="drop-shadow-[0_0_10px_rgba(0,200,255,0.6)]"
      >
        <defs>
          <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C8FF" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#4CC9F0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d={signaturePath}
          fill="none"
          stroke="url(#signatureGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isAnimated ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
        />
        
        {/* Text below signature */}
        <motion.text
          x="200"
          y="80"
          fontSize="12"
          fill="#00C8FF"
          textAnchor="middle"
          className="font-poppins"
          initial={{ opacity: 0 }}
          animate={isAnimated ? { opacity: 0.8 } : { opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Suyash Vakhariya
        </motion.text>
      </svg>
    </motion.div>
  )
}

