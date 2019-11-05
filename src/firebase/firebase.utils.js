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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user.', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;