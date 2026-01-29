'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function RotatingName({ mousePosition }) {
  const meshRef = useRef()
  const textRef = useRef()

  // Smooth rotation (0.2 rpm = 0.2 * 360 / 60 = 1.2 degrees per second)
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += (0.2 * 360 / 60) * (Math.PI / 180) * delta
    }

    // Hover-reactive tilt
    try {
      if (textRef.current && mousePosition && typeof mousePosition === 'object' && typeof mousePosition.x === 'number' && typeof mousePosition.y === 'number') {
        const { x, y } = mousePosition
        const targetRotationX = (y - 0.5) * 0.3
        const targetRotationZ = (x - 0.5) * 0.3
        
        if (textRef.current.rotation && typeof textRef.current.rotation.x === 'number') {
          textRef.current.rotation.x += (targetRotationX - textRef.current.rotation.x) * 0.1
        }
        if (textRef.current.rotation && typeof textRef.current.rotation.z === 'number') {
          textRef.current.rotation.z += (targetRotationZ - textRef.current.rotation.z) * 0.1
        }
      }
    } catch (e) {
      // Silently handle rotation errors
    }
  })

  return (
    <group ref={meshRef}>
      {/* Aura rings behind name */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5 + i * 0.3, 0.02, 16, 100]} />
          <meshBasicMaterial
            color="#00C8FF"
            transparent
            opacity={0.2 - i * 0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Holographic fog particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={`fog-${i}`}
          position={[
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial
            color="#4CC9F0"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      <Float speed={0.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <group ref={textRef}>
          <Text
            position={[0, 0.5, 0]}
            fontSize={0.6}
            color="#00C8FF"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#7C3AED"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
          >
            Suyash
          </Text>
          <Text
            position={[0, -0.5, 0]}
            fontSize={0.6}
            color="#7C3AED"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#00C8FF"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
          >
            Vakhariya
          </Text>
        </group>
      </Float>

      {/* Floor plane with neon reflections */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#05060D"
          metalness={0.9}
          roughness={0.1}
          emissive="#00C8FF"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Enhanced neon lighting */}
      <pointLight position={[2, 2, 2]} intensity={1.5} color="#00C8FF" />
      <pointLight position={[-2, -2, 2]} intensity={1.5} color="#7C3AED" />
      <pointLight position={[0, 0, -2]} intensity={0.8} color="#4CC9F0" />
      <pointLight position={[0, -1, 0]} intensity={0.5} color="#00C8FF" />
    </group>
  )
}

export default function Name3D({ mousePosition = { x: 0.5, y: 0.5 } }) {
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
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-sm">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <RotatingName mousePosition={currentMousePos} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

