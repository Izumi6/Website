import { useState, useEffect, useRef } from 'react'

// Sound file paths - add your sound files to /public/sounds/
const SOUNDS = {
  cursorHover: '/sounds/cursor-hover.mp3',
  buttonClick: '/sounds/button-click.mp3',
  projectHover: '/sounds/project-hover.mp3',
  sectionLoad: '/sounds/section-load.mp3',
  globeRotation: '/sounds/globe-rotation.mp3',
  cinematicIntro: '/sounds/cinematic-intro.mp3',
}

export function useSoundEffects() {
  const [isEnabled, setIsEnabled] = useState(true)
  const [volume, setVolume] = useState(0.3)
  const audioContextRef = useRef(null)
  const soundsRef = useRef({})

  useEffect(() => {
    // Initialize Web Audio API
    if (typeof window !== 'undefined' && window.AudioContext) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }

    // Preload sounds
    Object.keys(SOUNDS).forEach((key) => {
      const audio = new Audio(SOUNDS[key])
      audio.volume = volume
      audio.preload = 'auto'
      soundsRef.current[key] = audio
    })

    return () => {
      // Cleanup
      Object.values(soundsRef.current).forEach((audio) => {
        if (audio) {
          audio.pause()
          audio.src = ''
        }
      })
    }
  }, [])

  useEffect(() => {
    // Update volume for all sounds
    Object.values(soundsRef.current).forEach((audio) => {
      if (audio) {
        audio.volume = volume
      }
    })
  }, [volume])

  const playSound = (soundName) => {
    if (!isEnabled) return

    const audio = soundsRef.current[soundName]
    if (audio) {
      // Clone and play to allow overlapping sounds
      const clonedAudio = audio.cloneNode()
      clonedAudio.volume = volume
      clonedAudio.play().catch((e) => {
        // Silently handle autoplay restrictions
        console.log('Sound play prevented:', e)
      })
    }
  }

  const toggleSound = () => {
    setIsEnabled(!isEnabled)
  }

  return {
    playSound,
    toggleSound,
    isEnabled,
    setVolume,
    volume,
  }
}

// Fallback: Generate simple tones if sound files don't exist
export function generateTone(frequency, duration, type = 'sine') {
  if (typeof window === 'undefined' || !window.AudioContext) return

  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = frequency
  oscillator.type = type

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + duration)
}



