import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {

    render() {
        return (
            <div className="sportsCardContainer">
                <Paper className="sportsCard">
                    
                    <Typography variant="h1" className="sportsGenre">
                        Cricket
                    </Typography>
                    
                    <Typography variant="h5" className="sportsDescription">
                        It is an online game in which a virtual
                        team of real cricket players is created and points are scored depending
                        on how those players perform in real life matches. To win a tournament,
                        players must work towards attaining the maximum points and the highest
                        rank on the leaderboard.
                    </Typography>
                    <NavLink activeClassName="matchButton" to='/matches'>
                        <Button variant="contained" color="primary">
                            Matches
                        </Button>
                    </NavLink>
                    
                </Paper>
            </div>
        );
    }
}

export default LandingPage;