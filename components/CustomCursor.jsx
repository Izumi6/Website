import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Only run on client
        if (typeof window === 'undefined') return

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        // Add listeners for hover effects on interactive elements
        const handleLinkHoverStart = () => setIsHovering(true)
        const handleLinkHoverEnd = () => setIsHovering(false)

        window.addEventListener('mousemove', updateMousePosition)
        document.addEventListener('mouseenter', handleMouseEnter)
        document.addEventListener('mouseleave', handleMouseLeave)

        const interactiveElements = document.querySelectorAll('a, button, .interactive')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleLinkHoverStart)
            el.addEventListener('mouseleave', handleLinkHoverEnd)
        })

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            document.removeEventListener('mouseenter', handleMouseEnter)
            document.removeEventListener('mouseleave', handleMouseLeave)

            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHoverStart)
                el.removeEventListener('mouseleave', handleLinkHoverEnd)
            })
        }
    }, [isVisible]) // Re-bind if necessary, though mainly just once is fine if elements don't change often. 
    // Ideally use mutation observer or event delegation for dynamic elements, but this is simple v1.

    // Use event delegation for hover to handle dynamic elements
    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.interactive')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mouseover', handleMouseOver)
        return () => window.removeEventListener('mouseover', handleMouseOver)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 2.5 : 1,
                opacity: isVisible ? 1 : 0,
                backgroundColor: isHovering ? 'rgba(0, 200, 255, 0.1)' : 'transparent',
                borderColor: isHovering ? 'transparent' : '#00C8FF' // Primary color
            }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        >
            {/* Center dot */}
            <motion.div
                className="w-1 h-1 bg-primary rounded-full"
                animate={{ scale: isHovering ? 0 : 1 }}
            />
        </motion.div>
    )
}
