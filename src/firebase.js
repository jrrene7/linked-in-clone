import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKzFxQMW2v6HEDjtDYXgJiCpKkktZsVnE",
  authDomain: "linkedin-clone-bff1e.firebaseapp.com",
  projectId: "linkedin-clone-bff1e",
  storageBucket: "linkedin-clone-bff1e.appspot.com",
  messagingSenderId: "988100814338",
  appId: "1:988100814338:web:a3625637dabdd1af25e91b",
  measurementId: "G-8MBD9DPLPZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default firebase;
