import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../assets/logo(2).png'

const THEME_STORAGE_KEY = 'softkhlome_theme'

function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY)
      if (saved === 'dark') return true
      if (saved === 'light') return false
    } catch {
      // Ignore storage failures
    }
    return typeof document !== 'undefined' && document.body.classList.contains('dark')
  })

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {
      // Ignore storage failures
    }
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev)
  }

  const closeMobileMenu = () => {
    const navCollapse = document.getElementById('navbarID')
    if (navCollapse && navCollapse.classList.contains('show')) {
      if (window.bootstrap && window.bootstrap.Collapse) {
        const instance = window.bootstrap.Collapse.getOrCreateInstance(navCollapse)
        instance.hide()
      } else {
        navCollapse.classList.remove('show')
      }
    }
  }

  const handleSectionNav = (e, sectionId) => {
    e.preventDefault()
    closeMobileMenu()

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
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid px-3 px-md-4" style={{ maxWidth: '1200px' }}>
        {/* Zone 1: Clean Single-Line Brand Wordmark */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 text-nowrap flex-shrink-0"
          to="/"
          onClick={closeMobileMenu}
        >
          <img
            src={Logo}
            height="30"
            alt="Softkhlome logo"
            loading="lazy"
            style={{ width: 'auto', maxHeight: '30px' }}
          />
          <span style={{ letterSpacing: '-0.03em', fontWeight: 800 }}>
            Softkhlome<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list fs-4"></span>
        </button>

        {/* Zone 2 & 3: Clean Website Nav Links + Theme Toggle & Developer CTA */}
        <div className="collapse navbar-collapse" id="navbarID">
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-2 my-2 my-lg-0">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="/#services"
                className="nav-link"
                onClick={(e) => handleSectionNav(e, 'services')}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#projects"
                className="nav-link"
                onClick={(e) => handleSectionNav(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="/#contact"
                className="nav-link"
                onClick={(e) => handleSectionNav(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 flex-shrink-0 mt-2 mt-lg-0">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="btn-theme-toggle"
              aria-pressed={isDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i
                className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}
                style={{ color: isDark ? 'var(--color-accent)' : 'var(--color-primary)' }}
              ></i>
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>

            <Link
              to="/developer"
              className="btn btn-brand-primary btn-sm"
              onClick={closeMobileMenu}
            >
              <i className="bi bi-person-badge"></i>
              <span>Developer</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar