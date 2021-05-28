import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBciFL-XHaqfcsNmY0wPYaugGFioYJMlW4",
    authDomain: "crwn-clothing-db-5cd3f.firebaseapp.com",
    projectId: "crwn-clothing-db-5cd3f",
    storageBucket: "crwn-clothing-db-5cd3f.appspot.com",
    messagingSenderId: "1036919009571",
    appId: "1:1036919009571:web:8baa195d7b2e43f8211c96",
    measurementId: "G-P8CDS1P43Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 