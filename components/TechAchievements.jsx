'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const achievements = [
  {
    id: 1,
    title: 'Neuromorphic Computing Research',
    description: 'Published research on bio-inspired computational architectures',
    icon: '🧠',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'NFC Security Systems',
    description: 'Developed secure authentication systems for smart devices',
    icon: '🔐',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 3,
    title: 'Machine Learning Excellence',
    description: 'Built advanced ML models for email classification and spam detection',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: '3D Web Development',
    description: 'Created immersive 3D web experiences with React Three Fiber',
    icon: '🎨',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 5,
    title: 'Full-Stack Development',
    description: 'Built scalable web applications with modern tech stacks',
    icon: '⚡',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 6,
    title: 'UI/UX Design',
    description: 'Designed premium, futuristic interfaces with glassmorphism',
    icon: '✨',
    color: 'from-blue-500 to-purple-500'
  },
]

export default function TechAchievements() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="achievements" className="mt-32 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-poppins font-semibold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        Tech Achievements
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(achievement.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/8 hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
            
            {/* Glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-20`} />
            
            {/* Icon */}
            <div className="text-5xl mb-4">{achievement.icon}</div>
            
            {/* Content */}
            <h3 className="font-poppins font-semibold text-xl md:text-2xl mb-3 text-gray-100 group-hover:text-primary transition-colors">
              {achievement.title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {achievement.description}
            </p>
            
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}



