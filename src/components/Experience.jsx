import React from 'react'
import OfficeImg from "../images/undraw_in-the-office_e7pg.svg"
function Experience() {
  return (
    <div className='container-fluid px-5 children-bg-transparent bg-primary'>
        <h2 className="display-7  fw-bold text-center text-warning py-2 py-md-4">Experience</h2>
        <div className="row py-2">
            <div className="col-md-6 py-3">
                <img src={OfficeImg} alt="" className="img img-fluid" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                <p className="p px-md-4 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum quae dicta. Ex modi voluptate ea, aliquid molestias accusantium iusto commodi illo doloremque quae vel beatae nulla expedita laborum sequi.</p>
                <h2 className="display-3 px-md-4 text-warning fw-bold">
                    3+ years of experience
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Experience