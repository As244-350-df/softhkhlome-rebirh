import React from 'react'
import { Link } from 'react-router-dom'
import brand from '../assets/brand.png'
function Footer() {
  return (
        <footer className="row container-fluid footer pt-5 bg-primary px-3">
        <div className="col-md-4 brand d-flex flex-column align-items-center justify-content-center">
            <img src={brand} className='img img-fluid brand-img' alt="brand" />
            <p className="disabled text-light h3 text-center mt-1">SoftKhlome</p>
            <p className="brand-text mx-sm-5 px-sm-4  px-md-0 mx-lg-5 text-center py-lg-3 px-2 p text-light ">
            Softkhlome is a newly established private institution dedicated to
            providing cutting-edge digital services tailored to meet the growing 
            needs of modern businesses and creative individuals. Founded on the principles of 
            innovation, quality, and customer satisfaction, Softkhlome strives to become a trusted
            name in the digital solutions industry.
            </p>
        </div>
        <div className="col-md-4 my-2">
            <div className="container-fluid ">
            <h4 className="display-7 text-center text-light">Navigate</h4>
            <ul className="nav d-flex justify-content-center">
            <li className="nav-item text-light"><Link to="/" className="nav-link active-f text-light text-center">Home</Link></li>
            </ul>
            <ul className="nav d-flex justify-content-center">
            <li className="nav-item text-light"><a href="/#services" className="nav-link text-light text-center">Services</a></li>
            </ul>
                <ul className="nav d-flex justify-content-center">
            <li className="nav-item text-light text-center"><Link to="/About" className="nav-link text-light text-center">About</Link></li>
            </ul>
            <ul className="nav d-flex justify-content-center">
            <li className="nav-item text-light text-center"><Link to="/Policy" className="nav-link text-light text-center">privacy Policy</Link></li>
            </ul>
            <ul className="nav d-flex justify-content-center">
            <li className="nav-item text-light text-center"><a href="/#contact" className="nav-link text-light text-center">Contact</a></li>
            </ul>
        </div>  
        </div>    
        <div className="col-md-4 follow-us">
            <div className="contact-info mb-2">
                <h5 className="h4  text-light text-center bg-transparent">Our Contact Info</h5>
                <ul className="list-group text-light text-center list-decoration-none d-flex flex-column align-items-center justify-content-center">
                    <li className="list-item ">123 bunda Mitundu, Lilongwe, Malawi</li>
                    <li className="list-item">softkhlome@gmail.com</li>
                    <li className="list-item">+265 123 456 789</li>
                </ul>
            </div>              
            <div className="container-fluid ">
                <h4 className="display-7 text-center text-light">Follow us</h4>
                <ul className="nav d-flex my-md-1 justify-content-center">
                <li className="nav-item text-light">
                    <a href="https://web.facebook.com/profile.php?id=61576749383886&__tn__=-UC*F" className="nav-link active text-light text-center">
                    <i className="bi bi-facebook"></i>
                    </a>
                </li>
                <li className="nav-item text-light"><a href="https://whatsapp.com/channel/0029VbBjQ0CCsU9IEWqCrG37" className="nav-link text-light text-center"><i className=" bi bi-whatsapp"></i></a></li>
                <li className="nav-item text-light text-center"><a href="https://www.instagram.com/softkhlome/#" className="nav-link text-light text-center"><i className="bi bi-instagram"></i></a></li>
                <li className="nav-item text-light text-center"><a href="https://youtube.com/@softkhlome?si=pVx2sPoax3L6yq8t" className="nav-link text-light text-center"><i className="bi bi-youtube"></i></a></li>
                <li className="nav-item text-light text-center"><a href="#" className="nav-link text-light text-center"></a></li>
                </ul>
        </div>
        </div>        
        <div className="col-12 d-flex my-2 justify-content-center">
            <p id="copyright" className="disabled text-light text-center fs-md-5 fs-lg-3 my-2">SoftKhlome 2025. Alrights reserved © |<a href="#" className="terms text-light bg-transparent text-decoration-none"> Terms & conditions</a></p>
        </div>
        </footer>
  )
}

export default Footer