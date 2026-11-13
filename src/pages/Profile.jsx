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
        <title>Brian Kamwera – Web Developer in Lilongwe, Malawi</title>
        <meta name="description" content="Meet Brian Kamwera, founder and full-stack React developer at Softkhlome in Lilongwe, Malawi. Explore skills, experience, and live client work." />
        <link rel="canonical" href="https://softkhlome.web.app/developer" />
        <link rel="alternate" hrefLang="en-MW" href="https://softkhlome.web.app/developer" />
        <link rel="alternate" hrefLang="en" href="https://softkhlome.web.app/developer" />
        <link rel="alternate" hrefLang="x-default" href="https://softkhlome.web.app/developer" />
        <meta property="og:site_name" content="Softkhlome – Lilongwe, Malawi" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Brian" />
        <meta property="profile:last_name" content="Kamwera" />
        <meta property="profile:username" content="BrianKamwera" />
        <meta property="og:title" content="Brian Kamwera – Web Developer in Lilongwe, Malawi" />
        <meta property="og:description" content="Meet Brian Kamwera, founder and full-stack React developer at Softkhlome in Lilongwe, Malawi. Explore skills, experience, and live client work." />
        <meta property="og:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:image:secure_url" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="696" />
        <meta property="og:image:alt" content="Brian Kamwera – Softkhlome Lead Web Developer" />
        <meta property="og:url" content="https://softkhlome.web.app/developer" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="softkhlome.web.app" />
        <meta name="twitter:url" content="https://softkhlome.web.app/developer" />
        <meta name="twitter:title" content="Brian Kamwera – Web Developer in Lilongwe, Malawi" />
        <meta name="twitter:description" content="Meet Brian Kamwera, founder and full-stack React developer at Softkhlome in Lilongwe, Malawi. Explore skills, experience, and live client work." />
        <meta name="twitter:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta name="twitter:image:alt" content="Brian Kamwera – Softkhlome" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://softkhlome.web.app/developer#webpage",
              "name": "Brian Kamwera – Web Developer in Lilongwe, Malawi",
              "url": "https://softkhlome.web.app/developer",
              "inLanguage": "en-MW",
              "isPartOf": { "@id": "https://softkhlome.web.app/#website" },
              "mainEntity": {
                "@type": "Person",
                "@id": "https://softkhlome.web.app/#founder",
                "name": "Brian Kamwera",
                "jobTitle": "Founder & Lead Full-Stack Web Developer",
                "url": "https://softkhlome.web.app/developer",
                "worksFor": { "@id": "https://softkhlome.web.app/#localbusiness" },
                "sameAs": [
                  "https://github.com/As244-350-df",
                  "https://www.instagram.com/softkhlome/"
                ],
                "knowsAbout": [
                  "React.js",
                  "JavaScript ES6+",
                  "Node.js",
                  "HTML5 & CSS3",
                  "Responsive Web Architecture",
                  "Full-Stack Web Development",
                  "UI/UX Design"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "26 Bunda Mitundu",
                  "addressLocality": "Lilongwe",
                  "addressRegion": "Central Region",
                  "addressCountry": "MW"
                }
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://softkhlome.web.app/" },
                { "@type": "ListItem", "position": 2, "name": "Developer Profile", "item": "https://softkhlome.web.app/developer" }
              ]
            }
          ]
        })}
        </script>
      </Helmet>
      <div ref={pageRef}>
        <div className="profile-animate"><NavBar pageName={pageName}/></div>
        <div className="profile-animate"><DevDesc/></div>
        <div className="profile-animate"><Skills/></div>
        <div className="profile-animate"><Experience pageName={pageName}/></div>
        <div className="profile-animate"><ProfileProjects/></div>
        <div className="profile-animate"><Contact/></div>
        <div className="profile-animate"><Footer/></div>
      </div>
    </div>
  )
}

export default Profile