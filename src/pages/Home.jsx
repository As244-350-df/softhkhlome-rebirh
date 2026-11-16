import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'
import ProjStackTest from '../components/ProjStackTest'
import Loader from '../components/Loader.jsx'
import Points from '../components/Points.jsx'
import CookieConsent from '../components/CookieConsent.jsx'
import { malawiWebFaqs } from '../data/faqData'

function Home() {
  return (
    <>
      <Helmet>
        <title>Softkhlome – Web Development Company in Lilongwe, Malawi</title>
        <meta name="description" content="Softkhlome is a web development and design company in Lilongwe, Malawi building fast websites, React apps, and custom software. Request a quote today." />
        <link rel="canonical" href="https://softkhlome.web.app/" />
        <link rel="alternate" hrefLang="en-MW" href="https://softkhlome.web.app/" />
        <link rel="alternate" hrefLang="en" href="https://softkhlome.web.app/" />
        <link rel="alternate" hrefLang="x-default" href="https://softkhlome.web.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Softkhlome – Lilongwe, Malawi" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:title" content="Softkhlome – Web Development Company in Lilongwe, Malawi" />
        <meta property="og:description" content="Softkhlome is a web development and design company in Lilongwe, Malawi building fast websites, React apps, and custom software. Request a quote today." />
        <meta property="og:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:image:secure_url" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="696" />
        <meta property="og:image:alt" content="Softkhlome – Web Development &amp; Software Company in Lilongwe, Malawi" />
        <meta property="og:url" content="https://softkhlome.web.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="softkhlome.web.app" />
        <meta name="twitter:url" content="https://softkhlome.web.app/" />
        <meta name="twitter:title" content="Softkhlome – Web Development Company in Lilongwe, Malawi" />
        <meta name="twitter:description" content="Softkhlome is a web development and design company in Lilongwe, Malawi building fast websites, React apps, and custom software. Request a quote today." />
        <meta name="twitter:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta name="twitter:image:alt" content="Softkhlome – Web Development &amp; Software Company in Lilongwe, Malawi" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://softkhlome.web.app/#webpage",
              "url": "https://softkhlome.web.app/",
              "name": "Softkhlome – Web Development Company in Lilongwe, Malawi",
              "description": "Softkhlome is a web development and design company in Lilongwe, Malawi building fast websites, React apps, and custom software. Request a quote today.",
              "inLanguage": "en-MW",
              "isPartOf": { "@id": "https://softkhlome.web.app/#website" },
              "about": { "@id": "https://softkhlome.web.app/#localbusiness" },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://softkhlome.web.app/logo(2).png"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://softkhlome.web.app/" }
              ]
            },
            {
              "@type": "FAQPage",
              "@id": "https://softkhlome.web.app/#faq",
              "url": "https://softkhlome.web.app/#faq",
              "inLanguage": "en-MW",
              "isPartOf": { "@id": "https://softkhlome.web.app/#webpage" },
              "about": { "@id": "https://softkhlome.web.app/#localbusiness" },
              "mainEntity": malawiWebFaqs.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            }
          ]
        })}
        </script>
      </Helmet>

      <Suspense fallback={<Loader />}>
        <NavBar />
        <Introduction />
        <main className="w-100">
          <Points />
          <Services />
          <WhyChooseUs />
          <ProjStackTest />
          <AboutUs />
          <FaqSection />
          <Contact />
        </main>
        <Footer />
        <CookieConsent />
      </Suspense>
    </>
  )
}

export default Home