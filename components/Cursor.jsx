import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const isHoveringRef = useRef(false)
  const animationFrameRef = useRef(null)
  const rafIdRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    // Initialize cursor position to center of screen
    const initialX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
    const initialY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    
    let mouseX = initialX
    let mouseY = initialY
    let outlineX = initialX
    let outlineY = initialY
    let lastMouseX = initialX
    let lastMouseY = initialY
    let velocity = 0
    let isMoving = false

    // Set initial position
    dot.style.left = `${initialX}px`
    dot.style.top = `${initialY}px`
    outline.style.left = `${initialX}px`
    outline.style.top = `${initialY}px`

    // Throttled mousemove handler
    const onMove = (e) => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      
      rafIdRef.current = requestAnimationFrame(() => {
        mouseX = e.clientX
        mouseY = e.clientY
        
        // Calculate velocity for dynamic scaling
        const deltaX = mouseX - lastMouseX
        const deltaY = mouseY - lastMouseY
        velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        
        lastMouseX = mouseX
        lastMouseY = mouseY
        
        isMoving = velocity > 5
        
        // Direct positioning for dot (instant, no state update)
        dot.style.left = `${mouseX}px`
        dot.style.top = `${mouseY}px`
        dot.style.transform = 'translate3d(-50%, -50%, 0)'
        
        rafIdRef.current = null
      })
    }

    const animate = () => {
      // Smooth follow for outline with easing
      outlineX += (mouseX - outlineX) * 0.12
      outlineY += (mouseY - outlineY) * 0.12
      
      // Dynamic scale based on hover and velocity (using ref instead of state)
      const baseScale = isHoveringRef.current ? 1.8 : 1
      const velocityScale = isMoving ? 1.2 : 1
      const finalScale = baseScale * velocityScale
      
      outline.style.left = `${outlineX}px`
      outline.style.top = `${outlineY}px`
      outline.style.transform = `translate3d(-50%, -50%, 0) scale(${finalScale})`
      
      // Add glow trail effect based on velocity
      if (isMoving && velocity > 10) {
        outline.style.boxShadow = `0 0 30px rgba(0,200,255,0.4), 0 0 60px rgba(124,58,237,0.2)`
      } else {
        outline.style.boxShadow = `0 0 20px rgba(0,200,255,0.2), 0 0 40px rgba(124,58,237,0.1)`
      }
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Use passive event listener for better performance
    window.addEventListener('mousemove', onMove, { passive: true })
    animate()

    // Change cursor on hovering interactive elements
    const interactiveSelector = 'a, button, .interactive, .project-card, input, textarea, [role="button"]'
    
    const setHover = () => {
      isHoveringRef.current = true
    }
    const unsetHover = () => {
      isHoveringRef.current = false
    }
    
    // Debounced listener attachment
    let listenerTimeout = null
    const addListeners = () => {
      if (listenerTimeout) clearTimeout(listenerTimeout)
      listenerTimeout = setTimeout(() => {
        document.querySelectorAll(interactiveSelector).forEach(el => {
          // Remove old listeners to prevent duplicates
          el.removeEventListener('mouseenter', setHover)
          el.removeEventListener('mouseleave', unsetHover)
          // Add new listeners
          el.addEventListener('mouseenter', setHover, { passive: true })
          el.addEventListener('mouseleave', unsetHover, { passive: true })
        })
      }, 100)
    }

    addListeners()

    // Observe DOM mutations with debouncing
    const mo = new MutationObserver(() => {
      addListeners()
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      mo.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (listenerTimeout) {
        clearTimeout(listenerTimeout)
      }
      // Clean up any pending RAF
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Outline cursor with glow and blur */}
      <div
        ref={outlineRef}
        className="pointer-events-none fixed z-[9999] w-9 h-9 rounded-full border-2 border-primary/30 backdrop-blur-md transition-all duration-200"
        style={{
          mixBlendMode: 'screen',
          left: '50%',
          top: '50%',
          transform: 'translate3d(-50%, -50%, 0)',
          background: 'radial-gradient(circle, rgba(0,200,255,0.1) 0%, transparent 70%)',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full bg-primary transition-all duration-100"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate3d(-50%, -50%, 0)',
          boxShadow: '0 0 20px rgba(0,200,255,0.6), 0 0 40px rgba(76,201,240,0.4)',
        }}
      />
    </>
  )
}

