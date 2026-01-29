'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

function CursorOrb() {
  const orbRef = useRef()
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const rippleRef = useRef([])
  const timeRef = useRef(0)

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  useFrame((state, delta) => {
    timeRef.current += delta
    if (orbRef.current) {
      orbRef.current.position.x = mousePos.x * 0.5
      orbRef.current.position.y = mousePos.y * 0.5
      orbRef.current.rotation.x += delta * 0.5
      orbRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <>
      <mesh ref={orbRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#00C8FF"
          emissive="#00C8FF"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Ripple rings */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[orbRef.current?.position.x || 0, orbRef.current?.position.y || 0, 0]}>
          <ringGeometry args={[0.7 + i * 0.3, 0.75 + i * 0.3, 32]} />
          <meshBasicMaterial
            color="#00C8FF"
            transparent
            opacity={0.3 - i * 0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      
      <pointLight position={[0, 0, 2]} intensity={2} color="#00C8FF" />
    </>
  )
}

export default function AICursorProject() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <CursorOrb />
      </Canvas>
    </div>
  )
}



