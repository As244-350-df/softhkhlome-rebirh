import React from 'react'
import developerImg from "../images/Polish_20250526_113040107.png"
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <section className="container-fluid bg-white children-bg-transparent py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">About Softkhlome</h2>
              <p className="lead text-muted">
                Passionate about creating digital experiences that matter.
              </p>
            </div>

            {/* Main Content */}
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="card shadow-lg border-0 h-100">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <i className="bi bi-building text-primary fs-1"></i>
                    </div>
                    <h4 className="card-title text-primary fw-bold mb-3">Our Story</h4>
                    <p className="card-text text-muted mb-4">
                      Softkhlome is a newly established company founded by <strong>Brian Kamwera</strong>.
                      We specialize in delivering exceptional digital solutions that help businesses thrive
                      in the modern world.
                    </p>
                    <div className="row g-3 mb-4">
                      <div className="col-6">
                        <div className="text-center">
                          <i className="bi bi-code-slash text-success fs-2 mb-2"></i>
                          <h6 className="text-success fw-bold">Web Development</h6>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center">
                          <i className="bi bi-palette text-info fs-2 mb-2"></i>
                          <h6 className="text-info fw-bold">Graphic Design</h6>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center">
                          <i className="bi bi-search text-warning fs-2 mb-2"></i>
                          <h6 className="text-warning fw-bold">Digital Marketing</h6>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center">
                          <i className="bi bi-laptop text-primary fs-2 mb-2"></i>
                          <h6 className="text-primary fw-bold">UI/UX Design</h6>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link to="/about" className="btn bg-primary btn-primary text-warning btn-lg px-4">
                        <i className="bi bi-info-circle me-2"></i>
                        Learn More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card shadow-lg border-0">
                  <div className="card-body p-0">
                    <img
                      src={developerImg}
                      alt="Brian Kamwera - Founder of Softkhlome"
                      className="img-fluid rounded w-100"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-footer bg-primary text-light text-center">
                    <h5 className="mb-1">Brian Kamwera</h5>
                    <p className="mb-0 small">Founder & Lead Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="card">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <i className="bi bi-bullseye text-primary fs-1"></i>
                    </div>
                    <h4 className="card-title text-primary fw-bold mb-3">Our Mission</h4>
                    <p className="card-text lead text-muted mb-4">
                      To empower businesses with innovative digital solutions that drive growth,
                      enhance user experiences, and create lasting impact in the digital landscape.
                    </p>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="p-3">
                          <i className="bi bi-lightning text-warning fs-2 mb-2"></i>
                          <h6 className="fw-bold">Innovation</h6>
                          <p className="small text-muted">Staying ahead with cutting-edge technologies</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-3">
                          <i className="bi bi-heart text-danger fs-2 mb-2"></i>
                          <h6 className="fw-bold">Quality</h6>
                          <p className="small text-muted">Delivering excellence in every project</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-3">
                          <i className="bi bi-handshake text-success fs-2 mb-2"></i>
                          <h6 className="fw-bold">Partnership</h6>
                          <p className="small text-muted">Building lasting relationships with clients</p>
                        </div>
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

export default AboutUs