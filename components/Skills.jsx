import { motion } from 'framer-motion'

const skills = [
  { name: 'React / Next.js', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Three.js / R3F', icon: '🎨', color: 'from-purple-500 to-pink-500' },
  { name: 'TailwindCSS', icon: '💨', color: 'from-cyan-500 to-blue-500' },
  { name: 'Framer Motion', icon: '✨', color: 'from-purple-500 to-indigo-500' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="mt-32 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-poppins font-semibold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        Skills & Technologies
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              z: 50,
              transition: { duration: 0.2 }
            }}
            className="interactive project-card group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/8 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            
            <div className="text-4xl mb-3">{skill.icon}</div>
            <h3 className="font-semibold text-lg text-gray-200">{skill.name}</h3>
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

