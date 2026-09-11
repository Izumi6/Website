import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      label: 'Izumi6',
      link: 'https://github.com/Izumi6',
      icon: <FaGithub className="w-8 h-8" />,
      hoverColor: 'hover:text-white',
      hoverBorder: 'hover:border-white/30',
      hoverBg: 'hover:bg-white/10',
      glowColor: 'rgba(255,255,255,0.15)',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      label: 'Suyash Vakhariya',
      link: 'https://www.linkedin.com/in/suyashvakhariya',
      icon: <FaLinkedin className="w-8 h-8" />,
      hoverColor: 'hover:text-[#0077B5]',
      hoverBorder: 'hover:border-[#0077B5]/30',
      hoverBg: 'hover:bg-[#0077B5]/10',
      glowColor: 'rgba(0,119,181,0.2)',
    },
    {
      id: 'email',
      name: 'Email',
      label: 'vakhariyasuyash@gmail.com',
      link: 'mailto:vakhariyasuyash@gmail.com',
      icon: <SiGmail className="w-8 h-8" />,
      hoverColor: 'hover:text-[#EA4335]',
      hoverBorder: 'hover:border-[#EA4335]/30',
      hoverBg: 'hover:bg-[#EA4335]/10',
      glowColor: 'rgba(234,67,53,0.2)',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      label: '@iblamesuyash',
      link: 'https://www.instagram.com/iblamesuyash',
      icon: <FaInstagram className="w-8 h-8" />,
      hoverColor: 'hover:text-[#E1306C]',
      hoverBorder: 'hover:border-[#E1306C]/30',
      hoverBg: 'hover:bg-[#E1306C]/10',
      glowColor: 'rgba(225,48,108,0.2)',
    },
  ]

  return (
    <section id="contact" className="mt-8 md:mt-12 mb-20 px-4">
      <SectionHeading
        label="Connect"
        title="Get in Touch"
        description="Open to AI engineering roles, technical product management, and research collaborations."
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target={item.id === 'email' ? '_self' : '_blank'}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group flex flex-col items-center p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all duration-300 ${item.hoverBorder} ${item.hoverBg} shine-sweep`}
            >
              {/* Icon with animated ring */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white transition-all duration-300 ${item.hoverColor}`}>
                  {item.icon}
                </div>
                {/* Pulsing ring on hover */}
                <div
                  className="absolute inset-0 rounded-full border border-white/0 group-hover:border-current opacity-0 group-hover:opacity-30 scale-100 group-hover:scale-[1.4] transition-all duration-500"
                />
                <div
                  className="absolute inset-0 rounded-full border border-white/0 group-hover:border-current opacity-0 group-hover:opacity-15 scale-100 group-hover:scale-[1.7] transition-all duration-700"
                />
              </div>

              <h3 className="text-white font-poppins font-medium text-lg mb-2">{item.name}</h3>
              <p className={`text-sm text-gray-400 transition-colors duration-300 ${item.hoverColor}`}>
                {item.label}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
