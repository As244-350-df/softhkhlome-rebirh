import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { malawiWebFaqs } from '../data/faqData'

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx))
  }

  return (
    <section
      className="py-5"
      id="faq"
      style={{
        backgroundColor: 'var(--bg-surface-alt)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container py-4" style={{ maxWidth: '920px' }}>
        <div className="row justify-content-center">
          <motion.div
            className="col-12 col-lg-9 text-center mb-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">04. Common Questions</span>
            <h2 className="section-title">Web Design &amp; Development FAQs</h2>
            <p className="section-subtitle">
              Clear answers on pricing in MWK, turnaround timelines, and how we partner with businesses across Malawi.
            </p>
          </motion.div>
        </div>

        <div className="d-flex flex-column gap-3">
          {malawiWebFaqs.map((item, idx) => {
            const isOpen = openIndex === idx
            const panelId = `faq-panel-${idx}`
            const buttonId = `faq-button-${idx}`

            return (
              <div
                key={item.question}
                className="surface-card overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: `1px solid ${isOpen ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
                  borderRadius: '14px'
                }}
              >
                <h3 style={{ margin: 0, fontSize: '1.02rem', fontWeight: 700 }}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-100 d-flex align-items-center justify-content-between gap-3 text-start"
                    style={{
                      border: 'none',
                      backgroundColor: 'transparent',
                      padding: '1.15rem 1.35rem',
                      color: isOpen ? 'var(--color-primary)' : 'var(--text-main)',
                      fontFamily: 'Manrope, system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{item.question}</span>
                    <i
                      className={`bi ${isOpen ? 'bi-dash-lg' : 'bi-plus-lg'} flex-shrink-0`}
                      style={{
                        color: isOpen ? 'var(--color-accent)' : 'var(--color-primary)',
                        fontSize: '1rem'
                      }}
                    ></i>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    style={{
                      padding: '0 1.35rem 1.2rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    <p style={{ margin: '0.85rem 0 0', fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.68 }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
