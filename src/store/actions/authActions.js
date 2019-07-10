import firebase from 'firebase';

export const authStart = () => {
    if (!!firebase.auth().currentUser) {
        return authSuccess();
    }
    return authFail('Please Sign In to continue');
}

export const authSuccess = () => {
    const user = firebase.auth().currentUser;
    let userData;
    if (user.isAnonymous) {
        userData = {
            name: 'Player',
            email: 'guest@gmail.com',
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            isAnonymous: user.isAnonymous,
            uid: user.uid,
            providerData: user.providerData,
        }
    } else {
            userData = {
            name: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            isAnonymous: user.isAnonymous,
            uid: user.uid,
            providerData: user.providerData,
        };
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

// export const auth = () => {

//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             // User is signed in.
//             const userData = {
//                 name: user.displayName,
//                 email: user.email,
//                 emailVerified: user.emailVerified,
//                 photoURL: user.photoURL,
//                 isAnonymous: user.isAnonymous,
//                 uid: user.uid,
//                 providerData: user.providerData,
//             };

//             localStorage.setItem('userData', userData.uid.toString());
//         }
//     });

//     return {
//         type: 'AUTH_STARTED',
//     }
// };