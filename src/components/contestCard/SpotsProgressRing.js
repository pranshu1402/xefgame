import React, { Component } from 'react';

import './ContestCard.css';

class SpotsProgressRing extends Component {
    constructor(props) {
        super(props);
        //this will be fetched from firebase.
        this.valueProgressRing = 0;
        this.refForbuildProgressRing = null;
    }

    buildProgressRing(canvasElement, finalVal) {
        let endAngle = 2 * Math.PI * this.valueProgressRing / this.props.totalSpots;
        canvasElement.clearRect(0, 0, 70, 70);
        canvasElement.lineWidth = 10;
        canvasElement.fillStyle = 'white';
        canvasElement.strokeStyle = 'white';
        canvasElement.textAlign = 'center';
        canvasElement.fillText(`${Math.round(this.valueProgressRing / 
            this.props.totalSpots * 100)}%`, 35, 35, 70, 70);
        canvasElement.beginPath();
        canvasElement.arc(35, 35, 25, 0, endAngle);
        canvasElement.stroke();
        if (this.valueProgressRing > finalVal) {
            clearInterval(this.refForbuildProgressRing);
        }
        this.valueProgressRing += 50;
    }

    componentDidMount() {
        let canvasElementArray = Array.from(document.getElementsByClassName("spotsLeftIndicator"));
        
        this.refForbuildProgressRing = setInterval(() => {
            this.buildProgressRing(canvasElementArray[this.props.index].getContext("2d"), 10000)
        }, 1);
    }

    render() {
        return (
            <canvas width="70" height="70" className="spotsLeftIndicator"></canvas>
        );
    }
}

export default SpotsProgressRing;