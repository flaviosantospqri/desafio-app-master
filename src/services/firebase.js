// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
 apiKey: "AIzaSyAnEVgebr-3EJgUD8ALB6GnwSodOXnRLZY",
  authDomain: "game-app-5ad86.firebaseapp.com",
  projectId: "game-app-5ad86",
  storageBucket: "game-app-5ad86.appspot.com",
  messagingSenderId: "1095169571923",
  appId: "1:1095169571923:web:ef83b56a1fb843a4c99aa6",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
export { db, app };
