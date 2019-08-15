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

    componentDidMount(){
        if(!this.props.isSigned){
            this.props.history.replace('/auth');
        }
    }

    componentDidUpdate(){
        if(!this.props.isSigned){
            this.props.history.replace('/auth');
        }
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

const mapStateToProps = state=> {
    return {
        isSigned: !!state.auth.user,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
       resetMatches: ()=> dispatch({type: 'MATCH_RESET'}),
       onSportSelected:(sport)=>dispatch(onSportSelected(sport)), 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);