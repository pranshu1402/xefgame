import React, { Component } from 'react';
import './LandingPage.css';
import SportCardLandingPage from './SportCardLandingPage';

class LandingPage extends Component {

    loadGames=()=>{

    }

    render() {
        return (
            <div className="sportsCardContainer">
                {
                    ["Cricket", "FoosBall", "Carrom", "Table Tennis"].map((sport,index) => 
                        <SportCardLandingPage key={index} sportName={sport} loadGames={this.loadGames} />
                    )
                }

            </div>
        );
    }
}

export default LandingPage;