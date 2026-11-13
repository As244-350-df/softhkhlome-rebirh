import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useReducedMotion } from 'framer-motion'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Contact from "../components/Contact"
import Services from '../components/Services.jsx'
import ProfileProjects from '../components/ProfileProjects.jsx'
import webDevImg from "../assets/Web Development.png"
import FounderImg from "../assets/Polish_20250527_105337925.png"
import Experience from "../components/Experience"

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
}

function About() {
  const pageName = "about"
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>About Softkhlome – Web Agency in Lilongwe, Malawi</title>
        <meta name="description" content="Discover Softkhlome's story, engineering principles, and founder Brian Kamwera. Custom web development and UI design in Lilongwe, Malawi." />
        <link rel="canonical" href="https://softkhlome.web.app/about" />
        <link rel="alternate" hrefLang="en-MW" href="https://softkhlome.web.app/about" />
        <link rel="alternate" hrefLang="en" href="https://softkhlome.web.app/about" />
        <link rel="alternate" hrefLang="x-default" href="https://softkhlome.web.app/about" />
        <meta property="og:site_name" content="Softkhlome – Lilongwe, Malawi" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Softkhlome – Web Agency in Lilongwe, Malawi" />
        <meta property="og:description" content="Discover Softkhlome's story, engineering principles, and founder Brian Kamwera. Custom web development and UI design in Lilongwe, Malawi." />
        <meta property="og:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:image:secure_url" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="696" />
        <meta property="og:image:alt" content="Softkhlome Web Agency Logo" />
        <meta property="og:url" content="https://softkhlome.web.app/about" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="softkhlome.web.app" />
        <meta name="twitter:url" content="https://softkhlome.web.app/about" />
        <meta name="twitter:title" content="About Softkhlome – Web Agency in Lilongwe, Malawi" />
        <meta name="twitter:description" content="Discover Softkhlome's story, engineering principles, and founder Brian Kamwera. Custom web development and UI design in Lilongwe, Malawi." />
        <meta name="twitter:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta name="twitter:image:alt" content="Softkhlome Web Agency" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": "https://softkhlome.web.app/about#webpage",
              "name": "About Softkhlome – Web Agency in Lilongwe, Malawi",
              "url": "https://softkhlome.web.app/about",
              "description": "Discover Softkhlome's story, engineering principles, and founder Brian Kamwera. Custom web development and UI design in Lilongwe, Malawi.",
              "inLanguage": "en-MW",
              "isPartOf": { "@id": "https://softkhlome.web.app/#website" },
              "mainEntity": { "@id": "https://softkhlome.web.app/#localbusiness" }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://softkhlome.web.app/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://softkhlome.web.app/about" }
              ]
            }
          ]
        })}
        </script>
      </Helmet>
      
      <NavBar pageName={pageName} />
      
      <div style={{ background: 'var(--bg-canvas)' }}>
        {/* Hero Section */}
        <section
          className="pt-5 pb-0 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-canvas) 100%)',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <div className="container pt-4" style={{ maxWidth: '1120px' }}>
            <div className="row align-items-end g-4 g-lg-5">
              <div className="col-lg-6 pb-4 pb-lg-5 mb-lg-3">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  custom={0}
                >
                  <span className="section-kicker">About Softkhlome</span>
                  <h1 className="section-title mb-3" style={{ fontSize: 'clamp(2.35rem, 4vw, 3.4rem)' }}>
                    Pioneering Modern Web Engineering in Malawi
                  </h1>
                </motion.div>

                <motion.p
                  className="lead mb-4"
                  style={{ color: 'var(--text-muted)' }}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  custom={1}
                >
                  Discover our founding vision, technical rigor, and commitment to building fast digital products that grow Malawian businesses.
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  custom={2}
                >
                  <a href="#contact" className="btn btn-brand-accent btn-lg">
                    <span>Collaborate With Us</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </motion.div>
              </div>

              {/* Seamless Blended Cutout Portrait with Entrance Transition */}
              <div className="col-lg-6 d-flex align-items-end justify-content-center">
                <motion.img
                  src="/assets/aistudio/IMG-20260820-WA0887_9ed71f28.png"
                  alt="Happy business user engaging with a responsive web experience on mobile"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, x: 0, y: 0, scale: 1 }
                      : { opacity: 0, x: 96, y: 24, scale: 0.94 }
                  }
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="img-fluid d-block"
                  style={{
                    maxHeight: '520px',
                    width: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'bottom center'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Origin and About Section */}
        <section className="py-5" style={{ background: 'var(--bg-canvas)' }}>
          <div className="container py-3">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6">
                <motion.div 
                  className="card surface-card h-100 overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '18px'
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div 
                    className="p-3 px-4 d-flex align-items-center gap-2"
                    style={{ backgroundColor: 'var(--bg-surface-elevated)', borderBottom: '1px solid var(--border-subtle)' }}
                  >
                    <i className="bi bi-lightbulb" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}></i>
                    <h4 style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>
                      Our Origin
                    </h4>
                  </div>
                  <div className="card-body p-4">
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', margin: 0 }}>
                      Softkhlome was founded in 2024 by <strong>Brian Kamwera</strong>. What began as a personal showcase of web engineering capabilities quickly evolved into a full-scale digital studio. Passionate about software architecture and modern UI standards, Brian created Softkhlome to bring world-class responsive development to businesses and individuals throughout Malawi.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="col-lg-6">
                <motion.div 
                  className="card surface-card h-100 overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '18px'
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div 
                    className="p-3 px-4 d-flex align-items-center gap-2"
                    style={{ backgroundColor: 'var(--bg-surface-elevated)', borderBottom: '1px solid var(--border-subtle)' }}
                  >
                    <i className="bi bi-shield-check" style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}></i>
                    <h4 style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>
                      What We Stand For
                    </h4>
                  </div>
                  <div className="card-body p-4">
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', margin: 0 }}>
                      Operating with a client-first philosophy, we view every project as a strategic partnership. Our core pillars—innovation, quality, and transparent communication—ensure that every web application, UI design, and technical consultation produces tangible, long-term business value.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-5" style={{ background: 'var(--bg-surface)' }}>
          <div className="container py-3">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-12 col-lg-8">
                <span className="section-kicker">Guiding Purpose</span>
                <h2 className="section-title">Our Mission & Principles</h2>
                <p className="section-subtitle">What guides our engineering and client collaboration every single day.</p>
              </div>
            </div>

            <div className="row g-4 align-items-center justify-content-center">
              <div className="col-lg-6">
                <motion.div 
                  className="card surface-card p-4 p-md-5 h-100"
                  style={{
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '18px'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(var(--color-primary-rgb), 0.12)', color: 'var(--color-primary)' }}>
                    <i className="bi bi-bullseye fs-3"></i>
                  </div>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Empowering African Brands
                  </h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '1rem' }}>
                    Our mission is to empower businesses and individuals through innovative web solutions that drive growth, enhance user experiences, and foster digital transformation. We are committed to delivering high-quality, scalable applications.
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', margin: 0 }}>
                    Our core values of integrity, innovation, and client partnership guide every milestone.
                  </p>
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.img 
                  src={webDevImg} 
                  alt="Web Development Mission" 
                  className="img-fluid rounded-4 shadow-lg" 
                  loading="lazy" 
                  style={{ width: '100%', maxHeight: '360px', objectFit: 'cover' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-5" style={{ background: 'var(--bg-canvas)' }}>
          <div className="container py-3">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-12 col-lg-8">
                <span className="section-kicker">Leadership</span>
                <h2 className="section-title">The Face Behind Softkhlome</h2>
                <p className="section-subtitle">Meet the founder dedicated to your digital success.</p>
              </div>
            </div>

            <div className="row g-4 align-items-center justify-content-center">
              <div className="col-lg-5">
                <motion.div 
                  className="card surface-card overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '18px'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={FounderImg}
                    alt="Brian Kamwera - Founder"
                    className="img-fluid w-100"
                    style={{ height: '380px', objectFit: 'cover', objectPosition: 'center top' }}
                    loading="lazy"
                  />
                  <div className="p-3 text-center" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
                    <h5 style={{ margin: 0, fontWeight: 700, color: 'var(--text-main)' }}>Brian Kamwera</h5>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--color-primary)' }}>Founder & Lead Developer</p>
                  </div>
                </motion.div>
              </div>

              <div className="col-lg-7">
                <motion.div 
                  className="card surface-card p-4 p-md-5 h-100"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '18px'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h4 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                    A Dedicated Independent Practice
                  </h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                    Softkhlome operates with agile focus. When you work with us, you communicate directly with the engineer building your product—no lost requirements in account manager layers. As we expand, we are bringing on top regional talent to scale enterprise engagements.
                  </p>

                  <div className="row g-0 pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="col-6">
                      <span className="stat-number d-block" style={{ margin: 0, fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-primary)', fontFamily: 'Manrope, sans-serif' }}>
                        50+
                      </span>
                      <p style={{ margin: '2px 0 0', fontSize: '0.84rem', color: 'var(--text-muted)' }}>Projects Completed</p>
                    </div>
                    <div className="col-6">
                      <span className="stat-number d-block" style={{ margin: 0, fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-accent)', fontFamily: 'Manrope, sans-serif' }}>
                        100%
                      </span>
                      <p style={{ margin: '2px 0 0', fontSize: '0.84rem', color: 'var(--text-muted)' }}>Client Satisfaction</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Experience pageName={pageName} />
        
        <section className="py-5" style={{ background: 'var(--bg-surface)' }}>
          <ProfileProjects />
        </section>
        
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default About