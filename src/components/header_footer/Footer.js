import React from 'react';
import './Header_Footer.css';

const Footer = ()=>{
    return (
        <div className="footer">

            <div className="leftFooter">
               <p style={{display:'inline-block'}}>XEFXEBIA</p>
               <a href="https://xebia.com">Xebia</a>                
            </div>
            
            <div className="rightFooter">
                <a href="/about">About Us</a>
                <a href="/how_to_play">How to Play</a>
                <a href="/contact">Contact Us</a>
            </div>
        </div>
    );
}

export default Footer;