// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoBJWAuhAwnJbp9JohRk0BiMAG3nGUvQ4",
  authDomain: "games-34454.firebaseapp.com",
  projectId: "games-34454",
  storageBucket: "games-34454.appspot.com",
  messagingSenderId: "935973374886",
  appId: "1:935973374886:web:812fc3faa91f8a2c609d67",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
export { db, app };
