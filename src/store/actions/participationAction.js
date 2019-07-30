import firebase from 'firebase/app';
import 'firebase/firestore';

export const setContestParticipationData = (state) => {
    const matchId = state.matches.selectedMatchId;
    const contestId = state.contest.selectedContest.id;
    const teamId = matchId + contestId;
    const userId = String(state.auth.user.uid);
    const selectedPlayers = state.teams.selectedPlayers;
    const newPoints = state.auth.user.points - state.contest.selectedContest.entryFee;
    console.log(matchId, contestId, userId);

    firebase.firestore().collection("users").doc(userId).set(
        {
            profile: {
                points: newPoints
            },

            match:
            {
                [matchId]:
                {
                    contest: {
                        'contestId': contestId,
                        'contestType': 'hotContest',
                        'teamId': teamId
                        /*, result*/
                    },
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