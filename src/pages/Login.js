import React from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  async function handleGoogleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error)
    }
  }
  async function handleFacebookSignIn() {
    const Facebookprovider = new FacebookAuthProvider();
    await signInWithPopup(auth, Facebookprovider);
  }



  return (
    <div>
      <button onClick={handleGoogleSignIn}>1</button>
      <button onClick={handleFacebookSignIn}>2</button>
    </div>
  );
}
