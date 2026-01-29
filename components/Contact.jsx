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
    <section id="contact" className="mt-32 md:mt-40 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="block text-primary font-cinzel text-sm tracking-[0.3em] mb-4 uppercase">
          Connect
        </span>
        <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-white">
          Get in Touch
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-charcoal/50 border border-white/5 p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-cinzel text-white mb-2">Business Inquiries</h3>
                <p className="text-gray-400 font-light text-sm">
                  Available for leadership roles, consulting, and technological partnerships.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:vakhariyasuyash@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-white group-hover:text-primary transition-colors">vakhariyasuyash@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919356179232"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-white group-hover:text-primary transition-colors">+91 9356179232</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/suyashvakhariya"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    🔗
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Network</div>
                    <div className="text-white group-hover:text-primary transition-colors">LinkedIn Profile</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Simplified Form or Call to Action */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50" />
              <form onSubmit={handleSubmit} className="relative space-y-4 p-6 rounded-2xl border border-white/5 bg-black/20">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Message"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

