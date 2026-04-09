import React from 'react'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import ProjStackTest from '../components/ProjStackTest'
function Home() {
  const pageName="home"
  return (
    <>
    <div className="navbar-intro border bg-primary">
      <div className="navbar-intro-cont">
       <NavBar pageName={pageName}/>
       <Introduction />
      </div>
    </div>
    <div className="d-flex flex-column align-items-center">
        <Services />
        <WhyChooseUs />
        <Contact/>
        <AboutUs/>
        <ProjStackTest/>
        <Footer/>
    </div>
    </>
  )
}

export default Home