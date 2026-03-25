import React from 'react'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
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
    </>
  )
}

export default Home