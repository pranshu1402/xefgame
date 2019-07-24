import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAvFaVfKNvMyiYXWvsrcSdDNvUm0u_ByNY",
    authDomain: "xefgame-16f76.firebaseapp.com",
    databaseURL: "https://xefgame-16f76.firebaseio.com",
    projectId: "xefgame-16f76",
    storageBucket: "",
    messagingSenderId: "26773089280",
    appId: "1:26773089280:web:cd952c5d0b9fce05"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();