import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../../CustomCss.css'
import '../../Style.css'
import '../../ResponsiveStyle.css'
import {Link, NavLink} from 'react-router-dom'
import whatsappImg from '../../images/whatspp.png'



function Whatsapp(){
    return(
        <>
        <div class="whatsapp-icon">
            <div class="whatsapp">
                <a href="#"><img src={whatsappImg} alt="whatsapp icon" />
                </a>
            </div>
        </div>
        </>
    )
}

export default Whatsapp