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
import facebook from '../../images/social-media/f.webp'
import insta from '../../images/social-media/i.webp'
import linkedin from '../../images/social-media/l.webp'
import twitter from '../../images/social-media/t.webp'

function Footer(){
    return(
        <>
        <section className="footer-wrapper wrapper">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0 footer-logo">
                    <img src={logo} alt="footer-logo" className="img-fluid" />
                </div>
                <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                    <h5><a href="#">+91 121 212 1221</a></h5>
                    <h5><a href="#">Example@Gmail.Com</a></h5>
                    <h5>A-212, First Floor India</h5>
                </div>
                <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                    <ul className="link-widget p-0">
                        <li><a href="#"><img src={facebook} alt="facebook"/></a></li>
                        <li><a href="#"><img src={insta} alt="instagram"/></a></li>
                        <li><a href="#"><img src={linkedin} alt="linkedin"/></a></li>
                        <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright-section">
            <p>© 2023 CodeForFunnn. All Rights Reserved</p>
        </div>
    </section>
        </>
    )
}

export default Footer