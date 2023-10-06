import React, { useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import "../components/login.css";
import Airwise from "../assets/images/Airwise.svg";
import LoginImg from "../assets/images/login.svg";
import { BsSquare } from "react-icons/bs";
import Google from "../assets/images/googleLogin.svg";
import Facebook from "../assets/images/facebookLogin.svg";
import { Orbit } from "@uiball/loaders";
import { TbUserExclamation } from "react-icons/tb";
import { BsPersonCheckFill } from "react-icons/bs";

export default function Login() {
  const [googleloading, setGoogleLoading] = useState(false);
  const [facebookloading, setFacebookLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userIn, setUserIn] = useState(false);

  async function handleGoogleSignIn() {
    setGoogleLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setGoogleLoading(false);
      setUserIn(true);
    } catch (error) {
      setError(error);
      setGoogleLoading(false);
    }
  }
  async function handleFacebookSignIn() {
    setFacebookLoading(true);
    try {
      const Facebookprovider = new FacebookAuthProvider();
      await signInWithPopup(auth, Facebookprovider);
      setFacebookLoading(false);
      setUserIn(true);
    } catch (error) {
      setError(error);
      setFacebookLoading(false);
    }
  }

  return (
    <div
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-once="true"
      data-aos-duration="200"
      data-aos-delay="300"
      className="login__section--wrapper"
    >
      <div className="login__wrapper">
        <div className="login__wrapper--section">
          <div className="login__wrapper--header">
            <img src={Airwise} className="airwise__logo--login" />
            <p className="login__text">Better outdoor living</p>
          </div>
          <div className="login__wrapper--content">
            <div className="login__title--wrapper">
              <h1 className="login__title">Log In</h1>
              <p className="login__subtitle">
                Easily login to your account by using Gmail or Facebook
              </p>
              {error && (
                <div className="error__wrapper">
                  <TbUserExclamation className="error__icon" />
                  <p className="error__text">Something went wrong.</p>
                </div>
              )}
              {userIn && (
                <div className="userin__wrapper">
                  <BsPersonCheckFill className="userin__icon" />
                  <p className="userin__text">Welcome to AirWise.</p>
                </div>
              )}
            </div>
            <button onClick={handleGoogleSignIn} className="google__btn">
              {googleloading ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Orbit color={"white"} />
                </div>
              ) : (
                <div style={{ display: "flex", gap: "80px" }}>
                  <img className="google__icon" src={Google} />
                  <p className="google__title">Log in with Gmail</p>
                </div>
              )}
            </button>
            <button onClick={handleFacebookSignIn} className="facebook__btn">
              {facebookloading ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Orbit color={"white"} />
                </div>
              ) : (
                <div style={{ display: "flex", gap: "80px" }}>
                  <img className="facebook__icon" src={Facebook} />
                  <p className="facebook__title">Log in with Facebook</p>
                </div>
              )}
            </button>
            <div className="login__box--wrapper">
              <BsSquare className="login__box--icon" />
              <p className="login__box">Keep me logged in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="login__img--wrapper">
        <img className="login__img" src={LoginImg} />
      </div>
    </div>
  );
}