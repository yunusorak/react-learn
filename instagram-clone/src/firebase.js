// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { userHandler } from "./utils.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjX26I_Xvl97mnME1GWaw5nL5NHkQ5is",
  authDomain: "instagram-web-clone-f7a57.firebaseapp.com",
  projectId: "instagram-web-clone-f7a57",
  storageBucket: "instagram-web-clone-f7a57.appspot.com",
  messagingSenderId: "505848966579",
  appId: "1:505848966579:web:430a7ec51756b7ea5f6fc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    userHandler(user || false);
  }
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user);
  } catch (err) {
    toast.error(err.message);
  }
};
