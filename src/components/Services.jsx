import { services } from "./services.js"

function Services() {
  return (
    <section className="container-fluid bg-light py-5" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header Section */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">What we do </h2>
              <p className="lead text-muted">
               We provide small businesses with stunnning digital solutions such as web development and design, graphic design.
              </p>
            </div>

            {/* Services Cards */}
            <div className="row g-4">
              {services.map((service, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="card shadow-sm h-100 border-0">
                    <div className="card-img-wrapper position-relative overflow-hidden">
                      <img
                        src={service.image}
                        className="card-img-top img-fluid"
                        alt={service.name}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-img-overlay d-flex align-items-center justify-content-center bg-primary bg-opacity-75 opacity-0 hover-opacity-100 transition-opacity">
                        <i className={`${service.icon} text-white fs-1`}></i>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-primary fw-bold mb-3">{service.name}</h5>
                      <p className="card-text text-muted flex-grow-1">{service.description}</p>
                      <div className="mt-auto">
                        <div className=" w-100 d-flex justify-content-between align-items-center">
                          <span className=" badge bg-warning text-primary fw-bold px-3 py-2">
                            {service.priceRange}/{service.unit}
                          </span>
                          <button className="d-none btn my-1 mx-1 btn-primary btn-sm">
                            {service.unit}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="alert alert-warning mt-3">
               <strong>Note:</strong> the prices of our services depends on the complexity of your project, but we don't exceed the the price ranges shown in our descriptions. We settle on prices before starting any project, so you can be sure there are no hidden fees or unexpected costs.
            </div>
            {/* Call to Action */}
            <div className="text-center mt-5">
              <div className="card shadow-sm border-primary">
                <div className="card-body py-4">
                  <h4 className="card-title text-primary mb-3">Are you Interested?</h4>
                  <p className="card-text text-muted mb-4">
                    Contact us today to discuss your project requirements.
                  </p>
                  <a href="#contact" className="btn btn-primary text-warning btn-lg px-4">
                    <i className="bi bi-envelope me-2 bg-transparent"></i>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services