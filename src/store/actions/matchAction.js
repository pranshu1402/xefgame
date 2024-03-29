import axios from 'axios';
import * as actions from './actionTypes';

export const addMatches = parsedJson => ({
  type: actions.ADD_MATCHES,
  payload: parsedJson
})

export const matchRequestFailed = () => ({
  type: actions.MATCH_REQUEST_FAILED
})

function getTeamNameAliasMap() {
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
  const teamAliasMap = getTeamNameAliasMap();

  return dispatch => {
    axios.get('https://cricapi.com/api/matches?apikey=ZfGRjHQn94RV6fUQKwrYDTmZWTn1')
      .then(response => {
        // remove past matches (match date< current date discard)
        let parsedData = response.data.matches.filter(match =>
          teamAliasMap.has(match["team-1"]) && teamAliasMap.has(match["team-2"])
        ).map(filteredMatch => {
          
          const matchDetails = { ...filteredMatch };
          
          matchDetails["team-1"] = teamAliasMap.get(filteredMatch["team-1"]);
          matchDetails["team-2"] = teamAliasMap.get(filteredMatch["team-2"]);
          
          matchDetails.date = new Date(filteredMatch.date).toDateString();

          return matchDetails;
        });
        dispatch(addMatches(parsedData));
      })
      .catch(error => {
        dispatch(matchRequestFailed());
      });
  }
}