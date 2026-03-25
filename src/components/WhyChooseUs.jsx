import React from 'react'

function WhyChooseUs() {
  return (
    <section className="why-choose-us p-5">
        <h2 className="h2 fw-bold text-center text-warning py-4">Why Choose Us</h2>
        <div className="container">
            <div className="row g-4"> 
                <div className="col-md-4">
                    <div className="card h-100 bg-primary text-light">
                        <div className="card-body bg-primary text-light">
                            <h5 className="card-title text-warning bg-primary ">Expertise</h5>
                            <p className="card-text text-light bg-primary ">Our team consists of highly skilled professionals with extensive experience in web design and development.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 bg-primary text-light">
                        <div className="card-body bg-primary ">
                            <h5 className="card-title text-warning bg-primary ">Customer-Centric Approach</h5>
                            <p className="card-text bg-primary text-light">We prioritize our clients' needs and work closely with them to ensure their vision is brought to life.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 bg-primary text-light">
                        <div className="card-body bg-primary text-light">
                            <h5 className="card-title text-warning bg-primary ">Innovative Solutions</h5>
                            <p className="card-text bg-primary text-light">We stay up-to-date with the latest industry trends and technologies to provide innovative solutions that drive results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs