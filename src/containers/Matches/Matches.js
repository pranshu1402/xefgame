import React, { Component } from 'react';
import StepperLayout from '../../hoc/StepperLayout/StepperLayout';
import MatchCards from './MatchCardsContainer/MatchCardsContainer';
import CreateTeamContainer from './CreateTeamContainer/CreateTeamContainer';
import ContestCardContainer from './ContestCardContainer/ContestCardContainer';
import BettingContainer from './BettingContainer/BettingContainer';
import Auth from '../Auth/Auth';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Matches extends Component {
    constructor(props){
        super(props);
        this.setRedirect();
    }

    componentDidUpdate(){
        this.setRedirect();
    }

    setRedirect(){
        const {setRedirectTo, history: {location: {pathname}}}  = this.props;
        if(pathname.indexOf('auth')===-1){
            setRedirectTo(pathname);
        }
    }

    render() {
        let route = (<Route path='/matches' component={MatchCards}/>);
        if(this.props.sport===''){
            route = <Redirect to='/' />
        }
        return (
            
                <StepperLayout {...this.props} isMatchSelected={this.props.matchSelected}>
                    <Switch>
                        <Route path='/matches/team' component={CreateTeamContainer}/>
                        <Route path='/matches/bet' component={BettingContainer}/>
                        <Route path='/matches/contest' component={ContestCardContainer}/>
                        <Route path='/matches/auth' component={Auth}/>
                        {route}
                    </Switch>
                </StepperLayout>
        );
    }
}

const mapStateToProps = state =>{
    return {
        matchSelected : state.matches.selectedMatchId,
        sport: state.sports.sportSelected,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setRedirectTo : (route)=> dispatch({type: 'AUTH_SET_REDIRECT', redirectTo: route})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Matches);