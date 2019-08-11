import firebase from 'firebase';
import { store } from '../..';
let myGamesObj = {};

export const loadMyGamesData = () => {
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
    .then((snapShot) => {
            let enrolledGamesKeys = Object.keys(snapShot.data().sports);
            enrolledGamesKeys.map((enrolledGamesKey) => {
                snapShot.data().sports[enrolledGamesKey].map((sportItem) => {
                    firebase.firestore().collection("sports").doc(enrolledGamesKey).get()
                    .then((snapShotMatches) => {
                            let myMatches = snapShotMatches.data().matches
                            .filter((match) => match.matchId == sportItem.matchId).map((filterMatch) => {
                                    return {
                                        ...filterMatch,
                                        BetOn: sportItem.teamId
                                    }
                                })
                            let newObj = {
                                ...myGamesObj,
                                [enrolledGamesKey]: myMatches
                            }
                            myGamesObj = newObj;
                            // console.log(newObj, "dasjfklkd");
                            store.dispatch({ type: 'ADD_MY_GAMES', payload: newObj });
                        })
                })
            })



        })
}