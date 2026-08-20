import { motion } from 'framer-motion'
import { HiOutlineSparkles, HiOutlineRocketLaunch, HiOutlineBookOpen } from 'react-icons/hi2'
import SectionHeading from './SectionHeading'

const activities = [
  {
    icon: <HiOutlineSparkles className="w-4 h-4" />,
    text: 'Researching adaptive memory management for LLM agents',
    status: 'Active',
  },
  {
    icon: <HiOutlineRocketLaunch className="w-4 h-4" />,
    text: 'Building AI-powered security monitoring tools',
    status: 'Building',
  },
  {
    icon: <HiOutlineBookOpen className="w-4 h-4" />,
    text: 'Open to AI engineering and TPM opportunities',
    status: 'Open',
  },
]

export default function CurrentStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 md:mt-12"
    >
      <SectionHeading label="Right Now" title="What I'm Working On" />

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline connector */}
        <div className="absolute left-[18px] top-6 bottom-6 w-px bg-gradient-to-b from-emerald-400/20 via-emerald-400/10 to-transparent hidden md:block" />

        <div className="space-y-3">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-400/15 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Status Pulse */}
              <div className="relative flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-30" />
              </div>

              {/* Icon */}
              <div className="text-primary flex-shrink-0 group-hover:drop-shadow-[0_0_6px_rgba(212,175,55,0.3)] transition-all duration-300">
                {activity.icon}
              </div>

              {/* Text */}
              <span className="text-sm md:text-base text-gray-300 font-light flex-1">
                {activity.text}
              </span>

              {/* Status Badge */}
              <motion.span
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(52, 211, 153, 0)',
                    '0 0 8px rgba(52, 211, 153, 0.15)',
                    '0 0 0px rgba(52, 211, 153, 0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="flex-shrink-0 px-3 py-1 text-[10px] font-mono tracking-wider uppercase text-emerald-400/80 bg-emerald-400/10 border border-emerald-400/15 rounded-full"
              >
                {activity.status}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
