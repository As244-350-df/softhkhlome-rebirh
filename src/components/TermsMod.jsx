import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import anime from 'animejs/lib/anime.es.js'
import NavBar from './NavBar'
import Footer from './Footer'

function TermsMod() {
  const [accepted, setAccepted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const lastFocusedElement = useRef(null)
  const sectionRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    const animatePage = () => {
      if (!sectionRef.current) return

      anime.timeline({ easing: 'easeOutExpo', duration: 650 })
        .add({
          targets: sectionRef.current.querySelectorAll('.terms-animate'),
          translateY: [30, 0],
          opacity: [0, 1],
          delay: anime.stagger(80),
        })
    }

    const handleModalShow = () => {
      setModalOpen(true)
      lastFocusedElement.current = document.activeElement
      if (modalRef.current) {
        anime.timeline({ easing: 'easeOutExpo', duration: 500 })
          .add({
            targets: modalRef.current.querySelectorAll('.terms-modal-animate'),
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(60),
          })
      }
    }

    const handleModalHide = () => {
      setModalOpen(false)
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus()
      }
    }

    animatePage()

    const modalElement = document.getElementById('termsModal')
    if (modalElement) {
      modalRef.current = modalElement
      modalElement.addEventListener('show.bs.modal', handleModalShow)
      modalElement.addEventListener('hide.bs.modal', handleModalHide)

      return () => {
        modalElement.removeEventListener('show.bs.modal', handleModalShow)
        modalElement.removeEventListener('hide.bs.modal', handleModalHide)
      }
    }
  }, [])

  const handleAccept = () => {
    setAccepted(true)
    const modalElement = document.getElementById('termsModal')
    if (modalElement && window.bootstrap && window.bootstrap.Modal) {
      const modal = window.bootstrap.Modal.getInstance(modalElement)
      if (modal) {
        modal.hide()
      } else {
        const newModal = new window.bootstrap.Modal(modalElement)
        newModal.hide()
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Terms of Service – Softkhlome Web Studio Malawi</title>
        <meta name="description" content="Review Softkhlome's Terms of Service outlining project engagement guidelines, intellectual property, and service policies in Malawi." />
        <link rel="canonical" href="https://softkhlome.web.app/terms" />
        <link rel="alternate" hrefLang="en-MW" href="https://softkhlome.web.app/terms" />
        <link rel="alternate" hrefLang="en" href="https://softkhlome.web.app/terms" />
        <link rel="alternate" hrefLang="x-default" href="https://softkhlome.web.app/terms" />
        <meta property="og:site_name" content="Softkhlome – Lilongwe, Malawi" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms of Service – Softkhlome Web Studio Malawi" />
        <meta property="og:description" content="Review Softkhlome's Terms of Service outlining project engagement guidelines, intellectual property, and service policies in Malawi." />
        <meta property="og:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:image:secure_url" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="696" />
        <meta property="og:image:alt" content="Softkhlome – Web Design &amp; Software Development Studio Logo" />
        <meta property="og:url" content="https://softkhlome.web.app/terms" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="softkhlome.web.app" />
        <meta name="twitter:url" content="https://softkhlome.web.app/terms" />
        <meta name="twitter:title" content="Terms of Service – Softkhlome Web Studio Malawi" />
        <meta name="twitter:description" content="Review Softkhlome's Terms of Service outlining project engagement guidelines, intellectual property, and service policies in Malawi." />
        <meta name="twitter:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta name="twitter:image:alt" content="Softkhlome – Terms of Service" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://softkhlome.web.app/terms#webpage",
              "name": "Terms of Service – Softkhlome Web Studio Malawi",
              "url": "https://softkhlome.web.app/terms",
              "description": "Review Softkhlome's Terms of Service outlining project engagement guidelines, intellectual property, and service policies in Malawi.",
              "inLanguage": "en-MW",
              "isPartOf": { "@id": "https://softkhlome.web.app/#website" },
              "publisher": { "@id": "https://softkhlome.web.app/#localbusiness" }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://softkhlome.web.app/" },
                { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://softkhlome.web.app/terms" }
              ]
            }
          ]
        })}</script>
      </Helmet>

      <NavBar />

      <div style={{ backgroundColor: 'var(--bg-canvas)', minHeight: '80vh' }} className="py-5" inert={modalOpen ? "" : undefined} ref={sectionRef}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div 
                className="card surface-card p-4 p-md-5 text-center terms-animate"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px'
                }}
              >
                <span className="section-kicker">Service Agreement</span>
                <h1 className="section-title mb-3 terms-animate">Terms and Conditions</h1>
                <p className="section-subtitle mb-4 terms-animate" style={{ fontSize: '0.95rem' }}>
                  Please review our standard engagement terms and guidelines. Your acceptance confirms your agreement to the operational and service policies for Softkhlome.
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap terms-animate mb-3">
                  <button
                    className="btn btn-brand-primary btn-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#termsModal"
                  >
                    <i className="bi bi-file-earmark-text me-1"></i>
                    <span>Review Full Terms</span>
                  </button>
                  <button
                    className="btn btn-brand-outline btn-lg"
                    onClick={() => setAccepted(false)}
                    disabled={!accepted}
                  >
                    {accepted ? '✓ Terms Accepted' : 'Pending Acceptance'}
                  </button>
                </div>

                <div className="mt-3 terms-animate">
                  {accepted ? (
                    <div 
                      className="p-3 rounded-3"
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        color: '#059669',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        border: '1px solid rgba(16, 185, 129, 0.25)'
                      }}
                    >
                      ✓ Thank you! You have accepted Softkhlome's Terms of Service.
                    </div>
                  ) : (
                    <div 
                      className="p-3 rounded-3"
                      style={{
                        backgroundColor: 'var(--bg-surface-alt)',
                        color: 'var(--text-muted)',
                        fontSize: '0.88rem',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      Please click <strong>Review Full Terms</strong> to read and accept the conditions.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Modal */}
        <div className="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel">
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div 
              className="modal-content shadow-lg" 
              ref={modalRef}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px'
              }}
            >
              <div className="modal-header border-bottom terms-modal-animate" style={{ borderColor: 'var(--border-subtle)' }}>
                <div>
                  <h5 className="modal-title fw-bold terms-modal-animate" id="termsModalLabel" style={{ color: 'var(--color-primary)' }}>
                    Terms and Conditions of Service
                  </h5>
                  <p className="text-muted mb-0 terms-modal-animate" style={{ fontSize: '0.85rem' }}>
                    Please read the following operational agreement before accepting.
                  </p>
                </div>
                <button type="button" className="btn-close terms-modal-animate" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body terms-modal-animate p-4" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
                <p className="mb-4 text-muted terms-modal-animate" style={{ lineHeight: 1.7 }}>
                  By using Softkhlome, you agree that you have read, understood, and accepted these Terms and Conditions, including our Privacy Policy and any other policies published on the site. You agree to use the service responsibly and lawfully, to avoid any action that could harm the website, interfere with other users, or violate applicable regulations. Softkhlome retains the right to update, modify, or discontinue any part of the service at any time without notice. Continued access after such changes constitutes your acceptance of the revised terms.
                </p>
                <p className="mb-4 text-muted terms-modal-animate" style={{ lineHeight: 1.7 }}>
                  You acknowledge that all content, text, images, logos, trademarks, and software presented on Softkhlome are owned by Softkhlome or its licensors. These materials are provided for your personal, non-commercial use only. Reproduction, distribution, adaptation, or republication without express written permission is prohibited. You are responsible for maintaining the confidentiality of your account credentials and for all activity occurring under your account.
                </p>
                <p className="mb-4 text-muted terms-modal-animate" style={{ lineHeight: 1.7 }}>
                  Softkhlome makes no warranty that the service will be uninterrupted, error-free, or secure. We are not liable for any direct, indirect, incidental, special, or consequential damages that may arise from your use of the website, to the extent permitted by law. You agree that any disputes will be governed by applicable law and that our liability is limited to the fullest extent allowed.
                </p>
                <p className="mb-4 text-muted terms-modal-animate" style={{ lineHeight: 1.7 }}>
                  This section describes our general terms and is not a substitute for legal advice. If you have any questions or require clarification, please contact us before accepting. Acceptance indicates your consent to these terms and your agreement to abide by the policies and guidelines described here.
                </p>
              </div>
              <div className="modal-footer border-top terms-modal-animate" style={{ borderColor: 'var(--border-subtle)' }}>
                <button type="button" className="btn btn-brand-outline terms-modal-animate" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-brand-accent terms-modal-animate" onClick={handleAccept}>
                  Accept Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TermsMod