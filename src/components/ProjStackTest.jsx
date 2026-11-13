import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from './TechStack.js';
import { testimonials } from './testimonials.js';
import { projects } from './projects.js';

function ProjStackTest() {
  const [selectedTech, setSelectedTech] = useState(techStack[0] || null);

  return (
    <section
      id="projects"
      className="py-5"
      style={{
        background: 'var(--bg-surface-alt)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container py-4" style={{ maxWidth: '1120px' }}>
        {/* Section 1: Featured Projects */}
        <div className="row justify-content-center text-center mb-5">
          <motion.div
            className="col-12 col-lg-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">04. Proof & Deployments</span>
            <h2 className="section-title">Featured Client Work</h2>
            <p className="section-subtitle">
              Production web platforms built with clean component architecture and mobile-first speed.
            </p>
          </motion.div>
        </div>

        {/* 3 Projects Row */}
        <div className="row g-4 justify-content-center mb-5 align-items-stretch">
          {projects.map((project, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <motion.div
                className="card surface-card h-100 overflow-hidden d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '18px'
                }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div>
                  <div className="position-relative overflow-hidden" style={{ height: '200px', backgroundColor: 'var(--bg-surface-soft)' }}>
                    <img
                      src={project.image}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                      <span>0{idx + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category || 'Production Web App'}</span>
                    </div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.18rem', color: 'var(--text-main)', marginBottom: '0.55rem' }}>
                      {project.name}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 0 }}>
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  {project.link && project.link.startsWith('http') ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-brand-primary w-100 btn-sm"
                    >
                      <span>Visit Live Site</span>
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  ) : (
                    <a
                      href={project.link || '#contact'}
                      className="btn btn-brand-outline w-100 btn-sm"
                    >
                      <span>Request Case Study</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Section 2: Client Testimonials (Adjacent Proof) */}
        <div className="row justify-content-center text-center mt-5 mb-4 pt-3">
          <div className="col-12 col-lg-8">
            <span className="section-kicker-orange">Client Outcomes</span>
            <h3 style={{ fontWeight: 800, fontSize: '1.85rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Trusted by Businesses & Teams
            </h3>
            <p className="section-subtitle" style={{ fontSize: '0.96rem' }}>
              Direct feedback from founders, directors, and partners we have delivered for.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center mb-5 align-items-stretch">
          {testimonials.map((t, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <motion.div
                className="card surface-card h-100 p-4 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '18px'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-1" style={{ color: 'var(--color-accent)', fontSize: '0.88rem' }} aria-label={`${t.rating || 5} out of 5 stars`}>
                      {[...Array(t.rating || 5)].map((_, sIdx) => (
                        <i key={sIdx} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <span className="tabular-nums" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-subtle)' }}>
                      5.0 / 5.0
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    "{t.comment}"
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3 pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
                      color: 'var(--color-primary)',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.84rem',
                      flexShrink: 0
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h6 style={{ margin: 0, fontWeight: 700, color: 'var(--text-main)', fontSize: '0.94rem' }}>
                      {t.name}
                    </h6>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', display: 'block' }}>
                      {t.role} · {t.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Section 3: Interactive Technology Matrix */}
        <div className="row justify-content-center text-center mt-5 mb-4 pt-3">
          <div className="col-12 col-lg-8">
            <span className="section-kicker">Core Engineering Stack</span>
            <h3 style={{ fontWeight: 800, fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Tools Behind Every Launch
            </h3>
            <p className="section-subtitle" style={{ fontSize: '0.95rem' }}>
              Select any technology below to inspect how we apply it in production.
            </p>
          </div>
        </div>

        <div className="row justify-content-center g-3">
          <div className="col-12 col-lg-10">
            <div className="row g-2 g-md-3 justify-content-center">
              {techStack.map((tech, idx) => {
                const isSelected = selectedTech?.name === tech.name;
                return (
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={idx}>
                    <button
                      type="button"
                      onClick={() => setSelectedTech(tech)}
                      className="w-100 p-3 rounded-3 text-center d-flex flex-column align-items-center justify-content-center h-100"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        transition: 'transform 160ms ease, border-color 160ms ease',
                        minHeight: '96px'
                      }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        referrerPolicy="no-referrer"
                        style={{ height: '32px', width: '32px', marginBottom: '8px' }}
                        loading="lazy"
                      />
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isSelected ? 'var(--color-primary)' : 'var(--text-main)' }}>
                        {tech.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {selectedTech && (
                <motion.div
                  key={selectedTech.name}
                  className="mt-3 p-4 rounded-3 d-flex align-items-start gap-3"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-accent)',
                    color: 'var(--text-main)'
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  <img
                    src={selectedTech.icon}
                    alt={selectedTech.name}
                    referrerPolicy="no-referrer"
                    style={{ height: '36px', width: '36px', flexShrink: 0 }}
                  />
                  <div>
                    <h6 style={{ fontWeight: 700, margin: '0 0 4px', color: 'var(--text-main)' }}>
                      {selectedTech.name} in Production
                    </h6>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {selectedTech.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjStackTest;