'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const particlesRef = useRef()
  const particles = useRef([])

  useEffect(() => {
    // Create random particles
    const count = 100
    particles.current = Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      speed: Math.random() * 0.02 + 0.01,
    }))
  }, [])

  useFrame(() => {
    if (particlesRef.current) {
      particles.current.forEach((particle, i) => {
        particle.position[1] += particle.speed
        if (particle.position[1] > 10) {
          particle.position[1] = -10
        }
        particlesRef.current.children[i].position.set(...particle.position)
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {particles.current.map((_, i) => (
        <mesh key={i} position={particles.current[i].position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#00C8FF" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

function MorphingOrb() {
  const meshRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    
    if (meshRef.current) {
      const morph = Math.sin(timeRef.current * 0.5)
      
      // Morph between sphere, diamond, and ring
      if (morph < -0.3) {
        // Diamond shape
        meshRef.current.scale.set(1, 1, 1)
        meshRef.current.rotation.x += delta * 0.5
        meshRef.current.rotation.y += delta * 0.5
      } else if (morph > 0.3) {
        // Ring shape (torus)
        meshRef.current.scale.set(1.2, 1.2, 0.3)
      } else {
        // Sphere
        meshRef.current.scale.set(1, 1, 1)
      }
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#00C8FF"
        emissive="#00C8FF"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
      <pointLight position={[2, 2, 2]} intensity={2} color="#00C8FF" />
      <pointLight position={[-2, -2, 2]} intensity={2} color="#7C3AED" />
    </mesh>
  )
}

export default function Loader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Simulate loading time - reduced to 2 seconds for faster load
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        setIsLoading(false)
        if (onComplete) {
          try {
            onComplete()
          } catch (e) {
            console.error('Loader onComplete error:', e)
          }
        }
      }, 800) // Faster fade out
    }, 2000) // 2 seconds loading

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#05060D] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={isExiting ? { opacity: 0, backdropFilter: 'blur(20px)' } : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            {/* Particle field background */}
            <div className="absolute inset-0">
              <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ParticleField />
              </Canvas>
            </div>

            {/* Center morphing orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <MorphingOrb />
                </Canvas>
              </div>
            </div>

            {/* Loading text */}
            <motion.div
              className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-primary text-xl md:text-2xl font-poppins font-semibold text-center">
                Initializing Experience...
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

