'use client'

import { useRef, useEffect, useCallback } from 'react'

const NEURON_RADIUS = 18
const CANVAS_W = 680
const CANVAS_H = 380

export default function SNNCanvas({ neurons, spikes, ripple, onCanvasClick }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  const SYNAPSES = [
    [0, 3], [0, 4],
    [1, 4], [1, 5],
    [2, 5], [2, 6],
    [3, 7],
    [4, 7], [4, 8],
    [5, 8], [5, 9],
    [6, 9],
  ]

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    
    // Handle HiDPI
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const scaleX = rect.width / CANVAS_W
    const scaleY = rect.height / CANVAS_H

    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw synapse lines
    for (const [srcId, tgtId] of SYNAPSES) {
      const src = neurons.find(n => n.id === srcId)
      const tgt = neurons.find(n => n.id === tgtId)
      if (!src || !tgt) continue

      ctx.beginPath()
      ctx.moveTo(src.x * scaleX, src.y * scaleY)
      ctx.lineTo(tgt.x * scaleX, tgt.y * scaleY)
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Small arrowhead at target
      const angle = Math.atan2((tgt.y - src.y) * scaleY, (tgt.x - src.x) * scaleX)
      const arrowLen = 8
      const ax = tgt.x * scaleX - Math.cos(angle) * (NEURON_RADIUS * scaleX + 4)
      const ay = tgt.y * scaleY - Math.sin(angle) * (NEURON_RADIUS * scaleY + 4)
      ctx.beginPath()
      ctx.moveTo(ax, ay)
      ctx.lineTo(ax - arrowLen * Math.cos(angle - 0.3), ay - arrowLen * Math.sin(angle - 0.3))
      ctx.moveTo(ax, ay)
      ctx.lineTo(ax - arrowLen * Math.cos(angle + 0.3), ay - arrowLen * Math.sin(angle + 0.3))
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)'
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    // Draw spike particles traveling along synapses
    for (const spike of spikes) {
      const src = neurons.find(n => n.id === spike.sourceId)
      const tgt = neurons.find(n => n.id === spike.targetId)
      if (!src || !tgt) continue

      const p = Math.min(spike.progress, 1)
      const sx = (src.x + (tgt.x - src.x) * p) * scaleX
      const sy = (src.y + (tgt.y - src.y) * p) * scaleY

      // Trail dots
      for (let t = 1; t <= 3; t++) {
        const tp = Math.max(0, p - t * 0.06)
        const tx = (src.x + (tgt.x - src.x) * tp) * scaleX
        const ty = (src.y + (tgt.y - src.y) * tp) * scaleY
        ctx.beginPath()
        ctx.arc(tx, ty, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${0.5 - t * 0.15})`
        ctx.fill()
      }

      // Main spike dot
      ctx.beginPath()
      ctx.arc(sx, sy, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#22D3EE'
      ctx.fill()
      ctx.shadowColor = '#22D3EE'
      ctx.shadowBlur = 12
      ctx.fill()
      ctx.shadowBlur = 0
    }

    // Draw neurons
    for (const n of neurons) {
      const nx = n.x * scaleX
      const ny = n.y * scaleY
      const r = NEURON_RADIUS * Math.min(scaleX, scaleY)
      const isFiring = n.firing_frames > 0

      // Membrane potential arc (outside ring)
      if (!isFiring && n.membrane_potential > 0.01) {
        const arcPct = Math.min(n.membrane_potential / (n.threshold || 1), 1)
        const startAngle = -Math.PI / 2
        const endAngle = startAngle + arcPct * Math.PI * 2

        // Color shifts: blue → cyan → amber near threshold
        let arcColor = '#3B82F6'
        if (arcPct > 0.7) arcColor = '#F59E0B'
        else if (arcPct > 0.4) arcColor = '#22D3EE'

        ctx.beginPath()
        ctx.arc(nx, ny, r + 5, startAngle, endAngle)
        ctx.strokeStyle = arcColor
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Neuron body
      if (isFiring) {
        // Firing state — white flash with cyan glow
        const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, r * 1.3)
        grad.addColorStop(0, '#FFFFFF')
        grad.addColorStop(1, 'rgba(34, 211, 238, 0.3)')
        ctx.beginPath()
        ctx.arc(nx, ny, r * 1.2, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.shadowColor = '#22D3EE'
        ctx.shadowBlur = 24
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.strokeStyle = '#22D3EE'
        ctx.lineWidth = 2
        ctx.stroke()
      } else {
        // Resting state — blue neuron
        const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, r)
        grad.addColorStop(0, '#1D4ED8')
        grad.addColorStop(1, 'rgba(29, 78, 216, 0.2)')
        ctx.beginPath()
        ctx.arc(nx, ny, r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.shadowColor = '#3B82F6'
        ctx.shadowBlur = 12
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.strokeStyle = '#3B82F6'
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // Neuron label
      ctx.fillStyle = isFiring ? '#080B14' : 'rgba(255,255,255,0.7)'
      ctx.font = `${11 * Math.min(scaleX, scaleY)}px "JetBrains Mono", monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(`N${n.id}`, nx, ny)
    }

    // Click ripple effect
    if (ripple) {
      const rx = ripple.x * scaleX
      const ry = ripple.y * scaleY
      const rr = ripple.age * 3
      const alpha = Math.max(0, 1 - ripple.age / 18)
      ctx.beginPath()
      ctx.arc(rx, ry, rr, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.6})`
      ctx.lineWidth = 2
      ctx.stroke()
    }
  }, [neurons, spikes, ripple])

  // Animation loop
  useEffect(() => {
    const loop = () => {
      draw()
      animRef.current = requestAnimationFrame(loop)
    }
    animRef.current = requestAnimationFrame(loop)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [draw])

  const handleClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const scaleX = CANVAS_W / rect.width
    const scaleY = CANVAS_H / rect.height
    const x = (e.clientX - rect.left) * scaleX
    const y = (e.clientY - rect.top) * scaleY
    onCanvasClick(x, y)
  }

  return (
    <div className="snn-canvas-wrapper">
      <canvas
        ref={canvasRef}
        className="snn-canvas"
        onClick={handleClick}
        style={{ width: '100%', height: '100%', cursor: 'crosshair' }}
      />
      <span className="snn-canvas-hint">Click anywhere to inject current ⚡</span>
    </div>
  )
}
