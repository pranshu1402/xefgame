import React, { Component } from 'react';
import SpotsProgressRing from './SpotsProgressRing';
import { connect } from 'react-redux';
import { addPrizeDist,isModalOpen } from '../../store/actions/contestAction'
import './ContestCard.css';

class ContestCard extends Component {

    openModalForPMD = ()=>{
        this.props.openModal(true);
        this.props.sendPrizeDist(this.props.contestDetails.prizeMoneyDist);
    }

    render() {
        const {contestDetails, index, clickHandler, selectedContest} = this.props;
        
        let activeClassName = "";
        if(selectedContest!==null && selectedContest.id===contestDetails.id){
            activeClassName = " activeContestCard";
        }
        const cardClassName = "contestCard" + activeClassName;

        return (
            <div className={cardClassName} onClick={()=> clickHandler(contestDetails)}>
                <div className="contestHeader">
                    <p>{`pool: ${contestDetails.prizeMoney / 100000} Lakh`}</p>
                    <p>{`Entry: ${contestDetails.entryFee}`}</p>
                </div>

                <div className="contestBody">
                    <SpotsProgressRing
                        index={index}
                        availableSpots={contestDetails.totalParticipants}
                        totalSpots={contestDetails.totalSeats}>
                    </SpotsProgressRing>

                    <h1>{contestDetails.contestWinner}</h1>

                </div>
                <div className="contestFooter">
                    <p>{`${contestDetails.totalSeats - contestDetails.totalParticipants} spots left`}</p>
                    <p>{`${contestDetails.totalSeats} spots`}</p>
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

export default connect(null, mapDispatchToProps)(ContestCard);