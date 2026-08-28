'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { queryPortfolioAI, SUGGESTED_PROMPTS } from '../../data/copilotKnowledge'

// Action pill behaviors
function executeAction(action, onClose) {
  if (action.type === 'JUMP') {
    onClose()
    setTimeout(() => {
      const el = document.querySelector(action.target)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Highlight effect
        setTimeout(() => {
          el.classList.add('section-highlight-glow')
          setTimeout(() => el.classList.remove('section-highlight-glow'), 1800)
        }, 600)
      }
    }, 250)
  } else if (action.type === 'CONTACT') {
    window.location.href = action.target
  } else {
    window.open(action.target, '_blank', 'noopener,noreferrer')
  }
}

const ACTION_ICONS = {
  JUMP: '↓',
  GITHUB: '⤴',
  GITHUB_ALL: '⤴',
  LIVE: '⚡',
  PAPER: '📄',
  RESUME: '📥',
  CONTACT: '✉️',
}

export default function CopilotModal({ onClose }) {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState(null)
  const [isThinking, setIsThinking] = useState(false)
  const inputRef = useRef(null)
  const overlayRef = useRef(null)

  // Auto-focus input on mount
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleQuery = useCallback((q) => {
    if (!q.trim()) return
    setIsThinking(true)
    setResponse(null)
    // Simulate brief thinking delay for perceived intelligence
    setTimeout(() => {
      const result = queryPortfolioAI(q)
      setResponse(result)
      setIsThinking(false)
    }, 350 + Math.random() * 250)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleQuery(query)
  }

  const handleSuggestionClick = (prompt) => {
    setQuery(prompt)
    handleQuery(prompt)
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  // Simple markdown bold rendering
  const renderText = (text) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
        }
        // Inline code
        const codeParts = part.split(/(`[^`]+`)/g).map((cp, k) => {
          if (cp.startsWith('`') && cp.endsWith('`')) {
            return <code key={k} className="copilot-inline-code">{cp.slice(1, -1)}</code>
          }
          return cp
        })
        return <span key={j}>{codeParts}</span>
      })
      return <p key={i} className={line.startsWith('•') ? 'copilot-list-item' : 'copilot-text-line'}>{parts}</p>
    })
  }

  return (
    <motion.div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="copilot-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      <motion.div
        className="copilot-modal"
        initial={{ opacity: 0, scale: 0.94, y: -12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="copilot-header">
          <div className="copilot-header-left">
            <span className="copilot-avatar-mini">SV</span>
            <span className="copilot-header-title">Ask Suyash AI</span>
          </div>
          <div className="copilot-header-right">
            <kbd className="copilot-kbd-tag">⌘K</kbd>
            <button onClick={onClose} className="copilot-close-btn" aria-label="Close">
              ESC
            </button>
          </div>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSubmit} className="copilot-input-row">
          <span className="copilot-search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to know?"
            className="copilot-input"
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => { setQuery(''); setResponse(null) }} className="copilot-clear-btn">✕</button>
          )}
        </form>

        {/* Suggestions (shown when input is empty and no response) */}
        {!query && !response && !isThinking && (
          <div className="copilot-suggestions">
            <span className="copilot-suggestions-label">SUGGESTED</span>
            <div className="copilot-chips">
              {SUGGESTED_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  className="copilot-chip"
                  onClick={() => handleSuggestionClick(prompt.label)}
                >
                  <span>{prompt.icon}</span> {prompt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Thinking State */}
        {isThinking && (
          <div className="copilot-thinking">
            <div className="copilot-dots">
              <span className="copilot-dot" style={{ animationDelay: '0s' }} />
              <span className="copilot-dot" style={{ animationDelay: '0.2s' }} />
              <span className="copilot-dot" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="copilot-thinking-label">Thinking...</span>
          </div>
        )}

        {/* Response */}
        {response && !isThinking && (
          <motion.div
            className="copilot-response"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="copilot-response-header">
              <span className="copilot-response-avatar">🤖</span>
              <span className="copilot-response-name">Suyash AI</span>
            </div>
            <div className="copilot-response-body">
              {renderText(response.text)}
            </div>

            {/* Action Pills */}
            {response.actions && response.actions.length > 0 && (
              <div className="copilot-actions">
                {response.actions.map((action, i) => (
                  <button
                    key={i}
                    className="copilot-action-pill"
                    onClick={() => executeAction(action, onClose)}
                  >
                    <span>{ACTION_ICONS[action.type] || '→'}</span>
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
