'use client'

import { motion } from 'framer-motion'
import { useSoundEffects } from '../hooks/useSoundEffects'

export default function SoundToggle() {
  const { isEnabled, toggleSound } = useSoundEffects()

  return (
    <motion.button
      onClick={toggleSound}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isEnabled ? 'Mute sounds' : 'Enable sounds'}
    >
      {isEnabled ? (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6.343 6.343l12.728 12.728M6.343 17.657L19.071 4.929" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      )}
    </motion.button>
  )
}



