import { motion } from 'framer-motion'
import { HiOutlineCpuChip, HiOutlineRocketLaunch, HiOutlineCodeBracket, HiOutlineUserGroup } from 'react-icons/hi2'
import SectionHeading from './SectionHeading'

const whatIDo = [
  {
    icon: <HiOutlineCpuChip className="w-6 h-6" />,
    title: 'AI/ML Engineering',
    desc: 'Neural networks, NLP, computer vision, and spiking neural network research.',
  },
  {
    icon: <HiOutlineRocketLaunch className="w-6 h-6" />,
    title: 'Product Development',
    desc: 'Shipping full-stack applications from idea to production on Vercel.',
  },
  {
    icon: <HiOutlineCodeBracket className="w-6 h-6" />,
    title: 'Full-Stack Apps',
    desc: 'React, Next.js, Node.js, Python — end-to-end development across the stack.',
  },
  {
    icon: <HiOutlineUserGroup className="w-6 h-6" />,
    title: 'Technical Leadership',
    desc: 'Leading projects, writing PRDs, and collaborating across research and engineering.',
  },
]

export default function About() {
  return (
    <section id="about" className="mt-8 md:mt-12">
      <SectionHeading label="Who I Am" title="About" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative p-8 md:p-12 rounded-3xl glass-card shine-sweep"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

        <div className="prose prose-lg prose-invert max-w-none text-gray-300 font-light leading-relaxed">
          <p className="mb-6">
            I&apos;m <span className="text-primary font-semibold">Suyash Vakhariya</span>, an AI Engineer and Technical Product Manager who builds at the intersection of machine learning and product design.
          </p>
          <p className="mb-6">
            My work spans from <span className="text-white font-medium">neuromorphic computing research</span> and <span className="text-white font-medium">deep learning systems</span> to shipping full-stack web applications that real users interact with daily. I&apos;ve built 6+ AI/ML systems — including spam detectors, fake news classifiers, recommendation engines, and network intrusion detection — and deployed 7 production web apps on Vercel.
          </p>
          <p>
            I bring a product-minded approach to every technical challenge: understanding user needs, writing clear specifications, and shipping reliable systems that work at scale. Whether it&apos;s training a spiking neural network or designing a cloud security dashboard, I obsess over both the engineering rigor and the user experience.
          </p>
        </div>
      </motion.div>

      {/* What I Do Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {whatIDo.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-300 shine-sweep gradient-border"
          >
            <div className="text-primary mb-3 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="font-poppins font-medium text-white text-sm mb-2">{item.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
