import React from 'react'

function Introduction() {
  return (
    <section className="hero px-5 d-flex flex-direction-row align-items-center ">
        <div className="hero-content">
            <h1>Welcome to Our Site</h1>
            <p>Discover amazing experiences and services</p>
            <div className='buttons d-flex g-3'>
            <button className="btn btn-primary mx-2">Get Started</button>
            <button className="btn btn-outline-primary">Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default Introduction