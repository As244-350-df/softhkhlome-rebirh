import React from 'react'
import { techStack } from './TechStack'

function Skills() {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header Section */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">Technical Skills</h2>
              <p className="lead text-muted">
                A comprehensive overview of the technologies and tools I use to bring your ideas to life.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="row g-4">
              {techStack.map((tech, idx) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
                  <div className="card shadow-sm h-100 border border-radius hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="mb-3">
                        <img
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          className="img-fluid"
                          style={{ height: '60px', width: '60px' }}
                        />
                      </div>
                      <h5 className="card-title text-primary fw-bold mb-3">{tech.name}</h5>
                      <p className="card-text tech-text text-muted small">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="row mt-5 g-4">
              <div className="col-md-6">
                <div className="card shadow-sm border-primary h-100">
                  <div className="card-body d-flex flex-column justify-content-around align-items-center text-center p-4">
                    <div className="mb-3">
                      <i className="bi bi-code-square text-primary fs-1"></i>
                    </div>
                    <h4 className="card-title text-primary">Frontend Development</h4>
                    <p className="card-text text-muted">
                      Creating responsive and interactive user interfaces with modern frameworks and libraries.
                    </p>
                    <div className="mt-3">
                      <span className="badge bg-primary me-1">HTML5</span>
                      <span className="badge bg-primary me-1">CSS3</span>
                      <span className="badge bg-primary me-1">JavaScript</span>
                      <span className="badge bg-primary">React</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card shadow-sm border-primary h-100">
                  <div className="card-body d-flex flex-column justify-content-around align-items-center text-center p-4">
                    <div className="mb-3">
                      <i className="bi bi-server text-primary fs-1"></i>
                    </div>
                    <h4 className="card-title text-primary">Backend Development</h4>
                    <p className="card-text text-muted">
                      Building robust server-side applications and APIs with scalable technologies.
                    </p>
                    <div className="mt-3">
                      <span className="badge bg-primary me-1">Node.js</span>
                      <span className="badge bg-primary me-1">Express.js</span>
                      <span className="badge bg-primary me-1">MySQL</span>
                      <span className="badge bg-primary">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Version Control */}
            <div className="text-center mt-5">
              <div className="card shadow-sm border-primary">
                <div className="card-body  p-4">
                  <div className="row align-items-center">
                    <div className="col-md-6 text-center mb-3 mb-md-0">
                      <i className="bi bi-tools text-primary fs-1 me-3"></i>
                      <span className="h4 text-primary fw-bold">Development Tools</span>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-wrap justify-content-center gap-2">
                        <span className="badge bg-primary">Git</span>
                        <span className="badge bg-primary">GitHub</span>
                        <span className="badge bg-primary">VS Code</span>
                        <span className="badge bg-primary">Postman</span>
                      </div>
                    </div>
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

export default Skills