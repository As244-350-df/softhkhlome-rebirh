import React from 'react'
import { motion } from 'framer-motion'
import developerImg from "../images/Polish_20250526_113040107.png"
import { Link } from 'react-router-dom'

function AboutUs() {
  const disciplines = [
    { icon: 'bi-code-slash', label: 'Web Development', detail: 'React & full-stack systems' },
    { icon: 'bi-palette', label: 'Graphic Design', detail: 'Logos & visual identity' },
    { icon: 'bi-search', label: 'SEO Strategy', detail: 'Schema & search visibility' },
    { icon: 'bi-phone', label: 'Responsive UI/UX', detail: 'Mobile-first interfaces' }
  ]

  return (
    <section className="py-5" style={{ background: 'var(--bg-canvas)' }}>
      <div className="container py-4" style={{ maxWidth: '1120px' }}>
        {/* Header */}
        <div className="row justify-content-center">
          <motion.div
            className="col-12 col-lg-8 text-center mb-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">03. Who We Are</span>
            <h2 className="section-title">About Softkhlome</h2>
            <p className="section-subtitle">
              Based in Lilongwe, Malawi, we bridge clean visual craft and modern web software engineering.
            </p>
          </motion.div>
        </div>

        {/* Main Balanced Split */}
        <div className="row g-4 align-items-stretch">
          {/* Left Column: Story & Unboxed Disciplines */}
          <div className="col-lg-7">
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
                <span className="section-kicker-orange">Our Story</span>
                <h3 style={{ fontWeight: 800, fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                  Helping Malawian brands stand out online with engineering rigor.
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  Founded by <strong>Brian Kamwera</strong>, Softkhlome builds responsive web applications, business websites, and strategic brand identities designed to compete globally.
                </p>

                {/* Clean 2x2 Hairline Discipline Grid */}
                <div
                  className="row g-3 pt-3 mb-4"
                  style={{ borderTop: '1px solid var(--border-subtle)' }}
                >
                  {disciplines.map((d, idx) => (
                    <div className="col-sm-6" key={idx}>
                      <div className="d-flex align-items-start gap-2">
                        <i
                          className={`bi ${d.icon}`}
                          style={{
                            color: idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)',
                            fontSize: '1.15rem',
                            marginTop: '2px'
                          }}
                        ></i>
                        <div>
                          <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)', display: 'block' }}>
                            {d.label}
                          </span>
                          <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                            {d.detail}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex gap-3 flex-wrap">
                <Link to="/about" className="btn btn-brand-primary">
                  <span>Our Full Story</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/developer" className="btn btn-brand-outline">
                  <span>Meet the Lead Developer</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Founder Portrait Card */}
          <div className="col-lg-5">
            <motion.div
              className="card surface-card h-100 overflow-hidden d-flex flex-column"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-grow-1" style={{ minHeight: '300px', maxHeight: '360px', overflow: 'hidden' }}>
                <img
                  loading="lazy"
                  src={developerImg}
                  alt="Brian Kamwera - Founder of Softkhlome"
                  referrerPolicy="no-referrer"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div className="p-4" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}>
                <h4 style={{ margin: '0 0 2px', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-main)' }}>
                  Brian Kamwera
                </h4>
                <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--color-primary)', fontWeight: 700 }}>
                  Founder & Lead Full-Stack Developer
                </p>
                <p style={{ margin: '8px 0 0', fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  React engineer & UI designer specializing in fast, conversion-ready web platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Clean Unboxed Mission Bar */}
        <div
          className="mt-5 pt-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <span className="section-kicker">Our Mission</span>
              <h4 style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-main)', margin: 0 }}>
                Equipping African businesses with reliable digital tools that drive commercial growth.
              </h4>
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                <div className="col-sm-4">
                  <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                    Innovation First
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Modern React & web standards</span>
                </div>
                <div className="col-sm-4">
                  <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                    Crafted Quality
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Detail across code and UI</span>
                </div>
                <div className="col-sm-4">
                  <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--text-main)', marginBottom: '2px' }}>
                    Client Partnership
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Transparent delivery at each step</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs