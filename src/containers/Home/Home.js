import React, { Component } from 'react';
import HomeTabs from '../../components/HomeTabs/HomeTabs';
import Leaderboard from '../../components/HomeTabs/Tabs/LeaderBoard/Leaderboard';
import MyGames from '../../components/HomeTabs/Tabs/MyGames/MyGames';
import Profile from '../Profile/Profile';


class Home extends Component {
    render() {
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


export default Home;