import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClpb_sFav9sPUhgKVl1QjgHdM5HpzfMd0",
    authDomain: "crwn-db-74244.firebaseapp.com",
    databaseURL: "https://crwn-db-74244.firebaseio.com",
    projectId: "crwn-db-74244",
    storageBucket: "crwn-db-74244.appspot.com",
    messagingSenderId: "758341119884",
    appId: "1:758341119884:web:a59563773489b6d719b0a9",
    measurementId: "G-CBSXMJQEDT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;