import { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function ParticlesBackground() {
  const [particles, setParticles] = useState([])
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const count = 35
    const newParticles = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 25 + 12,
        delay: Math.random() * 8,
        isGold: Math.random() > 0.6,
      })
    }
    setParticles(newParticles)
  }, [])

  const handleMouseMove = useCallback((e) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[60%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.025]"
        style={{ background: 'radial-gradient(circle, rgba(197, 160, 40, 0.5) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 40, 0],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[40%] left-[50%] w-[350px] h-[350px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, rgba(229, 192, 74, 0.4) 0%, transparent 70%)' }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.isGold ? 'bg-primary/30' : 'bg-white'}`}
          initial={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.04,
          }}
          animate={{
            y: [0, -(60 + Math.random() * 80), 0],
            x: [0, (Math.random() - 0.5) * 100, 0],
            opacity: p.isGold
              ? [0.08, 0.25, 0.08]
              : [0.04, 0.15, 0.04],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
        />
      ))}

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.015),transparent_70%)]" />

      {/* Bottom fade to ensure content readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05060D] to-transparent" />
    </div>
  )
}
