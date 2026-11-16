import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from './services.js'

function Services() {
  const [filter, setFilter] = useState('all')

  const serviceCategories = {
    0: ['Custom Web Applications', 'Mobile-Responsive UX', 'API & Database Integration', 'SEO & Performance Audit'],
    1: ['Brand Identity & Logo Design', 'Marketing Banners & Posters', 'Social Media Creative Assets', 'Vector Graphics & Illustration'],
    2: ['HTML5 & CSS3 Foundations', 'Modern JavaScript (ES6+)', 'React & Component Design', 'Real Portfolio Projects']
  }

  const filteredServices = services.filter((_, idx) => {
    if (filter === 'engineering') return idx === 0
    if (filter === 'design') return idx === 1
    if (filter === 'courses') return idx === 2
    return true
  })

  return (
    <section className="py-5" id="services" style={{ background: 'var(--bg-canvas)' }}>
      <div className="container py-4" style={{ maxWidth: '1120px' }}>
        {/* Section Header */}
        <div className="row justify-content-center">
          <motion.div
            className="col-12 col-lg-8 text-center mb-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">01. Capabilities &amp; Solutions</span>
            <h2 className="section-title">Web Development &amp; Digital Services in Malawi</h2>
            <p className="section-subtitle">
              Practical web engineering, custom software, visual branding, and developer training built for measurable business growth.
            </p>

            {/* Clean Segmented Filter Control */}
            <div className="mt-4">
              <div className="segmented-control" role="tablist" aria-label="Filter capabilities">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`segmented-tab ${filter === 'all' ? 'active' : ''}`}
                >
                  All Capabilities ({services.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('engineering')}
                  className={`segmented-tab ${filter === 'engineering' ? 'active' : ''}`}
                >
                  Web Development
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('design')}
                  className={`segmented-tab ${filter === 'design' ? 'active' : ''}`}
                >
                  Graphic Design
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('courses')}
                  className={`segmented-tab ${filter === 'courses' ? 'active' : ''}`}
                >
                  Training
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="row g-4 mt-2 align-items-stretch">
          {filteredServices.map((service, index) => {
            const originalIndex = services.findIndex(s => s.name === service.name)
            const deliverables = serviceCategories[originalIndex] || []
            const isMarquee = filter === 'all' && originalIndex === 0

            return (
              <div
                className={isMarquee ? 'col-12' : filter === 'all' ? 'col-12 col-md-6' : 'col-12 col-lg-8 mx-auto'}
                key={service.name}
              >
                <motion.div
                  className="card surface-card h-100 overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '18px'
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className={`row g-0 h-100 ${isMarquee ? 'align-items-stretch' : 'flex-column'}`}>
                    {/* Image Column */}
                    <div className={isMarquee ? 'col-lg-5' : 'w-100'}>
                      <div className="position-relative h-100" style={{ minHeight: isMarquee ? '260px' : '210px', maxHeight: isMarquee ? '100%' : '220px', overflow: 'hidden' }}>
                        <img
                          src={service.image}
                          className="w-100 h-100"
                          alt={service.name}
                          referrerPolicy="no-referrer"
                          style={{ objectFit: 'cover' }}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`${isMarquee ? 'col-lg-7' : 'flex-grow-1'} d-flex flex-column justify-content-between`}>
                      <div className="p-4 p-md-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span
                            style={{
                              fontFamily: 'Manrope, sans-serif',
                              fontWeight: 700,
                              fontSize: '0.82rem',
                              color: 'var(--color-primary)'
                            }}
                          >
                            0{originalIndex + 1}. Capability
                          </span>
                          <i className={`${service.icon}`} style={{ color: 'var(--color-accent)', fontSize: '1.15rem' }}></i>
                        </div>

                        <h3 style={{ fontWeight: 800, fontSize: isMarquee ? '1.5rem' : '1.25rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                          {service.name}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                          {service.description}
                        </p>

                        <div className="row g-2 mb-3">
                          {deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="col-sm-6">
                              <div className="d-flex align-items-center gap-2" style={{ fontSize: '0.86rem', color: 'var(--text-main)' }}>
                                <i className="bi bi-check2" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1rem' }}></i>
                                <span>{item}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hairline Pricing Footer */}
                      <div
                        className="px-4 py-3 d-flex align-items-center justify-content-between gap-3 flex-wrap"
                        style={{
                          borderTop: '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--bg-surface-soft)'
                        }}
                      >
                        <div>
                          <span style={{ fontSize: '0.76rem', color: 'var(--text-subtle)', display: 'block' }}>
                            Estimated Investment · per {service.unit.toLowerCase()}
                          </span>
                          <span className="price-number" style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1rem' }}>
                            {service.priceRange}
                          </span>
                        </div>

                        <a href="#contact" className="btn btn-brand-primary btn-sm">
                          <span>Discuss Project</span>
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Clean Unboxed Transparency Strip */}
        <div
          className="mt-4 pt-3 d-flex align-items-center justify-content-center gap-2 text-center"
          style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}
        >
          <i className="bi bi-shield-check" style={{ color: 'var(--color-accent)', fontSize: '1rem' }}></i>
          <span>
            <strong style={{ color: 'var(--text-main)' }}>Transparent Estimates:</strong> Agreed milestones and fixed project boundaries before kickoff—zero surprise fees.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Services
