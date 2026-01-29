'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, useTexture, OrbitControls, Text } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function PortraitFrame() {
  const frameRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [hasError, setHasError] = useState(false)
  
  // Load texture with error handling
  const texture = useTexture('/suyash.jpg', undefined, () => {
    setHasError(true)
  })

  useFrame((state, delta) => {
    if (frameRef.current) {
      frameRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={frameRef} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Circular frame */}
        <mesh>
          <torusGeometry args={[1.2, 0.1, 16, 100]} />
          <meshStandardMaterial
            color="#00C8FF"
            emissive="#00C8FF"
            emissiveIntensity={hovered ? 0.8 : 0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Photo plane */}
        <mesh position={[0, 0, 0.05]}>
          <circleGeometry args={[1.1, 32]} />
          <meshStandardMaterial 
            map={!hasError && texture ? texture : null}
            color={hasError ? "#1a1a2e" : "#ffffff"}
            emissive={hasError ? "#00C8FF" : undefined}
            emissiveIntensity={hasError ? 0.2 : undefined}
          />
        </mesh>
        
        {/* Placeholder text if image missing */}
        {hasError && (
          <mesh position={[0, 0, 0.06]}>
            <Text
              fontSize={0.2}
              color="#00C8FF"
              anchorX="center"
              anchorY="middle"
            >
              Add suyash.jpg
            </Text>
          </mesh>
        )}

        {/* Hologram lines on hover */}
        {hovered && (
          <>
            {[0, 1, 2].map((i) => (
              <mesh key={i} position={[0, 0, 0.06 + i * 0.01]}>
                <planeGeometry args={[2.2, 0.02]} />
                <meshBasicMaterial
                  color="#00C8FF"
                  transparent
                  opacity={0.3}
                  side={THREE.DoubleSide}
                />
              </mesh>
            ))}
          </>
        )}
      </Float>

      {/* Glow lights */}
      <pointLight position={[2, 2, 2]} intensity={hovered ? 2 : 1} color="#00C8FF" />
      <pointLight position={[-2, -2, 2]} intensity={hovered ? 2 : 1} color="#7C3AED" />
    </group>
  )
}

export default function MyPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-sm"
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <PortraitFrame />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </motion.div>
  )
}

