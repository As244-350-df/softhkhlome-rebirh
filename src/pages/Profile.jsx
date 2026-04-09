import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DevDesc from '../components/DevDesc'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
function Profile() {
  const pageName="Profile"
  return (
    <div className='Profile page'>
      <NavBar pageName={pageName}/>
      <DevDesc/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Profile