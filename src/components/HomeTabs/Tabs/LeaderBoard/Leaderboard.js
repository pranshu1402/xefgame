import React, { Component } from 'react';

import './LeaderBoard.css';

import { dummyMatchData} from '../../../../assets/dummyData/leaderboardDummyData';
import PlayerPoints from './PlayerPoints';
import LeaderboardTeamRank from './LeaderboardTeamRank';

class Leaderboard extends Component {

    render() {
        return (
            <div className="rootLeaderboard">
                <div className="leaderboardChoser">
                    <span>Choose Match</span>
                    <ul>{
                        dummyMatchData.map((item, index) =>
                            <li key={index}>{item.match} {item.teamName}, {item.date}</li>)
                    }
                    </ul>
                </div>
                <div className="leaderboardContent">
                   <PlayerPoints/>
                   <LeaderboardTeamRank />

                </div>

            </div>
        )
    }
}
export default Leaderboard;