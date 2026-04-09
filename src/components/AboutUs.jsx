import React from 'react'
import developerImg from "../images/Polish_20250526_113040107.png"
function AboutUs() {
  return (
    <div className="row container about-us section-wrapper d-flex justify-content-center my-2 ">
      <h3 className="h3 fw-bold text-center my-4 text-primary">About Us</h3>
        <div className="col-md-6 ml-5 d-flex align-items-center px-5 ">
          <div className="short-cont d-flex flex-column align-items-center mx-2 my-3">
            <p className="p about-fs-md text-center fs-200 px-md-0 px-lg-5 p-0">
              softkhlome is newly enstablished company founded by <b>Brian Kamwera</b>.They offer website design, website development,graphic design and digital marketing services.
            </p>
            <button  className="btn btn-warning bg-warning text-primary my-lg-2">learn More</button>
          </div>
        </div>
        <div className="col-md-6 developer-img-cont py-3 d-flex flex-column justify-content-center align-items-center border-primary">
            <img src={developerImg} className="developer-Img w-100 h-100 mx-4 img-fluid  border-primary" alt="founders image" />
        </div>
    </div>
  )
}

export default AboutUs