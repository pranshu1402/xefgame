export const getEntryFeeForMatch=(matches,selectedMatch)=> matches.filter(match=>match.matchId==selectedMatch).map(filteredMatch=>filteredMatch.feeForMatch)
