'use client'

import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

function HologramCard({ mousePosition }) {
  const cardRef = useRef()
  const groupRef = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    
    try {
      if (cardRef.current && cardRef.current.position && typeof cardRef.current.position.y === 'number') {
        // Subtle floating animation
        cardRef.current.position.y = Math.sin(timeRef.current * 0.5) * 0.1
      }
    } catch (e) {
      // Silently handle position errors
    }

    // Parallax shift based on cursor
    try {
      if (groupRef.current && mousePosition && typeof mousePosition === 'object' && typeof mousePosition.x === 'number' && typeof mousePosition.y === 'number') {
        const { x, y } = mousePosition
        const targetX = (x - 0.5) * 0.3
        const targetY = (y - 0.5) * 0.3
        
        if (groupRef.current.rotation && typeof groupRef.current.rotation.y === 'number') {
          groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05
        }
        if (groupRef.current.rotation && typeof groupRef.current.rotation.x === 'number') {
          groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05
        }
      }
    } catch (e) {
      // Silently handle rotation errors
    }
  })

  // Hologram shader material
  const hologramMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color('#00C8FF') },
        color2: { value: new THREE.Color('#7C3AED') },
        color3: { value: new THREE.Color('#4CC9F0') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vec2 uv = vUv;
          
          // Rainbow sweep effect
          float sweep = sin(uv.y * 3.14159 + time * 2.0) * 0.5 + 0.5;
          vec3 rainbow = mix(mix(color1, color2, sweep), color3, sweep * 0.5);
          
          // Edge glow
          float edge = smoothstep(0.0, 0.1, min(uv.x, 1.0 - uv.x)) * 
                       smoothstep(0.0, 0.1, min(uv.y, 1.0 - uv.y));
          float glow = 1.0 - edge;
          
          // Transparency with hologram effect
          float alpha = 0.3 + glow * 0.3 + sweep * 0.2;
          vec3 finalColor = rainbow * (0.8 + glow * 0.4);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    })
  }, [])

  useFrame(() => {
    if (hologramMaterial.uniforms) {
      hologramMaterial.uniforms.time.value += 0.01
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh ref={cardRef} position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.1]} />
          <primitive object={hologramMaterial} attach="material" />
        </mesh>
        
        {/* Text on card */}
        <Text
          position={[0, 0.6, 0.06]}
          fontSize={0.15}
          color="#00C8FF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#7C3AED"
        >
          Suyash Vakhariya
        </Text>
        
        <Text
          position={[0, 0.2, 0.06]}
          fontSize={0.1}
          color="#4CC9F0"
          anchorX="center"
          anchorY="middle"
        >
          Master Card — Premium Identity
        </Text>
        
        <Text
          position={[0, -0.3, 0.06]}
          fontSize={0.08}
          color="#FFB86B"
          anchorX="center"
          anchorY="middle"
        >
          Level-X Access Clearance
        </Text>
      </group>
      
      {/* Blue edge glow lights */}
      <pointLight position={[1.5, 1, 0.2]} intensity={2} color="#00C8FF" />
      <pointLight position={[-1.5, -1, 0.2]} intensity={2} color="#7C3AED" />
      <pointLight position={[0, 0, 1]} intensity={1.5} color="#4CC9F0" />
    </Float>
  )
}

export default function HologramID({ mousePosition = { x: 0.5, y: 0.5 } }) {
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
    <div className="w-full h-full rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-sm">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.3} />
        <HologramCard mousePosition={currentMousePos} />
      </Canvas>
    </div>
  )
}

