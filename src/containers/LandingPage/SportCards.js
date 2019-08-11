import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import * as cricImg from '../../assets/images/cricket-player-bg.jpg';
import * as foosBallImg from '../../assets/images/foosball.png';

const SportCards = (props) => {

    let sportImage = cricImg;
    console.log(props.sportName)
    if(props.sportName==="FoosBall"){
        sportImage = foosBallImg;
    }

    return (
        <div className="sportsCard">
            <div className="sportsCardContent">
                <Typography variant="h1" className="sportsGenre">
                    {props.sportName}
                </Typography>
                <NavLink className="matchButton" to='/matches'>
                    <Button onClick={()=> props.clicked(props.sportName)} 
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