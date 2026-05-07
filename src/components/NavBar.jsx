import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo(2).png';
function NavBar({pageName}) {
    const navLinksStyle=pageName==="home"?"nav-link text-light":"nav-link text-light"
    const NavlinkStyle=({isActive})=>{
        return {
            color: isActive? " #0d6efd !important":"",
        };
    };
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid text-dark d-flex flex-direction-row align-items-end justify-content-between">
                <a className="navbar-brand text-primary d-flex fw-bold" href="#"><img src={Logo} className='mx-1 mr-2' height='30px' alt="logo" />softkhlome</a>
                <button className="navbar-toggler text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID" aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="bi bi-menu-button menu-sfill"></span>
                </button>
                <div className="collapse navbar-collapse text-dark justify-content-end" id="navbarID">
                    <ul className="navbar-nav px-4 text-dark ms-auto">
                        <li className="nav-item"><NavLink to="/" className={navLinksStyle} aria-current="page">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className={navLinksStyle}>About</NavLink></li>
                        <li className="nav-item"><a href="/#services" className={navLinksStyle}>Services</a></li>
                        <li className="nav-item"><a href="/#contact" className={navLinksStyle}>Contact</a></li>
                        <li className="nav-item"><NavLink to="/policy" className={navLinksStyle}>Privacy Policy</NavLink></li>
                        {/* <li className="nav-item"><NavLink to="/Profile" className={navLinksStyle}>Dev Profile</NavLink></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;