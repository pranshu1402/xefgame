import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import * as cricImg from '../../assets/images/cricket-player-bg.jpg';
import * as foosBallImg from '../../assets/images/foosball.png';
import * as carromImg from '../../assets/images/carrom.png';
import * as tableTennisImg from '../../assets/images/tableTennis.png';

const SportCards = (props) => {

    let sportImage;

    switch (props.sportName) {
        case 'Cricket': sportImage = cricImg;
            break;
        case 'Carrom': sportImage = carromImg;
            break;
        case 'FoosBall': sportImage = foosBallImg;
            break;
        case 'TableTennis': sportImage = tableTennisImg;
            break;
        default: sportImage = cricImg;
    }

    return (
        <div className="sportsCard">
            <div className="sportsCardContent">
                <Typography variant="h1" className="sportsGenre">
                    {props.sportName}
                </Typography>
                <NavLink className="matchButton" to='/matches'>
                    <Button onClick={() => props.clicked(props.sportName)}
                        variant="contained"
                        color="primary">
                        Matches
                    </Button>
                </NavLink>
            </div>
            <img src={sportImage} alt={props.sportName} />
        </div>
    );
}

export default SportCards;