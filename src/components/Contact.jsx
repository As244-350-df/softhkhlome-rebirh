import React, { useEffect, useRef,useState } from "react"
import { contactmethods } from "./contactUs.js"
import emailjs from "@emailjs/browser"
import Status from "./Status.jsx"
const SERVICE_KEY = import.meta.env.VITE_EMAILJS_SERVICE_KEY
const TEMPLATE_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const TEMPLATE2_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE2_KEY
import anime from 'animejs/lib/anime.es.js'

function Contact() {
  const sectionRef = useRef(null)
  const [response, setResponse] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value

    emailjs.send(SERVICE_KEY, TEMPLATE_KEY, {
        name: name,
        title: "New PROJECT FORM SUBMISSION",
        email: email,
        message: message,
      },
      PUBLIC_KEY
    ).then((response) => {
      emailjs.send(SERVICE_KEY, TEMPLATE2_KEY, {
          name: "SoftKhlome Team",
          title: "we have received your email",
          email: email,
          message: `Dear ${name},\n\nThank you for reaching out to us! We have received your message and will get back to you as soon as possible.`,
        },
        PUBLIC_KEY
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        //alert("Message sent successfully! We will get back to you soon.")
        setResponse({ success:true,status:response.status, message: "Message sent successfully! We will get back to you soon."})
        console.log(response)
        document.getElementById("response-modal01").click()
      }).catch((err) => {
        console.log('FAILED...', err)
        alert("Failed to send confirmation email. Please check your email address and try again.")
        setResponse({ success: false ,status:500, message:err.message})
        document.getElementById("response-modal01").click()
      })
    }).catch((err) => {
      console.log('FAILED...', err)
      //alert("Failed to send message. Please try again later.")
      setResponse({ success: false ,status:500, message:err.message})
      document.getElementById("response-modal01").click()
    })
  }

  useEffect(() => {
    if (!sectionRef.current) return

    anime.timeline({ easing: 'easeOutExpo', duration: 700 })
      .add({
        targets: sectionRef.current.querySelectorAll('.contact-card'),
        translateY: [35, 0],
        opacity: [0, 1],
        delay: anime.stagger(110),
      })
  }, [])

  return (
    <section className="container-fluid bg-light py-5" id="contact" ref={sectionRef}>
      <Status response={response}/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">Contact Us</h2>
              <p className="lead text-dark">
                Ready to start your project? Get in touch with us today.
              </p>
            </div>

            <div className="row g-5">
              <div className="col-lg-6">
                <div className="card shadow-sm border-0 contact-card">
                  <div className="card-body p-4">
                    <h3 className="card-title text-primary mb-4">
                      <i className="bi bi-envelope-fill me-2"></i>
                      Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg border-primary"
                          placeholder="Enter your full name..."
                          id="name"
                          name="name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                        <input
                          type="email"
                          className="form-control form-control-lg border-primary"
                          placeholder="your.email@example.com"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-bold">Message</label>
                        <textarea
                          className="form-control form-control-lg border-primary"
                          id="message"
                          rows="5"
                          name="message"
                          placeholder="Tell us about your project..."
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-warning text-primary  btn-lg w-100 fw-bold">
                        <i className="bi bi-send me-2 bg-transparent "></i>
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card grass border-0 px-2 mb-4 contact-card">
                  <div className="card-body p-4">
                    <h3 className="card-title text-primary mb-4">
                      <i className="bi bi-info-circle-fill me-2"></i>
                      Get in Touch
                    </h3>
                    <p className="text-muted mb-4">
                      Have questions or want to learn more about our services? Feel free to reach out to us through any of these channels!
                    </p>

                    <div className="row g-3">
                      <div className="col-12">
                        <div className="d-flex align-items-center children-bg-transparent p-3 bg-transparent rounded">
                          <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                          <div className="children-bg-transparent">
                            <strong className="text-dark">Address</strong><br />
                            <span className="text-muted">26 Mitundu, Lilongwe, Malawi</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center children-bg-transparent p-3 bg-light rounded">
                          <i className="bi bi-telephone-fill text-primary fs-4 me-3"></i>
                          <div>
                            <strong className="text-dark">Phone</strong><br />
                            <span className="text-muted">+265 (886) 522-243</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex children-bg-transparent align-items-center p-3 bg-light rounded">
                          <i className="bi bi-envelope-fill text-primary fs-4 me-3"></i>
                          <div>
                            <strong className="text-dark">Email</strong><br />
                            <span className="text-muted">softkhlome@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-3 ">
                {contactmethods.map((method, index) => (
                  <div className="col-md-4 " key={index}>
                    <div className="card card-transition border-0 bg-light children-bg-transparent h-100 text-center contact-card">
                      <div className="card-body d-flex flex-column align-items-center justify-content-around p-3">
                        <div className="mb-3 text-primary">
                          <i className={`${method.icon} fs-2 text-primary`}></i>
                        </div>
                        <h6 className="card-title fw-bold text-primasry mb-2">{method.method}</h6>
                        <p className="card-text small text-secondary mb-3">
                          {method.description}
                        </p>
                        <a
                          href={method.link}
                          className="btn btn-primary btn-sm w-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-arrow-right me-1"></i>
                          {method.message}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
