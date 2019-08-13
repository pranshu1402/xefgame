import firebase from 'firebase';

export const loadMyGamesData = () => {
    return dispatch => {
        firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
            .then((userData) => {

                const enrolledGamesData = userData.data().sports;
                const enrolledGamesKeys = Object.keys(enrolledGamesData);
                enrolledGamesKeys.map(enrolledGamesKey => {

                    firebase.firestore().collection("sports").doc(enrolledGamesKey).get()
                        .then(sportData => {
                            const filteredMatches = enrolledGamesData[enrolledGamesKey].map(myMatchData => {
                                let myFilteredMatch = (
                                    sportData.data().matches
                                ).filter(match => match.matchId === myMatchData.matchId)
                                    .map(filteredMatch => {
                                        const filteredMatchData = {
                                            ...myMatchData,
                                            ...filteredMatch
                                        }
                                        console.log(filteredMatchData);
                                        return filteredMatchData;
                                    });

                                return myFilteredMatch[0];
                            })

                            let newEnrolledMatches = [...filteredMatches];
                            const teamsData = sportData.data().teams;

                            dispatch({ type: 'ADD_MY_GAMES', newEnrolledMatches, teamsData, enrolledGamesKey});
                        })
                        return 0;
                }) 
            })
    }
}