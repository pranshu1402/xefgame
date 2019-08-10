import React, { Component } from 'react';

import './LeaderBoard.css';

import PlayerPoints from './PlayerPoints';
import LeaderboardTeamRank from './LeaderboardTeamRank';
import { getLeaderboardSelectContestData, contestData } from '../../../../utility/firebaseOps/leaderboardDataGet';
import { connect } from 'react-redux';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = { contestData: [] };
    }

    componentDidMount() {
        getLeaderboardSelectContestData(this.props.stateRef);
    
    }

    render() {
        return (
            <div className="rootLeaderboard">
                <div className="leaderboardChoser">
                    <span>Choose Contest</span>
                    <ul>{
                        this.state.contestData.length > 0 && this.state.contestData.map((item, index) =>
                            <li key={index}>{item.match}, {item.date} {item.entryFee}</li>)
                    }
                    </ul>
                </div>
                <div className="leaderboardContent">
                    <PlayerPoints />
                    <LeaderboardTeamRank />
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        stateRef: state
    }
}
export default connect(mapStateToProps)(Leaderboard);