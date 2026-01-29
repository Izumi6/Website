'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

function KeyCard() {
  const cardRef = useRef()
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (cardRef.current) {
      cardRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        <mesh ref={cardRef} position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 1.5, 0.1]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1}
          />
        </mesh>
        
        {/* NFC chip */}
        <mesh position={[0.8, 0.3, 0.06]}>
          <boxGeometry args={[0.3, 0.3, 0.02]} />
          <meshStandardMaterial
            color="#00C8FF"
            emissive="#00C8FF"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Card text */}
        <Text
          position={[-0.5, -0.3, 0.06]}
          fontSize={0.15}
          color="#00C8FF"
          anchorX="left"
          anchorY="middle"
        >
          NFC KEY
        </Text>
      </group>
      
      {/* Glow lights */}
      <pointLight position={[1.5, 1, 0.5]} intensity={2} color="#00C8FF" />
      <pointLight position={[-1.5, -1, 0.5]} intensity={2} color="#4CC9F0" />
    </Float>
  )
}

export default function CarIgnitionCard() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <KeyCard />
      </Canvas>
    </div>
  )
}



