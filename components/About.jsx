import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="mt-32 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-poppins font-semibold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-glow-lg hover:bg-white/7 transition-all duration-300"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <p className="text-gray-200 leading-relaxed text-lg md:text-xl mb-6 relative z-10">
          I'm <span className="text-primary font-semibold">Suyash Vakhariya</span> — a computer engineering student passionate about building immersive web experiences that seamlessly blend cutting-edge design with elegant code. I specialize in creating 3D UI components, interactive cursor systems, and polished front-end architectures that push the boundaries of web interactivity.
        </p>
        
        <p className="text-gray-300 leading-relaxed text-base md:text-lg relative z-10">
          My work focuses on creating premium, futuristic interfaces with smooth animations, glassmorphism effects, and realistic 3D elements that provide users with a truly engaging experience.
        </p>
      </motion.div>
    </section>
  )
}

