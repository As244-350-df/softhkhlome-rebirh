import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroImg1 from '../assets/hero3.jpg'
import heroImg2 from '../assets/hero2.jpg'
import heroImg3 from '../assets/campaign-creators-iEiUITs149M-unsplash.jpg'
import heroImg4 from '../assets/faizur-rehman-d7h4kZXmHhk-unsplash.jpg'

const HERO_SLIDES = [
  {
    src: heroImg1,
    alt: 'Softkhlome modern software engineering workspace',
    caption: 'Web Design & Software Engineering'
  },
  {
    src: heroImg2,
    alt: 'Responsive React web application interface development',
    caption: 'Custom React Web Applications'
  },
  {
    src: heroImg3,
    alt: 'Collaborative digital strategy and creative design session',
    caption: 'Digital Strategy & Brand Growth'
  },
  {
    src: heroImg4,
    alt: 'Clean UI/UX wireframing and frontend development',
    caption: 'Mobile-First UI/UX Systems'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

function Introduction() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isPaused || prefersReduced) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [isPaused])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  return (
    <div
      className="navbar-intro mb-0 pb-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel */}
      <div className="hero-carousel-layer" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.img
            key={HERO_SLIDES[currentSlide].src}
            src={HERO_SLIDES[currentSlide].src}
            alt={HERO_SLIDES[currentSlide].alt}
            referrerPolicy="no-referrer"
            className="hero-carousel-img"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
      </div>

      {/* Signature Royal Blue Gradient Scrim */}
      <div className="hero-gradient-overlay" aria-hidden="true" />

      <div className="navbar-intro-cont">
        <section className="hero px-md-4 px-2 py-4">
          <div className="container" style={{ maxWidth: '1120px' }}>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <motion.div
                  className="text-center py-4 py-lg-5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.p
                    variants={itemVariants}
                    className="mb-3"
                    style={{
                      color: '#ff9e44',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em'
                    }}
                  >
                    Lilongwe, Malawi · {HERO_SLIDES[currentSlide].caption}
                  </motion.p>

                  <motion.h1 variants={itemVariants} className="mb-4 text-white mx-auto" style={{ maxWidth: '18ch' }}>
                    We build <span className="highlight-orange">fast websites</span> that turn visitors into <span className="highlight-white">clients</span>.
                  </motion.h1>

                  <motion.p variants={itemVariants} className="lead mb-4">
                    Responsive web platforms, custom React apps, and clean visual branding engineered for growing businesses in Malawi.
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="d-flex justify-content-center gap-3 flex-wrap pt-2"
                  >
                    <motion.a
                      href="#contact"
                      className="btn btn-brand-accent btn-lg"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Start Your Project</span>
                      <i className="bi bi-arrow-right"></i>
                    </motion.a>
                    <motion.a
                      href="#services"
                      className="btn btn-brand-outline-light btn-lg"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Explore Services</span>
                    </motion.a>
                  </motion.div>

                  {/* Carousel Navigation Controls */}
                  <div
                    className="d-flex align-items-center justify-content-center gap-3 mt-5 pt-2"
                    aria-label="Hero showcase slides"
                  >
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous hero slide"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        backgroundColor: 'rgba(7, 23, 57, 0.45)',
                        color: '#ffffff',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        transition: 'background-color 150ms ease'
                      }}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>

                    <div className="d-flex align-items-center gap-2">
                      {HERO_SLIDES.map((slide, idx) => {
                        const isActive = idx === currentSlide
                        return (
                          <button
                            key={slide.caption}
                            type="button"
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Show slide ${idx + 1}: ${slide.caption}`}
                            aria-current={isActive ? 'true' : 'false'}
                            style={{
                              width: isActive ? '26px' : '8px',
                              height: '8px',
                              borderRadius: '999px',
                              border: 'none',
                              padding: 0,
                              backgroundColor: isActive ? '#ff9e44' : 'rgba(255, 255, 255, 0.4)',
                              cursor: 'pointer',
                              transition: 'width 220ms cubic-bezier(0.16, 1, 0.3, 1), background-color 220ms ease'
                            }}
                          />
                        )
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next hero slide"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        backgroundColor: 'rgba(7, 23, 57, 0.45)',
                        color: '#ffffff',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        transition: 'background-color 150ms ease'
                      }}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Introduction
