import React, { Component } from 'react';
import HomeTabs from '../../components/HomeTabs/HomeTabs';
import Leaderboard from '../../components/HomeTabs/Tabs/LeaderBoard/Leaderboard';
import MyGames from '../../components/HomeTabs/Tabs/MyGames/MyGames';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Home extends Component {

    render() {

        let hometabs = (
            <HomeTabs>
                <div label="MY GAMES">
                    <MyGames/>
                </div>

                <div label="LEADERBOARD">
                    <Leaderboard/>
                </div>

                <div label="PROFILE">
                   <Profile/>
                </div>
            </HomeTabs>
        );

        if(!this.props.isSigned){
            console.log("sorry, cant take you to home Not signed");
            hometabs = <Redirect to='/'/>;
        }

        return hometabs;
    }
}

const mapStateToProps = state =>{
    return {
        isSigned: !!state.auth.user,
    }
}

export default connect(mapStateToProps)(Home);