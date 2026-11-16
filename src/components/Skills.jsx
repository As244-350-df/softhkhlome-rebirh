import React from 'react'
import { techStack } from './TechStack'

function Skills() {
  const frontendSkills = ['React 19', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap 5', 'HTML5 / CSS3', 'Responsive UX']
  const backendSkills = ['Node.js', 'Express', 'Python', 'Firebase', 'RESTful APIs', 'PostgreSQL', 'Auth & Security']
  const toolsList = ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite', 'Figma', 'Firebase Hosting']

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
      <div className="container py-4" style={{ maxWidth: '1120px' }}>
        {/* Header Section */}
        <div className="text-center mb-5">
          <span className="section-kicker">Core Stack</span>
          <h2 className="section-title">Technical Skills & Tooling</h2>
          <p className="section-subtitle">
            Technologies, frameworks, and modern workflows powering our production launches.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row g-3 mb-5 align-items-stretch">
          {techStack.map((tech, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
              <div
                className="card surface-card h-100 p-4 text-center"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px'
                }}
              >
                <div className="mb-3 d-flex justify-content-center">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    referrerPolicy="no-referrer"
                    className="img-fluid"
                    style={{ height: '44px', width: '44px' }}
                    loading="lazy"
                  />
                </div>
                <h5 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1.02rem', marginBottom: '0.4rem' }}>
                  {tech.name}
                </h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', margin: 0, lineHeight: 1.55 }}>
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary Pillars (Zero-Pill Unboxed Metadata) */}
        <div className="row g-4 mb-4 align-items-stretch">
          <div className="col-md-6">
            <div
              className="card surface-card h-100 p-4"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem'
                  }}
                >
                  <i className="bi bi-code-square"></i>
                </div>
                <h4 style={{ fontWeight: 700, margin: 0, fontSize: '1.18rem', color: 'var(--text-main)' }}>
                  Frontend Engineering
                </h4>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Responsive, accessible, and fast interfaces using modern React, Framer Motion, and CSS architecture.
              </p>
              <div className="pt-3" style={{ borderTop: '1px solid var(--border-subtle)', fontSize: '0.84rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                {frontendSkills.join(' · ')}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="card surface-card h-100 p-4"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(var(--color-accent-rgb), 0.12)',
                    color: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem'
                  }}
                >
                  <i className="bi bi-server"></i>
                </div>
                <h4 style={{ fontWeight: 700, margin: 0, fontSize: '1.18rem', color: 'var(--text-main)' }}>
                  Backend & APIs
                </h4>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Dependable server-side logic, real-time channels, and database persistence for web and mobile clients.
              </p>
              <div className="pt-3" style={{ borderTop: '1px solid var(--border-subtle)', fontSize: '0.84rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                {backendSkills.join(' · ')}
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Version Control */}
        <div
          className="card surface-card p-4"
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px'
          }}
        >
          <div className="row align-items-center g-3">
            <div className="col-md-4 text-center text-md-start">
              <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                <i className="bi bi-tools" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}></i>
                <span style={{ fontWeight: 700, fontSize: '1.02rem', color: 'var(--text-main)' }}>
                  Workflow & Toolchain
                </span>
              </div>
            </div>
            <div className="col-md-8 text-center text-md-end" style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {toolsList.join(' · ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills