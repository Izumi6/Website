'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiOutlineAcademicCap, HiOutlineCpuChip, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineWrenchScrewdriver, HiOutlineCodeBracketSquare } from 'react-icons/hi2'

const achievements = [
  {
    id: 1,
    title: 'Neuromorphic Computing Research',
    description: 'Developed spiking neural network architectures for bio-inspired computation — bridging neuroscience and machine learning for energy-efficient AI.',
    icon: <HiOutlineAcademicCap className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    metric: 'SNN Research',
  },
  {
    id: 2,
    title: '6+ AI/ML Systems Built',
    description: 'Shipped production ML models: spam detection, fake news classification, movie recommendation, network intrusion detection, and API security monitoring.',
    icon: <HiOutlineCpuChip className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    metric: '6+ Models',
  },
  {
    id: 3,
    title: '7 Production Web Apps Deployed',
    description: 'Designed and deployed full-stack applications on Vercel — including CloudSecure, Price Pulse, Smart Study Planner, and Edunet Dashboard.',
    icon: <HiOutlineGlobeAlt className="w-8 h-8" />,
    color: 'from-cyan-500 to-emerald-500',
    metric: '7 Live Apps',
  },
  {
    id: 4,
    title: 'AI-Powered Security Systems',
    description: 'Built network intrusion detection and API security monitoring systems using ML to identify threats, anomalous patterns, and zero-day attacks.',
    icon: <HiOutlineShieldCheck className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500',
    metric: 'Security AI',
  },
  {
    id: 5,
    title: 'IoT & Embedded Systems',
    description: 'Engineered RFID-based car ignition system with encrypted identity authentication — bridging hardware (C++/Arduino) and software security.',
    icon: <HiOutlineWrenchScrewdriver className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    metric: 'IoT/Embedded',
  },
  {
    id: 6,
    title: 'Full-Stack Proficiency',
    description: 'End-to-end development across React, Next.js, Node.js, Python, TypeScript, and C++ — from ML backends to interactive 3D frontends.',
    icon: <HiOutlineCodeBracketSquare className="w-8 h-8" />,
    color: 'from-amber-500 to-yellow-500',
    metric: '22 Repos',
  },
]

export default function TechAchievements() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="achievements" className="mt-32 md:mt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="block text-primary font-cinzel text-sm tracking-[0.3em] mb-4 uppercase">
          Track Record
        </span>
        <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-white">
          Experience & Impact
        </h2>
      </motion.div>

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

            {/* Metric Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-primary">
                {achievement.icon}
              </div>
              <span className="px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-primary/70 bg-primary/10 rounded-full">
                {achievement.metric}
              </span>
            </div>

            {/* Content */}
            <h3 className="font-poppins font-semibold text-lg md:text-xl mb-3 text-gray-100 group-hover:text-primary transition-colors">
              {achievement.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm font-light">
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
