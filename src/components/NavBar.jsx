import React from 'react';
import Logo from '../assets/Logo (2).png';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid text-light d-flex flex-direction-row align-items-end justify-content-between">
                <a className="navbar-brand text-primary fw-bold" href="#"><img src={Logo} className='mx-3' height='30px' alt="logo" />softkhlome</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID" aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light justify-content-end" id="navbarID">
                    <ul className="navbar-nav px-4 text-light ms-auto">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-light">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-light">Services</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-light">Contact</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-light">Profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;