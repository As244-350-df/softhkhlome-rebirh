import React, { useState } from "react"
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { useToast } from "../context/toastContext"

const SERVICE_KEY = import.meta.env.VITE_EMAILJS_SERVICE_KEY
const TEMPLATE_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const TEMPLATE2_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE2_KEY

const PROJECT_TYPES = [
  'Website Design',
  'Custom Web App',
  'Graphic Design',
  'Consultation'
]

function Contact() {
  const { showToast } = useToast()
  const [submitting, setSubmitting] = useState(false)
  const [selectedType, setSelectedType] = useState('Website Design')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setSubmitting(true)
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    const formattedMessage = `[Project Category: ${selectedType}]\n\n${message}`

    if (!SERVICE_KEY || !PUBLIC_KEY) {
      setTimeout(() => {
        setSubmitting(false)
        form.reset()
        showToast({
          type: 'success',
          title: 'Inquiry Recorded',
          message: `Thank you ${name}! Your ${selectedType} request has been recorded.`
        })
      }, 600)
      return
    }

    emailjs.send(SERVICE_KEY, TEMPLATE_KEY, {
      name: name,
      title: `Project Submission: ${selectedType}`,
      email: email,
      message: formattedMessage,
    }, PUBLIC_KEY)
    .then(() => {
      emailjs.send(SERVICE_KEY, TEMPLATE2_KEY, {
        name: "SoftKhlome Team",
        title: "We have received your email",
        email: email,
        message: `Dear ${name},\n\nThank you for reaching out about ${selectedType}! We have received your inquiry and will get back to you within 24 business hours.`,
      }, PUBLIC_KEY)
      .then(() => {
        setSubmitting(false)
        form.reset()
        showToast({
          type: 'success',
          title: 'Message Sent',
          message: `Thank you ${name}! Your ${selectedType} inquiry was sent successfully. We'll respond within 24 business hours.`
        })
      })
      .catch((err) => {
        setSubmitting(false)
        showToast({
          type: 'error',
          title: 'Confirmation Email Issue',
          message: err?.message || 'Your message was received, though the confirmation email could not be delivered.'
        })
      })
    })
    .catch((err) => {
      setSubmitting(false)
      showToast({
        type: 'error',
        title: 'Submission Failed',
        message: err?.message || 'Unable to send your inquiry right now. Please try WhatsApp or email directly.'
      })
    })
  }

  return (
    <section className="py-5" id="contact" style={{ background: 'var(--bg-canvas)' }}>
      <div className="container py-4" style={{ maxWidth: '1120px' }}>
        {/* Header */}
        <div className="row justify-content-center">
          <motion.div
            className="col-12 col-lg-8 text-center mb-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">05. Start Your Project</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Share your project scope or reach our Lilongwe studio directly. We respond within one business day.
            </p>
          </motion.div>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Form Column */}
          <div className="col-lg-7">
            <motion.div
              className="card surface-card h-100 p-4 p-md-5"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h4 style={{ margin: '0 0 4px', fontWeight: 800, color: 'var(--text-main)', fontSize: '1.3rem' }}>
                Project Inquiry
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Choose your focus area and outline your goals below.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Project Type Segmented Selector */}
                <div className="mb-4">
                  <label className="form-label d-block">Project Focus</label>
                  <div className="segmented-control w-100 justify-content-start">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = selectedType === type
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`segmented-tab flex-grow-1 ${isSelected ? 'active' : ''}`}
                        >
                          {type}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Chimwemwe Banda"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@company.com"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Project Brief</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    name="message"
                    placeholder="Briefly describe your goals, timeline, and key features..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-brand-accent btn-lg w-100"
                  disabled={submitting}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Request</span>
                      <i className="bi bi-send-fill"></i>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Direct Channels Column (Clean Hairline Rows, No Nested Cards) */}
          <div className="col-lg-5">
            <motion.div
              className="card surface-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h4 style={{ margin: '0 0 4px', fontWeight: 800, color: 'var(--text-main)', fontSize: '1.3rem' }}>
                  Direct Channels
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Prefer an immediate conversation? Reach our studio directly.
                </p>

                <div className="d-flex flex-column mb-4">
                  <div className="py-3 d-flex align-items-center gap-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
                        color: 'var(--color-primary)',
                        fontSize: '1.15rem'
                      }}
                    >
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-main)' }}>Studio Address</strong>
                      <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>26 Bunda Mitundu, Lilongwe, Malawi</span>
                    </div>
                  </div>

                  <div className="py-3 d-flex align-items-center gap-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
                        color: 'var(--color-primary)',
                        fontSize: '1.15rem'
                      }}
                    >
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-main)' }}>Email</strong>
                      <a href="mailto:softkhlome@gmail.com" style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                        softkhlome@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="py-3 d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(var(--color-accent-rgb), 0.12)',
                        color: 'var(--color-accent)',
                        fontSize: '1.15rem'
                      }}
                    >
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-main)' }}>Phone & WhatsApp</strong>
                      <a href="tel:+265886522243" className="tabular-nums" style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                        +265 886 522 243
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=+265886522243&text=Hi%20Brian,%20I'm%20interested%20in%20Softkhlome's%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100"
                style={{
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.7rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <i className="bi bi-whatsapp fs-5"></i>
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
