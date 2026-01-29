'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNetwork() {
  const groupRef = useRef()
  const nodesRef = useRef([])
  const connectionsRef = useRef([])
  const timeRef = useRef(0)

  useMemo(() => {
    // Create neural network nodes
    const nodeCount = 12
    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => {
      const angle = (i / nodeCount) * Math.PI * 2
      const radius = 1.5
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 0.5
        ],
        pulsePhase: Math.random() * Math.PI * 2
      }
    })

    // Create connections between nodes
    connectionsRef.current = []
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (Math.random() > 0.6) {
          connectionsRef.current.push([i, j])
        }
      }
    }
  }, [])

  useFrame((state, delta) => {
    timeRef.current += delta
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Neural nodes */}
      {nodesRef.current.map((node, i) => (
        <Float key={i} speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
          <mesh position={node.position}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#00C8FF"
              emissive="#00C8FF"
              emissiveIntensity={0.5 + Math.sin(timeRef.current * 2 + node.pulsePhase) * 0.3}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}

      {/* Neural connections */}
      {connectionsRef.current.map(([i, j], idx) => {
        const start = nodesRef.current[i].position
        const end = nodesRef.current[j].position
        const mid = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
          (start[2] + end[2]) / 2
        ]
        const distance = Math.sqrt(
          Math.pow(end[0] - start[0], 2) +
          Math.pow(end[1] - start[1], 2) +
          Math.pow(end[2] - start[2], 2)
        )

        return (
          <line key={idx}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([...start, ...end])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#4CC9F0"
              transparent
              opacity={0.3 + Math.sin(timeRef.current * 3 + idx) * 0.2}
            />
          </line>
        )
      })}
    </group>
  )
}

export default function NeuromorphicProject() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={1.5} color="#00C8FF" />
        <pointLight position={[-2, -2, 2]} intensity={1.5} color="#7C3AED" />
        <NeuralNetwork />
      </Canvas>
    </div>
  )
}



