import React from 'react'
import OfficeImg from "../images/undraw_in-the-office_e7pg.svg"

function Experience({ pageName }) {
  const highlights = [
    {
      icon: 'bi-lightbulb',
      title: 'Technical Innovation',
      desc: 'Adopting modern React and front-end architectures tuned for real-world speed.'
    },
    {
      icon: 'bi-check2-circle',
      title: 'Engineering Rigor',
      desc: 'Clean component structure, cross-browser reliability, and WCAG AA accessibility.'
    },
    {
      icon: 'bi-people',
      title: 'Collaborative Execution',
      desc: 'Working directly with founders to ship production systems from initial wireframes.'
    }
  ]

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container py-4" style={{ maxWidth: '1120px' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <span className="section-kicker">Track Record</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Dedicated years of full-stack development and responsive interface craft.
          </p>
        </div>

        {/* Main Experience Split */}
        <div className="row g-4 align-items-stretch mb-5">
          <div className="col-lg-6">
            <div
              className="card surface-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
            >
              <div>
                <span className="section-kicker-orange">Milestone Journey</span>
                <h3 style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.9rem', fontSize: '1.45rem' }}>
                  Hands-On Full-Stack & UI Development
                </h3>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.94rem', marginBottom: '1.75rem' }}>
                  With over three years of intensive hands-on experience in web engineering, {pageName === "Profile" ? "I have" : "we have"} developed, deployed, and scaled custom applications that solve real operational challenges.
                </p>
              </div>

              <div className="pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <span className="stat-number d-block" style={{ fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-primary)', fontFamily: 'Manrope, sans-serif' }}>
                  3+ Years
                </span>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Commercial Web & Software Delivery
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="card surface-card h-100 p-4 d-flex align-items-center justify-content-center overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
            >
              <img
                src={OfficeImg}
                alt="Professional workspace illustration"
                referrerPolicy="no-referrer"
                className="img-fluid mx-auto"
                style={{ maxHeight: '260px', width: 'auto' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Three Highlights */}
        <div className="row g-4 align-items-stretch">
          {highlights.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="card surface-card h-100 p-4"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px'
                }}
              >
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: idx === 1 ? 'rgba(var(--color-accent-rgb), 0.12)' : 'rgba(var(--color-primary-rgb), 0.1)',
                    color: idx === 1 ? 'var(--color-accent)' : 'var(--color-primary)',
                    fontSize: '1.25rem'
                  }}
                >
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.08rem', color: 'var(--text-main)', marginBottom: '0.45rem' }}>
                  {item.title}
                </h5>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience