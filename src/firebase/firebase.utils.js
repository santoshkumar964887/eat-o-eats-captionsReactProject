import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyBoW-z3XExloW57ZCFEhImci6vgH0-k1tg",
  authDomain: "eat-o-eat-6cc41.firebaseapp.com",
  databaseURL: "https://eat-o-eat-6cc41.firebaseio.com",
  projectId: "eat-o-eat-6cc41",
  storageBucket: "eat-o-eat-6cc41.appspot.com",
  messagingSenderId: "964907865609",
  appId: "1:964907865609:web:b0987e97a77a5aadfe0ad8",
  measurementId: "G-RYFYT6GW49"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
