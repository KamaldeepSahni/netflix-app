import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNltyfQDumM_LpL4GR0CQc5YX2B-gW_y0",
    authDomain: "netflix-27ce8.firebaseapp.com",
    databaseURL: "https://netflix-27ce8.firebaseio.com",
    projectId: "netflix-27ce8",
    storageBucket: "netflix-27ce8.appspot.com",
    messagingSenderId: "328122284620",
    appId: "1:328122284620:web:8a09b18d5653e1648292e9"
};

const firebase = Firebase.initializeApp(config);

export { firebase };