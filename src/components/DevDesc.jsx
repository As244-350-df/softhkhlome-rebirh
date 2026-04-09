import React from 'react'
import devImg from "../images/Polish_20250526_113040107.png"

function DevDesc() {
  return (
    <div className="container">
        <div className="row d-flex flex-md-row  justify-content-center align-items-center">
            <div className="col-md-6 px-5">
                <img className="img img-fluid img-center" src={devImg} alt="developers image"/>
                <div className="h4 text-center">Brian Kamwera</div>
            </div>
            <div className="col-md-6 d-flex  flex-column justify-content-center align-items-center">
                
                <p className="p-4 pt-md-5 my-md-2">
                    Hello! I'm <b>Brian Kamwera</b>, a passionate <b>full-stack web developer</b>. I specialize in creating dynamic and responsive websites that not only look great but also provide an exceptional user experience. With a keen eye for detail and a commitment to quality, I strive to bring your digital ideas to life.
                </p>
                <div className="p-4 py-md-2 d-flex align-items-center">
                      <a href="#" className="btn bg-primary text-white btm-sm btm-md-lg">
                         GitHub Profile
                      </a>
                      <a href="About us" className="btn btn-outline-primary btm-sm btm-md-lg mx-4 px-4">Resume</a>
           </div>
           <div className="p-4 py-md-2 d-flex justify-content-start align-items-center">
                      <h1 className="h1">
                      <a href="#" className=" btm-md-lg mx-5">
                        <i className="bi bi-twitter"></i>
                      </a>
                      </h1>
                     <h1 className="h1">
                      <a href="#" className=" btm-md-lg">
                        <i className="bi bi-github"></i>
                      </a>
                     </h1>
                      <h1 className="h1">
                      <a href="About us" className=" mx-4 px-4">
                        <i className="bi bi-facebook "></i>
                      </a>
                      </h1>
           </div>
        </div>
    </div>
  </div>
  )
}

export default DevDesc