import React, { Component } from 'react';

import './LeaderboardTeamRank.css';

import {  dummyTeam } from '../../../../assets/dummyData/leaderboardDummyData';

class LeaderboardTeamRank extends Component {



    render() {
        return (
            <div className="leaderBoard">
                <div className="userRankAndName">
                    <div className="leaderboardUserName">XEBIA</div>
                    <div className="leaderboardUserRank">7</div>
                </div>

                <div className="playerListHeader">
                    <div>Team</div>
                    <div>Rank</div>
                </div>
                {
                    dummyTeam.map((player, index) =>
                        <div className="player">
                            <div className="playerPointsDataName">{player.playerName}</div>
                            <div className="playerPointsDataPoint">{index+1}</div>
                        </div>
                    )
                }

            </div>
        )
    }
}
export default LeaderboardTeamRank;