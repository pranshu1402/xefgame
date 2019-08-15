export const  getTeamsInSelectedMatch=(teams,id,matches)=>{
    let data=[];
    data = matches.filter((match)=>match.matchId===id).map((matchItem=>{
        for(let key in teams){
            if(matchItem.teams.includes(key)){
                return ({
                    ...teams[key],
                    teamName:key,
                    winningPrize:125
                });
            }
        }
    }))
    return data;
}