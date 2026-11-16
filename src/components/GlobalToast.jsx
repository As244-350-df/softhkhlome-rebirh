import React, { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ToastContext } from '../context/toastContext'

const DEFAULT_DURATION_MS = 5500

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef(new Map())

  const dismissToast = useCallback((id) => {
    const existingTimer = timersRef.current.get(id)
    if (existingTimer) {
      clearTimeout(existingTimer)
      timersRef.current.delete(id)
    }
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(
    ({
      type = 'success',
      title = 'Success',
      message = '',
      duration = DEFAULT_DURATION_MS
    }) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
      setToasts((prev) => [...prev.slice(-2), { id, type, title, message, duration }])

      if (duration > 0) {
        const timer = setTimeout(() => {
          dismissToast(id)
        }, duration)
        timersRef.current.set(id, timer)
      }

      return id
    },
    [dismissToast]
  )

  useEffect(() => {
    const activeTimers = timersRef.current
    return () => {
      activeTimers.forEach((timer) => clearTimeout(timer))
      activeTimers.clear()
    }
  }, [])

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}

      {/* Global Floating Toast Stack */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'fixed',
          top: '5.1rem',
          right: '1.25rem',
          left: '1.25rem',
          maxWidth: '420px',
          marginLeft: 'auto',
          zIndex: 1080,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}
      >
        <AnimatePresence>
          {toasts.map((toast) => {
            const isError = toast.type === 'error'
            const accentColor = isError ? 'var(--color-accent)' : 'var(--color-primary)'
            const badgeBg = isError
              ? 'rgba(var(--color-accent-rgb), 0.14)'
              : 'rgba(var(--color-primary-rgb), 0.14)'
            const borderColor = isError ? 'var(--border-orange)' : 'var(--border-accent)'

            return (
              <motion.div
                key={toast.id}
                role={isError ? 'alert' : 'status'}
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.96 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  pointerEvents: 'auto',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  border: `1px solid ${borderColor}`,
                  borderLeft: `4px solid ${accentColor}`,
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-lg)',
                  overflow: 'hidden'
                }}
              >
                <div className="d-flex align-items-start gap-3 p-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: badgeBg,
                      color: accentColor,
                      fontSize: '1.15rem',
                      marginTop: '1px'
                    }}
                  >
                    <i
                      className={`bi ${
                        isError ? 'bi-exclamation-triangle-fill' : 'bi-check-circle-fill'
                      }`}
                    ></i>
                  </div>

                  <div className="flex-grow-1" style={{ minWidth: 0 }}>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <h6
                        style={{
                          margin: 0,
                          fontFamily: 'Manrope, system-ui, sans-serif',
                          fontWeight: 800,
                          fontSize: '0.94rem',
                          color: 'var(--text-main)'
                        }}
                      >
                        {toast.title}
                      </h6>
                      <button
                        type="button"
                        onClick={() => dismissToast(toast.id)}
                        aria-label="Dismiss notification"
                        style={{
                          border: 'none',
                          background: 'transparent',
                          color: 'var(--text-subtle)',
                          padding: '2px 4px',
                          fontSize: '0.95rem',
                          lineHeight: 1,
                          cursor: 'pointer'
                        }}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>

                    {toast.message && (
                      <p
                        style={{
                          margin: '0.25rem 0 0',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.5
                        }}
                      >
                        {toast.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Auto-dismiss Progress Bar */}
                {toast.duration > 0 && (
                  <motion.div
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: toast.duration / 1000, ease: 'linear' }}
                    style={{
                      height: '3px',
                      width: '100%',
                      transformOrigin: 'left',
                      backgroundColor: accentColor,
                      opacity: 0.85
                    }}
                  />
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
