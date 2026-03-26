import React from 'react'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    <div className="navbar-intro border bg-primary">
      <NavBar />
      <Introduction />
    </div>
    <Services />
    <WhyChooseUs />
    <Contact/>
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default Home