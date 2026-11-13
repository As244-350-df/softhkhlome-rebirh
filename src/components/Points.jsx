import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1]
    }
  })
}

function Points() {
  const points = [
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Fast & Mobile-First',
      desc: 'Loads swiftly on mobile connections across Malawi with zero layout clutter.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Clean & Dependable',
      desc: 'Production React architecture engineered for uptime, security, and maintainability.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Conversion Focused',
      desc: 'Structured visual hierarchy designed to generate qualified inquiries and leads.'
    }
  ]

  return (
    <div className="container points">
      <div
        className="card surface-card overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '18px',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <div className="row g-0">
          {points.map((pt, i) => (
            <div
              className="col-md-4"
              key={i}
              style={{
                borderRight: i < points.length - 1 ? '1px solid var(--border-subtle)' : 'none'
              }}
            >
              <motion.div
                className="p-4 h-100 d-flex flex-column justify-content-start"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: i === 1 ? 'rgba(var(--color-accent-rgb), 0.12)' : 'rgba(var(--color-primary-rgb), 0.1)',
                      color: i === 1 ? 'var(--color-accent)' : 'var(--color-primary)',
                      fontSize: '1.2rem'
                    }}
                  >
                    <i className={`bi ${pt.icon}`}></i>
                  </div>
                  <h5 style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0, color: 'var(--text-main)' }}>
                    {pt.title}
                  </h5>
                </div>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {pt.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Points