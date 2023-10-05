// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzoDSf6kJcEaiozHfkhW2l7gg_cG_qFgY",
  authDomain: "airwise-ea950.firebaseapp.com",
  projectId: "airwise-ea950",
  storageBucket: "airwise-ea950.appspot.com",
  messagingSenderId: "234250245853",
  appId: "1:234250245853:web:681202f794ab98f0d8ed34",
  measurementId: "G-NMEF7G5HEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export const FacebookProvider = new FacebookAuthProvider();
export const auth = getAuth(app);
export default app;
