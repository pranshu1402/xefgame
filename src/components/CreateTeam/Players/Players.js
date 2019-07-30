import React from 'react';
import Paper from '@material-ui/core/Paper';
import Player from './Player/Player';
import './Players.css';

function getPlayerList(props, playersPool, selectedPlayersPool) {
    const { playersData: teams, selectedPlayersId, selectHandler, numPlayers, teamsPlayerCounter, currentPlayersType, typesData } = props;
    let disablePlayer = false;

    teams.map(team => (
        team.players.map((player) => {
            if (selectedPlayersId.indexOf(player.pid) !== -1) {
                selectedPlayersPool.push(<Player teamName={team.name}
                    player={player}
                    key={player.pid}
                    onSelect={selectHandler}
                />);
            }else if (player.role === currentPlayersType) {
                if (numPlayers === 11) {
                    disablePlayer = true;
                } else if (teamsPlayerCounter[team] === 7) {
                    disablePlayer = true;
                } else if (typesData[player.role][0] === typesData[player.role][2]) {
                    disablePlayer = true;
                }

                playersPool.push(<Player teamName={team.name}
                    player={player}
                    key={player.pid}
                    onSelect={selectHandler}
                    disablePlayer={disablePlayer}
                />);
                }
                return 0;
            }
            )
    )
    );
    return playersPool;
}

const Players = (props) => {
    const playersPool = [];
    const selectedPlayersPool = [];
    const playersPoolClassName =  "playersPool" + (props.showSelected?' hidePanel':' showPanel');
    const selectedPoolClassName = "playersPool selectedPlayersPool"+(props.showSelected?' showPanel':' hidePanel');

    getPlayerList(props, playersPool, selectedPlayersPool);

    return (
        <div className="playerSelectionPanel">
            <Paper elevation={5} className={playersPoolClassName}>
            <div className="playerLabels">  
                    <div className="playerAvatarLabel">
                    </div>
                    <div className="playerListLabel">
                        <div className="labelPlayer">Player</div>
                        <div className="labelPoints">Points</div>
                        <div className="labelCredits">Credits</div>
                    </div>
                </div>
                {playersPool}
            </Paper>
            <Paper elevation={5} className={selectedPoolClassName}>
                <div className="playerLabels"> 
                    <div className="playerAvatarLabel"></div>
                    <div className="playerListLabel">
                        <div className="labelPlayer">Player</div>
                        <div className="labelPoints">Points</div>
                        <div className="labelCredits">Credits</div>
                    </div>
                </div>
                {selectedPlayersPool}
            </Paper>
        </div>
    );
};

export default Players;