import * as actionTypes from '../actions/actionTypes';

const initialState = {
    playersData: [],
    currentPlayersRole: 'BAT',
    credits: 100.0,
    numPlayers: 0,
    teamsPlayerCounter: { 'TEAM-A': 0 , 'TEAM-B': 0 },
    loading: true,
    selectedPlayers: [],
    types: {'WK': [0, 1, 1], 'BAT': [0, 5, 6], 'BOWL': [0, 5,5], 'AR': [0, 1, 1]},
}

function setTeamData(data) {
    const teamsPlayerCounter = {};
    teamsPlayerCounter[data[0].name] = 0;
    teamsPlayerCounter[data[1].name] = 0;
    return { teamsPlayerCounter, playersData: data, loading: false }
}

function checkPlayerSelected(state, actions) {
    const {playerDetails, teamName, isDisabled} = actions;

    if(isDisabled){
        return state;
    }

    const newSelectedPlayers = [...state.selectedPlayers];
    let indexSelected = newSelectedPlayers.indexOf(playerDetails.pid);
    let credits = state.credits;
    let numPlayers = state.numPlayers;
    let teamsPlayerCounter = {...state.teamsPlayerCounter};
    let typesData = {...state.types};

    if (indexSelected === -1) {
        newSelectedPlayers.push(playerDetails.pid);
        credits= Number.parseFloat(credits) - Number.parseFloat(playerDetails.credits);
        numPlayers++;
        teamsPlayerCounter[teamName]+= 1;
        typesData[playerDetails.role][0]+= 1;
    } else {
        newSelectedPlayers.splice(indexSelected, 1);
        credits= Number.parseFloat(credits) + Number.parseFloat(playerDetails.credits);
        numPlayers--;
        teamsPlayerCounter[teamName]-= 1; 
        typesData[playerDetails.role][0]-= 1;
    }

    return {
        ...state,
        credits: credits.toFixed(1),
        teamsPlayerCounter,
        numPlayers,
        types: typesData,
        selectedPlayers: newSelectedPlayers
    };
}

const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PLAYER_TYPE: return { ...state, currentPlayersRole: action.playerType };
        case actionTypes.SET_PLAYER_DATA: return { ...state, ...setTeamData(action.data) };
        case actionTypes.SELECT_PLAYER: return checkPlayerSelected(state, action);
        default: return state;
    }
}

export default teamReducer;