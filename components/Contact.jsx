import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="mt-32 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-poppins font-semibold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-glow-lg space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="interactive w-full p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-gray-100 placeholder-gray-500"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="interactive w-full p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-gray-100 placeholder-gray-500"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="interactive w-full p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm focus:border-cyanGlow focus:outline-none focus:ring-2 focus:ring-cyanGlow/20 transition-all duration-300 text-gray-100 placeholder-gray-500 resize-none"
              placeholder="Hello..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="interactive w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary shadow-glow-lg hover:shadow-neon transform-gpu hover:scale-[1.02] transition-all duration-300 font-medium"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-glow-lg space-y-6"
        >
          <div>
            <div className="text-sm opacity-70 mb-2">Phone</div>
            <a
              href="tel:+919356179232"
              className="interactive text-lg md:text-xl font-medium text-primary hover:text-accent transition-colors"
            >
              +91 9356179232
            </a>
          </div>

          <div>
            <div className="text-sm opacity-70 mb-2">Email</div>
            <a
              href="mailto:vakhariyasuyash@gmail.com"
              className="interactive text-lg md:text-xl font-medium text-cyanGlow hover:text-coolBlue transition-colors break-all"
            >
              vakhariyasuyash@gmail.com
            </a>
          </div>

          <div>
            <div className="text-sm opacity-70 mb-2">LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/suyashvakhariya"
              target="_blank"
              rel="noreferrer"
              className="interactive text-lg md:text-xl font-medium text-cyanGlow hover:text-coolBlue transition-colors underline"
            >
              linkedin.com/in/suyashvakhariya
            </a>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-gray-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

