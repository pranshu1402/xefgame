const initialState = {
    selectedTab: "MY GAMES",
    matchToShowOnLeaderboard: null,
    teams: null
}



export const tabsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TAB':
            return {
                ...state,
                selectedTab: action.changeTab,
            }
        case 'CHANGE_TAB_GAME_CLICK':
            return {
                ...state,
                selectedTab: action.changeTab,
                matchToShowOnLeaderboard: action.matchToShowOnLeaderboard
            }

        case 'FETCH_TEAM_FOR_SCORE_UPDATES':
            return {
                ...state,
                teams:action.payload
            }

        default: return state;
    }
}