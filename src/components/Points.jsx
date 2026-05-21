import React from 'react'

function Points() {
  return (
              <div className="row mt-2 d-flex mb-1 g-4  points">
                <div className="col-md-4">
                  <div className="card bg-white bg-opacity-10 border-0">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="bi bi-lightning-charge-fill fs-1 text-warning"></i>
                      </div>
                      <h5 className="card-title">Fast & Responsive</h5>
                      <p className="card-text text-secondary small">Lightning-fast loading times with mobile-first design.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-white bg-opacity-10 border-0">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="bi bi-shield-check fs-1 text-warning"></i>
                      </div>
                      <h5 className="card-title">Secure & Reliable</h5>
                      <p className="card-text small text-secondary">Built with security best practices and reliable hosting.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-white bg-opacity-10 border-0">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="bi bi-graph-up fs-1 text-warning"></i>
                      </div>
                      <h5 className="card-title">Results Driven</h5>
                      <p className="card-text small text-secondary">Grow your brand and boost your business's online presence.</p>
                    </div>
                  </div>
                </div>
              </div>

  )
}

export default Points