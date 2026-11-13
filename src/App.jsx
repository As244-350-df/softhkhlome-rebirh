import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Policy from './pages/Policy'
import TermsMod from './components/TermsMod'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './index.css'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css"

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '')
      const scrollToTarget = () => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }

      if (!scrollToTarget()) {
        const timer = setTimeout(scrollToTarget, 120)
        return () => clearTimeout(timer)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found – Softkhlome</title>
        <meta name="description" content="The requested page could not be found on Softkhlome." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <NavBar />
      <main
        className="py-5 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: 'var(--bg-canvas)', minHeight: '65vh' }}
      >
        <div className="container text-center" style={{ maxWidth: '540px' }}>
          <span className="section-kicker-orange">404 Error</span>
          <h1 className="section-title mb-3">Page Not Found</h1>
          <p className="section-subtitle mb-4">
            The page you are looking for may have moved or does not exist.
          </p>
          <Link to="/" className="btn btn-brand-primary">
            <span>Return to Home</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/developer" element={<Profile />} />
          <Route path="/developers" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/terms" element={<TermsMod />} />
          <Route path="/Terms" element={<TermsMod />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
