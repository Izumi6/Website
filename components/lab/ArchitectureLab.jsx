'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import SectionHeading from '../SectionHeading'
import SNNControls from './SNNControls'
import useSNNSimulation from '../../hooks/useSNNSimulation'

const SNNCanvas = dynamic(() => import('./SNNCanvas'), { ssr: false })
const FAMMVisualizer = dynamic(() => import('./FAMMVisualizer'), { ssr: false })
const AgentFenceTerminal = dynamic(() => import('../projects/AgentFenceTerminal'), { ssr: false })

export default function ArchitectureLab() {
  const snn = useSNNSimulation()
  const tickRef = useRef(null)

  // SNN tick loop
  useEffect(() => {
    const loop = () => {
      snn.tick()
      tickRef.current = requestAnimationFrame(loop)
    }
    tickRef.current = requestAnimationFrame(loop)
    return () => {
      if (tickRef.current) cancelAnimationFrame(tickRef.current)
    }
  }, [snn.tick])

  // Respect prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const anim = reducedMotion ? 0 : 0.8

  return (
    <motion.section
      id="lab"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: anim, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 md:mt-12"
    >
      <SectionHeading
        label="Interactive Research"
        title="AI Architecture Lab"
        description="Three of my AI systems, live and interactive. No slides. No bullet points."
      />

      {/* ─── 1. Spiking Neural Network ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: anim }}
        className="lab-panel mb-10"
      >
        <div className="lab-section-header">
          <span className="lab-section-badge lab-badge-blue">NEUROMORPHIC COMPUTING</span>
          <h3 className="lab-section-title">⚡ Spiking Neural Network Simulator</h3>
          <p className="lab-section-desc">
            A 10-neuron feed-forward network using the Leaky Integrate-and-Fire (LIF) model.
            Click on the canvas to inject current. Watch spikes propagate across layers in real-time.
          </p>
        </div>
        <div className="lab-content-grid">
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
        </div>
        <div className="lab-footer">
          <span className="lab-footer-text">Bio-inspired neural architecture for ultra-efficient signal classification.</span>
          <a href="https://github.com/Izumi6/neuromorphic-computing-snn" target="_blank" rel="noopener noreferrer" className="lab-footer-link">
            View on GitHub →
          </a>
        </div>
      </motion.div>

      {/* ─── 2. FAMM Memory Engine ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: anim, delay: 0.1 }}
        className="lab-panel mb-10"
      >
        <div className="lab-section-header">
          <span className="lab-section-badge lab-badge-violet">PUBLISHED RESEARCH</span>
          <h3 className="lab-section-title">🧠 FAMM Memory Engine Visualizer</h3>
          <p className="lab-section-desc">
            Watch how FAMM manages an LLM agent's memory in real-time — compressing old turns,
            promoting critical goals to priority cache, and maintaining 99.2% recall with 68% fewer tokens.
          </p>
        </div>
        <FAMMVisualizer />
        <div className="lab-footer">
          <span className="lab-footer-text">Based on peer-reviewed research published on Zenodo.</span>
          <a href="https://zenodo.org/records/21168000/files/main.pdf" target="_blank" rel="noopener noreferrer" className="lab-footer-link">
            Read the FAMM Paper →
          </a>
          <span className="lab-footer-doi">DOI 10.5281/zenodo.21168000</span>
        </div>
      </motion.div>

      {/* ─── 3. AgentFence Security Gate ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: anim, delay: 0.2 }}
        className="lab-panel"
      >
        <div className="lab-section-header">
          <span className="lab-section-badge lab-badge-red">AI SECURITY</span>
          <h3 className="lab-section-title">🛡️ AgentFence — Live Security Gate</h3>
          <p className="lab-section-desc">
            Type any command an AI coding agent might execute. AgentFence scans it against 6 rule categories
            in real-time — destructive commands, secret leaks, force-pushes, network exfiltration,
            privilege escalation, and environment variable access. Try it.
          </p>
        </div>
        <div className="lab-af-terminal-area">
          <AgentFenceTerminal />
        </div>
        <div className="lab-footer">
          <span className="lab-footer-text">Open-source on GitHub. Supports Model Context Protocol (MCP) natively.</span>
          <a href="https://github.com/Izumi6/agent-fence" target="_blank" rel="noopener noreferrer" className="lab-footer-link">
            View on GitHub →
          </a>
        </div>
      </motion.div>
    </motion.section>
  )
}
