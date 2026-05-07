import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import anime from 'animejs/lib/anime.es.js'

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
    // Close modal using Bootstrap's modal API
    const modalElement = document.getElementById('termsModal')
    if (modalElement && window.bootstrap && window.bootstrap.Modal) {
      // Get the Bootstrap modal instance that was created when the modal was opened
      const modal = window.bootstrap.Modal.getInstance(modalElement)
      if (modal) {
        modal.hide()
      } else {
        // Fallback: create new instance and hide
        const newModal = new window.bootstrap.Modal(modalElement)
        newModal.hide()
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Terms of Service - Softkhlome</title>
        <meta name="description" content="Review Softkhlome's Terms of Service to understand the rules and guidelines for using our web development services." />
        <meta name="keywords" content="terms of service, Softkhlome, service agreement, terms and conditions" />
        <link rel="canonical" href="https://softkhlome.web.app/Terms" />
        <meta property="og:title" content="Terms of Service - Softkhlome" />
        <meta property="og:description" content="Review Softkhlome's Terms of Service to understand the rules and guidelines for using our web development services." />
        <meta property="og:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta property="og:url" content="https://softkhlome.web.app/Terms" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://softkhlome.web.app/Terms" />
        <meta name="twitter:image" content="https://softkhlome.web.app/logo(2).png" />
        <meta name="twitter:title" content="Terms of Service - Softkhlome" />
        <meta name="twitter:description" content="Review Softkhlome's Terms of Service to understand the rules and guidelines for using our web development services." />
      </Helmet>

    <section className="container py-5" inert={modalOpen ? "" : undefined} ref={sectionRef}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm border-0 terms-animate">
            <div className="card-body text-center">
              <h1 className="display-6 text-primary fw-bold mb-3 terms-animate">Softkhlome Terms & Conditions</h1>
              <p className="lead text-muted mb-4 terms-animate">
                Please review and accept our terms to proceed. Your acceptance confirms that you understand and agree to the terms of use for Softkhlome.
              </p>
              <button
                className="btn btn-primary btn-lg me-2 terms-animate"
                data-bs-toggle="modal"
                data-bs-target="#termsModal"
              >
                Review Terms
              </button>
              <button
                className="btn btn-outline-secondary btn-lg terms-animate"
                onClick={() => setAccepted(false)}
                disabled={!accepted}
              >
                {accepted ? 'Accepted' : 'Not Accepted'}
              </button>
              <div className="mt-4 terms-animate">
                {accepted ? (
                  <div className="alert alert-success mb-0 text-muted terms-animate">Thank you! You have accepted the terms.</div>
                ) : (
                  <div className="alert alert-warning mb-0 text-muted terms-animate">please! read accept our terms.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content shadow-lg" ref={modalRef}>
            <div className="modal-header border-bottom-0 terms-modal-animate">
              <div>
                <h5 className="modal-title text-primary fw-bold terms-modal-animate" id="termsModalLabel">Terms and Conditions</h5>
                <p className="text-muted mb-0 terms-modal-animate">Please read the following terms carefully before accepting.</p>
              </div>
              <button type="button" className="btn-close terms-modal-animate" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body terms-modal-animate" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
              <p className="mb-4 text-muted terms-modal-animate">
                By using Softkhlome, you agree that you have read, understood, and accepted these Terms and Conditions, including our Privacy Policy and any other policies published on the site. You agree to use the service responsibly and lawfully, to avoid any action that could harm the website, interfere with other users, or violate applicable regulations. Softkhlome retains the right to update, modify, or discontinue any part of the service at any time without notice. Continued access after such changes constitutes your acceptance of the revised terms.
              </p>
              <p className="mb-4 text-muted terms-modal-animate">
                You acknowledge that all content, text, images, logos, trademarks, and software presented on Softkhlome are owned by Softkhlome or its licensors. These materials are provided for your personal, non-commercial use only. Reproduction, distribution, adaptation, or republication without express written permission is prohibited. You are responsible for maintaining the confidentiality of your account credentials and for all activity occurring under your account.
              </p>
              <p className="mb-4 text-muted terms-modal-animate">
                Softkhlome makes no warranty that the service will be uninterrupted, error-free, or secure. We are not liable for any direct, indirect, incidental, special, or consequential damages that may arise from your use of the website, to the extent permitted by law. You agree that any disputes will be governed by applicable law and that our liability is limited to the fullest extent allowed.
              </p>
              <p className="mb-4 text-muted terms-modal-animate">
                This section describes our general terms and is not a substitute for legal advice. If you have any questions or require clarification, please contact us before accepting. Acceptance indicates your consent to these terms and your agreement to abide by the policies and guidelines described here.
              </p>
            </div>
            <div className="modal-footer border-top-0 terms-modal-animate">
              <button type="button" className="btn btn-secondary terms-modal-animate" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary terms-modal-animate" onClick={handleAccept}>
                Accept Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TermsMod