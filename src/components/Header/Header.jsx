import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../CustomCss.css'
import '../../Style.css'
import '../../ResponsiveStyle.css'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../images/logo.png'


function Header(){
    return(
        <>
        <header className="header-wrapper wrapper fixed-top">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="./index.html">
                    <img src={logo} alt="logo" className="img-fluid" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-stream navbar-toggler-icon"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav menu-navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" aria-current="page">
                            Home
                            </NavLink>
                            {/* <a className="nav-link active" aria-current="page" href="./index.html"></a> */}
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">
                            About Us
                            </NavLink>
                            {/* <a className="nav-link" href="./about.html"></a> */}
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./website.html">Website</a></li>
                                <li><a className="dropdown-item" href="./branding.html">Branding</a></li>
                                <li><a className="dropdown-item" href="./advertising.html">Advertising</a></li>
                                <li><a className="dropdown-item" href="./social-media.html">Social Media</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./portfolio.html">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./contact.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
        </>
    )
}

export default Header