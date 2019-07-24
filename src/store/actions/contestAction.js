import firebase from 'firebase/app';
import 'firebase/firestore';

export const isModalOpen = (isModalOpen) => ({
  type: 'IS_MODAL_OPEN',
  isModalOpen,
})

export const addPrizeDist = (prizeMoneyDist) => ({
  type: 'ADD_PRIZE_DIST',
  prizeMoneyDist
})

function getPromiseOfContest(contestType) {
  return firebase.firestore().collection("contests").doc("contestType")
    .collection(contestType).get();
}

const addContest = (contestType, contestsData) => ({
  type: 'ADD_CONTESTS',
  contestType,
  contestsData
})

const addContestSuccesful = () => {
  return {
    type: 'ADD_CONTESTS_SUCCESSFUL'
  }
}

export const getContests = (contests) => {
  let contestTypes = Object.keys(contests);
  return (dispatch) => {
    Promise.all(contestTypes.map(contestType => getPromiseOfContest(contestType)))
      .then(querySnapshots => {
        querySnapshots.forEach((querySnapshot, index) => {
          let contests = [];
          querySnapshot.forEach(contestItem => {
            const data = contestItem.data();
            data.id = contestItem.id;
            contests.push(data);
          })
          dispatch(addContest(contestTypes[index], contests));
        })
      }).then(() => dispatch(addContestSuccesful()));
  }
}