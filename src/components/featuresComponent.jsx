import React from "react";
import "./featuresComponent.css";
import features from "../assets/images/features.svg";
import { RiMentalHealthLine } from "react-icons/ri";
import { TiWeatherCloudy } from "react-icons/ti";
import { BsDatabase } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import ball from "../assets/images/ball.png";
import smallball from "../assets/images/smallball.png";

const FeaturesComponent = ({ featuresRef }) => {
  return (
    <div ref={featuresRef} className="container__features">
      <div data-aos="fade-left" data-aos-once="true">
        <div className="title-container"></div>
        <div className="content-container features">
          <img src={ball} className="purple__ball--features" alt="absolute ball" />
          <img src={smallball} className="purple__smallball--features" alt="absolute ball" />
          <img
            src={features}
            alt="Image"
            className="right-image features__img"
          />
          <p className="left-text">
            <h1 className="page-title" style={{ textAlign: "left" }}>
              <span className="highlighted-text">
                <b>Air</b>
              </span>
              Wise Features
            </h1>
            <div className="features__wrapper">
              <div className="features__icon--wrapper">
                <RiMentalHealthLine className="features__icon" />
                <span>
                  The{" "}
                  <span className="highlighted-text">
                    <b>Air</b>
                  </span>
                  Wise services offers a solution to enhance and support your
                  overall{" "}
                  <span className="highlighted-text">
                    <b>health</b>
                  </span>{" "}
                  and{" "}
                  <span className="highlighted-text">
                    <b>well-being</b>
                  </span>
                  .
                </span>
              </div>
              <div className="features__icon--wrapper">
                <TiWeatherCloudy
                  style={{ fontSize: "30px" }}
                  className="features__icon cloud"
                />
                <span>
                  Helps minimizing{" "}
                  <span className="highlighted-text">
                    <b>exposure</b>
                  </span>{" "}
                  to polluted air, promoting healthier living.
                </span>
              </div>
            </div>
            <div className="features__wrapper">
              <div className="features__icon--wrapper">
                <BsDatabase
                  style={{ fontSize: "30px" }}
                  className="features__icon"
                />
                <span>
                  <span className="highlighted-text">
                    <b>Air</b>
                  </span>
                  Wise offers precise{" "}
                  <span className="highlighted-text">
                    <b>pollution data</b>
                  </span>{" "}
                  monitoring for informed environmental decisions.
                </span>
              </div>
              <div className="features__icon--wrapper">
                <CgDanger className="features__icon" />
                <span>
                  This innovative service effectively regulates and minimizes{" "}
                  <span className="highlighted-text">
                    <b>inhaled contaminant</b>
                  </span>{" "}
                  levels for improved{" "}
                  <span className="highlighted-text">
                    <b>air quality</b>
                  </span>
                  .
                </span>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;