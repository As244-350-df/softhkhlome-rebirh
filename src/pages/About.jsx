import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import TeamImg from '../assets/Polish_20260407_171501920.png'
import Contact from "../components/Contact"
import Services from '../components/Services.jsx'
import sampleImg from "../images/undraw_in-the-office_e7pg.svg"
import ProfileProjects from '../components/ProfileProjects.jsx'
import webDevImg from "../assets/Web Development.png"

function About() {
  const pageName = "about"
  return (
    <>
      <NavBar pageName={pageName} />
      
      {/* Hero Section */}
      <section className="container-fluid bg-primary text-white children-bg-transparent py-5 pb-lg-0">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="card bg-transparent border-0 text-white">
                <div className="card-body d-flex flex-column align-items-center p-0">
                  <h1 className="display-3 fw-bold mb-3 text-center">Learn More About Us</h1>
                  <p className="lead text-light text-center mb-4">
                    Get to know more about our Organization's Origin, Mission, and Team.
                  </p>
                  <a href="#contact" className="btn btn-warning text-warning fw-bold px-4 py-2">
                    <i className="bi bi-arrow-right me-2"></i>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src={TeamImg}
                className="img img-fluid"
                alt="About our team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Origin and About Section */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card shadow-lg border-primary h-100">
                <div className="card-header bg-primary text-light children-bg-transparent py-3">
                  <h3 className="card-title mb-0 fw-bold">
                    <i className="bi bi-star me-2"></i>
                    Our Origin
                  </h3>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rem quo tempora itaque, facere voluptates enim voluptatem dolore hic beatae? Perferendis, cumque. Quidem nisi repudiandae officiis saepe mollitia magnam quasi?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card shadow-lg border-warning h-100">
                <div className="card-header bg-warning text-primary children-bg-transparent py-3">
                  <h3 className="card-title mb-0 fw-bold">
                    <i className="bi bi-info-circle me-2"></i>
                    About Us
                  </h3>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo quisquam est eos quis recusandae qui earum assumenda enim aliquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container-fluid bg-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Our Mission</h2>
            <p className="lead text-muted">What drives us to succeed every day</p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <div className="mb-3 d-flex justify-content-center">
                    <i className="bi bi-bullseye text-primary fs-1"></i>
                  </div>
                  <p className="card-text text-muted mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rem quo tempora itaque, facere voluptates enim voluptatem dolore hic beatae? Perferendis, cumque. Quidem nisi repudiandae officiis saepe mollitia magnam quasi?
                  </p>
                  <p className="card-text text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo quisquam est eos quis recusandae qui earum assumenda enim aliquam?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={webDevImg} alt="Our mission" className="img-fluid rounded shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Our Team</h2>
            <p className="lead text-muted">Meet the talented people behind Softkhlome</p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="card shadow-lg border-0">
                <div className="card-body p-0">
                  <img
                    src={sampleImg}
                    alt="Our dedicated team"
                    className="img-fluid rounded w-100"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h4 className="card-title text-primary fw-bold mb-3">A Dedicated Team</h4>
                  <p className="card-text text-muted mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rem quo tempora itaque, facere voluptates enim voluptatem dolore hic beatae? Perferendis, cumque. Quidem nisi repudiandae officiis saepe mollitia magnam quasi?
                  </p>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="card border-0 bg-primary text-white">
                        <div className="card-body text-center">
                          <h5 className="card-title fw-bold">50+</h5>
                          <p className="card-text small">Projects Completed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card border-0 bg-success text-white">
                        <div className="card-body text-center">
                          <h5 className="card-title fw-bold">100+</h5>
                          <p className="card-text small">Happy Clients</p>
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

      {/* Additional Components */}
      <section className="bg-white py-5">
        <ProfileProjects />
      </section>
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default About