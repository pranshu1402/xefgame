export const  getTeamsInSelectedMatch=(teams,id,matches)=>{
    let data=[];
    matches.filter((match)=>match.matchId===id).map((matchItem=>{
        for(let key in teams){
            if(matchItem.teams.includes(key)){
                data.push({
                    ...teams[key],
                    teamName:key,
                    winningPrize:125
                });
            }
        }
        return 0;
    }))
    return data;
}