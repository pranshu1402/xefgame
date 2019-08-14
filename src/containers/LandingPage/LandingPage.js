import React, { Component } from 'react';
import './LandingPage.css';
import SportCards from '../../components/sportCard/SportCards';
import { onSportSelected } from '../../store/actions/landingPageActions';
import {connect} from 'react-redux';

class LandingPage extends Component {
    constructor(props){
        super(props);
        props.resetMatches();
    }

    loadGames=()=>{

    }

    render() {
        return (
            <div className="sportsCardContainer">
                {
                    ["TableTennis","Carrom"].map((sport,index) => 
                        <SportCards key={index}
                                    sportName={sport} 
                                    loadGames={this.loadGames}
                                    clicked={this.props.onSportSelected}
                        />
                    )
                }
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
       resetMatches: ()=> dispatch({type: 'MATCH_RESET'}),
       onSportSelected:(sport)=>dispatch(onSportSelected(sport))
    }
}

export default connect(null,mapDispatchToProps)(LandingPage);