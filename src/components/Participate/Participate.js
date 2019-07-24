import React, { Component } from 'react';

import './Participate.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faRupeeSign, faClock } from "@fortawesome/free-solid-svg-icons";
import timer from '../../utility/timer';


class Participate extends Component {
    constructor(props) {
        super(props);
        this.state = { timeLeft: "00:00:00" };
    }

    componentDidMount() {
        this.tick = setInterval(() => {
            this.setState({ timeLeft: timer("2019-07-29T10:00:00.000Z") });
        }, Infinity);
    }
    componentWillUnmount() {
        clearInterval(this.tick);
    }

    render() {
        return (
            <div className="participateSection">
                <div className="teamAndTimeleft">
                    <p className="teams">Team1 vs Team2</p>
                    <p className="timeLeft"><FontAwesomeIcon className="clockIcon" icon={faClock} />{this.state.timeLeft}</p>
                </div>
                <hr />
                <div className="coins">
                    <p className="coinsRemain">coins remaining</p>
                    <p className="coinsValue"><FontAwesomeIcon className="coinIcon" icon={faCoins} />250</p>
                </div>
                <hr />
                <div className="entry">
                    <p className="entryTag">Entry</p>
                    <p className="entryValue"><FontAwesomeIcon className="rupeeIcon" icon={faRupeeSign} />49</p>
                </div>
                {false ? (
                    <div className="addCoins">
                        <input className="inputCoins" type="text" placeholder="amount" />
                        <button className="addCash">ADD CASH</button>
                    </div>
                ) :
                    (<button className="btnEnroll">ENROLL </button>)}
            </div>
        )
    }
}

export default Participate;