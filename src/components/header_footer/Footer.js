import React from 'react';
import './Header_Footer.css';

const Footer = ()=>{
    return (
        <div className="footer">

            <div className="leftFooter">
               <p style={{display:'inline-block'}}>XEFXEBIA</p>
               <a href="#">Xebia</a>                
            </div>
            
            <div className="rightFooter">
                <a href="/#">About Us</a>
                <a href="/#">How to Play</a>
                <a href="/#">Contact Us</a>
            </div>
        </div>
    );
}

export default Footer;