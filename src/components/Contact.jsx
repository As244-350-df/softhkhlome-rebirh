import React from "react"
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

return (
    <div className="contact p-5 ">
        <h2 className="h2 fw-bold text-center text-primary py-4">Contact Us</h2>
        <div className="container">
            <div className="row my-4 g-4">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3 className="h3 text-warning">Get in Touch</h3>
                    <p className="lead">Have questions or want to learn more about our services? Feel free to reach out to us!</p>
                    <ul className="list-unstyled">
                        <li><i className="fas fa-map-marker-alt text-warning"></i> 123 Main Street, City, Country</li>
                        <li><i className="fas fa-phone text-warning"></i> {"+1"} {'(123)'} {"456-7890"}</li>
                        <li><i className="fas fa-envelope text-warning"></i> info@company.com</li>
                    </ul>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md ">
                   <div class="card border  bg-dark text-light">
                     <div class="card-body text-center">
                         <h1 class="h1 mb-3">
                           <i class="bi bi-laptop"></i>
                         </h1>
                         <h2 class="h2 mb-3">Email</h2>
                         <p class="card-text  mb-3">
                             message the developers via  email. 
                         </p>
                         <a href="mailto:softkhlome@gmail.com" target="_blank" class="btn btn-primary">Mail</a>
                     </div>
                   </div>
               </div>
                <div class="col-md   my-md-0 my-2 mx-md-2">
                   <div class="card  bg-secondary text-light">
                     <div class="card-body text-center">
                         <h1 class="h1 mb-3">
                           <i class="bi bi-person-square"></i>
                         </h1>
                         <h2 class="h2 mb-3">Message</h2>
                         <p class="card-text mb-3">
                               Talk with the developers in realtime through voice or video calls on whatsapp.
                         </p>
                         <a href="https://api.whatsapp.com/send?phone=+265886522243&text=Hie Brian" class="btn btn-dark">contact</a>
                     </div>
                   </div>
              </div>
                <div class="col-md  ">
              
                   <div class="card bg-dark text-light">
                     <div class="card-body text-center">
                         <h1 class="h1 mb-3">
                           <i class="bi bi-people"></i>
                         </h1>
                         <h2 class="h2 mb-3">Personal</h2>
                         <p class="card-text  mb-3">
                               Get in touch with the developers in person by suggesting an appointment
                         </p>
                         <a href="https://calendar.google.com/calendar/u/0/r/week/2026/2/18" class="btn btn-primary">Appointment</a>
                     </div>
                   </div>
             </div>
            </div>            
        </div>
    </div>
);
}

export default Contact