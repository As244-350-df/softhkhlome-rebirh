import React, { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'

function WhyChooseUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    anime.timeline({ easing: 'easeOutExpo', duration: 700 })
      .add({
        targets: sectionRef.current.querySelectorAll('.why-card'),
        opacity: [0, 1],
        translateY: [35, 0],
        delay: anime.stagger(110),
      })
  }, [])

  return (
    <section className="container-fluid bg-primary children-bg-transparent py-5" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold text-warning d-flex flex-column align-items-center mb-3">Why Choose Us</h2>
              <p className="lead text-light">
                Find out what sets us apart from other digital companies.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-6 col-md-6">
                <div className="card card-transition shadow-sm h-100 border-0 bg-primary text-white why-card">
                  <div className="card-body text-center p-4">
                    <div className="mb-4">
                      <i className="bi bi-star-fill fs-1 text-warning"></i>
                    </div>
                    <h5 className="card-title text-warning fw-bold mb-3">Expertise</h5>
                    <p className="card-text">
                      Our team consists of highly skilled professionals with extensive experience in web design and development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="card card-transition shadow-sm h-100 border-0 bg-primary text-white why-card">
                  <div className="card-body text-center p-4">
                    <div className="mb-4">
                      <i className="bi bi-heart-fill fs-1 text-warning"></i>
                    </div>
                    <h5 className="card-title text-warning fw-bold mb-3">Customer-Centric Approach</h5>
                    <p className="card-text">
                      We prioritize our clients' needs and work closely with them to ensure their vision is brought to life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="card card-transition shadow-sm h-100 border-0 bg-primary text-white why-card">
                  <div className="card-body text-center p-4">
                    <div className="mb-4">
                      <i className="bi bi-lightbulb-fill fs-1 text-warning"></i>
                    </div>
                    <h5 className="card-title text-warning fw-bold mb-3">Innovative Solutions</h5>
                    <p className="card-text">
                      We stay up-to-date with the latest industry trends and technologies to provide innovative solutions that drive results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card card-transition shadow-sm h-100 border-0 bg-primary text-white why-card">
                  <div className="card-body text-center p-4">
                    <div className="mb-4">
                      <i className="bi bi-headset fs-1 text-warning"></i>
                    </div>
                    <h5 className="card-title text-warning fw-bold mb-3">Post Service Support</h5>
                    <p className="card-text">
                      We are always available to help throughout your journey, even after project delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5 g-4">
              <div className="col-md-6">
                <div className="card card-transition shadow-sm h-100 why-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-clock-history text-primary fs-3 me-3"></i>
                      <h5 className="card-title mb-0 text-primary">Timely Delivery</h5>
                    </div>
                    <p className="card-text text-primary">
                      We respect your time and deliver projects on schedule without compromising quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card card-transition shadow-sm h-100 why-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-headset text-primary fs-3 me-3"></i>
                      <h5 className="card-title mb-0 text-primary">24/7 Support</h5>
                    </div>
                    <p className="card-text text-primary">
                      Our dedicated support team is always ready to help you with any questions or concerns.
                    </p>
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

export default WhyChooseUs
