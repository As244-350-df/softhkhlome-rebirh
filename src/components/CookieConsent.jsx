import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const CONSENT_STORAGE_KEY = 'softkhlome_cookie_consent'

function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)
  const [marketingEnabled, setMarketingEnabled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem(CONSENT_STORAGE_KEY)
        if (!saved) {
          setVisible(true)
        }
      } catch {
        setVisible(true)
      }
    }, 450)
    return () => clearTimeout(timer)
  }, [])

  const saveConsent = (preferences) => {
    try {
      localStorage.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({
          ...preferences,
          essential: true,
          timestamp: new Date().toISOString()
        })
      )
    } catch {
      // Ignore storage failures in restricted contexts
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: '1.25rem',
            right: '1.25rem',
            left: '1.25rem',
            maxWidth: '460px',
            marginLeft: 'auto',
            zIndex: 1050,
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '18px',
            boxShadow: 'var(--shadow-lg)',
            padding: '1.35rem 1.45rem'
          }}
        >
          <div className="d-flex align-items-start justify-content-between gap-3 mb-2">
            <div className="d-flex align-items-center gap-2">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
                  color: 'var(--color-primary)',
                  fontSize: '1.1rem'
                }}
              >
                <i className="bi bi-shield-check"></i>
              </div>
              <h5
                id="cookie-consent-title"
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: 'var(--text-main)'
                }}
              >
                Cookie Preferences
              </h5>
            </div>

            <button
              type="button"
              onClick={() => saveConsent({ analytics: false, marketing: false })}
              aria-label="Decline optional cookies and close"
              style={{
                border: 'none',
                background: 'transparent',
                color: 'var(--text-subtle)',
                fontSize: '1.1rem',
                padding: '2px 6px',
                cursor: 'pointer',
                lineHeight: 1
              }}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <p
            id="cookie-consent-desc"
            style={{
              fontSize: '0.86rem',
              color: 'var(--text-muted)',
              lineHeight: 1.55,
              marginBottom: '0.9rem'
            }}
          >
            We use essential cookies to keep Softkhlome running smoothly and optional analytics cookies to improve your browsing experience. Read our{' '}
            <Link
              to="/policy"
              style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
            >
              Privacy Policy
            </Link>
            .
          </p>

          {showDetails && (
            <div
              className="mb-3 pt-2"
              style={{ borderTop: '1px solid var(--border-subtle)', fontSize: '0.84rem' }}
            >
              <div className="d-flex align-items-center justify-content-between py-2">
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block' }}>Essential Cookies</strong>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>Required for core navigation &amp; security</span>
                </div>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.78rem' }}>Always On</span>
              </div>

              <label className="d-flex align-items-center justify-content-between py-2 mb-0" style={{ cursor: 'pointer' }}>
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block' }}>Performance &amp; Analytics</strong>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>Helps us measure speed and content utility</span>
                </div>
                <input
                  type="checkbox"
                  className="form-check-input m-0"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                />
              </label>

              <label className="d-flex align-items-center justify-content-between py-2 mb-0" style={{ cursor: 'pointer' }}>
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block' }}>Personalization</strong>
                  <span style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>Remembers your preferred service focus</span>
                </div>
                <input
                  type="checkbox"
                  className="form-check-input m-0"
                  checked={marketingEnabled}
                  onChange={(e) => setMarketingEnabled(e.target.checked)}
                />
              </label>
            </div>
          )}

          <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setShowDetails((prev) => !prev)}
              style={{
                border: 'none',
                background: 'transparent',
                color: 'var(--text-muted)',
                fontSize: '0.82rem',
                fontWeight: 600,
                padding: '6px 0',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              {showDetails ? 'Hide Settings' : 'Manage Preferences'}
            </button>

            <div className="d-flex align-items-center gap-2 ms-auto">
              <button
                type="button"
                className="btn btn-brand-outline btn-sm"
                onClick={() => saveConsent({ analytics: false, marketing: false })}
                style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem', minHeight: '36px' }}
              >
                Essential Only
              </button>

              {showDetails ? (
                <button
                  type="button"
                  className="btn btn-brand-primary btn-sm"
                  onClick={() => saveConsent({ analytics: analyticsEnabled, marketing: marketingEnabled })}
                  style={{ fontSize: '0.82rem', padding: '0.45rem 0.95rem', minHeight: '36px' }}
                >
                  Save Choices
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-brand-accent btn-sm"
                  onClick={() => saveConsent({ analytics: true, marketing: true })}
                  style={{ fontSize: '0.82rem', padding: '0.45rem 0.95rem', minHeight: '36px' }}
                >
                  Accept All
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
