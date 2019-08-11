import firebase from 'firebase';

export let contestData = [];

let selectContestObj = {
    match: "",
    entryFee: 0,
    date: ""
}

export const  getLeaderboardSelectContestData = (state) => {
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
        .then((snapShot) => {
            let data = snapShot.data();

            let keyEnrolledMatches = Object.keys(data.match);

            let idNtypeContest = [];
            keyEnrolledMatches.map(key1 => {
                let enrolledContest = data.match[key1].contest;
                let keyOfEnrolledContest = Object.keys(enrolledContest);

                keyOfEnrolledContest.map(key2 => {
                    idNtypeContest.push([
                        data.match[key1].contest[key2].contestId,
                        data.match[key1].contest[key2].contestType]);
                })
            })
            state.matches.matchData.map(item => {
                keyEnrolledMatches.map(key => {
                    if (item.unique_id == key) {
                        selectContestObj.match = `${item["team-1"]} vs ${item["team-2"]}`;
                        selectContestObj.date = item.date;

                        idNtypeContest.map(item => {
                            state.contest.contests[item[1]].map(singleContest => {
                                if (singleContest.id == item[0]) {
                                    selectContestObj.entryFee = singleContest.entryFee;
                                    contestData.push(selectContestObj);
                                }
                            })
                        })
                    }


                })
            });
            return contestData;
        })
}