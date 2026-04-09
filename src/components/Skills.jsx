import React from 'react'
import { techStack } from './TechStack'
function Skills() {
  return (
    <div className='skills row g-2 py-2 px-5 px-md-4 px-lg-5'>
        <h2 className="col-12 text-center text-primary display-7 fw-bold py-2">Skills</h2>
        {
          techStack.map((tech,idx)=>{
            return (
                <div className="col-md-3">
                    <div className="skill border border-warning h-100">
                        <img src={tech.icon} alt="" className="img img fluid" />
                        <h5 className="h5 text-center ">{tech.name}</h5>
                        <p className="p tech-text px-1 text-center">{tech.description}</p>
                    </div>
                </div>
            )
          })
        }
    </div>
  )
}

export default Skills