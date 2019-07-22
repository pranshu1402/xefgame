import React from 'react';
import {Link} from 'react-router-dom';
import './Header_Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";



const Footer = ()=>{
    return (
        <div className="footer">

            <div className="leftFooter">
               <Link to="/">XEFGAME</Link>
               <a href="https://xebia.com">XEBIA</a>               
            </div>
            <div className="socialIcons">
                <a href="https://facebook.com"><FontAwesomeIcon className="footerIcons" icon={faFacebook}/></a>
                <a href="https://twitter.com"><FontAwesomeIcon className="footerIcons" icon={faTwitter}/></a>
                <a href="https://google.com"><FontAwesomeIcon  className="footerIcons" icon={faGoogle}/></a>
               

            </div>
            
            <div className="rightFooter">
                <Link to="/about">About</Link>
                <Link to="/how_to_play">How to Play</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Footer;