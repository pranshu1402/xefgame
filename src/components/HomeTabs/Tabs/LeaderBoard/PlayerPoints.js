import React, { Component } from 'react';

import {  dummyTeam } from '../../../../assets/dummyData/leaderboardDummyData';
import './PlayerPoints.css';
class PlayerPoints extends Component {


    render() {
        return (
            <div className="playerList">
                <div className="playerListHeader">
                    <div>Players</div>
                    <div>Score</div>
                    <div>Points</div>
                </div>
                {
                    dummyTeam.map((player, index) =>
                        <div className="player">
                            <div className="playerPointsDataName">{player.playerName}</div>
                            <div className="playerPointsDataScore">50</div>
                            <div className="playerPointsDataPoint">{player.point}</div>
                        </div>
                    )
                }
            </div>
        )
    }

}

export default PlayerPoints;