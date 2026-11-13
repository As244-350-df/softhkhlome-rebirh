import React from 'react'
import devImg from "../images/Polish_20250526_113040107.png"

function DevDesc() {
  const pillars = [
    { icon: 'bi-code-slash', label: 'Frontend', detail: 'React & UI Systems', accent: false },
    { icon: 'bi-server', label: 'Backend', detail: 'Node.js & APIs', accent: true },
    { icon: 'bi-palette', label: 'Design', detail: 'Figma & Responsive', accent: false },
    { icon: 'bi-graph-up', label: 'SEO & Growth', detail: 'Speed & Schema', accent: true }
  ]

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container py-4" style={{ maxWidth: '1120px' }}>
        {/* Header Section */}
        <div className="text-center mb-5">
          <span className="section-kicker">Leadership & Engineering</span>
          <h1 className="section-title">Meet the Developer</h1>
          <p className="section-subtitle">
            The technical lead and founder driving Softkhlome's software architecture and product design.
          </p>
        </div>

        <div
          className="card surface-card overflow-hidden mb-4"
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '18px'
          }}
        >
          <div className="card-body p-4 p-md-5">
            <div className="row g-4 align-items-center">
              <div className="col-md-5 text-center">
                <div className="position-relative d-inline-block mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={devImg}
                    alt="Brian Kamwera - Full Stack Developer"
                    referrerPolicy="no-referrer"
                    style={{
                      width: '210px',
                      height: '210px',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      border: '3px solid var(--border-accent)'
                    }}
                    loading="lazy"
                  />
                </div>
                <h2 style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '0.2rem' }}>
                  Brian Kamwera
                </h2>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: 0 }}>
                  Founder & Lead Full-Stack Engineer
                </p>
              </div>

              <div className="col-md-7">
                <div className="mb-4">
                  <span className="section-kicker-orange">About Brian</span>
                  <h3 style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.85rem', fontSize: '1.3rem' }}>
                    Designing for Speed, Clarity & Local Business Growth
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.94rem', marginBottom: '0.9rem' }}>
                    Hello! I'm <strong>Brian Kamwera</strong>, a full-stack web developer based in Lilongwe, Malawi. I architect fast, responsive web applications that pair modern UI clarity with dependable backend performance.
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.94rem', marginBottom: 0 }}>
                    Every build adheres to accessible WCAG standards, mobile-first ergonomics, and structured SEO so businesses earn measurable inbound value.
                  </p>
                </div>

                <div className="d-flex gap-3 justify-content-start flex-wrap">
                  <a
                    href="https://github.com/As244-350-df"
                    className="btn btn-brand-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href="/Brian_Kamwera_ReactJS_Developer_CV.docx"
                    download
                    className="btn btn-brand-outline"
                  >
                    <i className="bi bi-file-earmark-person"></i>
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capability Pillars */}
        <div className="row g-3 align-items-stretch">
          {pillars.map((item, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <div
                className="card surface-card h-100 p-3 text-center"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '14px'
                }}
              >
                <div
                  className="mx-auto mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: item.accent ? 'rgba(var(--color-accent-rgb), 0.12)' : 'rgba(var(--color-primary-rgb), 0.1)',
                    color: item.accent ? 'var(--color-accent)' : 'var(--color-primary)',
                    fontSize: '1.15rem'
                  }}
                >
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h6 style={{ fontWeight: 700, margin: '0 0 2px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                  {item.label}
                </h6>
                <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{item.detail}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevDesc