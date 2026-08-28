'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import SectionHeading from '../SectionHeading'
import SNNControls from './SNNControls'
import useSNNSimulation from '../../hooks/useSNNSimulation'

const SNNCanvas = dynamic(() => import('./SNNCanvas'), { ssr: false })
const FAMMVisualizer = dynamic(() => import('./FAMMVisualizer'), { ssr: false })

const TABS = [
  { id: 'snn', label: '⚡ Spiking Neural Network', icon: '⚡' },
  { id: 'famm', label: '🧠 FAMM Memory Engine', icon: '🧠' },
]

export default function ArchitectureLab() {
  const [activeTab, setActiveTab] = useState('snn')
  const snn = useSNNSimulation()
  const tickRef = useRef(null)

  // SNN tick loop
  useEffect(() => {
    if (activeTab !== 'snn') return
    const loop = () => {
      snn.tick()
      tickRef.current = requestAnimationFrame(loop)
    }
    tickRef.current = requestAnimationFrame(loop)
    return () => {
      if (tickRef.current) cancelAnimationFrame(tickRef.current)
    }
  }, [activeTab, snn.tick])

  // Respect prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <motion.section
      id="lab"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 md:mt-12"
    >
      <SectionHeading
        label="Interactive Research"
        title="AI Architecture Lab"
        description="Two of my published AI systems, live and interactive. No slides. No bullet points."
      />

      {/* Lab Panel */}
      <div className="lab-panel">
        {/* Tab Bar */}
        <div className="lab-tab-bar">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`lab-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'snn' && (
            <motion.div
              key="snn"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: reducedMotion ? 0 : 0.3 }}
              className="lab-content-grid"
            >
              <div className="lab-canvas-col">
                <SNNCanvas
                  neurons={snn.neurons}
                  spikes={snn.spikes}
                  ripple={snn.ripple}
                  onCanvasClick={snn.injectCurrent}
                />
              </div>
              <div className="lab-controls-col">
                <SNNControls
                  threshold={snn.threshold}
                  setThreshold={snn.setThreshold}
                  leakRate={snn.leakRate}
                  setLeakRate={snn.setLeakRate}
                  inputCurrent={snn.inputCurrent}
                  setInputCurrent={snn.setInputCurrent}
                  metrics={snn.metrics}
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'famm' && (
            <motion.div
              key="famm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: reducedMotion ? 0 : 0.3 }}
            >
              <FAMMVisualizer />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="lab-footer">
          <span className="lab-footer-text">Based on peer-reviewed research published on Zenodo.</span>
          <a
            href="https://zenodo.org/records/21168000/files/main.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="lab-footer-link"
          >
            Read the FAMM Paper →
          </a>
          <span className="lab-footer-doi">DOI 10.5281/zenodo.21168000</span>
        </div>
      </div>
    </motion.section>
  )
}
