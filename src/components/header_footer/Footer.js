import React from 'react';
import {Link} from 'react-router-dom';
import './Header_Footer.css';

const Footer = ()=>{
    return (
        <div className="footer">

            <div className="leftFooter">
               <Link to="/">XEFGAME</Link>
               <a href="https://xebia.com">XEBIA</a>               
            </div>
            
            <div className="rightFooter">
                <Link to="/about">About Us</Link>
                <Link to="/how_to_play">How to Play</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    );
}

export default Footer;