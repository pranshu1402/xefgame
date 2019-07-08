import React, { Component } from 'react';

import './LandingPage.css';
import img from './landingPage.jpg';

class LandingPage extends Component {

    render() {
        return (
            <div id="landingPageDiv">
                <img id="landingPageImg" src={img} alt="landing page" />
                <p id="titleOnLandingImg">XEFGAME</p>
                <p id="textOnLandingImg">This is a fantasy game where you can play live during the game and play amazing prizes.
                  Compete with players all around the world, beat them and earn money. Give a chance to yourself.</p>
                <button id="btnOnLandingImg">Contest</button>
            </div>
        );
    }
}
export default LandingPage;