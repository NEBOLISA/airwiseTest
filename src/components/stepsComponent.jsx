import "./stepsComponent.css";
import steps1 from "../assets/images/steps1.png";
import steps2 from "../assets/images/steps2.png";
import steps3 from "../assets/images/steps3.png";
import stepsLight1 from "../assets/images/step1.svg";
import stepsLight2 from "../assets/images/step2.svg";
import stepsLight3 from "../assets/images/step3.svg";
import { PiSignIn } from "react-icons/pi";
import { GiRing } from "react-icons/gi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const StepsComponent = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="steps__container">
      <div
        className="steps__header"
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-offset="300"
      >
        <h1 className="steps__title">Steps</h1>
        <p
          style={{ maxWidth: "initial" }}
          className="steps__text"
          data-aos="fade-in"
          data-aos-offset="300"
          data-aos-once="true"
          data-aos-duration="200"
        >
          Check the{" "}
          <span className="highlighted-text">
            <b>step-by-step</b>
          </span>{" "}
          way to start your journey with us!
        </p>
      </div>
      <div className="steps__content">
        <div
          className="steps__content--wrapper"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-once="true"
          data-aos-duration="200"
          data-aos-delay="200"
        >
          <img
            className="steps__img steps__img1"
            src={isDarkMode ? stepsLight1 : steps1}
            alt="steps1"
          />
          <div className="steps">
            <PiSignIn className="steps__icon" />
            <p className="steps__text">
              <Link to={"/login"}>
                <span className="air__link">Sign In</span> to{" "}
              </Link>
              <span className="highlighted-text">
                <b>Air</b>
              </span>
              Wise: It's completely{" "}
              <span className="highlighted-text">
                <b>free</b>
              </span>
              !
            </p>
          </div>
        </div>
        <div
          className="steps__content--wrapper"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-once="true"
          data-aos-duration="200"
          data-aos-delay="400"
        >
          <img
            className="steps__img steps__img2 "
            src={isDarkMode ? stepsLight2 : steps2}
            alt="steps2"
          />
          <div className="steps">
            <GiRing style={{ color: "#f71065" }} className="steps__icon" />
            <p className="steps__text">
              <span className="air__link2">
                {" "}
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/oura/id1043837948"
                >
                  Install
                </a>
              </span>{" "}
              the{" "}
              <span className="pink__text">
                <b>Oura App</b>
              </span>
              : To keep track of your health condition.
            </p>
          </div>
        </div>
        <div
          className="steps__content--wrapper"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-once="true"
          data-aos-duration="200"
          data-aos-delay="600"
        >
          <img
            className="steps__img steps__img3"
            src={isDarkMode ? stepsLight3 : steps3}
            alt="steps3"
          />
          <div className="steps">
            <AiOutlineCloudDownload
              style={{ color: "#fed749" }}
              className="steps__icon"
            />
            <p className="steps__text">
              <span className="air__link--allow">Allow</span>{" "}
              <span className="yellow__text">
                <b>Open Weather App</b>
              </span>
              : To provide weather information to AirWise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
