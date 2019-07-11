import axios from 'axios';

export const addMatches = parsedJson => ({
  type: 'ADD_MATCHES',
  payload: parsedJson
})

export const matchRequestFailed = () => ({
  type: 'MATCH_REQUEST_FAILED'
})

function getTeamMappedName() {
  return new Map(
    [["Australia", "AUS"],
    ["India", "IND"],
    ["Pakistan", "PAK"],
    ["England", "ENG"],
    ["Sri Lanka", "SL"],
    ["Bangladesh", "BAN"],
    ["Afghanistan", "AFG"],
    ["Ireland", "IRE"],
    ["Zimbabwe", "ZIM"],
    ["South Africa", "SA"],
    ["West Indies", "WI"],
    ["New Zealand", "NZ"]]);

}

export const fetchData = () => {
  return dispatch => {
    axios.get('https://cricapi.com/api/matches?apikey=ZfGRjHQn94RV6fUQKwrYDTmZWTn1')
      .then(response => {
        let parsedData = response.data.matches.filter(item => getTeamMappedName()
        .get(item["team-1"])!==undefined &&getTeamMappedName()
        .get(item["team-2"])).map(filteredItem =>{
          filteredItem["team-1"]=getTeamMappedName().get(filteredItem["team-1"]);
          filteredItem["team-2"]=getTeamMappedName().get(filteredItem["team-2"]);
          filteredItem.date=new Date(filteredItem.date).toDateString();
          return filteredItem;
        });
        dispatch(addMatches(parsedData));
      })
      .catch(error => {
        dispatch(matchRequestFailed());
      });
  }
}