import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import anime from 'animejs/lib/anime.es.js'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import TeamImg from '../assets/Polish_20260407_171501920.png'
import Contact from "../components/Contact"
import Services from '../components/Services.jsx'
import sampleImg from "../images/undraw_in-the-office_e7pg.svg"
import ProfileProjects from '../components/ProfileProjects.jsx'
import webDevImg from "../assets/Web Development.png"
import FounderImg from "../assets/Polish_20250527_105337925.png"
function About() {
  const pageName = "about"
  const pageRef = useRef(null)

  useEffect(() => {
    if (!pageRef.current) return

    anime.timeline({ easing: 'easeOutExpo', duration: 700 })
      .add({
        targets: pageRef.current.querySelectorAll('.about-animate'),
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(80),
      })
  }, [])

  return (
    <>
      <Helmet>
        <title>About Softkhlome - Our Story and Team</title>
        <meta name="description" content="Learn about Softkhlome's origin, mission, and dedicated team. Discover how we provide innovative web design and development services in Malawi." />
        <meta name="keywords" content="about Softkhlome, web development company Malawi, team, mission, services" />
        <link rel="canonical" href="https://softkhlome.web.app/about" />
        <meta property="og:title" content="About Softkhlome - Our Story and Team" />
        <meta property="og:description" content="Learn about Softkhlome's origin, mission, and dedicated team. Discover how we provide innovative web design and development services in Malawi." />
        <meta property="og:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:url" content="https://softkhlome.web.app/about" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:url" content="https://softkhlome.web.app/about" />
        <meta name="twitter:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Softkhlome - Our Story and Team" />
        <meta name="twitter:description" content="Learn about Softkhlome's origin, mission, and dedicated team. Discover how we provide innovative web design and development services in Malawi." />
      </Helmet>
      <NavBar pageName={pageName} />
      <div ref={pageRef}>
        {/* Hero Section */}
        <section className="container-fluid bg-primary text-white children-bg-transparent py-5 pb-lg-0">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="card bg-transparent border-0 text-white">
                <div className="card-body d-flex flex-column align-items-center p-0">
                  <h1 className="display-3 fw-bold mb-3 text-center about-animate">Learn More About Us</h1>
                  <p className="lead text-light text-center mb-4 about-animate">
                    Get to know more about our Organization's Origin, Mission, and Team.
                  </p>
                  <a href="#contact" className="btn btn-warning text-primary fw-bold px-4 py-2 about-animate">
                    <i className="bi bi-arrow-right me-2"></i>
                    contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src={TeamImg}
                className="img img-fluid about-animate"
                alt="About our team"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Origin and About Section */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card shadow-lg overflow-hidden box-transition border-primary h-100 about-animate">
                <div className="card-header bg-primary text-light children-bg-transparent py-3">
                  <h3 className="card-title mb-0 fw-bold text-center about-animate">
                    <i className="bi bi-star me-2"></i>
                    Our Origin
                  </h3>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted text-center about-animate">
                    Softkhlome was founded in 2024 by its co-founder <strong>Brian Kamwera</strong>. "Softkhlome itself was a project that we invented to showcase my development skills but it turned out to be more than just a project. It became a platform where I could share my passion for web development and connect with like-minded individuals. The name came from my early desire to become a proffessional coding artist, I was always thrilled to look into code base of big software companies and someday i wanted write code as much good as their's". Since its inception, Softkhlome has evolved into a thriving community and a hub for developers, entrepreneurs, and tech enthusiasts to collaborate, learn, and grow together.  
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card shadow-lg overflow-hidden box-transition border-warning h-100 about-animate">
                <div className="card-header bg-warning text-primary children-bg-transparent py-3">
                  <h3 className="card-title mb-0 fw-bold text-center about-animate">
                    <i className="bi bi-info-circle me-2"></i>
                    About Us
                  </h3>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted text-center about-animate">
                     Softkhlome is a newly established institution providing cutting-edge digital services for modern businesses and creative individuals. Founded on innovation, quality, and customer satisfaction, we're driven by passionate professionals bringing fresh ideas and technical expertise.
                     Our core services include web design and development, graphic design, and web development courses. We offer customized solutions for startups needing functional websites and individuals seeking captivating visuals. Our team ensures responsive, user-friendly, SEO-optimized websites and visually striking designs.
                     Operating with a client-centric approach, we prioritize collaboration and communication, treating each project as a partnership to deliver meaningful, sustainable results.
                     As we grow, we're committed to continuous learning and emerging technologies to keep our offerings relevant and impactful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container-fluid bg-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3 about-animate">Our Mission</h2>
            <p className="lead text-muted about-animate">What drives us to succeed every day</p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="card shadow-lg grass border-0 h-100 about-animate">
                <div className="card-body p-4">
                  <div className="mb-3 d-flex justify-content-center">
                    <i className="bi bi-bullseye text-primary fs-1"></i>
                  </div>
                  <p className="card-text text-muted mb-3 about-animate">
                    Our mission is to empower businesses and individuals through innovative web solutions that drive growth, enhance user experiences, and foster digital transformation. We are committed to delivering high-quality, scalable, and user-centric applications that meet the evolving needs of our clients and contribute to their success in the digital landscape.
                  </p>
                  <p className="card-text text-muted about-animate">
                   Our core values of integrity, innovation, and customer-centricity guide everything we do, ensuring that we not only meet but exceed our clients' expectations while fostering a collaborative and inclusive work environment for our team.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={webDevImg} alt="Our mission" className="box-transition img-fluid rounded shadow-lg about-animate" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3 about-animate">Our Team</h2>
            <p className="lead text-muted about-animate">Who are the people behind Softkhlome</p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="card card-transition grass shadow-lg border-0 about-animate">
                <div className="card-body p-0">
                  <img
                    src={FounderImg}
                    alt="Our dedicated team"
                    className="img-fluid  rounded w-100 about-animate"
                    style={{ height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow-lg grass border-0 h-100 about-animate">
                <div className="card-body p-4">
                  <h4 className="card-title text-primary fw-bold mb-3 about-animate">A Dedicated Team</h4>
                  <p className="card-text text-muted mb-3 about-animate">
                    Right now Softkhlome is at its early stages and we are company dedicated to delivering exceptional web development services. Right now softkhlome has one talented developer <strong>(Brian Kamwera)</strong> we are looking foward to hiring talented teams members to our cause once we start getting big projects. We are committed to fostering a positive and inclusive work environment where creativity and innovation thrive, allowing us to deliver high-quality solutions that exceed our clients' expectations.
                  </p>
                  <div className="row g-3 about-animate">
                    <div className="col-6">
                      <div className="card border-0 bg-primary text-white">
                        <div className="card-body text-center">
                          <h5 className="card-title fw-bold">50+</h5>
                          <p className="card-text small">Projects Completed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card border-0 bg-success text-white">
                        <div className="card-body text-center">
                          <h5 className="card-title fw-bold">100+</h5>
                          <p className="card-text small">Happy Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Components */}
      <section className="bg-white py-5">
        <ProfileProjects />
      </section>
      <Services />
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default About