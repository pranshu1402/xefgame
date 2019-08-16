import React, { Component } from 'react';
import HomeTabs from '../../components/HomeTabs/HomeTabs';
import Leaderboard from '../../components/HomeTabs/Tabs/LeaderBoard/Leaderboard';
import MyGames from '../../components/HomeTabs/Tabs/MyGames/MyGames';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';

class Home extends Component {

    render() {
        if(!this.props.isSigned){
            this.props.history.replace('/');
        }

        return (
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
        )
    }
}

const mapStateToProps = state =>{
    return {
        isSigned: !!state.auth.user,
    }
}

export default connect(mapStateToProps)(Home);