import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const initialState = { email: "", uid: "", isActivated: false };

const fbService = createSlice({
  name: "fbService",
  initialState: initialState,
  reducers: {
    login(state, data) {
      signInWithEmailAndPassword(
        auth,
        data.payload.email,
        data.payload.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    register(state, data) {
      createUserWithEmailAndPassword(
        auth,
        data.payload.email,
        data.payload.password
      )
        .then((userCredential) => {
          const user = userCredential.user;

          sendEmailVerification(auth.currentUser).then(() =>
            alert("email verification send")
          );

          const ref = doc(db, "users", user.uid);
          setDoc(ref, { email: data.payload.email, uid: user.uid });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == "auth/email-already-in-use") {
            alert("Bu mail adresi kullanılıyor");
          } else if (errorCode == "auth/invalid-email") {
            alert("Lütfen geçerli bir mail adresi giriniz");
          }
          console.log(errorCode);
          console.log(errorMessage);
        });
    },

    currentUserControl(state, data) {
      state.email = data.payload.email;
      state.isActivated = data.payload.isActivated;
      state.uid = data.payload.uid;
    },
    logout(state) {
      state.email = "";
      state.uid = "";
      state.isActivated = false;
    },
    resetPassword(state, data) {
      sendPasswordResetEmail(auth, data.payload)
        .then(() => {
          // Password reset email sent!
          alert("Password reset email sent!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },
});

export const fbServiceActions = fbService.actions;

const store = configureStore({
  reducer: { fbservice: fbService.reducer },
});

export default store;
