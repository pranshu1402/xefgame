import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import * as cricImg from '../../assets/images/cricket-player-bg.jpg';
import './LandingPage.css';

class LandingPage extends Component {

    render() {
        return (
            <div className="sportsCardContainer">
                <div className="sportsCard">
                        <div className="sportsCardContent">
                        <Typography variant="h1" className="sportsGenre">
                            CRICKET
                        </Typography>
                        <NavLink className="matchButton" to='/matches'>
                            <Button variant="contained" color="primary">
                                Matches
                        </Button>
                        </NavLink>
                        </div>

                        <img src={cricImg} alt='cricket'/>
                </div>
            </div>
        );
    }
}

export default LandingPage;