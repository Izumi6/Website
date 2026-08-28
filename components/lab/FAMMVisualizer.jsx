'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MEMORY_TIERS_INITIAL = [
  {
    id: 'system',
    tier: 'SYSTEM PROMPT',
    color: 'famm-system',
    entries: [
      { text: 'You are an autonomous AI agent. Complete the user task step-by-step.', tokens: 128, pinned: true },
    ],
  },
  {
    id: 'cache',
    tier: 'FAMM PRIORITY CACHE',
    color: 'famm-cache',
    entries: [],
  },
  {
    id: 'short',
    tier: 'SHORT-TERM CONTEXT',
    color: 'famm-short',
    entries: [
      { text: '[turn 1] User: "Build me a REST API with authentication"', tokens: 48 },
      { text: '[turn 2] Agent: "Setting up Express with JWT middleware..."', tokens: 96 },
      { text: '[turn 3] User: "Add rate limiting and input validation"', tokens: 40 },
      { text: '[turn 4] Agent: "Implementing express-rate-limit + Joi schemas..."', tokens: 88 },
      { text: '[turn 5] User: "Deploy to production with Docker"', tokens: 36 },
      { text: '[turn 6] Agent: "Creating Dockerfile and docker-compose.yml..."', tokens: 104 },
      { text: '[turn 7] GOAL: Build a secure, production-ready REST API', tokens: 32, isGoal: true },
      { text: '[turn 8] DECISION: Use PostgreSQL over MongoDB for ACID compliance', tokens: 48, isDecision: true },
    ],
  },
  {
    id: 'archive',
    tier: 'COMPRESSED ARCHIVE',
    color: 'famm-archive',
    entries: [],
  },
]

function AnimatedCounter({ target, duration = 800 }) {
  const [current, setCurrent] = useState(0)
  const startRef = useRef(null)
  const targetRef = useRef(target)
  targetRef.current = target

  useEffect(() => {
    if (typeof target !== 'number') { setCurrent(target); return }
    const start = performance.now()
    const from = 0
    const to = target

    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCurrent(Math.round(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    startRef.current = requestAnimationFrame(animate)
    return () => { if (startRef.current) cancelAnimationFrame(startRef.current) }
  }, [target, duration])

  return <>{current}</>
}

export default function FAMMVisualizer() {
  const [tiers, setTiers] = useState(MEMORY_TIERS_INITIAL)
  const [phase, setPhase] = useState(0) // 0=idle, 1=compressing, 2=promoting, 3=adding, 4=stable
  const [showTokens, setShowTokens] = useState(true)
  const [contextLoad, setContextLoad] = useState(89)
  const [metrics, setMetrics] = useState({ contextLoad: 52, tokenSavings: 0, recall: '--', latency: '--' })
  const [isRunning, setIsRunning] = useState(false)

  const runSimulation = () => {
    if (isRunning) return
    setIsRunning(true)
    setTiers(MEMORY_TIERS_INITIAL)
    setPhase(0)
    setMetrics({ contextLoad: 89, tokenSavings: 0, recall: '--', latency: '--' })

    // Phase 1: Compression (0-1s)
    setTimeout(() => {
      setPhase(1)
      setTiers(prev => {
        const short = prev.find(t => t.id === 'short')
        const archive = prev.find(t => t.id === 'archive')
        const toCompress = short.entries.slice(0, 4) // first 4 entries get compressed
        const remaining = short.entries.slice(4)

        return prev.map(t => {
          if (t.id === 'short') return { ...t, entries: remaining }
          if (t.id === 'archive') return { ...t, entries: [{ text: 'Compressed: turns 1–4 (setup + initial implementation)', tokens: 80, compressed: true }] }
          return t
        })
      })
      setMetrics(m => ({ ...m, contextLoad: 61 }))
    }, 300)

    // Phase 2: FAMM Promotion (1-2.5s)
    setTimeout(() => {
      setPhase(2)
      setTiers(prev => {
        const short = prev.find(t => t.id === 'short')
        const promoted = short.entries.filter(e => e.isGoal || e.isDecision)
        const remaining = short.entries.filter(e => !e.isGoal && !e.isDecision)

        return prev.map(t => {
          if (t.id === 'cache') return { ...t, entries: promoted.map(e => ({ ...e, promoted: true })) }
          if (t.id === 'short') return { ...t, entries: remaining }
          return t
        })
      })
      setMetrics(m => ({ ...m, tokenSavings: 43 }))
    }, 1500)

    // Phase 3: New turns added (2.5-4s)
    setTimeout(() => {
      setPhase(3)
      setTiers(prev => prev.map(t => {
        if (t.id === 'short') {
          return {
            ...t,
            entries: [
              ...t.entries,
              { text: '[turn 12] User: "Can you also add error handling?"', tokens: 64, isNew: true },
              { text: '[turn 13] Agent: "Wrapping all routes in try/catch with error middleware..."', tokens: 96, isNew: true },
              { text: '[turn 14] User: "Perfect. Run the test suite."', tokens: 28, isNew: true },
            ]
          }
        }
        return t
      }))
      setMetrics(m => ({ ...m, recall: 99.2 }))
    }, 3000)

    // Phase 4: Steady state (4s+)
    setTimeout(() => {
      setPhase(4)
      setMetrics({ contextLoad: 61, tokenSavings: 68, recall: 99.2, latency: 1.2 })
      setIsRunning(false)
    }, 4200)
  }

  return (
    <div className="famm-layout">
      {/* Memory Stream Panel */}
      <div className="famm-stream">
        <div className="famm-stream-header">
          <span className="famm-stream-title">FAMM MEMORY ENGINE — LLM Agent Context</span>
        </div>

        {tiers.map((tier) => (
          <motion.div
            key={tier.id}
            layout
            className={`famm-tier ${tier.color}`}
          >
            <div className="famm-tier-header">
              <span className="famm-tier-name">{tier.tier}</span>
              {tier.id === 'cache' && tier.entries.length > 0 && (
                <span className="famm-promoted-badge">PROMOTED by FAMM ⬆</span>
              )}
              {tier.id === 'system' && <span className="famm-pin">📌</span>}
              {tier.id === 'archive' && tier.entries.length > 0 && <span className="famm-compress-icon">🗜️</span>}
            </div>

            <AnimatePresence mode="popLayout">
              {tier.entries.map((entry, i) => (
                <motion.div
                  key={`${tier.id}-${i}-${entry.text.slice(0, 20)}`}
                  layout
                  initial={entry.isNew ? { opacity: 0, y: 20 } : entry.promoted ? { opacity: 0, y: 30 } : { opacity: 1 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4, delay: entry.isNew ? i * 0.15 : 0 }}
                  className={`famm-entry ${entry.isGoal ? 'famm-goal' : ''} ${entry.isDecision ? 'famm-decision' : ''} ${entry.promoted ? 'famm-entry-promoted' : ''} ${entry.compressed ? 'famm-entry-compressed' : ''}`}
                >
                  <span className="famm-entry-text">{entry.text}</span>
                  {showTokens && <span className="famm-entry-tokens">{entry.tokens}t</span>}
                </motion.div>
              ))}
            </AnimatePresence>

            {tier.entries.length === 0 && tier.id !== 'system' && (
              <div className="famm-empty">Empty</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Controls Panel */}
      <div className="famm-controls-panel">
        <div className="lab-controls-section">
          <span className="lab-controls-label">── SIMULATION ──</span>

          <button
            className={`famm-run-btn ${isRunning ? 'running' : ''}`}
            onClick={runSimulation}
            disabled={isRunning}
          >
            {isRunning ? '⏳ Simulating...' : phase === 4 ? '↺ Run Again →' : '▶ Run Simulation →'}
          </button>

          <div className="famm-toggle-row">
            <label className="famm-toggle-label" htmlFor="showTokens">Show Token Counts</label>
            <button
              id="showTokens"
              className={`famm-toggle ${showTokens ? 'active' : ''}`}
              onClick={() => setShowTokens(!showTokens)}
              aria-label="Toggle token counts"
            >
              <span className="famm-toggle-dot" />
            </button>
          </div>
        </div>

        <div className="lab-controls-section">
          <span className="lab-controls-label">── LIVE METRICS ──</span>
          <div className="lab-metrics-grid">
            <div className="lab-metric-badge lab-metric-blue">
              <span className="lab-metric-value">
                {typeof metrics.contextLoad === 'number' ? <><AnimatedCounter target={metrics.contextLoad} />%</> : metrics.contextLoad}
              </span>
              <span className="lab-metric-label">CONTEXT LOAD</span>
            </div>
            <div className="lab-metric-badge lab-metric-emerald">
              <span className="lab-metric-value">
                {typeof metrics.tokenSavings === 'number' ? <><AnimatedCounter target={metrics.tokenSavings} />%</> : metrics.tokenSavings}
              </span>
              <span className="lab-metric-label">TOKEN SAVINGS</span>
            </div>
            <div className="lab-metric-badge lab-metric-cyan">
              <span className="lab-metric-value">
                {typeof metrics.recall === 'number' ? <>{metrics.recall}%</> : metrics.recall}
              </span>
              <span className="lab-metric-label">RECALL ACCURACY</span>
            </div>
            <div className="lab-metric-badge lab-metric-amber">
              <span className="lab-metric-value">
                {typeof metrics.latency === 'number' ? <>{metrics.latency}ms</> : metrics.latency}
              </span>
              <span className="lab-metric-label">RETRIEVAL LATENCY</span>
            </div>
          </div>
        </div>

        {phase === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="famm-stable-badge"
          >
            ✓ Context Stable
          </motion.div>
        )}
      </div>
    </div>
  )
}
