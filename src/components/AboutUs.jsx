import React from 'react'
import developerImg from "../images/Polish_20250526_113040107.png"
function AboutUs() {
  return (
    <div class="row container about-us section-wrapper d-flex justify-content-center my-2 ">
      <h3 className="h3 fw-bold text-center my-4 text-primary">About Us</h3>
        <div className="col-md-6 ml-5 d-flex align-items-center px-5 ">
          <div className="short-cont d-flex flex-column align-items-center mx-2 my-3">
            <p className="p  text-center px-md-0 px-lg-5 p-0">
              Softkhlome is a newly established private institution dedicated 
              to providing cutting-edge digital services tailored to meet the
              growing needs of modern businesses and creative individuals.
              Founded on the principles of innovation, quality, and customer
              satisfaction, Softkhlome strives to become a trusted name in the
              digital solutions industry. Though young in age, the company is 
              driven by a team of passionate professionals who bring fresh
              ideas, technical expertise, and a strong work ethic to every 
              project.
            </p>
            <button  className="btn btn-primary my-lg-2">learn More</button>
          </div>
        </div>
        <div className="col-md-6 developer-img-cont py-3 d-flex flex-column justify-content-center align-items-center border-primary">
            <img src={developerImg} className="developer-Img mx-4 img-fluid  border-primary" alt="" />
        </div>
    </div>
  )
}

export default AboutUs