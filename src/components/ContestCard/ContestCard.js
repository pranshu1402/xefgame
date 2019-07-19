import React, { Component } from 'react';

import SpotsProgressRing from './SpotsProgressRing';

import './ContestCard.css';

import { connect } from 'react-redux';

import { addPrizeDist,isModalOpen } from '../../store/actions/contestAction'


class Contest extends Component {
    constructor(props) {
        super(props);
        this.openModalForPMD = this.openModalForPMD.bind(this);
    }

    openModalForPMD() {
        this.props.openModal(true);
        this.props.sendPrizeDist(this.props.contestDetails.prizeMoneyDist);
    }

    render() {
        return (
            <div className="contestCard">
                <div className="contestHeader">
                    <p>{`pool: ${this.props.contestDetails.prizeMoney / 100000} Lakh`}</p>
                    <p>{`Entry: ${this.props.contestDetails.entryFee}`}</p>
                </div>

                <div className="contestBody">
                    <SpotsProgressRing
                        index={this.props.index}
                        availableSpots={this.props.contestDetails.totalParticipants}
                        totalSpots={this.props.contestDetails.totalSeats}>
                    </SpotsProgressRing>

                    <h1>{this.props.contestDetails.contestWinner}</h1>

                </div>
                <div className="contestFooter">
                    <p>{`${this.props.contestDetails.totalSeats - this.props.contestDetails.totalParticipants} spots left`}</p>
                    <p>{`${this.props.contestDetails.totalSeats} spots`}</p>
                </div>

                <button onClick={this.openModalForPMD} className="btnForPMD">PMD</button>
            </div>

        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (flag) => dispatch(isModalOpen(flag)),
        sendPrizeDist:(prizeMoneyDist)=>dispatch(addPrizeDist(prizeMoneyDist))
    }
}

export default connect(null, mapDispatchToProps)(Contest);