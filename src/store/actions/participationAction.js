import firebase from 'firebase/app';
import 'firebase/firestore';
import { getEntryFeeForMatch } from '../../utility/getDataByperformingOps';

export const setContestParticipationData = (state) => {
    const userId = String(state.auth.user.uid);
    const sport = state.sports.sportSelected;
    const matchId = state.matches.selectedMatchId;
    
    const betAmount = state.bet.betAmount;
    const isBettingGame = (betAmount !== 0);
    let matchObj;
    let entryFee=getEntryFeeForMatch(state.matches.matchData,state.matches.selectedMatchId);
    
    if(isBettingGame){
        const winAmount = state.bet.winAmount;
        const teamId = state.bet.selected;
        matchObj = (
            {
                matchId,
                teamId,
                betAmount,
                winAmount,
                paid: false,
                status: 'pending',
            }
        );
    }else{
        const contestId = state.contest.selectedContest.id;
        const selectedPlayers = state.teams.selectedPlayers;
        const selectedContestType = state.contest.selectedContest.typeOfContest;
        const teamId = matchId + contestId;
        entryFee = state.contest.selectedContest.entryFee;
        matchObj = (
            {
                matchId,
                contest: {
                    [contestId]: {
                        'contestType': selectedContestType,
                        'teamId': teamId
                    }
                },
                teamId,
                players: {
                    [teamId]: selectedPlayers
                }
            }
        );
    }

    const newPoints = state.auth.user.points - entryFee;
    //set new coins in redux
    state.auth.user.points = newPoints;
    const sportKey = "sports."+ sport;

    return dispatch => {
        firebase.firestore().collection("users").doc(userId).update(
            {
                "profile.points": newPoints,
                [sportKey]: firebase.firestore.FieldValue.arrayUnion(matchObj),
            }
        ).then(function () {
            console.log("Document successfully written!");
        }).catch(function (error) {
            console.error("Error writing document: ", error);
        });
        dispatch({ type: 'MATCH_RESET' });
        dispatch({ type: 'RESET_ACTIVE_STEP' });
    }
}