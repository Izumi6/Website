import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Contact() {
  const socialLinks = [
    {
      id: 'instagram',
      name: 'Instagram',
      label: 'Suyash Vakhariya',
      link: 'https://www.instagram.com/iblamesuyash',
      icon: <FaInstagram className="w-8 h-8" />,
      color: 'group-hover:text-[#E1306C]',
      borderColor: 'group-hover:border-[#E1306C]/30',
      bgColor: 'group-hover:bg-[#E1306C]/10'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      label: 'Suyash Vakhariya',
      link: 'https://www.linkedin.com/in/suyashvakhariya',
      icon: <FaLinkedin className="w-8 h-8" />,
      color: 'group-hover:text-[#0077B5]',
      borderColor: 'group-hover:border-[#0077B5]/30',
      bgColor: 'group-hover:bg-[#0077B5]/10'
    },
    {
      id: 'email',
      name: 'Email',
      label: 'vakhariyasuyash@gmail.com',
      link: 'mailto:vakhariyasuyash@gmail.com',
      icon: <SiGmail className="w-8 h-8" />,
      color: 'group-hover:text-[#EA4335]',
      borderColor: 'group-hover:border-[#EA4335]/30',
      bgColor: 'group-hover:bg-[#EA4335]/10'
    },
    {
      id: 'website',
      name: 'Book A Hostel',
      label: 'bookahostel.in',
      link: 'https://bookahostel.in/',
      image: '/images/bookahostel-logo.jpg',
      color: 'group-hover:text-[#EA4335]', // Using a brand color red similar to the logo
      borderColor: 'group-hover:border-[#EA4335]/30',
      bgColor: 'group-hover:bg-[#EA4335]/10'
    }
  ]

  return (
    <section id="contact" className="mt-32 md:mt-40 mb-20 px-4">
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
        <p className="mt-6 text-gray-400 font-light text-sm max-w-2xl mx-auto">
          Available for leadership roles, consulting, and technological partnerships.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target={item.id === 'email' ? '_self' : '_blank'}
              rel="noreferrer"
              className={`group flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${item.borderColor} ${item.bgColor}`}
            >
              <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white transition-colors duration-300 ${item.color}`}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="text-white font-cinzel text-lg mb-2">{item.name}</h3>
              <p className={`text-sm text-gray-400 transition-colors duration-300 ${item.color}`}>
                {item.label}
              </p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

