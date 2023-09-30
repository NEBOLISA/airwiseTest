import React from "react";
import "./aboutComponent.css";
import about from "../assets/images/about.svg";
import { GiReceiveMoney, GiHealthCapsule } from "react-icons/gi";
import ball from '../assets/images/ball.png'
import smallball from '../assets/images/smallball.png'

const AboutComponent = () => {
  return (
    <div className="container__about">
      <div className="title-container"></div>
      <div className="content-container">
      <img src={ball} className="purple__ball" alt="" />
      <img src={smallball} className="purple__smallball" alt="" />
        <p className="left-text">
          <h1 className="page-title" style={{ textAlign: "left" }}>
            About{" "}
            <span className="highlighted-text">
              <b>Air</b>
            </span>
            Wise
          </h1>
          <div></div>
          The purpose of the "
          <span className="highlighted-text">
            <b>Air</b>
          </span>
          Wise" app is to provide users with{" "}
          <span className="highlighted-text">
            <b>essential</b>
          </span>{" "}
          information to{" "}
          <span className="highlighted-text">
            <b>monitor</b>
          </span>{" "}
          and{" "}
          <span className="highlighted-text">
            <b>manage</b>
          </span>{" "}
          their exposure to{" "}
          <span className="highlighted-text">
            <b>air pollution</b>
          </span>{" "}
          in their current location allowing them to make healthy decisions that
          will{" "}
          <span className="highlighted-text">
            <b>benefit</b>
          </span>{" "}
          their life!
          <div className="about__wrapper">
            <div className="about__icons--wrapper">
              <div className="about__icons">
                <GiReceiveMoney className="icon" style={{ color: "#9747ff" }} />
                <p className="about__icons--title">Affordable</p>
              </div>
              <p className="about__text">
                Experience our{" "}
                <span className="highlighted-text">
                  <b>free</b>
                </span>{" "}
                app services, where value meets your wallet with a smile.
              </p>
            </div>
            <div className="about__icons--wrapper">
              <div className="about__icons">
                <GiHealthCapsule
                  className="icon"
                  style={{ color: "#9747ff" }}
                />
                <p className="about__icons--title">Health</p>
              </div>
              <p className="about__text">
                Caring for your{" "}
                <span className="highlighted-text">
                  <b>health</b>
                </span>
                , is our commitment; because your{" "}
                <span className="highlighted-text">
                  <b>well-being</b>
                </span>{" "}
                matters.
              </p>
            </div>
          </div>
        </p>
        <img src={about} alt="Image" className="right-image" />
      </div>
    </div>
  );
};

export default AboutComponent;
