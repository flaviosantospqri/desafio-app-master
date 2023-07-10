import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx0yn1RrLCnXbdrAp0JkaOsdX2WrJftnE",
  authDomain: "games-gallery-app.firebaseapp.com",
  projectId: "games-gallery-app",
  storageBucket: "games-gallery-app.appspot.com",
  messagingSenderId: "609401309657",
  appId: "1:609401309657:web:c389e64ec728ee340ef1c8",
  measurementId: "G-RTDTLF3TXL",
};

initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
