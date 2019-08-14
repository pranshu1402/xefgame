import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let newUserValue;

export const authStart = () => {
    if (!!firebase.auth().currentUser) {
        return authSuccess();
    }
    return authFail('Please Sign In to continue');
}
export const isNewUser = (isNewUser) => {
    newUserValue = isNewUser;
}

export const authSuccess = () => {

    const user = firebase.auth().currentUser;

    let userData = {
        name: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        uid: user.uid,
        providerData: user.providerData[0].providerId,
    };
    // newUserValue===true?userData.points=250:userData.points=user.uid.profile.points;

    if (newUserValue === true) {
        userData.points = 250
        firebase.firestore().collection("users").doc(userData.uid).set(
            {
                profile: {
                    ...userData
                }
            },
            { merge: true }
        ).then(() => console.log("Profile Updated")
        ).catch(

        )
    } else {
        firebase.firestore().collection("users").doc(user.uid).get().then(snapShot => {
            userData.points = snapShot.data().profile.points;
            firebase.firestore().collection("users").doc(userData.uid).set(
                {
                    profile: {
                        ...userData
                    }
                },
                { merge: true }
            ).then(() => console.log("Profile Updated")
            ).catch(

            )

        })
    }

    return {
        type: 'AUTH_SUCCESS',
        userData
    }
}

const authFail = (error) => {
    return {
        type: 'AUTH_FAIL',
        error: error
    }
}

export const authLogout = () => {
    firebase.auth().signOut().then(function () {
        console.log(" Sign-out successful.");
    }).catch(error => console.log(error));

    return {
        type: 'AUTH_LOGOUT',
    }
}