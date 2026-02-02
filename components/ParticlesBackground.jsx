import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ParticlesBackground() {
    const [particles, setParticles] = useState([])

    useEffect(() => {
        // Generate random particles
        const particleCount = 20
        const newParticles = []

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100, // %
                y: Math.random() * 100, // %
                size: Math.random() * 3 + 1, // px
                duration: Math.random() * 20 + 10, // s
                delay: Math.random() * 5
            })
        }
        setParticles(newParticles)
    }, [])

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-white rounded-full opacity-10"
                    initial={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        opacity: 0.05
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, -50, 0],
                        opacity: [0.05, 0.2, 0.05]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                />
            ))}

            {/* Ambient gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.02),transparent_70%)]" />
        </div>
    )
}
