import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo(2).png'
import Map from './Map'

function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSectionLink = (e, sectionId) => {
    e.preventDefault()
    const localTarget = document.getElementById(sectionId)
    if (localTarget) {
      localTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`)
    }
  }

  return (
    <footer className="footer">
      <div className="container position-relative" style={{ zIndex: 1, maxWidth: '1160px' }}>
        <div className="row g-4 g-lg-5 align-items-start">
          {/* Column 1: Brand Identity & Social Channels */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-inline-flex align-items-center gap-2 mb-3 text-decoration-none">
              <img
                src={logo}
                loading="lazy"
                alt="Softkhlome logo"
                style={{ height: '34px', width: 'auto' }}
              />
              <span style={{ fontWeight: 800, fontSize: '1.35rem', color: '#ffffff', letterSpacing: '-0.03em' }}>
                Softkhlome<span style={{ color: 'var(--color-accent)' }}>.</span>
              </span>
            </Link>

            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.65, marginBottom: '1.25rem', maxWidth: '34ch' }}>
              Web design and software engineering studio in Lilongwe, Malawi—building fast websites, React apps, and visual brand identities.
            </p>

            {/* Social Links */}
            <div className="d-flex align-items-center gap-2">
              <a
                href="https://web.facebook.com/profile.php?id=61576749383886&__tn__=-UC*F"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBjQ0CCsU9IEWqCrG37"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/softkhlome/"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://youtube.com/@softkhlome?si=pVx2sPoax3L6yq8t"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="https://github.com/As244-350-df"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 style={{ fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontSize: '0.88rem' }}>
              Explore
            </h6>
            <nav aria-label="Footer navigation" className="d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
              <Link to="/">Home</Link>
              <a href="/#services" onClick={(e) => handleSectionLink(e, 'services')}>
                Services
              </a>
              <a href="/#projects" onClick={(e) => handleSectionLink(e, 'projects')}>
                Projects
              </a>
              <Link to="/about">About Us</Link>
              <Link to="/developer">Developer</Link>
              <a href="/#contact" onClick={(e) => handleSectionLink(e, 'contact')}>
                Contact
              </a>
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6 style={{ fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontSize: '0.88rem' }}>
              Contact Studio
            </h6>
            <div className="d-flex flex-column gap-3" style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.82)' }}>
              <div className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt" style={{ color: '#ff9233', marginTop: '3px', fontSize: '1rem', flexShrink: 0 }}></i>
                <span>26 Bunda Mitundu, Lilongwe, Malawi</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope" style={{ color: '#ff9233', fontSize: '1rem', flexShrink: 0 }}></i>
                <a href="mailto:softkhlome@gmail.com" className="footer-contact-link text-break">
                  softkhlome@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone" style={{ color: '#ff9233', fontSize: '1rem', flexShrink: 0 }}></i>
                <a href="tel:+265886522243" className="footer-contact-link tabular-nums">
                  +265 886 522 243
                </a>
              </div>
              <div className="pt-1">
                <Link
                  to="/developer"
                  className="d-inline-flex align-items-center gap-1"
                  style={{ color: '#ff9233', fontWeight: 600, fontSize: '0.86rem' }}
                >
                  <span>Meet Lead Developer</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div className="col-lg-3 col-md-6">
            <h6 style={{ fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontSize: '0.88rem' }}>
              Location
            </h6>
            <Map lat={-13.9833} lon={33.7833} zoom={12} />
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div
          className="row mt-5 pt-4 align-items-center"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.14)' }}
        >
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0" style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.72)' }}>
            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.72)' }}>
              © {new Date().getFullYear()} Softkhlome. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end" style={{ fontSize: '0.84rem' }}>
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <Link to="/developer">Developer</Link>
              <Link to="/policy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
