import React, { useRef, useLayoutEffect, useState } from 'react'
import placeholder from '../assets/Logo.png'
import { Carousel } from 'bootstrap'
import  {techStack}  from './TechStack.js'
function ProjStackTest() {
  const projectCarouselRef = useRef(null)
  const techStackCarouselRef = useRef(null)
  const [projectCarousel, setProjectCarousel] = useState(null)
  const [techStackCarousel, setTechStackCarousel] = useState(null)

  useLayoutEffect(() => {
    // Initialize both carousels
    if (projectCarouselRef.current && !projectCarousel) {
      const carousel = new Carousel(projectCarouselRef.current, {
        interval: 1000,
        wrap: true
      })
      setProjectCarousel(carousel)
    }

    if (techStackCarouselRef.current && !techStackCarousel) {
      const carousel = new Carousel(techStackCarouselRef.current, {
        interval: false,
        wrap: true
      })
      setTechStackCarousel(carousel)
    }
  }, [projectCarousel, techStackCarousel])

  return (
    <div className='row border container mb-2 section-wrapper-1'>
      <div className="col-md-6 mx-0 d-block section-wrapper-3 py-2">
        <div className="Projects section-wrapper-3">
          <h2 className="h2 py-2 text-center">Project</h2>
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
                  <img src={placeholder} className="w-100 my-2" alt="JavaScript Project"/>
                  <h3 className="h4 text-center my-4">JavaScript</h3>
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
          <h2 className="h3 py-2 text-center">Our Tech Stack</h2>
          <div className="tech_stack">
            <div 
              id="carouselExampleCaptions" 
              ref={techStackCarouselRef}
              className="carousel slide bg-transparent"
            >
              <div className="carousel-indicators bg-transparent">
                {techStack.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => techStackCarousel && techStackCarousel.to(idx)}
                    className=""
                    aria-current={idx === 0 ? "true" : undefined}
                    aria-label={`Slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {techStack.map((tech, idx) => (
                  <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''} d-flex flex-column align-items-center justify-content-center`}>
                    <img src={tech.icon} className="d-block w-100" alt={tech.name} />
                    <h5 className='text-dark'>{tech.name}</h5>
                    <p className="p text-center tech-text text-dark fw-normal px-3">{tech.description}</p>
                  </div>
                ))}
              </div>
              <button 
                className="carousel-control-prev" 
                type="button" 
                onClick={() => techStackCarousel && techStackCarousel.prev()}
              >
                <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button 
                className="carousel-control-next" 
                type="button" 
                onClick={() => techStackCarousel && techStackCarousel.next()}
              >
                <span className="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>                  
          </div>
        </div>
      </div>
      <div className="col-md-6 section-wrapper-3 py-2">
        <h2 className="h2 py-4 text-center">Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial d-flex flex-column align-items-center justify-content-center">
            <img src={placeholder} className="rounded-circle border mx-3 mb-3" alt="Testimonial 1" style={{ width: '100px', height: '100px' }}/>
            <div className="comments px-2 d-flex flex-column align-items-center justify-content-center">
              <h5 className="h5 border py-2">John Doe</h5>
              <p className="p text-center px-4 py-2 border">"Softkhlome provided exceptional service and delivered a fantastic project on time. Highly recommended!"</p>
            </div>
          </div>
          <div className="testimonial d-flex flex-column align-items-center justify-content-center">
            <img src={placeholder} className="rounded-circle mb-3" alt="Testimonial 2" style={{ width: '100px', height: '100px' }}/>
            <h5 className="h5">Jane Smith</h5>
            <p className="p text-center">"The team at Softkhlome is professional, responsive, and highly skilled. They exceeded our expectations!"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjStackTest