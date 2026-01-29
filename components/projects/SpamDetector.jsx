'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Shield() {
  const shieldRef = useRef()
  const particlesRef = useRef([])
  const timeRef = useRef(0)

  useMemo(() => {
    particlesRef.current = Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ]
    }))
  }, [])

  useFrame((state, delta) => {
    timeRef.current += delta
    if (shieldRef.current) {
      shieldRef.current.rotation.y += delta * 0.2
    }

    // Update particles
    particlesRef.current.forEach((particle) => {
      particle.position[0] += particle.velocity[0]
      particle.position[1] += particle.velocity[1]
      particle.position[2] += particle.velocity[2]
      
      // Bounce off shield
      const dist = Math.sqrt(
        particle.position[0] ** 2 + particle.position[1] ** 2 + particle.position[2] ** 2
      )
      if (dist < 1.2) {
        particle.velocity[0] *= -1.1
        particle.velocity[1] *= -1.1
        particle.velocity[2] *= -1.1
      }
    })
  })

  return (
    <group>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={shieldRef}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#00C8FF"
            emissive="#00C8FF"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>

      {/* Deflected particles */}
      {particlesRef.current.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#FF6B6B" transparent opacity={0.6} />
        </mesh>
      ))}

      <pointLight position={[0, 0, 2]} intensity={2} color="#00C8FF" />
    </group>
  )
}

export default function SpamDetector() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <Shield />
      </Canvas>
    </div>
  )
}



