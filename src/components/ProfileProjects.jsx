import React from 'react'
import { projects } from './projects'

function ProfileProjects() {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">Featured Projects</h2>
              <p className="lead text-muted">
                A showcase of my recent work and creative solutions.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="row g-4">
              {projects.map((project, index) => (
                <div className="col-lg-4 col-md-4" key={index}>
                  <div className="card shadow-sm h-100 bg-primary border border-warning children-bg-transparent border-0 hover-lift">
                    <div className="card-img-top overflow-hidden d-flex justify-content-center py-2 pt-0">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="img img-fluid"
                        style={{ height: '10rem',width:"100%", objectFit: 'cover' }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-warning fw-bold text-center mb-3">{project.name}</h5>
                      <p className="card-text text-light text-center flex-grow-1 tech-text">{project.description}</p>
                      <div className="mt-auto">
                        <a
                          href={project.link || '#'}
                          className="btn btn-warning w-100 text-warning"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-eye me-2 bg-transparent"></i>
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-5">
              <div className="card shadow-sm border-primary">
                <div className="card-body p-4">
                  <h4 className="card-title text-primary mb-3">Want to see more?</h4>
                  <p className="card-text text-muted mb-4">
                    Explore my complete portfolio and discover more projects that showcase my skills and creativity.
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#contact" className="btn btn-primary text-warning">
                      <i className="bi bi-envelope me-2 bg-transparent"></i>
                      Get In Touch
                    </a>
                    <a href="https://github.com/As244-350-df" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github bg-transparent me-2"></i>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileProjects