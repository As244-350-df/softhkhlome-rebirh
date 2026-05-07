import React from 'react';
import placeholder from '../assets/Logo.png';
import { techStack } from './TechStack.js';
import { testimonials } from './testimonials.js';
import { projects } from './projects.js';

function ProjStackTest() {
  return (
    <section className="container-fluid bg-light py-5">
      <h2 className="display-5 fw-bold text-primary mb-3">Projects & Tech Stack</h2>
      <div className="container">
        <div className="row g-4">
          {/* Projects and Tech Stack Section */}
          <div className="col-lg-8">
            {/* Projects Section */}
            <div className="card shadow-sm overflow-hidden mb-4">
              <div className="card-header bg-primary children-bg-transparent text-white">
                <h3 className="card-title text-warning text-center mb-0">
                  <i className="bi bi-folder me-2"></i>
                  Featured Projects
                </h3>
              </div>
              <div className="card-body">
                <div
                  className="d-flex gap-3 pb-2"
                  style={{
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#6c757d transparent'
                  }}
                >
                  {projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="card card-transition border shadow-sm flex-shrink-0"
                      style={{
                        minWidth: '380px',
                        scrollSnapAlign: 'start',
                        maxWidth: '300px'
                      }}
                    >
                      <div className="card-img-top overflow-hidden d-flex justify-content-center" style={{ height: '150px' }}>
                        <img
                          src={project.image}
                          className="w-100 h-100"
                          alt={project.name}
                          style={{ objectFit: 'cover' }}
                          loading="lazy"
                        />
                      </div>
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h6 className="card-title text-center text-primary fw-bold">{project.name}</h6>
                        <p className="card-text tech-text text-center small text-muted">{project.description}</p>
                        <a href={project.link} className="btn btn-primary text-light btn-md px-4">
                          View Project
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="card shadow-sm overflow-hidden">
              <div className="card-header bg-primary children-bg-transparent text-white">
                <h3 className="card-title text-warning text-center mb-0">
                  <i className="bi bi-tools me-2"></i>
                  Technology Stack
                </h3>
              </div>
              <div className="card-body">
                <div
                  className="d-flex gap-3 pb-2"
                  style={{
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#34383c transparent'
                  }}
                >
                  {techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="card card-transition border shadow-sm flex-shrink-0 text-center"
                      style={{
                        minWidth: '200px',
                        scrollSnapAlign: 'start',
                        maxWidth: '220px'
                      }}
                    >
                      <div className="card-body">
                        <div className="mb-3 d-flex justify-content-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="img-fluid"
                            style={{ height: '50px', width: '50px' }}
                            loading="lazy"
                          />
                        </div>
                        <h6 className="card-title  text-primary fw-bold">{tech.name}</h6>
                        <p className="card-text tech-text small text-muted">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="col-lg-4">
            <div className="card shadow-sm overflow-hidden h-100">
              <div className="card-header bg-warning children-bg-transparent text-white">
                <h3 className="card-title text-primary text-center mb-0">
                  <i className="bi bi-chat-quote me-2"></i>
                  Client Testimonials
                </h3>
              </div>
              <div className="card-body">
                <div
                  className="d-flex flex-column gap-3"
                  style={{
                    overflowY: 'auto',
                    maxHeight: '500px',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#6c757d transparent'
                  }}
                >
                  {testimonials.length>0?testimonials.map((testimonial, idx) => (
                    <div key={idx} className="card border-0 shadow-sm">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-circle border"
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            loading="lazy"
                          />
                        </div>
                        <h6 className="card-title text-info fw-bold mb-2">{testimonial.name}</h6>
                        <p className="card-text small text-muted">
                          "{testimonial.comment}"
                        </p>
                        <div className="mt-2">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                  :<div className="d-flex flex-column align-items-center gap-3 py-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038547.png" alt="No Testimonials" className="img-fluid" style={{ width: '100px', height: '100px' }} loading="lazy" />
                    <div className="text-center">
                      <h5 className="text-muted">No Testimonials Yet</h5>
                      <p className="small text-muted">Be the first to share your experience!</p>
                    </div>
                  </div>  
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjStackTest