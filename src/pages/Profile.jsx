import React from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DevDesc from '../components/DevDesc'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import ProfileProjects from '../components/ProfileProjects'
function Profile() {
  const pageName="Profile"
  return (
    <div className='Profile page'>
      <Helmet>
        <title>Brian Kamwera - Web Developer at Softkhlome</title>
        <meta name="description" content="Meet Brian Kamwera, the founder and lead web developer at Softkhlome. Explore his skills, experience, and portfolio of web development projects." />
        <meta name="keywords" content="Brian Kamwera, web developer Malawi, Softkhlome founder, portfolio, skills, experience" />
        <link rel="canonical" href="https://softklhome-v1.firebaseapp.com/Profile" />
        <meta property="og:title" content="Brian Kamwera - Web Developer at Softkhlome" />
        <meta property="og:description" content="Meet Brian Kamwera, the founder and lead web developer at Softkhlome. Explore his skills, experience, and portfolio of web development projects." />
        <meta property="og:url" content="https://softklhome-v1.firebaseapp.com/Profile" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brian Kamwera - Web Developer at Softkhlome" />
        <meta name="twitter:description" content="Meet Brian Kamwera, the founder and lead web developer at Softkhlome. Explore his skills, experience, and portfolio of web development projects." />
      </Helmet>
      <NavBar pageName={pageName}/>
      <DevDesc/>
      <Skills/>
      <Experience/>
      <ProfileProjects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Profile