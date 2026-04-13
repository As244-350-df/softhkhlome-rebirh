import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import TeamImg from '../assets/Polish_20260407_171501920.png'
import Contact from "../components/Contact"
import Services from '../components/Services.jsx'
import sampleImg from "../images/undraw_in-the-office_e7pg.svg"
import ProfileProjects from '../components/ProfileProjects.jsx'
function About() {
  const pageName="about"
  return (
    <>
    <div className="Navbar-and-introd border">
      <NavBar pageName={pageName}/>
      <div className="about-intro row container-fluid w-100 h-100 border-bottom border-primary px-5 py-0">
        <div className="col-md-6 py-1 d-flex px-md-5 flex-column py-md-3 align-items-center justify-content-center">
          <h1 className="display-3 fw-bolder text-primary  py-5 pb-2 mt-md-5 text-center">Learn More About Us</h1>
          <p className="text-center px-4 py-2">Get to know more about our Organization's Origin, Mission, and Team. </p>
          <div className="buttons"><button className="btn btn-warning text-primary">Get Started</button></div>
        </div>
        <div className="col-md-6 d-none  d-md-flex flex-column align-items-center justify-content-end">
          <img src={TeamImg} className="img img-fluid border-primary w-100"  alt="about us" />
        </div>
      </div>
    </div>
        <div className="container-fluid children-bg-transparent bg-primary p-3 py-3">
          <div className="row">
         
            <div className="col-md-6">
             <div className="content px-2">
              <h3 className="display-7 pb-md-2 text-center text-warning">Our Origin</h3>
              <p className="p py-2 text-center text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rem quo tempora itaque, facere voluptates enim voluptatem dolore hic beatae? Perferendis, cumque. Quidem nisi repudiandae officiis saepe mollitia magnam quasi?</p>
             </div>
            </div>
        
            <div className="col-md-6 px-2">
             <div className="content">
              <h3 className="display-7 pb-md-2 text-center text-warning">About us</h3>
              <p className="p py-2 text-center text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo quisquam est eos quis recusandae qui earum assumenda enim aliquam?</p>
             </div>
            </div>
          </div>
        </div>
        <div className="row py-3 px-5 section-wrapper">
          <h3 className="display-7 pb-md-5 col-12 text-center text-primary">Our Mission</h3>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <p className="p py-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rem quo tempora itaque, facere voluptates enim voluptatem dolore hic beatae? Perferendis, cumque. Quidem nisi repudiandae officiis saepe mollitia magnam quasi?</p>
            <p className="p text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo quisquam est eos quis recusandae qui earum assumenda enim aliquam?</p>
          </div>
          <div className="col-md-6">
            <img src={sampleImg} alt="" className="img img-fluid" />
          </div>
        </div>
        <div className="row py-3 px-5 section-wrapper">
          <h3 className="display-7 pb-md-5 col-12 text-center text-primary">Our Team</h3>
          <div className="col-md-6">
            <img src={sampleImg} alt="" className="img img-fluid img-circle" />
          </div>          
          <div className="col-md-6 d-flex align-items-center">
            <p className="p py-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rem quo tempora itaque, facere voluptates enim voluptatem dolore hic beatae? Perferendis, cumque. Quidem nisi repudiandae officiis saepe mollitia magnam quasi?</p>
          </div>
        </div>
        <ProfileProjects/>
        <Services/>        
        <Contact/>
      <Footer />
    </>
  )
}

export default About