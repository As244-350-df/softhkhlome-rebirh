import React from 'react'
import OfficeImg from "../images/undraw_in-the-office_e7pg.svg"

function Experience() {
  return (
    <section className="container-fluid children-bg-transparent bg-primary py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold text-warning mb-3">Experience</h2>
              <p className="lead text-light">
                Years of dedication to delivering exceptional results and innovative solutions.
              </p>
            </div>

            {/* Main Experience Card */}
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="card shadow-lg border-0 bg-white h-100">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="mb-3">
                        <i className="bi bi-briefcase-fill text-primary fs-1"></i>
                      </div>
                      <h3 className="card-title text-primary fw-bold">Professional Journey</h3>
                    </div>
                    <p className="card-text text-light mb-4">
                      With over three years of hands-on experience in web development and software engineering,
                      I've had the privilege of working on diverse projects that have shaped my expertise and
                      passion for creating impactful digital solutions.
                    </p>
                    <div className="text-center">
                      <div className="bg-primary text-white rounded-pill py-3 px-4 d-inline-block">
                        <h2 className="display-4 fw-bold mb-0 text-warning">3+ Years</h2>
                        <p className="mb-0 small">of Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card shadow-lg border-0 bg-transparent">
                  <div className="card-body p-0">
                    <img
                      src={OfficeImg}
                      alt="Professional workspace illustration"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="row mt-5 g-4">
              <div className="col-md-4">
                <div className="card shadow-sm border-warning h-100 text-center">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <i className="bi bi-lightbulb-fill text-warning fs-1"></i>
                    </div>
                    <h5 className="card-title text-warning fw-bold">Innovation</h5>
                    <p className="card-text text-light">
                      Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm border-warning h-100 text-center">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <i className="bi bi-check-circle-fill text-warning fs-1"></i>
                    </div>
                    <h5 className="card-title text-warning fw-bold">Quality</h5>
                    <p className="card-text text-light">
                      Committed to delivering high-quality code and exceptional user experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm border-warning h-100 text-center">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <i className="bi bi-people-fill text-warning fs-1"></i>
                    </div>
                    <h5 className="card-title text-warning fw-bold">Collaboration</h5>
                    <p className="card-text text-light">
                      Working effectively with teams and clients to achieve shared goals and success.
                    </p>
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

export default Experience