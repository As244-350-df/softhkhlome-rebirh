import React from 'react';
import placeholder from '../assets/Logo.png';
import { techStack } from './TechStack.js';
import { testimonials } from './testimonials.js';
import { proejcts } from './projects.js';
function ProjStackTest() {
  return (
    <div className='row container mb-2 section-wrapper-1'>
      <div className="col-md-6 mx-0 d-block section-wrapper-3 py-2">
        <div className="Projects h-40 section-wrapper-3">
          <h2 className="h2 py-2 text-center text-primary">Projects</h2>
          <div className="projects py-2  border" style={{ overflowX: 'auto', display: 'flex', gap: '10px', padding: '10px', scrollSnapType: 'x mandatory' }}>
            {proejcts.map((project, idx) => (
              <div key={idx} className={`d-flex pt-4 tech flex-column align-items-center justify-content-center ${idx==0? "ml-2":""}`} style={{ minWidth: '200px', scrollSnapAlign: 'start' }}>
                <img src={placeholder} className="w-100" alt={project.name } style={{ maxWidth: '100px', minHeight: '120px', height: 'auto' }}/>
                <h3 className="h3 text-center">{project.name}</h3>
                <p className="tech-text text-center px-4">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="Tech_Stack h-40 mt-4 section-wrapper-3">
          <h2 className="h3 py-2 text-center text-primary">Our Tech Stack</h2>
          <div className="tech_stack  border px-3" style={{ overflowX: 'auto', display: 'flex', gap: '10px', padding: '10px', scrollSnapType: 'x mandatory' }}>
            {techStack.map((tech, idx) => (
              <div key={idx} className="d-flex tech flex-column align-items-center w-100 justify-content-center" style={{ minWidth: '200px', scrollSnapAlign: 'start' }}>
                <img src={tech.icon} className="d-block" alt={tech.name} style={{ maxWidth: '100px', height: 'auto' }} />
                <h5 className='text-warning pt-1'>{tech.name}</h5>
                <p className="text-center text-dark fw-normal tech-text px-3">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6 section-wrapper-3 py-2">
        <h2 className="h2 pt-3 text-center text-primary">Testimonials</h2>
        <div className="testimonials d-flex flex-column align-items-center justify-content-s" style={{ overflowY: 'scroll', maxHeight: '100%', padding: '10px' }}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial d-flex py-2 my-1 flex-column align-items-center justify-content-center ">
              <img src={testimonial.image} className=" img mt-2 rounded-circle border mx-3 mb-3" alt={testimonial.name} style={{ width: '100px', height: '100px' }}/>
              <div className="comments bg-transparent px-2 d-flex flex-column align-items-center justify-content-center">
                <h5 className="h5 py-2 bg-transparent ">{testimonial.name}</h5>
                <p className="text-center px-4 py-2">"{testimonial.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjStackTest;