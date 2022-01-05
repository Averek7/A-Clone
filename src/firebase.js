import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd1-B4WAYxH36TmMg4Pgah2YME5U4BKoE",
  authDomain: "clone-477a3.firebaseapp.com",
  projectId: "clone-477a3",
  storageBucket: "clone-477a3.appspot.com",
  messagingSenderId: "357252622849",
  appId: "1:357252622849:web:4e088d03f06839335f2e00",
  measurementId: "G-KJ6QRE2EW9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
