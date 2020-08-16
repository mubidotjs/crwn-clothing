import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCamJ50fBKfmvce5ViT2ok2NpEHHOsSTi4",
  authDomain: "reactjs-crown-db.firebaseapp.com",
  databaseURL: "https://reactjs-crown-db.firebaseio.com",
  projectId: "reactjs-crown-db",
  storageBucket: "reactjs-crown-db.appspot.com",
  messagingSenderId: "617412929915",
  appId: "1:617412929915:web:4a6f5fc7242c94b73775de",
  measurementId: "G-06MHZ76ZEF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
