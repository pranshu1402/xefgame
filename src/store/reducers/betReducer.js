const initialState = {
    teams: {},
    selected: '',
    betAmount: 0,
    winAmount: 100,
}

const betReducer = (state= initialState, action) => {
    switch(action.type){
        case 'SET_ALL_TEAMS': return {...state, teams: action.teamData};
        case 'SELECT_BET_TEAM': return {...state, selected: action.selectTeam, betAmount: 0};
        case 'SET_BET_AMOUNT': return {...state, betAmount: Number(action.betAmount), winAmount: (action.betAmount*2)};
        default: return state;
    }
}

export default betReducer;