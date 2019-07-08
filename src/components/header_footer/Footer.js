import React from 'react';
import './Header_Footer.css';

const Footer = ()=>{
    return (
        <div className="footer">
            <div>
                <img alt="XEFGAME XEBIA" src="logo.png"/>
                <div className="social_links">
                    <div>facebook</div>
                    <div>Google</div>
                </div>                
            </div>
            
            <div className="other_links">
                <a href="/#">About Us</a>
                <a href="/#">How to Play</a>
                <a href="/#">Contact Us</a>
            </div>
        </div>
    );
}

export default Footer;