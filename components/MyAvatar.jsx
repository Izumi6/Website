'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Placeholder avatar - simple humanoid shape
function AvatarModel({ mousePosition }) {
  const groupRef = useRef()
  const headRef = useRef()
  const bodyRef = useRef()
  const timeRef = useRef(0)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    timeRef.current += delta
    
    // Breathing animation
    if (bodyRef.current) {
      const breath = Math.sin(timeRef.current * 1.5) * 0.05
      bodyRef.current.scale.y = 1 + breath
    }

    // Idle sway
    if (groupRef.current) {
      const sway = Math.sin(timeRef.current * 0.8) * 0.02
      groupRef.current.rotation.z = sway
    }

    // Head follows cursor
    if (headRef.current && mousePosition) {
      const { x, y } = mousePosition
      const targetX = (x - 0.5) * 0.3
      const targetY = (y - 0.5) * 0.2
      
      headRef.current.rotation.y += (targetX - headRef.current.rotation.y) * 0.1
      headRef.current.rotation.x += (targetY - headRef.current.rotation.x) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <group
        ref={groupRef}
        position={[0, 0, 0]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        {/* Head */}
        <mesh ref={headRef} position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
            emissive={hovered ? "#00C8FF" : "#4CC9F0"}
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </mesh>

        {/* Body */}
        <mesh ref={bodyRef} position={[0, 0.5, 0]}>
          <boxGeometry args={[0.4, 0.8, 0.3]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
            emissive="#4CC9F0"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.5, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.15, 0.6, 0.15]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
            emissive="#4CC9F0"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0.5, 0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.15, 0.6, 0.15]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
            emissive="#4CC9F0"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.15, -0.3, 0]}>
          <boxGeometry args={[0.15, 0.6, 0.15]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
            emissive="#4CC9F0"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0.15, -0.3, 0]}>
          <boxGeometry args={[0.15, 0.6, 0.15]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
            emissive="#4CC9F0"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Rim light */}
        <pointLight position={[0, 1.5, 1]} intensity={2} color="#00C8FF" />
        <pointLight position={[0, -1, 1]} intensity={1.5} color="#7C3AED" />
      </group>
    </Float>
  )
}

function GlowingParticles() {
  const particlesRef = useRef()
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ],
      speed: Math.random() * 0.02 + 0.01
    }))
  }, [])

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particles.forEach((particle, i) => {
        particle.position[1] += particle.speed
        if (particle.position[1] > 1) {
          particle.position[1] = -1
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
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#00C8FF" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

function DataRain() {
  const rainRef = useRef()
  const rain = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      position: [
        (Math.random() - 0.5) * 4,
        Math.random() * 4,
        (Math.random() - 0.5) * 4
      ],
      speed: Math.random() * 0.05 + 0.02
    }))
  }, [])

  useFrame((state, delta) => {
    if (rainRef.current) {
      rain.forEach((drop, i) => {
        drop.position[1] -= drop.speed
        if (drop.position[1] < -2) {
          drop.position[1] = 4
        }
        if (rainRef.current.children[i]) {
          rainRef.current.children[i].position.set(...drop.position)
        }
      })
    }
  })

  return (
    <group ref={rainRef} position={[0, 0, -2]}>
      {rain.map((_, i) => (
        <mesh key={i} position={rain[i].position}>
          <boxGeometry args={[0.02, 0.2, 0.02]} />
          <meshBasicMaterial color="#00C8FF" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

export default function MyAvatar({ mousePosition = { x: 0.5, y: 0.5 } }) {
  const [currentMousePos, setCurrentMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCurrentMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        
        <AvatarModel mousePosition={currentMousePos} />
        <GlowingParticles />
        <DataRain />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}

