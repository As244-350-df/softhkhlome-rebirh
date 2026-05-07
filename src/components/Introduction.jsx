import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'

function Introduction() {
  const introRef = useRef(null)

  useEffect(() => {
    if (!introRef.current) return

    anime.timeline({
      easing: 'easeOutExpo',
      duration: 800,
    })
      .add({
        targets: introRef.current.querySelectorAll('.intro-line'),
        translateY: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(120),
      })
      .add(
        {
          targets: introRef.current.querySelectorAll('.intro-copy'),
          translateY: [30, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
        },
        '-=520'
      )
      .add(
        {
          targets: introRef.current.querySelectorAll('.intro-button'),
          translateY: [24, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
        },
        '-=440'
      )
      .add(
        {
          targets: introRef.current.querySelectorAll('.feature-card'),
          translateY: [30, 0],
          opacity: [0, 1],
          delay: anime.stagger(120),
        },
        '-=500'
      )
  }, [])

  return (
    <section className="hero px-md-5 px-2 d-flex children-bg-transparent align-items-center mb-sm-2 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center" ref={introRef}>
              <div className="card bg-transparent border-0 shadow-lg">
                <div className="card-body py-2">
                  <h1 className='display-7 fw-bold text-light mb-4 intro-line'>
                    We <span className="text-warning">Build</span> websites and <span className="text-warning">create</span> stunning designs for bussineses.
                  </h1>
                  <p className='lead  text-light mb-4 px-md-5 intro-copy'>
                    We provide modern digital solutions to businesses, helping grow your brand and improve your digital presence and attract customers.
                  </p>
                  <div className='d-flex justify-content-center gap-3 flex-wrap'>
                    <a href="#contact" className="btn bg-primary  text-warning btn-lg px-4 py-2 intro-button">
                      <i className="bi bi-rocket-takeoff me-2"></i>
                      contact us
                    </a>
                    <Link to="/about" className="btn btn-outline-warning text-warning btn-lg px-4 py-2 intro-button">
                      <i className="bi bi-info-circle me-2"></i>
                      About us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row mt-2 d-none d-lg-flex mb-1 g-4">
                <div className="col-md-4">
                  <div className="card bg-white bg-opacity-10 border-warning text-light h-100 feature-card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="bi bi-lightning-charge-fill fs-1 text-warning"></i>
                      </div>
                      <h5 className="card-title">Fast & Responsive</h5>
                      <p className="card-text">Lightning-fast loading times with mobile-first design.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-white bg-opacity-10 border-warning text-light h-100 feature-card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="bi bi-shield-check fs-1 text-warning"></i>
                      </div>
                      <h5 className="card-title">Secure & Reliable</h5>
                      <p className="card-text">Built with security best practices and reliable hosting.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-white bg-opacity-10 border-warning text-light h-100 feature-card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="bi bi-graph-up fs-1 text-warning"></i>
                      </div>
                      <h5 className="card-title">Results Driven</h5>
                      <p className="card-text">Grow your brand and boost your business's online presence.</p>
                    </div>
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

export default Introduction
