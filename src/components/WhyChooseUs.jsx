import React from 'react'
import { motion } from 'framer-motion'

function WhyChooseUs() {
  const pillars = [
    {
      icon: 'bi-speedometer2',
      title: 'Speed-First Frontend Engineering',
      description: 'Clean React codebases optimized for fast loads on mobile networks across Malawi.'
    },
    {
      icon: 'bi-gem',
      title: 'Tailored Visual Architecture',
      description: 'Every interface is designed around your business identity and conversion funnel—never generic clones.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Long-Term Technical Support',
      description: 'Reliable deployment, domain administration, security updates, and continuous improvements post-launch.'
    }
  ]

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: 'var(--bg-surface-alt)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container py-4" style={{ maxWidth: '1120px' }}>
        {/* Section Header */}
        <div className="row justify-content-center">
          <motion.div
            className="col-12 col-lg-8 text-center mb-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">02. Why Softkhlome</span>
            <h2 className="section-title">Engineering Built for Trust</h2>
            <p className="section-subtitle">
              We pair disciplined visual clarity with reliable engineering so your platform performs from day one.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Balanced Split */}
        <div className="row g-4 align-items-stretch">
          {/* Left Column: Direct Engineering Card */}
          <div className="col-lg-5">
            <motion.div
              className="card surface-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <span className="section-kicker-orange">The Softkhlome Standard</span>
                <h3 style={{ fontWeight: 800, fontSize: '1.55rem', color: 'var(--text-main)', marginBottom: '0.9rem', lineHeight: 1.25 }}>
                  Direct Developer Collaboration Without Agency Friction
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  You communicate directly with the engineer architecting your product—ensuring transparent sprints, fast revisions, and clean code.
                </p>

                {/* Tabular Metrics Row */}
                <div
                  className="row g-0 pt-3 mb-4"
                  style={{ borderTop: '1px solid var(--border-subtle)' }}
                >
                  <div className="col-4">
                    <span className="stat-number d-block" style={{ fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-primary)' }}>
                      3+ Yrs
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>Experience</span>
                  </div>
                  <div className="col-4">
                    <span className="stat-number d-block" style={{ fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-accent)' }}>
                      &lt; 24h
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>Response</span>
                  </div>
                  <div className="col-4">
                    <span className="stat-number d-block" style={{ fontWeight: 800, fontSize: '1.35rem', color: 'var(--text-main)' }}>
                      100%
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>Custom Code</span>
                  </div>
                </div>
              </div>

              <div>
                <a href="#contact" className="btn btn-brand-primary w-100">
                  <span>Schedule Consultation</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Hairline Pillars */}
          <div className="col-lg-7">
            <div
              className="card surface-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
            >
              {pillars.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="d-flex align-items-start gap-3 py-3"
                  style={{
                    borderBottom: idx < pillars.length - 1 ? '1px solid var(--border-subtle)' : 'none'
                  }}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: idx === 1 ? 'rgba(var(--color-accent-rgb), 0.12)' : 'rgba(var(--color-primary-rgb), 0.1)',
                      color: idx === 1 ? 'var(--color-accent)' : 'var(--color-primary)',
                      fontSize: '1.25rem'
                    }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
