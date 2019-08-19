import firebase from 'firebase';

export const addWinningAmount=(newPoints,user)=>{
    firebase.firestore().collection("users").doc(user.uid).update(
        {
            "profile.points": newPoints
        }
    ).then(function () {
        console.log("Document successfully written!");
    }).catch(function (error) {
        console.error("Error writing document: ", error);
    });
}
