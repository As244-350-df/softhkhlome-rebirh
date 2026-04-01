import React from 'react'

function Introduction() {
  return (
    <section className="hero px-5 d-flex flex-direction-row align-items-center ">
        <div className="hero-content bg-transparent">
            <h1 className='h1 bg-transparent text-light text-center'>Build <span className="text-warning bg-transparent">Modern</span>, <span className="text-warning bg-transparent">Affordable </span>websites in Malawi</h1>
            <p className='bg-transparent text-light text-center px-md-5'>We help businesses and individuals create fast, responsive, and professional websites that attract customers and grow your brand.</p>
            <div className='buttons bg-transparent d-flex g-3 d-flex justify-content-center'>
            <button className="btn btn-warning mx-2">Get Started</button>
            <button className="btn btn-outline-warning">Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default Introduction