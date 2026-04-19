import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'

function TermsMod() {
  const [accepted, setAccepted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const lastFocusedElement = useRef(null)

  useEffect(() => {
    const handleModalShow = () => {
      setModalOpen(true)
      // Store the currently focused element
      lastFocusedElement.current = document.activeElement
    }

    const handleModalHide = () => {
      setModalOpen(false)
      // Return focus to the last focused element
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus()
      }
    }

    const modalElement = document.getElementById('termsModal')
    if (modalElement) {
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
        <link rel="canonical" href="https://softklhome-v1.firebaseapp.com/Terms" />
        <meta property="og:title" content="Terms of Service - Softkhlome" />
        <meta property="og:description" content="Review Softkhlome's Terms of Service to understand the rules and guidelines for using our web development services." />
        <meta property="og:url" content="https://softklhome-v1.firebaseapp.com/Terms" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - Softkhlome" />
        <meta name="twitter:description" content="Review Softkhlome's Terms of Service to understand the rules and guidelines for using our web development services." />
      </Helmet>

    <section className="container py-5" inert={modalOpen ? "" : undefined}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h1 className="display-6 text-primary fw-bold mb-3">Softkhlome Terms & Conditions</h1>
              <p className="lead text-muted mb-4">
                Please review and accept our terms to proceed. Your acceptance confirms that you understand and agree to the terms of use for Softkhlome.
              </p>
              <button
                className="btn btn-primary btn-lg me-2"
                data-bs-toggle="modal"
                data-bs-target="#termsModal"
              >
                Review Terms
              </button>
              <button
                className="btn btn-outline-secondary btn-lg"
                onClick={() => setAccepted(false)}
                disabled={!accepted}
              >
                {accepted ? 'Accepted' : 'Not Accepted'}
              </button>
              <div className="mt-4">
                {accepted ? (
                  <div className="alert alert-success mb-0">Thank you! You have accepted the terms.</div>
                ) : (
                  <div className="alert alert-warning mb-0">You must accept the terms to continue.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content shadow-lg">
            <div className="modal-header border-bottom-0">
              <div>
                <h5 className="modal-title fw-bold" id="termsModalLabel">Terms and Conditions</h5>
                <p className="text-muted mb-0">Please read the following terms carefully before accepting.</p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
              <p className="mb-4">
                By using Softkhlome, you agree that you have read, understood, and accepted these Terms and Conditions, including our Privacy Policy and any other policies published on the site. You agree to use the service responsibly and lawfully, to avoid any action that could harm the website, interfere with other users, or violate applicable regulations. Softkhlome retains the right to update, modify, or discontinue any part of the service at any time without notice. Continued access after such changes constitutes your acceptance of the revised terms.
              </p>
              <p className="mb-4">
                You acknowledge that all content, text, images, logos, trademarks, and software presented on Softkhlome are owned by Softkhlome or its licensors. These materials are provided for your personal, non-commercial use only. Reproduction, distribution, adaptation, or republication without express written permission is prohibited. You are responsible for maintaining the confidentiality of your account credentials and for all activity occurring under your account.
              </p>
              <p className="mb-4">
                Softkhlome makes no warranty that the service will be uninterrupted, error-free, or secure. We are not liable for any direct, indirect, incidental, special, or consequential damages that may arise from your use of the website, to the extent permitted by law. You agree that any disputes will be governed by applicable law and that our liability is limited to the fullest extent allowed.
              </p>
              <p className="mb-4">
                This modal describes our general terms and is not a substitute for legal advice. If you have any questions or require clarification, please contact us before accepting. Acceptance indicates your consent to these terms and your agreement to abide by the policies and guidelines described here.
              </p>
            </div>
            <div className="modal-footer border-top-0">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleAccept}>
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