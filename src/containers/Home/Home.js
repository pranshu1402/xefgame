import React, { Component } from 'react';
import HomeTabs from '../../components/HomeTabs/HomeTabs';
import Leaderboard from '../../components/HomeTabs/Tabs/LeaderBoard/Leaderboard';
import MyGames from '../../components/HomeTabs/Tabs/MyGames/MyGames';
import Profile from '../Profile/Profile';
import {connect} from 'react-router-dom';
import { loadMyGamesData } from '../../utility/firebaseOps/getMyGamesData';

class Home extends Component {
    constructor(props){
        super(props);
        props.fetchGames();
    }

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

const mapDispatchToProps = dispatch =>{
    return {
        fetchGames: ()=> dispatch(loadMyGamesData()),    
    }
}

export default connect(null,mapDispatchToProps)(Home);