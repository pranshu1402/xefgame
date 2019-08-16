export const getEntryFeeForMatch = (matches, selectedMatch) => matches.filter(match => match.matchId === selectedMatch).map(filteredMatch => filteredMatch.feeForMatch);

export const getdateFormatch = (matches, selectedMatch) => matches.filter(match => match.matchId === selectedMatch).map(filteredMatch => new Date(filteredMatch.date).toISOString());


export const getMatchStatusMessage = (teamsForScoreUpdates, myTeam,status) => {

    let message = "", team1, team2, otherTeam;

   if(status==="upcoming")
   return " ";
   
    if (teamsForScoreUpdates.length <= 0)
        return "teams Not Fetched";

       

    [team1] = Object.keys(teamsForScoreUpdates[0]);
    [team2] = Object.keys(teamsForScoreUpdates[1]);
    otherTeam = myTeam === team1 ? team2 : team1;

    if (teamsForScoreUpdates[0][myTeam]['setWon'] > teamsForScoreUpdates[1][otherTeam]['setWon']) {
        message = "You are winning";
    } else if (teamsForScoreUpdates[0][myTeam]['setWon'] < teamsForScoreUpdates[1][otherTeam]['setWon']) {
        message = "You are losing";
    }
    else {
        if (teamsForScoreUpdates[0][myTeam]['score'] > teamsForScoreUpdates[1][otherTeam]['score']) {
            message = "You are winning";
        }
        else if (teamsForScoreUpdates[0][myTeam]['score'] < teamsForScoreUpdates[1][otherTeam]['score']) {
            message = "You are losing"
        }
        else {
            message = "Neck-To-Neck Fight";
        }
    }
    return message;
}