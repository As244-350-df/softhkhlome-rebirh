import React from 'react'
import { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import ProjStackTest from '../components/ProjStackTest'
import Loader from '../components/Loader.jsx'
import TermsMod from '../components/TermsMod.jsx'
import FavIcon from "../assets/favicon/favicon.ico"
import favIcon192 from "../assets/favicon/web-app-manifest-192x192.png"
import favIcon96 from "../assets/favicon/favicon-96x96.png"
import appleTouchIcon from "../assets/favicon/apple-touch-icon.png"
function Home() {
  const pageName="home"
  return (
    <>
      <Helmet>
        <title>Softkhlome - Leading Web Design and Development Company in Malawi</title>
        <meta name="description" content="Softkhlome is a leading website design company in Malawi, providing innovative web development solutions for businesses of all sizes. Get professional web design, development, and graphic design services." />
        <meta name="keywords" content="web design Malawi, softkhlome, graphic design, website creation, digital solutions" />
        <link rel="canonical" href="https://softklhome-v1.firebaseapp.com/" />
        <meta property="og:title" content="Softkhlome - Leading Web Design and Development Company in Malawi" />
        <meta property="og:description" content="Softkhlome is a leading website design company in Malawi, providing innovative web development solutions for businesses of all sizes." />
        <meta property="og:url" content="https://softklhome-v1.firebaseapp.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Softkhlome - Leading Web Design and Development Company in Malawi" />
        <meta name="twitter:description" content="Softkhlome is a leading website design company in Malawi, providing innovative web development solutions for businesses of all sizes." />
        <link rel="icon" href={FavIcon} sizes="any" />
        <link rel="icon" href={favIcon192} type="image/png" sizes="192x192" />
        <link rel="icon" href={favIcon96} type="image/png" sizes="96x96"/>
        <link rel="icon" href={appleTouchIcon}/>
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Softkhlome",
          "url": "https://softklhome-v1.firebaseapp.com",
          "logo": "https://softklhome-v1.firebaseapp.com/logo(2).png",
          "description": "Leading web design and development company in Malawi, providing innovative digital solutions.",
          "founder": {
            "@type": "Person",
            "name": "Brian Kamwera"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Malawi"
          },
          "sameAs": [
            // Add social media links if available
            "https://youtube.com/@softkhlome?si=pVx2sPoax3L6yq8t",
            "https://www.instagram.com/softkhlome/#",
            "https://web.facebook.com/profile.php?id=61576749383886&__tn__=-UC*F",
            "https://whatsapp.com/channel/0029VbBjQ0CCsU9IEWqCrG37"
          ]
        })}
        </script>
      </Helmet>
    <Suspense fallback={ <Loader/>}>
      <div className="navbar-intro">
        <div className="navbar-intro-cont border-primary ">
        <NavBar pageName={pageName}/>
        <Introduction />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
          <Services />
          <WhyChooseUs />
          <Contact/>
          <AboutUs/>
          <Experience pageName={pageName}/>
          <ProjStackTest/>
      </div>
      <Footer/>
    </Suspense>
    </>
  )
}

export default Home