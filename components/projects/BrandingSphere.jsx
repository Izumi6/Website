'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function BrandSphere() {
  const sphereRef = useRef()
  const pathsRef = useRef([])
  const timeRef = useRef(0)

  useMemo(() => {
    // Create animated paths
    pathsRef.current = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2
      return {
        start: [Math.cos(angle) * 0.8, Math.sin(angle) * 0.8, 0],
        end: [Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0],
        phase: Math.random() * Math.PI * 2
      }
    })
  }, [])

  useFrame((state, delta) => {
    timeRef.current += delta
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.3
      sphereRef.current.rotation.x += delta * 0.2
    }
  })

  return (
    <group>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={sphereRef}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#00C8FF"
            emissive="#00C8FF"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Animated paths */}
      {pathsRef.current.map((path, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...path.start, ...path.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#4CC9F0"
            transparent
            opacity={0.4 + Math.sin(timeRef.current * 2 + path.phase) * 0.3}
          />
        </line>
      ))}

      <pointLight position={[2, 2, 2]} intensity={2} color="#00C8FF" />
      <pointLight position={[-2, -2, 2]} intensity={2} color="#7C3AED" />
    </group>
  )
}

export default function BrandingSphere() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <BrandSphere />
      </Canvas>
    </div>
  )
}



