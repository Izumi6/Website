import { motion } from 'framer-motion'
import { SiPython, SiTensorflow, SiScikitlearn, SiJupyter, SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiThreedotjs, SiDocker, SiVercel, SiAmazonwebservices, SiPostgresql, SiArduino, SiGit } from 'react-icons/si'
import { HiOutlineCpuChip, HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineCog6Tooth } from 'react-icons/hi2'
import { TbBrain, TbApi } from 'react-icons/tb'

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: <TbBrain className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Python', icon: <SiPython className="w-4 h-4" /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="w-4 h-4" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="w-4 h-4" /> },
      { name: 'NLP', icon: <TbBrain className="w-4 h-4" /> },
      { name: 'Neural Networks', icon: <HiOutlineCpuChip className="w-4 h-4" /> },
      { name: 'SNN Research', icon: <HiOutlineCpuChip className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Full-Stack Development',
    icon: <HiOutlineCog6Tooth className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
      { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4" /> },
      { name: 'Three.js', icon: <SiThreedotjs className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <HiOutlineShieldCheck className="w-5 h-5" />,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'AWS', icon: <SiAmazonwebservices className="w-4 h-4" /> },
      { name: 'Docker', icon: <SiDocker className="w-4 h-4" /> },
      { name: 'Vercel', icon: <SiVercel className="w-4 h-4" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
      { name: 'REST APIs', icon: <TbApi className="w-4 h-4" /> },
      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Embedded & IoT',
    icon: <HiOutlineCpuChip className="w-5 h-5" />,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'C++', icon: <HiOutlineCog6Tooth className="w-4 h-4" /> },
      { name: 'RFID/NFC', icon: <HiOutlineShieldCheck className="w-4 h-4" /> },
      { name: 'Arduino', icon: <SiArduino className="w-4 h-4" /> },
      { name: 'Embedded C', icon: <HiOutlineCpuChip className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Product & Data',
    icon: <HiOutlineChartBar className="w-5 h-5" />,
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Data Science', icon: <HiOutlineChartBar className="w-4 h-4" /> },
      { name: 'Jupyter', icon: <SiJupyter className="w-4 h-4" /> },
      { name: 'Agile/Scrum', icon: <HiOutlineCog6Tooth className="w-4 h-4" /> },
      { name: 'Analytics', icon: <HiOutlineChartBar className="w-4 h-4" /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mt-32 md:mt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="block text-primary font-cinzel text-sm tracking-[0.3em] mb-4 uppercase">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-white">
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-xl hover:border-primary/20 transition-all duration-300 overflow-hidden"
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 -z-10`} />

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="text-primary">{category.icon}</div>
              <h3 className="font-poppins font-medium text-white text-base">{category.title}</h3>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  className="interactive flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/5 hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-200 group/skill"
                >
                  <span className="text-gray-500 group-hover/skill:text-primary transition-colors duration-200">
                    {skill.icon}
                  </span>
                  <span className="text-xs font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
