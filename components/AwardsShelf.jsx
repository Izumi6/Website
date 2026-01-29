'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function CertificateScroll({ position, delay = 0 }) {
  const scrollRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (scrollRef.current) {
      scrollRef.current.rotation.y += delta * 0.2
      scrollRef.current.position.y = position[1] + Math.sin(timeRef.current * 0.5 + delay) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={scrollRef} position={position}>
        {/* Glass tube */}
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 0.6, 32]} />
          <meshStandardMaterial
            color="#00C8FF"
            transparent
            opacity={0.3}
            metalness={0.9}
            roughness={0.1}
            emissive="#00C8FF"
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Scroll inside */}
        <mesh position={[0, 0, 0.01]}>
          <cylinderGeometry args={[0.12, 0.12, 0.5, 32]} />
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}

function Medal({ position, delay = 0 }) {
  const medalRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (medalRef.current) {
      medalRef.current.rotation.y += delta * 0.3
      medalRef.current.position.y = position[1] + Math.sin(timeRef.current * 0.5 + delay) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={medalRef} position={position}>
        <mesh>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.9}
            roughness={0.1}
            emissive="#FFD700"
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* Ribbon */}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[0.15, 0.3, 0.02]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#7C3AED"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}

function Trophy({ position, delay = 0 }) {
  const trophyRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (trophyRef.current) {
      trophyRef.current.rotation.y += delta * 0.25
      trophyRef.current.position.y = position[1] + Math.sin(timeRef.current * 0.5 + delay) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={trophyRef} position={position}>
        {/* Base */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.9}
            roughness={0.1}
            emissive="#FFD700"
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* Stem */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3, 32]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.9}
            roughness={0.1}
            emissive="#FFD700"
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* Cup */}
        <mesh position={[0, 0.2, 0]}>
          <coneGeometry args={[0.2, 0.3, 32]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.9}
            roughness={0.1}
            emissive="#FFD700"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  )
}

function AchievementBadge({ position, delay = 0 }) {
  const badgeRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (badgeRef.current) {
      badgeRef.current.rotation.y += delta * 0.2
      badgeRef.current.position.y = position[1] + Math.sin(timeRef.current * 0.5 + delay) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={badgeRef} position={position}>
        <mesh>
          <octahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial
            color="#00C8FF"
            metalness={0.9}
            roughness={0.1}
            emissive="#00C8FF"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  )
}

function HologramCard({ position, delay = 0 }) {
  const cardRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (cardRef.current) {
      cardRef.current.rotation.y += delta * 0.15
      cardRef.current.position.y = position[1] + Math.sin(timeRef.current * 0.5 + delay) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={cardRef} position={position}>
        <mesh>
          <boxGeometry args={[0.3, 0.2, 0.02]} />
          <meshStandardMaterial
            color="#00C8FF"
            transparent
            opacity={0.4}
            emissive="#00C8FF"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  )
}

function Shelf() {
  return (
    <group>
      {/* Main shelf */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[6, 0.1, 0.5]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
          emissive="#00C8FF"
          emissiveIntensity={0.1}
        />
      </mesh>
      {/* Glowing rim */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[6.1, 0.02, 0.52]} />
        <meshStandardMaterial
          color="#00C8FF"
          emissive="#00C8FF"
          emissiveIntensity={0.8}
        />
      </mesh>
      {/* Support brackets */}
      {[-2.5, 2.5].map((x) => (
        <mesh key={x} position={[x, -0.5, 0]}>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial
            color="#00C8FF"
            emissive="#00C8FF"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

function ParticleDust() {
  const particlesRef = useRef()
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      position: [
        (Math.random() - 0.5) * 8,
        Math.random() * 2,
        (Math.random() - 0.5) * 1
      ],
      speed: Math.random() * 0.01 + 0.005
    }))
  }, [])

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particles.forEach((particle, i) => {
        particle.position[1] += particle.speed
        if (particle.position[1] > 2) {
          particle.position[1] = 0
        }
        if (particlesRef.current.children[i]) {
          particlesRef.current.children[i].position.set(...particle.position)
        }
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {particles.map((_, i) => (
        <mesh key={i} position={particles[i].position}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#4CC9F0" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

export default function AwardsShelf() {
  return (
    <section id="awards" className="mt-32 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-poppins font-semibold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center"
      >
        Awards & Certifications
      </motion.h2>

      <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-sm">
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 2, 3]} intensity={1.5} color="#00C8FF" />
          <pointLight position={[-3, 1, 2]} intensity={1} color="#7C3AED" />
          <pointLight position={[3, 1, 2]} intensity={1} color="#4CC9F0" />
          
          {/* Neon lights under shelf */}
          <pointLight position={[-2.5, -0.3, 0]} intensity={2} color="#00C8FF" />
          <pointLight position={[0, -0.3, 0]} intensity={2} color="#7C3AED" />
          <pointLight position={[2.5, -0.3, 0]} intensity={2} color="#4CC9F0" />

          <Shelf />
          <CertificateScroll position={[-2, 0.2, 0]} delay={0} />
          <Medal position={[-1, 0.2, 0]} delay={1} />
          <Trophy position={[0, 0.2, 0]} delay={2} />
          <AchievementBadge position={[1, 0.2, 0]} delay={3} />
          <HologramCard position={[2, 0.2, 0]} delay={4} />
          <ParticleDust />
        </Canvas>
      </div>
    </section>
  )
}



