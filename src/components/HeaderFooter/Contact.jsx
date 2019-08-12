import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return ( 
        <div className="contact">
                <p className="contact-name">Xebia India Gurgaon</p>
                <p className="contact-street">Capital Cyberscape, 4th Floor, Sector-59, Golf Course Extension Road</p>
                <p className="contact-place">Gurugram, Haryana 122005</p>
                <ul className="contact-details">
                    <li className="telephone"> +91 124 470 0200</li>
                    <li className="telephone"> +91 124 470 0210</li>
                    <li className="email"> infoindia@xebia.com</li>
                    <li className="direction"><a target="_blank"
                                             href="https://www.google.com/maps/place/Xebia+India/@28.459949,77.0494003,17z/data=!3m1!4b1!4m5!3m4!1s0x390d185739027321:0xe216dd164e734c08!8m2!3d28.459949!4d77.051589">
                                                 <FontAwesomeIcon   icon={faMapMarker}/></a>
                    </li>
                </ul>
            </div>
     );
}
 
export default Contact;