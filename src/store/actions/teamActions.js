import axios from 'axios';
import * as actionTypes from './actionTypes';


function setPlayerData(data) {
    const types = ['BAT', 'WK', 'BOWL', 'AR']
    let [{ players: team1Players }] = data;
    for (let index = 0; index < team1Players.length; index++) {
        team1Players[index].role = types[index % 4];
        team1Players[index].points = (Math.random() * 100).toFixed(1);
        team1Players[index].credits = (Math.random() * 10).toFixed(1);
    }

    let [, { players: team2Players }] = data;
    for (let index = 0; index < team2Players.length; index++) {
        team2Players[index].role = types[index % 4];
        team2Players[index].points = (Math.random() * 100).toFixed(1);
        team2Players[index].credits = (Math.random() * 10).toFixed(1);
    }
    return {
        type: actionTypes.SET_PLAYER_DATA,
        data
    }
}

export const fetchPlayerData = (uniqueId) => {
    console.log("fetching players");
    return dispatch => {
        axios.get('https://cricapi.com/api/fantasySquad?apikey=G6aMunlmVvPryxEuAbXL21prhe02&unique_id=' + uniqueId)
            .then(response => {
                if (response.data.squad) {
                    dispatch(setPlayerData(response.data.squad))
                }
            })
            .catch(error => console.log(error));
    }
}

export const changeTypeHandler = (playerType) => {
    return { type: actionTypes.CHANGE_PLAYER_TYPE, playerType };
}

export const selectPlayer = (props) => {
    const { player: playerDetails, teamName, disablePlayer: isDisabled } = props;
    return {
        type: actionTypes.SELECT_PLAYER,
        playerDetails,
        teamName,
        isDisabled
    };
}

export const toggleView = ()=>{
    return {
        type: actionTypes.TOGGLE_VIEW
    }
}