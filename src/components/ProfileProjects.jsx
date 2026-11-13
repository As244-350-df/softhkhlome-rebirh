import React, { useEffect, useRef } from 'react'
import { projects } from './projects'
import anime from 'animejs/lib/anime.es.js'

function ProfileProjects() {
  const projectsRef = useRef(null)

  useEffect(() => {
    if (!projectsRef.current) return

    anime.timeline({ easing: 'easeOutExpo', duration: 650 })
      .add({
        targets: projectsRef.current.querySelectorAll('.project-card'),
        translateY: [35, 0],
        opacity: [0, 1],
        delay: anime.stagger(90),
      })
  }, [])

  return (
    <div className="container py-4" ref={projectsRef}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-9">
          {/* Header */}
          <div className="text-center mb-5 project-card">
            <span className="section-kicker">Portfolio Grid</span>
            <h2 className="section-title">Selected Client Work</h2>
            <p className="section-subtitle">
              A curated selection of responsive websites and web applications built by Softkhlome.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div 
                  className="card surface-card h-100 overflow-hidden project-card d-flex flex-column"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '16px'
                  }}
                >
                  <div className="overflow-hidden" style={{ height: '180px' }}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.6rem' }}>
                        {project.name}
                      </h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        {project.description}
                      </p>
                    </div>
                    <div>
                      {project.link && project.link.startsWith('http') ? (
                        <a
                          href={project.link}
                          className="btn btn-brand-outline btn-sm w-100 justify-content-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-box-arrow-up-right me-1"></i>
                          <span>Explore Project</span>
                        </a>
                      ) : (
                        <a
                          href={project.link || '#contact'}
                          className="btn btn-brand-outline btn-sm w-100 justify-content-center"
                        >
                          <i className="bi bi-arrow-right me-1"></i>
                          <span>Request Case Study</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-5 project-card">
            <div 
              className="card surface-card p-4 p-md-5"
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
            >
              <h4 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Need a Custom Solution Built?
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '580px', margin: '0 auto 1.5rem' }}>
                Whether you need an e-commerce platform, a corporate website, or an interactive web app, we provide end-to-end implementation.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#contact" className="btn btn-brand-primary">
                  <i className="bi bi-envelope me-1"></i>
                  <span>Inquire About Your Project</span>
                </a>
                <a 
                  href="https://github.com/As244-350-df" 
                  className="btn btn-brand-outline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github me-1"></i>
                  <span>GitHub Repositories</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileProjects