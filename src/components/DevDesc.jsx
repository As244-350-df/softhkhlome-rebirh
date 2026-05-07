import React from 'react'
import devImg from "../images/Polish_20250526_113040107.png"

function DevDesc() {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header Section */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">Meet the Developer</h2>
              <p className="lead text-muted">
                Get to know the creative mind behind Softkhlome's innovative solutions.
              </p>
            </div>

            <div className="card shadow-sm border-0">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-md-5 text-center p-4">
                    <img
                      className="img-fluid rounded-circle mb-3"
                      src={devImg}
                      alt="Brian Kamwera - Full Stack Developer"
                      style={{ maxWidth: '250px', height: '250px', objectFit: 'cover' }}
                    />
                    <h3 className="h4 text-primary fw-bold mb-1">Brian Kamwera</h3>
                    <p className="text-muted fw-bold mb-0">Full-Stack Web Developer</p>
                  </div>

                  <div className="col-md-7 p-4 d-flex flex-column justify-content-center">
                    <div className="mb-4">
                      <h4 className="text-primary mb-3">About Brian</h4>
                      <p className="lead mb-4">
                        Hello! I'm <strong>Brian Kamwera</strong>, a passionate <strong>full-stack web developer</strong>.
                        I specialize in creating dynamic and responsive websites that not only look great but also provide an exceptional user experience.
                      </p>
 
                    </div>

                    <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                      <a
                        href="https://github.com/As244-350-df"
                        className="btn btn-primary btn-lg text-warning px-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bg-transparent bi-github me-2"></i>
                        GitHub Profile
                      </a>
                      <a
                        href="../assets/Brian_Kamwera_ReactJS_Developer_CV.docx"
                        download
                        className="btn btn-outline-primary btn-lg px-4"
                      >
                        <i className="bi bi-file-earmark-person bg-transparent me-2"></i>
                        View Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="row mt-5 g-4">
              <div className="col-md-3 col-6">
                <div className="card text-center border-0 bg-primary text-white h-100">
                  <div className="card-body text-dark py-4">
                    <i className="bi bi-code-slash fs-2 mb-2"></i>
                    <h6 className="card-title mb-0 text-dark">Frontend</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="card text-center border-0 bg-success text-white h-100">
                  <div className="card-body text-dark py-4">
                    <i className="bi bi-server fs-2 mb-2"></i>
                    <h6 className="card-title mb-0 text-dark">Backend</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="card text-center border-0 bg-warning text-dark h-100">
                  <div className="card-body text-dark py-4">
                    <i className="bi bi-palette fs-2 mb-2"></i>
                    <h6 className="card-title mb-0">Design</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="card text-center border-0 bg-info text-white h-100">
                  <div className="card-body text-dark py-4">
                    <i className="bi bi-graph-up fs-2 mb-2"></i>
                    <h6 className="card-title mb-0 text-dark">Analytics</h6>
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

export default DevDesc