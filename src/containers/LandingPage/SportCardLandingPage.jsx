import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import * as cricImg from '../../assets/images/cricket-player-bg.jpg';
import { onSportSelected } from '../../store/actions/landingPageActions';
import {connect} from 'react-redux';

const SportCardLandingPage = (props) => {

    function sportSelected(){
        props.onSportSelected(props.sportName);
    }
    return (
        <div className="sportsCard">
            <div className="sportsCardContent">
                <Typography variant="h1" className="sportsGenre">
                    {props.sportName}
                        </Typography>
                <NavLink className="matchButton" to='/matches'>
                    <Button onClick={sportSelected} variant="contained" color="primary">Matches</Button>
                </NavLink>
            </div>
            <img src={cricImg} alt='cricket' />
        </div>
    );
}
const mapDispatchToProps=(dispatch)=>{
    return {
       onSportSelected:(sport)=>dispatch(onSportSelected(sport))
    }
}

export default connect(null,mapDispatchToProps)(SportCardLandingPage);