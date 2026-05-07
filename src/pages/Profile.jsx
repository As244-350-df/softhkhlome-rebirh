import React, { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
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
  const pageRef = useRef(null)

  useEffect(() => {
    if (!pageRef.current) return

    anime.timeline({ easing: 'easeOutExpo', duration: 650 })
      .add({
        targets: pageRef.current.querySelectorAll('.profile-animate'),
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(90),
      })
  }, [])

  return (
    <div className='Profile page'>
      <Helmet>
        <title>Brian Kamwera - Web Developer at Softkhlome</title>
        <meta name="description" content="Meet Brian Kamwera, the founder and lead web developer at Softkhlome. Explore his skills, experience, and portfolio of web development projects." />
        <meta name="keywords" content="Brian Kamwera, web developer Malawi, Softkhlome founder, portfolio, skills, experience" />
        <link rel="canonical" href="https://softkhlome.web.app/Profile" />
        <meta property="og:title" content="Brian Kamwera - Web Developer at Softkhlome" />
        <meta property="og:description" content="Meet Brian Kamwera, the founder and lead web developer at Softkhlome. Explore his skills, experience, and portfolio of web development projects." />
        <meta property="og:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:url" content="https://softkhlome.web.app/Profile" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:url" content="https://softkhlome.web.app/Profile" />
        <meta name="twitter:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brian Kamwera - Web Developer at Softkhlome" />
        <meta name="twitter:description" content="Meet Brian Kamwera, the founder and lead web developer at Softkhlome. Explore his skills, experience, and portfolio of web development projects." />
      </Helmet>
      <div ref={pageRef}>
        <div className="profile-animate"><NavBar pageName={pageName}/></div>
        <div className="profile-animate"><DevDesc/></div>
        <div className="profile-animate"><Skills/></div>
        <div className="profile-animate"><Experience/></div>
        <div className="profile-animate"><ProfileProjects/></div>
        <div className="profile-animate"><Contact/></div>
        <div className="profile-animate"><Footer/></div>
      </div>
    </div>
  )
}

export default Profile