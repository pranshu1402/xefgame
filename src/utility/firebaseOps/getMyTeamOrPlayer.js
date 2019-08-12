export const getMyTeamOrPlayer=(teams,teamId)=>{
 return teams.filter((team)=>team.teamId==teamId)
}