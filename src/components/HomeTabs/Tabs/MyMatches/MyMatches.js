import React, { Component } from 'react';

import './MyMatches.css';

class MyMatches extends Component {

    render() {
        return (
            <div className="rootMyMatches">
                <div className="myMatch">
                    <p className="myMatchDate">24th july,2019</p>
                    <p className="myMatchTeams">IND vs AUS</p>
                    <p className="myMatchTeamID">T1</p>
                   
                    <div className="myMatchRankAndPoints">
                        <p>Rank: 7</p>
                        <p>Points: 125.8</p>
                    </div>

                </div>

            </div>
        )
    }
}

export default MyMatches;