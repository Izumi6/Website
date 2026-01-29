'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text, Environment } from '@react-three/drei'
import * as THREE from 'three'

function HolographicPanel({ position, rotation, delay = 0 }) {
  const panelRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (panelRef.current) {
      // Breathing animation
      const scale = 1 + Math.sin(timeRef.current * 0.5 + delay) * 0.02
      panelRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={panelRef} position={position} rotation={rotation}>
        <mesh>
          <planeGeometry args={[2, 1.5]} />
          <meshStandardMaterial
            color="#00C8FF"
            transparent
            opacity={0.2}
            emissive="#00C8FF"
            emissiveIntensity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Glowing border */}
        <mesh>
          <ringGeometry args={[1, 1.01, 64]} />
          <meshBasicMaterial color="#00C8FF" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}

function DataRing({ radius, speed, delay = 0 }) {
  const ringRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * speed
      ringRef.current.rotation.x = Math.sin(timeRef.current * 0.3 + delay) * 0.1
    }
  })

  return (
    <group ref={ringRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Data points */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
          >
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial
              color="#00C8FF"
              emissive="#00C8FF"
              emissiveIntensity={0.8}
            />
          </mesh>
        )
      })}
    </group>
  )
}

function LightBeam({ position, rotation }) {
  const beamRef = useRef()

  useFrame(() => {
    if (beamRef.current) {
      beamRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={beamRef} position={position} rotation={rotation}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 5, 8]} />
        <meshStandardMaterial
          color="#00C8FF"
          emissive="#00C8FF"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}

function CenterPlatform() {
  const platformRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (platformRef.current) {
      const scale = 1 + Math.sin(timeRef.current * 0.5) * 0.02
      platformRef.current.scale.set(scale, 1, scale)
    }
  })

  return (
    <group ref={platformRef}>
      {/* Main platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.2, 64]} />
        <meshStandardMaterial
          color="#05060D"
          metalness={0.9}
          roughness={0.1}
          emissive="#00C8FF"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Glowing rim */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.09, 0]}>
        <ringGeometry args={[1.4, 1.5, 64]} />
        <meshStandardMaterial
          color="#00C8FF"
          emissive="#00C8FF"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}

function FogParticles() {
  const particlesRef = useRef()
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      ],
      speed: Math.random() * 0.01 + 0.005
    }))
  }, [])

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particles.forEach((particle, i) => {
        particle.position[1] += particle.speed
        if (particle.position[1] > 5) {
          particle.position[1] = -5
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
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#4CC9F0" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

function FloorReflection() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial
        color="#05060D"
        metalness={0.9}
        roughness={0.1}
        emissive="#00C8FF"
        emissiveIntensity={0.1}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function CameraController({ showAvatar }) {
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    // Slow camera orbit (disabled if avatar is shown to keep it centered)
    if (state.camera && !showAvatar) {
      const radius = 8
      const angle = timeRef.current * 0.1
      state.camera.position.x = Math.cos(angle) * radius
      state.camera.position.z = Math.sin(angle) * radius
      state.camera.lookAt(0, 0, 0)
    } else if (state.camera && showAvatar) {
      // Keep camera focused on center when avatar is shown
      state.camera.position.set(0, 2, 6)
      state.camera.lookAt(0, 0, 0)
    }
  })

  return null
}

export default function MetaverseRoom({ showAvatar = false }) {
  return (
    <div className="w-full h-screen fixed inset-0 z-0">
      <Canvas
        camera={{ position: showAvatar ? [0, 2, 6] : [8, 3, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent"
      >
        <CameraController showAvatar={showAvatar} />
        {/* Volumetric lighting */}
        <fog attach="fog" args={['#05060D', 10, 25]} />
        
        {/* Ambient fog particles */}
        <FogParticles />

        {/* Floor reflection */}
        <FloorReflection />

        {/* Holographic panels */}
        <HolographicPanel position={[-4, 2, -3]} rotation={[0, Math.PI / 4, 0]} delay={0} />
        <HolographicPanel position={[4, 2, -3]} rotation={[0, -Math.PI / 4, 0]} delay={1} />
        <HolographicPanel position={[0, 3, -4]} rotation={[0, 0, 0]} delay={2} />

        {/* Data rings */}
        <DataRing radius={3} speed={0.2} delay={0} />
        <DataRing radius={4} speed={-0.15} delay={1} />
        <DataRing radius={5} speed={0.1} delay={2} />

        {/* Light beams */}
        <LightBeam position={[-5, 3, 0]} rotation={[0, 0, Math.PI / 4]} />
        <LightBeam position={[5, 3, 0]} rotation={[0, 0, -Math.PI / 4]} />

        {/* Center platform for avatar */}
        <CenterPlatform />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={1.5} color="#00C8FF" />
        <pointLight position={[-5, 3, -5]} intensity={1} color="#7C3AED" />
        <pointLight position={[5, 3, -5]} intensity={1} color="#4CC9F0" />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#00C8FF" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  )
}

