import React from "react"
import { contactmethods } from "./contactUs.js"

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="container-fluid bg-light py-5" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header Section */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">Contact Us</h2>
              <p className="lead text-muted">
                Ready to start your project? Get in touch with us today and let's bring your vision to life.
              </p>
            </div>

            <div className="row g-5">
              {/* Contact Form */}
              <div className="col-lg-6">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <h3 className="card-title text-primary mb-4">
                      <i className="bi bi-envelope-fill me-2"></i>
                      Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg border-primary"
                          placeholder="Enter your full name..."
                          id="name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                        <input
                          type="email"
                          className="form-control form-control-lg border-primary"
                          placeholder="your.email@example.com"
                          id="email"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-bold">Message</label>
                        <textarea
                          className="form-control form-control-lg border-primary"
                          id="message"
                          rows="5"
                          placeholder="Tell us about your project..."
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-warning text-primary btn-lg w-100 fw-bold">
                        <i className="bi bi-send me-2 bg-transparent"></i>
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="col-lg-6">
                <div className="card shadow-sm border-0 mb-4">
                  <div className="card-body p-4">
                    <h3 className="card-title text-primary mb-4">
                      <i className="bi bi-info-circle-fill me-2"></i>
                      Get in Touch
                    </h3>
                    <p className="text-muted mb-4">
                      Have questions or want to learn more about our services? Feel free to reach out to us through any of these channels!
                    </p>

                    <div className="row g-3">
                      <div className="col-12">
                        <div className="d-flex align-items-center children-bg-transparent p-3 bg-light rounded">
                          <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                          <div className="children-bg-transparent">
                            <strong>Address</strong><br />
                            <span className="text-muted">26 Mitundu, Lilongwe, Malawi</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center children-bg-transparent p-3 bg-light rounded">
                          <i className="bi bi-telephone-fill text-primary fs-4 me-3"></i>
                          <div>
                            <strong>Phone</strong><br />
                            <span className="text-muted">+265 (886) 522-243</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex children-bg-transparent align-items-center p-3 bg-light rounded">
                          <i className="bi bi-envelope-fill text-primary fs-4 me-3"></i>
                          <div>
                            <strong>Email</strong><br />
                            <span className="text-muted">softkhlome@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
                {/* Contact Methods Cards */}
                <div className="row g-3">
                  {contactmethods.map((method, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="card shadow-sm border-0 bg-primary children-bg-transparent h-100 text-center">
                        <div className="card-body d-flex flex-column align-items-center justify-content-around p-3">
                          <div className="mb-3 text-warning">
                            <i className={`${method.icon} fs-2 text-warning`}></i>
                          </div>
                          <h6 className="card-title fw-bold text-warning mb-2">{method.method}</h6>
                          <p className="card-text small text-light mb-3">
                            {method.description}
                          </p>
                          <a
                            href={method.link}
                            className="btn btn-outline-warning btn-sm w-100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-arrow-right me-1"></i>
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact