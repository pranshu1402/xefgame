import React, { Component } from 'react';


import HomeTabs from '../../components/HomeTabs/HomeTabs';
import Leaderboard from '../../components/HomeTabs/Tabs/LeaderBoard/Leaderboard';
import MyMatches from '../../components/HomeTabs/Tabs/MyMatches/MyMatches';
import Profile from '../../components/HomeTabs/Tabs/Profile';


class Home extends Component {


    render() {
        return (
                <HomeTabs>
                    <div label="LEADERBOARD">
                        <Leaderboard/>
                    </div>

                    <div label="MY MATCHES">
                        <MyMatches/>
                    </div>

                    <div label="PROFILE">
                       <Profile/>
                    </div>
                </HomeTabs>
        )
    }
}

export default Home;