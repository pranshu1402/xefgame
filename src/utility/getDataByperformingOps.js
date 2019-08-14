export const getEntryFeeForMatch = (matches, selectedMatch) => matches.filter(match => match.matchId === selectedMatch).map(filteredMatch => filteredMatch.feeForMatch);

export const getdateFormatch = (matches, selectedMatch) => matches.filter(match => match.matchId === selectedMatch).map(filteredMatch => new Date(filteredMatch.date).toISOString());