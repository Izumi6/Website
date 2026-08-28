'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import CopilotModal from './CopilotModal'
import FloatingPill from './FloatingPill'

const CopilotContext = createContext({ open: false, setOpen: () => {} })

export function useCopilot() {
  return useContext(CopilotContext)
}

export default function CopilotProvider({ children }) {
  const [open, setOpen] = useState(false)

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e) => {
      const isMac = navigator.platform.includes('Mac')
      const triggerKey = isMac ? e.metaKey : e.ctrlKey

      if (triggerKey && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <CopilotContext.Provider value={{ open, setOpen }}>
      {children}
      <FloatingPill onClick={() => setOpen(true)} />
      <AnimatePresence>
        {open && <CopilotModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </CopilotContext.Provider>
  )
}
