'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, MeshWobbleMaterial, Stars } from '@react-three/drei'

function TorusKnotMesh() {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1}>
      <mesh position={[0, 0, 0]} castShadow>
        <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
        <MeshWobbleMaterial
          factor={2}
          speed={2}
          roughness={0.2}
          metalness={0.6}
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="bg-transparent"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0ea5e9" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#7c3aed" />
        <TorusKnotMesh />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          autoRotate
          autoRotateSpeed={1}
        />
      </Suspense>
    </Canvas>
  )
}

