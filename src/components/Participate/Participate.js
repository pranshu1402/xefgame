import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faClock } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from 'react-router-dom';
import timer from '../../utility/timer';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/participationAction';
import './Participate.css';
import { getEntryFeeForMatch, getdateFormatch } from '../../utility/getDataByperformingOps';
import { snackbaropenOnEnrollment } from '../../store/actions/contestAction';

class Participate extends Component {
    constructor(props) {
        super(props);
        this.state = { timeLeft: "00:00:00" };
    }

    componentDidMount() {
        this.tick = setInterval(() => {
            this.setState({ timeLeft: timer(getdateFormatch(this.props.matchData, this.props.selectedMatchId)) });
        }, Infinity);
    }

    componentWillUnmount() {
        clearInterval(this.tick);
    }

    enrollContest = () => {
        this.props.onParticipate(this.props.data);
        this.props.history.push('/home');
        this.props.setSnackbarOpenClose(true);

    }

    render() {
        if (!this.props.data.matches.selectedMatchId) {
            return <Redirect to='/' />;
        }

        const { participatedContest, balancedCoins } = this.props;
        let [entryFee] = participatedContest === null ? getEntryFeeForMatch(this.props.matchData, this.props.selectedMatchId) : participatedContest.entryFee;
          let totalAmount=entryFee+this.props.betAmount;
        return (
            <div className="participateSection">

                <div className="teamAndTimeleft">
                    <p className="teams">Team1 vs Team2</p>
                    <p className="timeLeft">
                        <FontAwesomeIcon className="clockIcon" icon={faClock} />
                        {this.state.timeLeft}</p>
                </div>
                <hr />
                <div className="coins">
                    <p className="coinsRemain">coins remaining</p>
                    <p className="coinsValue">
                        <FontAwesomeIcon className="coinIcon" icon={faCoins} />
                        {balancedCoins.user.points}
                    </p>
                </div>
                <hr />

                <div className="coins">
                    <p className="coinsRemain">Bet Amount</p>
                    <p className="coinsValue">
                        <FontAwesomeIcon className="coinIcon" icon={faCoins} />
                        {this.props.betAmount}
                    </p>
                </div>
                <hr />


                <div className="coins">
                    <p className="coinsRemain">Match Charges</p>
                    <p className="coinsValue">
                        <FontAwesomeIcon className="coinIcon" icon={faCoins} />
                        {entryFee}
                    </p>
                </div>
                <hr />



                <div className="entry">
                    <p className="entryTag">Total Payable Fee</p>
                    <p className="entryValue">
                        <FontAwesomeIcon className="rupeeIcon" icon={faCoins} />
                        {totalAmount}
                    </p>
                </div>

                {balancedCoins.user.points < totalAmount ? (
                    <div className="addCoins">
                        {/* <input className="inputCoins" 
                            type="text" 
                            placeholder="amount" />
                        <button className="addCash">ADD CASH</button> */}
                        <span>your cash is low, contact your admin</span>
                    </div>
                ) : (
                        <button className="btnEnroll"
                            onClick={this.enrollContest}>
                            ENROLL
                        </button>
                    )
                }

               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state,
        participatedContest: state.contest.selectedContest,
        balancedCoins: state.auth,
        matchData: state.matches.matchData,
        selectedMatchId: state.matches.selectedMatchId,
        betAmount:state.bet.betAmount
       

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onParticipate: (data) => dispatch(actions.setContestParticipationData(data)),
        setSnackbarOpenClose: (flag) => dispatch(snackbaropenOnEnrollment(flag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Participate);