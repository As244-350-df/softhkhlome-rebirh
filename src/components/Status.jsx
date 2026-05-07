//pop up for status /rensponses
import React from 'react'

function Status(response) {
  console.log(response)
  let responses=response?.response  
  return (
    response && (
    <div>
        <button type="button" id="response-modal01" className="btn btn-primary btn-hidden" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className={`modal-title fw-bold ${responses?.success ? 'text-success' : 'text-danger'} fs-5`} id="exampleModalLabel">{responses?.success?"Success":"Error"}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <h2 className={`text-center ${responses?.success ? 'text-success' : 'text-danger'} fs-1`} id="exampleModalLabel">{responses?.status||404}</h2>
                <p className="text-muted text-center">{responses?.message||"An error occurred."}</p>
            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn btn-primary text-warning" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary d-none text-warning" data-bs-dismiss="modal">Ok</button>
            </div>
            </div>
        </div>
        </div>        
    </div>
    )
  )
}

export default Status