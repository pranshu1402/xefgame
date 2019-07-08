import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyAvFaVfKNvMyiYXWvsrcSdDNvUm0u_ByNY",
    authDomain: "xefgame-16f76.firebaseapp.com",
    databaseURL: "https://xefgame-16f76.firebaseio.com",
    projectId: "xefgame-16f76",
    storageBucket: "",
    messagingSenderId: "26773089280",
    appId: "1:26773089280:web:cd952c5d0b9fce05"
  };

 const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        console.log('SignIn succesfull');
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        // document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/login_success',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  export {firebaseConfig , uiConfig};