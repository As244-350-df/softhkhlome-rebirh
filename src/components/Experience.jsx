import React from 'react'
import OfficeImg from "../images/undraw_in-the-office_e7pg.svg"
function Experience() {
  return (
    <div className='container '>
        <h2 className="display-7 fw-bold text-center text-primary py-2">Experience</h2>
        <div className="row py-2">
            <div className="col-md-6">
                <img src={OfficeImg} alt="" className="img img-fluid" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum quae dicta. Ex modi voluptate ea, aliquid molestias accusantium iusto commodi illo doloremque quae vel beatae nulla expedita laborum sequi.</p>
            </div>
        </div>
    </div>
  )
}

export default Experience