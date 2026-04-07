import Fundamentals from "../images/undraw_web-developer_ggt0.svg"
import design from "../assets/hero2.jpg"
import design2 from "../images/3572691.jpg"
import {services} from "./services.js"
//import designVID from "../images/istockphoto-2257509268-640_adpp_is.mp4"
function Services() {
  return (
    <>
        <div className="container section-wrapper services " id="services">
          <h3 className="h2 fw-bold text-center py-2 text-primary" >Our Services</h3>
          <div className="services">
            <div className="row">
              {services.map((service, index) => (
                <div className="col-md-4 d-flex flex-column align-items-center justify-content-center" key={index}>
                  <img src={design} className="service-img img-fluid" alt="" />
                  <h4 className="h4 py-2">{service.name}</h4>
                  <p className="text-center desc px-2">{service.description}</p>
                  <p className="p  fw-bold">Price: <span className="text-warning">{service.priceRange}</span></p>
                </div>
              ))}   
            </div>
          </div>
        </div>
    </>
  );
}
export default Services