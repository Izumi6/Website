import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ParticlesBackground from '../components/ParticlesBackground'
import SectionHeading from '../components/SectionHeading'
import { HiOutlineArrowLeft, HiOutlineCpuChip, HiOutlineCommandLine, HiOutlineGlobeAlt, HiOutlineWrenchScrewdriver, HiOutlinePaintBrush, HiOutlineBookOpen } from 'react-icons/hi2'

const categories = [
  {
    title: 'AI & Machine Learning',
    icon: <HiOutlineCpuChip className="w-6 h-6" />,
    items: [
      { name: 'Python', desc: 'Primary language for ML/AI work' },
      { name: 'TensorFlow', desc: 'Deep learning and neural networks' },
      { name: 'Scikit-learn', desc: 'Classical ML models and pipelines' },
      { name: 'Jupyter Notebook', desc: 'Experiments and data exploration' },
      { name: 'NumPy / Pandas', desc: 'Data manipulation and analysis' },
      { name: 'Matplotlib / Seaborn', desc: 'Data visualization' },
    ],
  },
  {
    title: 'Web Development',
    icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
    items: [
      { name: 'React', desc: 'Component-based UI development' },
      { name: 'Next.js', desc: 'Full-stack React framework, SSG/SSR' },
      { name: 'Node.js', desc: 'Server-side JavaScript runtime' },
      { name: 'Express.js', desc: 'REST API development' },
      { name: 'TypeScript', desc: 'Type-safe JavaScript' },
      { name: 'Three.js', desc: '3D graphics and visualizations' },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: <HiOutlineCommandLine className="w-6 h-6" />,
    items: [
      { name: 'Git / GitHub', desc: 'Version control and collaboration' },
      { name: 'Vercel', desc: 'Deployment and edge functions' },
      { name: 'Docker', desc: 'Containerization' },
      { name: 'AWS', desc: 'Cloud infrastructure' },
      { name: 'MongoDB', desc: 'NoSQL database for web apps' },
      { name: 'PostgreSQL', desc: 'Relational database' },
    ],
  },
  {
    title: 'Embedded & IoT',
    icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" />,
    items: [
      { name: 'Arduino', desc: 'Microcontroller prototyping' },
      { name: 'C++', desc: 'Embedded firmware and systems' },
      { name: 'RFID / NFC', desc: 'Wireless identification systems' },
      { name: 'SPI / I2C', desc: 'Hardware communication protocols' },
    ],
  },
  {
    title: 'Design & Productivity',
    icon: <HiOutlinePaintBrush className="w-6 h-6" />,
    items: [
      { name: 'Figma', desc: 'UI/UX design and prototyping' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework' },
      { name: 'Framer Motion', desc: 'React animation library' },
      { name: 'VS Code', desc: 'Primary code editor' },
      { name: 'Notion', desc: 'Project planning and documentation' },
    ],
  },
  {
    title: 'Currently Learning',
    icon: <HiOutlineBookOpen className="w-6 h-6" />,
    items: [
      { name: 'Rust', desc: 'Systems programming' },
      { name: 'LangChain', desc: 'LLM application framework' },
      { name: 'Kubernetes', desc: 'Container orchestration' },
      { name: 'MLOps', desc: 'ML model deployment and monitoring' },
    ],
  },
]

export default function Uses() {
  return (
    <div className="min-h-screen bg-darkBg text-secondary overflow-x-hidden selection:bg-primary/30">
      <Head>
        <title>Uses — Suyash Vakhariya | Tools & Tech Stack</title>
        <meta name="description" content="The tools, technologies, and software Suyash Vakhariya uses for AI/ML engineering, full-stack development, and research." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/suyash-hero-portrait.jpg" />
        <link rel="canonical" href="https://suyashvakhariya.in/uses" />
      </Head>

      <ParticlesBackground />

      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors duration-300 mb-8">
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        <SectionHeading
          label="My Setup"
          title="Tools & Technologies"
          description="The stack I use to build AI systems, ship web applications, and conduct research."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="group p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all duration-300 shine-sweep"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium text-sm">{item.name}</span>
                      <span className="text-gray-500 text-sm ml-2">— {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
