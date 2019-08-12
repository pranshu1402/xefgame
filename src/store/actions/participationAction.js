import firebase from 'firebase/app';
import 'firebase/firestore';

export const setContestParticipationData = (state) => {
    const sport = state.sports.sportSelected;
    const matchId = state.matches.selectedMatchId;
    const contestId = state.contest.selectedContest.id;
    const teamId = matchId + contestId;
    const userId = String(state.auth.user.uid);
    const selectedPlayers = state.teams.selectedPlayers;
    const selectedContestType = state.contest.selectedContest.typeOfContest;
    const betAmount = state.bet.betAmount;
    const winAmount = state.bet.winAmount;
    const isBettingGame = (betAmount!==0);
    const entryFee = isBettingGame?betAmount:state.contest.selectedContest.entryFee; 
    const newPoints = state.auth.user.points - entryFee;
    //set new coins in redux
    state.auth.user.points = newPoints;
    
    const matchObj = isBettingGame?(
        {
            matchId,
            contest:{ 
                [contestId] :{
                'contestType': selectedContestType,
                'teamId': teamId
                }
            },
            teamId,
            players: {
                [teamId]: selectedPlayers
            }
        }
    ):(
        {
            matchId,
            teamId,
            betAmount,
            winAmount,
            paid: false,
            status: 'pending',
        }
    );

    return dispatch => {
    firebase.firestore().collection("users").doc(userId).update(
        {
            profile: {
                points: newPoints
            },

            sports:
            {
                [sport]: firebase.firestore.FieldValue.arrayUnion(matchObj)
            },
        },
        {
            merge: true
        }
    ).then(function () {
        console.log("Document successfully written!");
    }).catch(function (error) {
        console.error("Error writing document: ", error);
    }
    );
    dispatch({type: 'MATCH_RESET'});
    dispatch({type: 'RESET_ACTIVE_STEP'});    
}
}