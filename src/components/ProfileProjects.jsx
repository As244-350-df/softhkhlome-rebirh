import React from 'react'
import { projects } from './projects'
function ProfileProjects() {
  return (
    <div className='container py-2 pb-4 profileprojects g-4'>
            <h2 className="display-7 fw-bold text-center text-primary py-2">Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="project bg-primary border-radius children-bg-transparent py-2 border my-1 h-100 border-warning d-flex flex-column align-items-center justify-content-around">
                            <img src={project.image} alt={project.name} className="img img-fluid" />
                            <h3 className="h3 text-center pb-1 px-2 text-warning">{project.name}</h3>
                            <p className="p text-center px-2 tech-text text-light">{project.description}</p>
                            <a href={project.link} className="btn btn-warning bg-warning text-warning">view project</a>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default ProfileProjects