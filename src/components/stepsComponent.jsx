import "./stepsComponent.css";
import steps1 from "../assets/images/steps1.png";
import steps2 from "../assets/images/steps2.png";
import steps3 from "../assets/images/steps3.png";
import { PiSignIn } from "react-icons/pi";
import { GiRing } from "react-icons/gi";
import { AiOutlineCloudDownload } from "react-icons/ai";

const StepsComponent = () => {
  return (
    <div className="steps__container">
      <div className="steps__header" data-aos="fade-in" data-aos-once="true" data-aos-offset="500">
        <h1 className="steps__title">Steps</h1>
        <p style={{ maxWidth: "initial" }} className="steps__text" data-aos="fade-in" data-aos-offset="500" data-aos-once="true" data-aos-duration='200'>
          Check the{" "}
          <span className="highlighted-text">
            <b>step-by-step</b>
          </span>{" "}
          way to start your journey with us!
        </p>
      </div>
      <div className="steps__content">
        <div className="steps__content--wrapper" data-aos="fade-left" data-aos-offset="500" data-aos-once="true" data-aos-duration='200' data-aos-delay='400'>
          <img className="steps__img " src={steps1} alt="" />
          <div className="steps">
            <PiSignIn className="steps__icon" />
            <p className="steps__text">
              <span className="air__link">Sign In</span> to{" "}
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
        <div className="steps__content--wrapper" data-aos="fade-left" data-aos-offset="500" data-aos-once="true" data-aos-duration='200' data-aos-delay='600'>
          <img className="steps__img " src={steps2} alt="" />
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
        <div className="steps__content--wrapper" data-aos="fade-left" data-aos-offset="500" data-aos-once="true" data-aos-duration='200' data-aos-delay='800'>
          <img className="steps__img " src={steps3} alt="" />
          <div className="steps">
            <AiOutlineCloudDownload
              style={{ color: "#fed749" }}
              className="steps__icon"
            />
            <p className="steps__text">
              <span className="air__link2">
                {" "}
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/openweather/id1535923697"
                >
                  Log In
                </a>
              </span>{" "}
              to{" "}
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
