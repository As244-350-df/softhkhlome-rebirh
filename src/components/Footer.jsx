import React from 'react'
import { Link } from 'react-router-dom'
import brand from '../assets/brand.png'

function Footer() {
  return (
    <footer className="bg-primary text-light children-bg-transparent py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4">
            <div className="card bg-transparent border-0 text-light h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <img
                    src={brand}
                    className="img-fluid"
                    alt="SoftKhlome Brand"
                    style={{ maxHeight: '80px' }}
                  />
                </div>
                <h4 className="card-title fw-bold mb-3">SoftKhlome</h4>
                <p className="card-text text-light">
                  Softkhlome is a newly established private institution dedicated to
                  providing cutting-edge digital services tailored to meet the growing
                  needs of modern businesses and creative individuals. Founded on the principles of
                  innovation, quality, and customer satisfaction, Softkhlome strives to become a trusted
                  name in the digital solutions industry.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="col-lg-4">
            <div className="card bg-transparent border-0 text-light h-100">
              <div className="card-body text-center">
                <h4 className="card-title fw-bold mb-4">Navigate</h4>
                <div className="d-flex flex-column gap-2">
                  <Link to="/" className="btn btn-outline-light text-start">
                    <i className="bi bi-house me-2"></i>
                    Home
                  </Link>
                  <a href="/#services" className="btn btn-outline-light text-start">
                    <i className="bi bi-gear me-2"></i>
                    Services
                  </a>
                  <Link to="/About" className="btn btn-outline-light text-start">
                    <i className="bi bi-info-circle me-2"></i>
                    About
                  </Link>
                  <Link to="/Policy" className="btn btn-outline-light text-start">
                    <i className="bi bi-shield-check me-2"></i>
                    Privacy Policy
                  </Link>
                  <a href="/#contact" className="btn btn-outline-light text-start">
                    <i className="bi bi-envelope me-2"></i>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="col-lg-4">
            <div className="card bg-transparent border-0 text-light h-100">
              <div className="card-body">
                {/* Contact Info */}
                <div className="mb-4">
                  <h5 className="card-title fw-bold text-center mb-3">Our Contact Info</h5>
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-geo-alt me-3 text-warning"></i>
                      <span>123 Bunda Mitundu, Lilongwe, Malawi</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-envelope me-3 text-warning"></i>
                      <span>softkhlome@gmail.com</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-telephone me-3 text-warning"></i>
                      <span>+265 123 456 789</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h5 className="card-title fw-bold text-center mb-3">Follow Us</h5>
                  <div className="d-flex justify-content-center gap-3">
                    <a
                      href="https://web.facebook.com/profile.php?id=61576749383886&__tn__=-UC*F"
                      className="btn text-light btn-lg rounded-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://whatsapp.com/channel/0029VbBjQ0CCsU9IEWqCrG37"
                      className="btn text-light btn-lg rounded-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/softkhlome/#"
                      className="btn text-light btn-lg rounded-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://youtube.com/@softkhlome?si=pVx2sPoax3L6yq8t"
                      className="btn text-light btn-lg rounded-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card bg-transparent border-0">
              <div className="card-body text-center">
                <p className="mb-0 text-light">
                  SoftKhlome 2025. All rights reserved © |
                  <Link to="/Terms" className="text-light text-decoration-none ms-1">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer