import * as actionTypes from '../actions/actionTypes';

const initialState = {
    playersData: [],
    currentTypePlayers: [],
    credits : 100,
    numPlayers: 11,
    teams: [{name: 'team1', count: 0}, {name: 'team2', count: 0}],
    playerTypeDisplay: 1,
}

const teamReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.CHANGE_PLAYER_TYPE: return {...state, playerTypeDisplay: action.pType};
        case actionTypes.SET_PLAYER_DATA: return {...state, playersData: action.playersData};
        default: return state;
    }
}

export default teamReducer;