import {auth} from 'firebase/app';

export const authStart = () => {
    if (!!auth().currentUser) {
        return authSuccess();
    }
    return authFail('Please Sign In to continue');
}
 
export const authSuccess = () => {
    const user = auth().currentUser;
    let userData = {
            name: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            isAnonymous: user.isAnonymous,
            uid: user.uid,
            providerData: user.providerData,
    };
    
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
    auth().signOut().then(function () {
        console.log(" Sign-out successful.");
    }).catch(error => console.log(error));

    return {
        type: 'AUTH_LOGOUT',
    }
}