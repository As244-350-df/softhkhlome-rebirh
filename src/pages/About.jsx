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
      <NavBar pageName={pageName}/>

      <div className="about-intro row container-fluid w-100 border-bottom border-primary px-5 py-0">
        <div className="col-md-6 d-flex flex-column py-md-3 align-items-center justify-content-center">
          <h1 className="display-2 fw-bolder text-primary  py-5 pb-2 mt-md-5 text-center">Learn More About Us</h1>
          <p className="text-center px-4 py-2">Get to know more about our Organization's Origin, Mission, and Team. </p>
          <div className="buttons"><button className="btn btn-warning text-primary">Get Started</button></div>
        </div>
        <div className="col-md-6  d-flex flex-column align-items-end justify-content-center">
          <img src={TeamImg} className="img-fluid w-100" style={{height:"100%",clipPath:"inset (0px 0px 0px 0px) !important"}} alt="about us" />
        </div>
      </div>
        <div className="container-fluid section-wrapper p-3 py-3">
            <h1 className="display-7 fw-bolder text-center text-primary bg-transparent py-4">Our Origin</h1>
            <p className="text-center px-4 bg-transparent text-dark py-2">SoftKhlome is a software development company dedicated to providing innovative and reliable solutions to businesses of all sizes. With a team of skilled developers, designers, and project managers, we specialize in creating custom software applications that meet the unique needs of our clients. Our mission is to empower businesses with technology that drives growth and efficiency. We pride ourselves on delivering high-quality products and exceptional customer service, ensuring that our clients achieve their goals through our software solutions.</p>
        </div>
        <div className="row py-3 px-5 section-wrapper">
          <h3 className="display-7 pb-md-5 col-12 text-center text-primary">Our Mission</h3>
          <div className="col-md-6">
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
            <img src={sampleImg} alt="" className="img img-fluid img-circle border" />
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