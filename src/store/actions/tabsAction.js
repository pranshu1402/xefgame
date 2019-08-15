import firebase from 'firebase';

export const changeTab = (label) => {
    return {
        type: 'CHANGE_TAB',
        changeTab: label
    }
}

export const changeTabOnGameClick = (data) => {
    return {
        type: 'CHANGE_TAB_GAME_CLICK',
        changeTab: data.label,
        matchToShowOnLeaderboard: data.matchToShowOnLeaderboard
    }
}
export const addTeamsOnScoreUpdate = (teamsData) => {
    return {
        type: 'FETCH_TEAM_FOR_SCORE_UPDATES',
        payload: teamsData
    }
}

export const fetchTeamsForScoreUpdates = (sport) => {
    return dispatch => {
        firebase.firestore().collection('sports').doc(sport).onSnapshot((response) => {
            let teamsData = response.data().teams;
            dispatch(addTeamsOnScoreUpdate(teamsData));
        })
    }
}