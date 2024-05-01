// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeFlyGmus-ETCP8BMy_DRZLyacyhdd980",
  authDomain: "denemeauth-17c98.firebaseapp.com",
  databaseURL: "https://denemeauth-17c98-default-rtdb.firebaseio.com",
  projectId: "denemeauth-17c98",
  storageBucket: "denemeauth-17c98.appspot.com",
  messagingSenderId: "808530128192",
  appId: "1:808530128192:web:ab611985d1a27b5cbc5ea5",
  measurementId: "G-QDMMQXZYCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
