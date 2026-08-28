import { useState, useCallback, useRef, useEffect } from 'react'

// Neuron layout: 3-layer feed-forward (3 input → 4 hidden → 3 output)
const NEURON_POSITIONS = [
  // Layer 1 (Input)
  { id: 0, x: 80, y: 80, layer: 0 },
  { id: 1, x: 80, y: 190, layer: 0 },
  { id: 2, x: 80, y: 300, layer: 0 },
  // Layer 2 (Hidden)
  { id: 3, x: 280, y: 60, layer: 1 },
  { id: 4, x: 280, y: 150, layer: 1 },
  { id: 5, x: 280, y: 240, layer: 1 },
  { id: 6, x: 280, y: 330, layer: 1 },
  // Layer 3 (Output)
  { id: 7, x: 560, y: 100, layer: 2 },
  { id: 8, x: 560, y: 190, layer: 2 },
  { id: 9, x: 560, y: 280, layer: 2 },
]

const SYNAPSES = [
  [0, 3], [0, 4],
  [1, 4], [1, 5],
  [2, 5], [2, 6],
  [3, 7],
  [4, 7], [4, 8],
  [5, 8], [5, 9],
  [6, 9],
]

const INPUT_NEURON_IDS = [0, 1, 2]
const REFRACTORY_TICKS = 12

function initNeurons() {
  return NEURON_POSITIONS.map(pos => ({
    ...pos,
    membrane_potential: 0,
    threshold: 1.0,
    refractory_countdown: 0,
    fired_at: 0,
    firing_frames: 0,
  }))
}

export default function useSNNSimulation() {
  const [neurons, setNeurons] = useState(initNeurons)
  const [spikes, setSpikes] = useState([]) // active spike particles traveling along synapses
  const [threshold, setThreshold] = useState(1.0)
  const [leakRate, setLeakRate] = useState(0.9)
  const [inputCurrent, setInputCurrent] = useState(0.4)
  const [metrics, setMetrics] = useState({ spikeRate: 0, energyCost: 0, efficiency: 0, activeNeurons: 0 })
  const [ripple, setRipple] = useState(null) // { x, y, age }

  const spikeCountRef = useRef(0)
  const tickCountRef = useRef(0)
  const neuronsRef = useRef(neurons)
  const spikesRef = useRef(spikes)

  neuronsRef.current = neurons
  spikesRef.current = spikes

  // Click handler — inject current into nearest neuron
  const injectCurrent = useCallback((canvasX, canvasY) => {
    setRipple({ x: canvasX, y: canvasY, age: 0 })

    setNeurons(prev => {
      let nearest = null
      let minDist = Infinity
      for (const n of prev) {
        const d = Math.hypot(n.x - canvasX, n.y - canvasY)
        if (d < minDist) { minDist = d; nearest = n }
      }

      if (nearest && minDist < 60) {
        return prev.map(n =>
          n.id === nearest.id
            ? { ...n, membrane_potential: Math.min(n.membrane_potential + 0.6, n.threshold * 1.5) }
            : n
        )
      } else {
        // Global noise to input layer
        return prev.map(n =>
          INPUT_NEURON_IDS.includes(n.id)
            ? { ...n, membrane_potential: n.membrane_potential + 0.1 }
            : n
        )
      }
    })
  }, [])

  // Physics tick — runs at 60fps
  const tick = useCallback(() => {
    tickCountRef.current++

    setNeurons(prev => {
      const next = prev.map(n => {
        if (n.refractory_countdown > 0) {
          return {
            ...n,
            refractory_countdown: n.refractory_countdown - 1,
            firing_frames: Math.max(0, n.firing_frames - 1),
          }
        }

        let current = INPUT_NEURON_IDS.includes(n.id) ? inputCurrent * 0.03 : 0
        // Add incoming spike currents
        const incomingSpikes = spikesRef.current.filter(s => s.targetId === n.id && s.progress >= 0.95)
        current += incomingSpikes.length * 0.25

        const new_Vm = n.membrane_potential * leakRate + current

        if (new_Vm >= threshold) {
          spikeCountRef.current++
          return {
            ...n,
            membrane_potential: 0,
            refractory_countdown: REFRACTORY_TICKS,
            fired_at: Date.now(),
            firing_frames: 8,
          }
        }

        return {
          ...n,
          membrane_potential: Math.max(0, new_Vm),
          firing_frames: Math.max(0, n.firing_frames - 1),
        }
      })

      return next
    })

    // Propagate spikes: spawn new spike particles for recently fired neurons
    setNeurons(prev => {
      const firedIds = prev.filter(n => n.firing_frames === 8).map(n => n.id)
      if (firedIds.length > 0) {
        setSpikes(prevSpikes => {
          const newSpikes = []
          for (const fid of firedIds) {
            const outgoing = SYNAPSES.filter(([src]) => src === fid)
            for (const [src, tgt] of outgoing) {
              newSpikes.push({
                id: `${src}-${tgt}-${Date.now()}`,
                sourceId: src,
                targetId: tgt,
                progress: 0,
              })
            }
          }
          return [...prevSpikes, ...newSpikes]
        })
      }
      return prev
    })

    // Advance spike particles
    setSpikes(prev =>
      prev
        .map(s => ({ ...s, progress: s.progress + 0.025 }))
        .filter(s => s.progress <= 1.1)
    )

    // Advance ripple
    setRipple(prev => {
      if (!prev) return null
      const next = { ...prev, age: prev.age + 1 }
      return next.age > 18 ? null : next
    })

    // Update metrics every 30 ticks (~500ms)
    if (tickCountRef.current % 30 === 0) {
      const activeCount = neuronsRef.current.filter(n => n.membrane_potential > 0.1).length
      const rate = spikeCountRef.current * 2 // per second approximation
      spikeCountRef.current = 0

      setMetrics({
        spikeRate: rate,
        energyCost: (rate * 0.3).toFixed(1),
        efficiency: Math.round(Math.max(0, Math.min(99, (1 - leakRate) * 100 * (1 - inputCurrent / 1.2)))),
        activeNeurons: activeCount,
      })
    }
  }, [threshold, leakRate, inputCurrent])

  return {
    neurons,
    spikes,
    threshold,
    setThreshold,
    leakRate,
    setLeakRate,
    inputCurrent,
    setInputCurrent,
    metrics,
    ripple,
    injectCurrent,
    tick,
    NEURON_POSITIONS,
    SYNAPSES,
  }
}
