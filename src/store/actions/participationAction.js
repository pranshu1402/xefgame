import firebase from 'firebase/app';
import 'firebase/firestore';
import v4 from 'uuid';


export const setContestParticipationData = (state) => {
    const matchId = state.matches.selectedMatchId;
    const contestId = state.contest.selectedContest.id;
    const teamId = matchId + contestId;
    const userId = String(state.auth.user.uid);
    const selectedPlayers = state.teams.selectedPlayers;
    const selectedContestType = state.contest.selectedContest.typeOfContest;
    const newPoints = state.auth.user.points - state.contest.selectedContest.entryFee;
    //set new coins in redux
    state.auth.user.points = newPoints;

    firebase.firestore().collection("users").doc(userId).set(
        {
            profile: {
                points: newPoints
            },

            match:
            {
                [matchId]:
                {
                    contest:{ 
                        [v4()] : {
                        'contestId': contestId,
                        'contestType': selectedContestType,
                        'teamId': teamId
                        /*, result*/
                    }
                }
                ,
                    teams: {
                        [teamId]: selectedPlayers
                    }
                }
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
}