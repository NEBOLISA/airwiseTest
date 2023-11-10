import "./recommWeather.css";
import cycling from "../assets/images/recommenWeather/cycling.svg";
import hiking from "../assets/images/recommenWeather/hiking.svg";
import running from "../assets/images/recommenWeather/running.svg";
import windows from "../assets/images/recommenWeather/windows.svg";
import middle from "../assets/images/recommenWeather/middle.svg";
import circle from "../assets/images/green-circle.svg";
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

  if (aqiColorParameter === "green") {
    aqiBallColor = greenBall;
    aqiLevel = 10;
  } else if (aqiColorParameter === "yellow") {
    aqiBallColor = yellowBall;
    aqiLevel = 20;
  } else if (aqiColorParameter === "orange") {
    aqiBallColor = orangeBall;
    aqiLevel = 30;
  } else if (aqiColorParameter === "red") {
    aqiBallColor = redBall;
    aqiLevel = 40;
  } else if (aqiColorParameter === "darkred") {
    aqiBallColor = darkredBall;
    aqiLevel = 50;
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

  if (healthAverage <= 42) {
    healthBallColor = greenBall;
  } else if (healthAverage <= 54) {
    healthBallColor = yellowBall;
  } else if (healthAverage <= 66) {
    healthBallColor = orangeBall;
  } else if (healthAverage <= 78) {
    healthBallColor = redBall;
  } else if (healthAverage <= 90) {
    healthBallColor = darkredBall;
  }

  dayStatus = healthAverage + weatherAlgorithm + aqiLevel;

  let TopKeyword;

  if (dayStatus <= 60) {
    TopKeyword = "perfect";
  } else if (dayStatus <= 80) {
    TopKeyword = "good";
  } else if (dayStatus <= 90) {
    TopKeyword = "average";
  } else if (dayStatus <= 150) {
    TopKeyword = "bad";
  } else if (dayStatus > 150) {
    TopKeyword = "very bad";
  }
  return (
    <div className="middle__box">
      <div className="middle__box--wrapper">
        <img src={middle} className="middle__img" alt="" />
        <div className="middle__box--content">
          <p className="middle__box--title">
            Today is a <span style={{ color: "#00E0FF" }}>{TopKeyword}</span>{" "}
            day for outdoors
          </p>
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
                <img src={cycling} alt="" />
                <p className="recommendations__text">Cycling</p>
              </div>
              <div className="recommendations__box">
                <img src={hiking} alt="" />
                <p className="recommendations__text">Hiking</p>
              </div>
              <div className="recommendations__box">
                <img style={{ padding: "5px" }} src={running} alt="" />
                <p className="recommendations__text">Running</p>
              </div>
              <div className="recommendations__division"></div>
              <div className="recommendations__box">
                <img src={windows} alt="" />
                <p className="recommendations__text">Open Windows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recommendation;
