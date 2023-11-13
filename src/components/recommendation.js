import "./recommWeather.css";
import cycling from "../assets/images/recommenWeather/cycling.svg";
import hiking from "../assets/images/recommenWeather/hiking.svg";
import running from "../assets/images/recommenWeather/running.svg";
import windows from "../assets/images/recommenWeather/windows.svg";
import ExcellentImg from "../assets/images/recommenWeather/middle.svg";
import GoodImg from "../assets/statusImg/good_status.svg";
import AverageImg from "../assets/statusImg/average_status.svg";
import BadImg from "../assets/statusImg/bad_status.svg";
import VeryBadImg from "../assets/statusImg/verybad_status.svg";

import greenBall from "../assets/ballParameters/green_ball.svg";
import redBall from "../assets/ballParameters/red_ball.svg";
import orangeBall from "../assets/ballParameters/orange_ball.svg";
import yellowBall from "../assets/ballParameters/yellow_ball.svg";
import darkredBall from "../assets/ballParameters/darkred_ball.svg";
import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function Recommendation() {
  const { weatherAlgorithm, aqiColorParameter, healthReportsData } =
    useContext(ApiContext);

  let ballColor;
  let aqiBallColor;
  let healthBallColor;
  let heartRateNumber;
  let readinessNumber;
  let sleepNumber;
  let healthAverage;

  let dayStatus;

  if (weatherAlgorithm <= 15) {
    ballColor = greenBall;
  } else if (weatherAlgorithm <= 25) {
    ballColor = yellowBall;
  } else if (weatherAlgorithm <= 45) {
    ballColor = orangeBall;
  } else if (weatherAlgorithm <= 50) {
    ballColor = redBall;
  } else if (weatherAlgorithm <= 60) {
    ballColor = darkredBall;
  }

  let aqiLevel;
  let windowsAlgorithm;

  if (aqiColorParameter === "green") {
    aqiBallColor = greenBall;
    aqiLevel = 70;
    windowsAlgorithm = "open";
  } else if (aqiColorParameter === "yellow") {
    aqiBallColor = yellowBall;
    aqiLevel = 20;
    windowsAlgorithm = "open";
  } else if (aqiColorParameter === "orange") {
    aqiBallColor = orangeBall;
    aqiLevel = 30;
    windowsAlgorithm = "close";
  } else if (aqiColorParameter === "red") {
    aqiBallColor = redBall;
    aqiLevel = 40;
    windowsAlgorithm = "close";
  } else if (aqiColorParameter === "darkred") {
    aqiBallColor = darkredBall;
    aqiLevel = 50;
    windowsAlgorithm = "close";
  }

  if (aqiLevel <= 20) {
    windowsAlgorithm = "open";
  } else {
    windowsAlgorithm = "close";
  }

  if (healthReportsData.heart <= 60) {
    heartRateNumber = 30;
  } else if (healthReportsData.heart <= 70) {
    heartRateNumber = 15;
  } else if (healthReportsData.heart <= 90) {
    heartRateNumber = 10;
  } else if (healthReportsData.heart <= 100) {
    heartRateNumber = 15;
  } else if (healthReportsData.heart > 100) {
    heartRateNumber = 30;
  }

  if (healthReportsData.readiness <= 70) {
    readinessNumber = 30;
  } else if (healthReportsData.readiness <= 84) {
    readinessNumber = 20;
  } else if (healthReportsData.readiness > 84) {
    readinessNumber = 10;
  }

  if (healthReportsData.sleep <= 70) {
    sleepNumber = 30;
  } else if (healthReportsData.sleep <= 84) {
    sleepNumber = 20;
  } else if (healthReportsData.sleep > 84) {
    sleepNumber = 10;
  }

  healthAverage = sleepNumber + readinessNumber + heartRateNumber;

  // console.log(heartRateNumber, sleepNumber, readinessNumber);

  if (healthAverage <= 42) {
    healthBallColor = greenBall;
  } else if (healthAverage <= 54) {
    healthBallColor = yellowBall;
  } else if (healthAverage <= 66) {
    healthBallColor = orangeBall;
  } else if (healthAverage <= 78) {
    healthBallColor = redBall;
  } else if (healthAverage > 90) {
    healthBallColor = darkredBall;
  }

  dayStatus = healthAverage + weatherAlgorithm + aqiLevel;

  let TopSentence;
  let TopSubtitle;
  let TopImg;

  //wind < 30 , air pollution < 30, readiness > 85, sleep duration > 80, heart rate is 70 - 90 cycling soccer hiking running tennis swimming

  let recommendationsAlgorithm1;
  let recommendationsAlgorithm2;
  let recommendationsAlgorithm3;

  console.log(
    weatherAlgorithm,
    aqiLevel,
    healthReportsData.readiness,
    healthReportsData.sleep
  );

  if (
    weatherAlgorithm <= 30 &&
    aqiLevel <= 30 &&
    healthReportsData.readiness >= 85 &&
    healthReportsData.sleep >= 80
  ) {
    recommendationsAlgorithm1 = "Cycling";
    recommendationsAlgorithm2 = "Soccer";
    recommendationsAlgorithm3 = "Swimming";
  } else if (
    weatherAlgorithm > 30 &&
    aqiLevel > 30 &&
    healthReportsData.readiness >= 85 &&
    healthReportsData.sleep >= 80
  ) {
    recommendationsAlgorithm1 = "Indoor";
    recommendationsAlgorithm2 = "Indoor";
    recommendationsAlgorithm3 = "Indoor";
  } else if (
    weatherAlgorithm <= 30 &&
    aqiLevel <= 30 &&
    healthReportsData.readiness < 85 &&
    healthReportsData.sleep < 80
  ) {
    recommendationsAlgorithm1 = "Bed";
    recommendationsAlgorithm2 = "Bed";
    recommendationsAlgorithm3 = "Bed";
  } else if (
    weatherAlgorithm > 30 &&
    aqiLevel > 30 &&
    healthReportsData.readiness < 85 &&
    healthReportsData.sleep < 80
  ) {
    recommendationsAlgorithm1 = "Rest";
    recommendationsAlgorithm2 = "Rest";
    recommendationsAlgorithm3 = "Rest";
  } else if (
    weatherAlgorithm < 30 &&
    aqiLevel > 30 &&
    healthReportsData.readiness >= 85 &&
    healthReportsData.sleep >= 80
  ) {
    recommendationsAlgorithm1 = "Indoor Activities";
    recommendationsAlgorithm2 = "Indoor Activities";
    recommendationsAlgorithm3 = "Indoor Activities";
  } else if (
    weatherAlgorithm > 30 &&
    aqiLevel < 30 &&
    healthReportsData.readiness >= 85 &&
    healthReportsData.sleep >= 80
  ) {
    recommendationsAlgorithm1 = "Indoor Activities2";
    recommendationsAlgorithm2 = "Indoor Activities2";
    recommendationsAlgorithm3 = "Indoor Activities2";
  } else if (
    weatherAlgorithm < 30 &&
    aqiLevel > 30 &&
    healthReportsData.readiness < 85 &&
    healthReportsData.sleep < 80
  ) {
    recommendationsAlgorithm1 = "Rest";
    recommendationsAlgorithm2 = "Rest";
    recommendationsAlgorithm3 = "Rest";
  } else if (
    weatherAlgorithm > 30 &&
    aqiLevel < 30 &&
    healthReportsData.readiness < 85 &&
    healthReportsData.sleep < 80
  ) {
    recommendationsAlgorithm1 = "Rest Here";
    recommendationsAlgorithm2 = "Rest Here";
    recommendationsAlgorithm3 = "Rest Here";
  }

    if (dayStatus <= 60) {
      TopSentence = (
        <span>
          Today is an{" "}
          <span style={{ color: "#00E0FF", fontWeight: "bold" }}>
            excellent
          </span>{" "}
          day for outdoors.
        </span>
      );
      TopSubtitle = (
        <span>
          Based on your{" "}
          <span style={{ color: "#00E0FF", fontWeight: "bold" }}>
            health status
          </span>{" "}
          and the current{" "}
          <span style={{ color: "#00E0FF", fontWeight: "bold" }}>
            weather conditions
          </span>{" "}
          in your area, it appears to be an{" "}
          <span style={{ color: "#00E0FF", fontWeight: "bold" }}>
            excellent
          </span>{" "}
          day for you to engage in outdoor activities.
        </span>
      );
      TopImg = ExcellentImg;
    } else if (dayStatus <= 80) {
      TopSentence = (
        <span>
          Today is an{" "}
          <span style={{ color: "#D9DD07", fontWeight: "bold" }}>good</span> day
          for outdoors.
        </span>
      );
      TopSubtitle = (
        <span>
          Given the current assessment of your{" "}
          <span style={{ color: "#D9DD07", fontWeight: "bold" }}>
            health status
          </span>{" "}
          and the{" "}
          <span style={{ color: "#D9DD07", fontWeight: "bold" }}>
            weather conditions
          </span>{" "}
          around you, it appears that today is a{" "}
          <span style={{ color: "#D9DD07", fontWeight: "bold" }}>good</span> day
          to engage in outdoor activities!
        </span>
      );
      TopImg = GoodImg;
    } else if (dayStatus <= 90) {
      TopSentence = (
        <span>
          Today is an{" "}
          <span style={{ color: "#FFA800", fontWeight: "bold" }}>average</span>{" "}
          day for outdoors.
        </span>
      );
      TopSubtitle = (
        <span>
          Considering the{" "}
          <span style={{ color: "#FFA800", fontWeight: "bold" }}>
            weather conditions
          </span>{" "}
          and your current state of{" "}
          <span style={{ color: "#FFA800", fontWeight: "bold" }}>health</span>,
          the decision to spend the day outdoors ultimately{" "}
          <span style={{ color: "#FFA800", fontWeight: "bold" }}>
            rests in your hands
          </span>
          !
        </span>
      );
      TopImg = AverageImg;
    } else if (dayStatus <= 150) {
      TopSentence = (
        <span>
          Today is a{" "}
          <span style={{ color: "#FF2450", fontWeight: "bold" }}>bad day</span>{" "}
          to be outside!
        </span>
      );
      TopSubtitle = (
        <span>
          Considering the{" "}
          <span style={{ color: "#FF2450", fontWeight: "bold" }}>
            current outdoors conditions
          </span>
          , it might be advisable to reconsider going outside today due to{" "}
          <span style={{ color: "#FFA800", fontWeight: "bold" }}>
            unfavorable circumstances
          </span>
          .
        </span>
      );
      TopImg = BadImg;
    } else if (dayStatus > 150) {
      TopSentence = (
        <span>
          <span style={{ color: "#9C1B1E", fontWeight: "bold" }}>
            Severe conditions
          </span>{" "}
          for outdoors activities!
        </span>
      );
      TopSubtitle = (
        <span>
          Considering your{" "}
          <span style={{ color: "#9C1B1E", fontWeight: "bold" }}>
            current health status
          </span>{" "}
          and the{" "}
          <span style={{ color: "#9C1B1E", fontWeight: "bold" }}>
            weather conditions
          </span>
          , it seems prudent to exercise caution and opt for indoor activities
          today, as the circumstances are{" "}
          <span style={{ color: "#9C1B1E", fontWeight: "bold" }}>
            severly harmful
          </span>
          .
        </span>
      );
      TopImg = VeryBadImg;
    }

  return (
    <div className="middle__box">
      <div className="middle__box--wrapper">
        <img src={TopImg} className="middle__img" alt="" />
        <div className="middle__box--content">
          <p className="middle__box--title">{TopSentence}</p>
          <p className="middle__box--subtitle">{TopSubtitle}</p>
          <div className="parameters__wrapper">
            <p className="parameters__title">Check the main parameters</p>
            <div className="parameters__content--wrapper">
              <div className="parameters__content">
                <img src={ballColor} alt="" />
                <p>Weather</p>
              </div>
              <div className="parameters__content">
                <img src={aqiBallColor} alt="" />
                <p>Air Quality index</p>
              </div>
              <div className="parameters__content">
                <img src={healthBallColor} alt="" />
                <p>Health parameters</p>
              </div>
            </div>
          </div>
          <div className="middle__box--division"></div>
          <div className="recommendations__wrapper">
            <p className="recommendations__title">Our Recommendations</p>
            <div className="recommendations__box--wrapper">
              <div className="recommendations__box">
                <p className="recommendations__text">
                  {recommendationsAlgorithm1}
                </p>
              </div>
              <div className="recommendations__box">
                <p className="recommendations__text">
                  {recommendationsAlgorithm2}
                </p>
              </div>
              <div className="recommendations__box">
                <p className="recommendations__text">
                  {recommendationsAlgorithm3}
                </p>
              </div>
              <div className="recommendations__division"></div>
              <div className="recommendations__box">
                <p className="recommendations__text">{windowsAlgorithm}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recommendation;
