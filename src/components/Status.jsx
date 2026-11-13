// pop up for status / responses
import React from 'react'

function Status(props) {
  const responses = props?.response  
  return (
    <div>
      <button 
        type="button" 
        id="response-modal01" 
        className="d-none" 
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
      >
        Trigger modal
      </button>

      <div 
        className="modal fade" 
        id="exampleModal" 
        tabIndex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div 
            className="modal-content"
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              borderRadius: '16px'
            }}
          >
            <div className="modal-header" style={{ borderBottomColor: 'var(--border-subtle)' }}>
              <h5 className={`modal-title fw-bold ${responses?.success ? 'text-success' : 'text-danger'}`} id="exampleModalLabel">
                {responses?.success ? "✓ Message Received" : "Notice"}
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center py-4">
              <div 
                className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: responses?.success ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  color: responses?.success ? '#10b981' : '#ef4444',
                  fontSize: '1.6rem'
                }}
              >
                <i className={`bi ${responses?.success ? 'bi-check-lg' : 'bi-exclamation-triangle'}`}></i>
              </div>
              <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>
                {responses?.message || "Your request has been processed."}
              </p>
            </div>
            <div className="modal-footer justify-content-center" style={{ borderTopColor: 'var(--border-subtle)' }}>
              <button type="button" className="btn btn-brand-primary btn-sm px-4" data-bs-dismiss="modal">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>        
    </div>
  )
}

export default Status