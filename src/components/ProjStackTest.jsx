import React from 'react';
import placeholder from '../assets/Logo.png';
import { techStack } from './TechStack.js';
import { testimonials } from './testimonials.js';
import { projects } from './projects.js';

function ProjStackTest() {
  return (
    <section className="container bg-light py-5">
      <h2 className="display-5 fw-bold text-primary mb-5">Projects & Tech Stack</h2>
      <div className="container">
        <div className="row g-4">
          {/* Projects and Tech Stack Section */}
          <div className="col-lg-8">
            {/* Projects Section */}
            <div className="card shadow-sm overflow-hidden mb-4">
              <div className="card-header bg-primary children-bg-transparent text-white">
                <h3 className="card-title text-warning text-center mb-0">
                  <i className="bi bi-folder me-2"></i>
                  Featured Projects
                </h3>
              </div>
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {projects.length>0&&projects.map((project,idx)=>{
                  return idx==0?(
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  ):(<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} aria-label={'slide '+(idx+1)}></button>)
                })}      
              </div>                
                <div className="carousel-inner">
                  {projects.length>0?projects.map((project, idx) => (
                  <div className={idx===0?'carousel-item active':'carousel-item'} key={idx} data-bs-interval="7000">
                    <img src={project.image} className="d-block w-100" alt={project.name}/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5 className='text-light fw-bold'>{project.name}</h5>
                      <p className='text-light small text-start'>{project.description}</p>
                      <a href={project.link} className="btn btn-primary text-light btn-md px-4">
                          View Project
                      </a>                      
                    </div>            
                  </div>
                  )):<div className="d-flex flex-column align-items-center gap-3 py-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038547.png" alt="No Projects" className="img-fluid" style={{ width: '100px', height: '100px' }} loading="lazy" />
                    <div className="text-center">
                      <h5 className="text-warning">No Projects Available</h5>
                      <p className="text-light small text-start">Check back later for new projects!</p>
                    </div>
                  </div>
                  }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Tech Stack Section working....*/}
            <div className="card shadow-sm overflow-hidden">
              <div className="card-header bg-primary children-bg-transparent text-white">
                <h3 className="card-title text-warning text-center mb-0">
                  <i className="bi bi-tools me-2"></i>
                  Technology Stack
                </h3>
              </div>
              <div id="carouselExample1" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {techStack.length>0&&techStack.map((tech,idx)=>{
                  return idx==0?(
                      <button type="button" data-bs-target="#carouselExample1Indicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor:"black"}}></button>
                  ):(<button type="button" data-bs-target="#carouselExample1Indicators" data-bs-slide-to={idx} aria-label={'slide '+(idx+1)} style={{backgroundColor:"black"}}></button>)
                })}      
              </div>                
                <div className="carousel-inner">
                  {techStack.length>0?techStack.map((tech, idx) => (
                    <div className={idx===0?'carousel-item active justify-content-center':'carousel-item justify-content-center'} key={idx} data-bs-interval="5000">
                      <div
                        className=" card card-transition border shadow-sm flex-shrink-0 d-flex justify-content-center px-2 text-center"
                        style={{
                          minWidth: '200px',
                          scrollSnapAlign: 'start',
                          width:"100%"
                        }}
                      >
                        <div className="card-body mx-5 px-lg-5 w-100 d-flex flex-column align-items-center">
                          <div className="mb-3 d-flex justify-content-center">
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="img-fluid"
                              style={{ height: '50px', width: '50px' }}
                              loading="lazy"
                            />
                          </div>
                          <h6 className=" text-primary fw-bold">{tech.name}</h6>
                          <p className=" tech-text small text-muted w-70">{tech.description}</p>
                        </div>
                      </div>          
                    </div>
                  )):<div className="d-flex flex-column align-items-center gap-3 py-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038547.png" alt="No Projects" className="img-fluid" style={{ width: '100px', height: '100px' }} loading="lazy" />
                    <div className="text-center">
                      <h5 className="text-warning">No Projects Available</h5>
                      <p className="text-light small text-start">Check back later for new projects!</p>
                    </div>
                  </div>
                  }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                  <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>              
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="col-lg-4">
            <div className="card shadow-sm overflow-hidden h-100 grass">
              <div className="card-header bg-warning children-bg-transparent text-white">
                <h3 className="card-title text-primary text-center mb-0">
                  <i className="bi bi-chat-quote me-2"></i>
                  Client Testimonials
                </h3>
              </div>
              <div className="card-body">
                <div
                  className="d-flex flex-column gap-3"
                  style={{
                    overflowY: 'auto',
                    maxHeight: '500px',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#6c757d transparent'
                  }}
                >
                  {testimonials.length>0?testimonials.map((testimonial, idx) => (
                    <div key={idx} className="card border-0 shadow-sm grass">
                      <div className="card-body text-center">
                        <div className="mb-3 d-flex justify-content-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-circle border"
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            loading="lazy"
                          />
                        </div>
                        <h6 className="card-title text-info fw-bold mb-2">{testimonial.name}</h6>
                        <p className="card-text small text-muted">
                          "{testimonial.comment}"
                        </p>
                        <div className="mt-2">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                  :<div className="d-flex flex-column align-items-center gap-3 py-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038547.png" alt="No Testimonials" className="img-fluid" style={{ width: '100px', height: '100px' }} loading="lazy" />
                    <div className="text-center">
                      <h5 className="text-muted">No Testimonials Yet</h5>
                      <p className="small text-muted">Be the first to share your experience!</p>
                    </div>
                  </div>  
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjStackTest