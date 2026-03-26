import React from 'react'
import developerImg from "../images/Polish_20250526_113040107.png"
function AboutUs() {
  return (
    <div class="row  about-us d-flex justify-content-center my-2 ">
      <h3 className="h3 fw-bold text-center my-4 text-primary">About Us</h3>
        <div className="col-md-6 ml-5 d-flex align-items-center px-5 ">
          <div className="short-cont mx-2 my-3">
            <p className="text d-block">
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
            <button  className="btn btn-primary">learn More</button>
          </div>
        </div>
        <div className="col-md-6 developer-img-cont  d-flex justify-content-center align-items-center border-primary">
            <img src={developerImg} className="developer-Img mx-4 img-fluid  border-primary" alt="" />
        </div>
    </div>
  )
}

export default AboutUs