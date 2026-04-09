import React from "react"
import {contactmethods } from "./contactUs.js";
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

return (
    <div className="contact container p-5 px-1 " id="contact">
        <h2 className="h2 fw-bold text-center text-primary py-4">Contact Us</h2>
        <div className="container">
            <div className="row my-4 px-md-5 g-4">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-bold ">Name</label>
                            <input type="text" className="form-control border-primary " placeholder="your name..." id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">Email</label>
                            <input type="email" className="form-control border-primary" placeholder="example@gmail.com" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label fw-bold">Message</label>
                            <textarea className="form-control border-primary" id="message" placeholder="write your message here..." ></textarea>
                        </div>
                        <button type="submit" className="btn text-primary bg-warning">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="h3 text-warning">Get in Touch</h3>
                    <p className=" py-2 px-4 text-center">Have questions or want to learn more about our services? Feel free to reach out to us!</p>
                    <ul className="list-unstyled">
                        <li><i className="fas fa-map-marker-alt text-warning"></i>  26 Mitundu, Lilongwe, Malawi</li>
                        <li><i className="fas fa-phone text-warning"></i> {"+265"} {'(886)'} {"522-243"}</li>
                        <li><i className="fas fa-envelope text-warning"></i> softkhlome@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="row py-4 text-center w-100 d-flex contact-links">
                {contactmethods.map((method, index) => (
                    <div className={`col-md-4 my-2 mx-0 contact-link`} key={index}>
                       <div className="card bg-dark text-light">
                         <div className="card-body text-center ">
                             <h1 className="h1 mb-1">
                               <i className={method.icon}></i>
                             </h1>
                         <h2 className="h2 mb-4">{method.method}</h2>
                         <p className="card-text px-5 mb-5">
                               {method.description}
                         </p>
                         <a href={method.link} className="btn btn-outline-warning" target="_blank" rel="noopener noreferrer">
                           {method.method}
                         </a>
                     </div>
                   </div>
             </div>
                ))}
            </div>            
        </div>
    </div>
);
}

export default Contact