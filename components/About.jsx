import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="mt-32 md:mt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="block text-primary font-cinzel text-sm tracking-[0.3em] mb-4 uppercase">
          The Vision
        </span>
        <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-white">
          Beyond The Code
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative p-8 md:p-12 rounded-3xl bg-charcoal/30 border border-white/5 backdrop-blur-xl shadow-2xl"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

        <div className="prose prose-lg prose-invert max-w-none text-gray-300 font-light leading-relaxed">
          <p className="mb-6">
            I’m <span className="text-primary font-semibold">Suyash Vakhariya</span>, the founder of <span className="text-white font-medium hover:text-primary transition-colors cursor-pointer">BookAHostel.in</span> and a creative engineer obsessed with the future of digital interaction.
          </p>
          <p className="mb-6">
            My work exists at the edge of design and logic—where clean architecture meets cinematic visuals. I don't just build websites; I engineer brands and immersive experiences that leave a lasting impact.
          </p>
          <p>
            From scaling startup infrastructure to crafting high-fidelity 3D environments, I bring a founder’s mindset to every line of code: strategic, precise, and user-obsessed.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

