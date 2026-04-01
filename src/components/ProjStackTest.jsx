import React, { useRef, useEffect } from 'react'
import placeholder from '../assets/Logo.png'

function ProjStackTest() {
  const projectCarouselRef = useRef(null)
  const techStackCarouselRef = useRef(null)

  useEffect(() => {
    // Initialize both carousels
    if (projectCarouselRef.current) {
      new window.bootstrap.Carousel(projectCarouselRef.current, {
        interval: 5000,
        wrap: true
      })
    }

    if (techStackCarouselRef.current) {
      new window.bootstrap.Carousel(techStackCarouselRef.current, {
        interval: 5000,
        wrap: true
      })
    }
  }, [])

  return (
    <div className='row border container mb-4 section-wrapper-2'>
      <div className="col-md-6 mx-0">
        <div className="Projects section-wrapper-3">
          <h2 className="h2 text-center">Project</h2>
          <div className="projects">
            <div 
              id="carouselExampleSlidesOnly" 
              ref={projectCarouselRef} 
              className="carousel slide" 
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item d-flex flex-column align-items-center justify-content-center active">
                  <img src={placeholder} className="w-100" alt="Html Project"/>
                  <h3 className="h3 text-center">Html</h3>
                </div>
                <div className="carousel-item d-flex flex-column align-items-center justify-content-center">
                  <img src={placeholder} className="w-100" alt="Css Project"/>
                  <h3 className="h3 text-center">Css</h3>
                </div>
                <div className="carousel-item d-flex flex-column align-items-center justify-content-center">
                  <img src={placeholder} className="w-100" alt="JavaScript Project"/>
                  <h3 className="h3 text-center">JavaScript</h3>
                </div>
              </div>
              <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target="#carouselExampleSlidesOnly" 
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target="#carouselExampleSlidesOnly" 
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="Tech_Stack section-wrapper-3">
          <h2 className="h2 text-center">Our Tech Stack</h2>
          <div className="tech_stack">
            <div 
              id="carouselExampleCaptions" 
              ref={techStackCarouselRef}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleCaptions" 
                  data-bs-slide-to="0" 
                  className="active" 
                  aria-current="true" 
                  aria-label="Slide 1"
                ></button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleCaptions" 
                  data-bs-slide-to="1" 
                  aria-label="Slide 2"
                ></button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleCaptions" 
                  data-bs-slide-to="2" 
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active d-flex flex-column align-items-center justify-content-center">
                  <img src={placeholder} className="d-block w-100" alt="Tech Stack Slide 1"/>
                    <h5 className='text-dark'>Frontend Development</h5>
                    <p>Building responsive and interactive user interfaces with React and modern web technologies.</p>
                </div>
                <div className="carousel-item d-flex flex-column align-items-center justify-content-center">
                  <img src={placeholder} className="d-block w-100" alt="Tech Stack Slide 2"/>
                    <h5 className='text-dark'>Backend Development</h5>
                    <p>Creating robust server-side solutions with Node.js and various backend frameworks.</p>
                </div>
                <div className="carousel-item d-flex flex-column align-items-center justify-content-center">
                  <img src={placeholder} className="d-block w-100" alt="Tech Stack Slide 3"/>
                    <h5 className='text-dark bg-transparent'>Full Stack Solutions</h5>
                    <p className='p bg-transparent text-dark'>Delivering complete end-to-end solutions combining frontend and backend technologies.</p>
                </div>
              </div>
              <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>                  
          </div>
        </div>
      </div>
      <div className="col-md-6 section-wrapper-3">
        <h2 className="h2 text-center">Testimonial</h2>
      </div>
    </div>
  )
}

export default ProjStackTest