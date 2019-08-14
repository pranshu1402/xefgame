const initialState = {
    myEnrolledGames: null,
    loading:true
}

export const myGamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MY_GAMES': return {
            ...state,
            loading:false,
            myEnrolledGames: {...state.myEnrolledGames, 
                [action.enrolledGamesKey]: { 
                    matches: action.newEnrolledMatches,
                    teams: action.teamsData}}
        }
        default: return state
    }

}