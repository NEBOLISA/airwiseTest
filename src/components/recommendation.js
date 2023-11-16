import "./recommWeather.css";
import ExcellentImg from "../assets/images/recommenWeather/middle.svg";
import GoodImg from "../assets/statusImg/good_status.svg";
import AverageImg from "../assets/statusImg/average_status.svg";
import BadImg from "../assets/statusImg/bad_status.svg";
import VeryBadImg from "../assets/statusImg/verybad_status.svg";
import running from "../assets/images/recommenWeather/recommendations/running.svg";
import fifteen from "../assets/images/recommenWeather/recommendations/15.svg";
import closeWindows from "../assets/images/recommenWeather/recommendations/close_windows.svg";
import health from "../assets/images/recommenWeather/recommendations/health.svg";
import limitActions from "../assets/images/recommenWeather/recommendations/limit_act.svg";
import mask from "../assets/images/recommenWeather/recommendations/mask.svg";
import meditation from "../assets/images/recommenWeather/recommendations/meditation.svg";
import nap from "../assets/images/recommenWeather/recommendations/nap.svg";
import openWindows from "../assets/images/recommenWeather/recommendations/open_windows.svg";
import outdoors from "../assets/images/recommenWeather/recommendations/outdoors.svg";
import park from "../assets/images/recommenWeather/recommendations/park.svg";
import picnic from "../assets/images/recommenWeather/recommendations/picnic.svg";
import purifiers from "../assets/images/recommenWeather/recommendations/purifiers.svg";
import roads from "../assets/images/recommenWeather/recommendations/roads.svg";
import shower from "../assets/images/recommenWeather/recommendations/shower.svg";
import stayHome from "../assets/images/recommenWeather/recommendations/stay_home.svg";
import walking from "../assets/images/recommenWeather/recommendations/walking.svg";
import water from "../assets/images/recommenWeather/recommendations/water.svg";

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
    aqiLevel = 10;
    windowsAlgorithm = "open";
  } else if (aqiColorParameter === "yellow") {
    aqiBallColor = yellowBall;
    aqiLevel = 20;
    windowsAlgorithm = "open";
  } else if (aqiColorParameter === "orange") {
    aqiBallColor = orangeBall;
    aqiLevel = 35;
    windowsAlgorithm = "close";
  } else if (aqiColorParameter === "red") {
    aqiBallColor = redBall;
    aqiLevel = 50;
    windowsAlgorithm = "close";
  } else if (aqiColorParameter === "darkred") {
    aqiBallColor = darkredBall;
    aqiLevel = 60;
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

  let recommendationsAlgorithmImage1;
  let recommendationsAlgorithmImage2;
  let recommendationsAlgorithmImage3;
  let recommendationsAlgorithmImage4;
  let recommendationsAlgorithmImage5;
  let recommendationsAlgorithmImage6;
  let recommendationsAlgorithm1;
  let recommendationsAlgorithm2;
  let recommendationsAlgorithm3;
  let recommendationsAlgorithm4;
  let recommendationsAlgorithm5;
  let recommendationsAlgorithm6;

  if (
    // Good air quality, good weather, good health
    weatherAlgorithm <= 30 &&
    aqiLevel <= 30 &&
    healthReportsData.readiness >= 85 &&
    healthReportsData.sleep >= 80
  ) {
    recommendationsAlgorithmImage1 = outdoors;
    recommendationsAlgorithmImage2 = meditation;
    recommendationsAlgorithmImage3 = picnic;
    recommendationsAlgorithmImage4 = park;
    recommendationsAlgorithmImage5 = openWindows;
    recommendationsAlgorithmImage6 = walking;
    recommendationsAlgorithm1 = "Go outdoors";
    recommendationsAlgorithm2 = "Meditation";
    recommendationsAlgorithm3 = "Go on a picnic";
    recommendationsAlgorithm4 = "Visit a park";
    recommendationsAlgorithm5 = "Open windows";
    recommendationsAlgorithm6 = "Walking";
  } else if (
    // bad quality, bad weather, good health
    weatherAlgorithm > 30 &&
    aqiLevel > 30 &&
    healthReportsData.readiness >= 85 &&
    healthReportsData.sleep >= 80
  ) {
    recommendationsAlgorithmImage1 = stayHome;
    recommendationsAlgorithmImage2 = meditation;
    recommendationsAlgorithmImage3 = mask;
    recommendationsAlgorithmImage4 = limitActions;
    recommendationsAlgorithmImage5 = closeWindows;
    recommendationsAlgorithmImage6 = purifiers;
    recommendationsAlgorithm1 = "Stay home";
    recommendationsAlgorithm2 = "Meditation";
    recommendationsAlgorithm3 = "Wear a mask";
    recommendationsAlgorithm4 = "Limit activities";
    recommendationsAlgorithm5 = "Close windows";
    recommendationsAlgorithm6 = "Use purifiers";
  } else if (
    // good quality, good weather, bad health
    weatherAlgorithm <= 30 &&
    aqiLevel <= 30 &&
    healthReportsData.readiness < 85 &&
    healthReportsData.sleep < 80
  ) {
    recommendationsAlgorithmImage1 = nap;
    recommendationsAlgorithmImage2 = limitActions;
    recommendationsAlgorithmImage3 = meditation;
    recommendationsAlgorithmImage4 = stayHome;
    recommendationsAlgorithmImage5 = water;
    recommendationsAlgorithmImage6 = health;
    recommendationsAlgorithm1 = "Take a nap";
    recommendationsAlgorithm2 = "Limited activities";
    recommendationsAlgorithm3 = "Meditation";
    recommendationsAlgorithm4 = "Stay home";
    recommendationsAlgorithm5 = "Drink water";
    recommendationsAlgorithm6 = "Check your health";
  } else if (
    // bad quality, bad weather, bad health
    weatherAlgorithm > 30 &&
    aqiLevel > 30 &&
    healthReportsData.readiness < 85 &&
    healthReportsData.sleep < 80
  ) {
    recommendationsAlgorithmImage1 = roads;
    recommendationsAlgorithmImage2 = shower;
    recommendationsAlgorithmImage3 = health;
    recommendationsAlgorithmImage4 = fifteen;
    recommendationsAlgorithmImage5 = mask;
    recommendationsAlgorithmImage6 = limitActions;
    recommendationsAlgorithm1 = "Careful on roads";
    recommendationsAlgorithm2 = "Shower after outdoors";
    recommendationsAlgorithm3 = "Check your health";
    recommendationsAlgorithm4 = "Limit outdoors";
    recommendationsAlgorithm5 = "Wear a mask";
    recommendationsAlgorithm6 = "Limited activities";
  } else if (
    // bad quality, good weather, good health
    weatherAlgorithm < 30 &&
    aqiLevel > 30 &&
    healthReportsData.readiness >= 85 &&
    healthReportsData.sleep >= 80
  ) {
    recommendationsAlgorithmImage1 = mask;
    recommendationsAlgorithmImage2 = walking;
    recommendationsAlgorithmImage3 = purifiers;
    recommendationsAlgorithmImage4 = fifteen;
    recommendationsAlgorithmImage5 = shower;
    recommendationsAlgorithmImage6 = limitActions;
    recommendationsAlgorithm1 = "Wear a mask"; 
    recommendationsAlgorithm2 = "Walking"; 
    recommendationsAlgorithm3 = "Use purifiers"; 
    recommendationsAlgorithm4 = "Limit outdoors"; 
    recommendationsAlgorithm5 = "Shower after outdoors"; 
    recommendationsAlgorithm6 = "Limited activities"; 
  } else if (
    // good quality, bad weather, good health
    weatherAlgorithm > 30 &&
    aqiLevel < 30 &&
    healthReportsData.readiness >= 85 &&
    healthReportsData.sleep >= 80
  ) {
    recommendationsAlgorithmImage1 = meditation;
    recommendationsAlgorithmImage2 = fifteen;
    recommendationsAlgorithmImage3 = park;
    recommendationsAlgorithmImage4 = walking;
    recommendationsAlgorithmImage5 = roads;
    recommendationsAlgorithmImage6 = closeWindows;
    recommendationsAlgorithm1 = "Meditation"; 
    recommendationsAlgorithm2 = "Limit outdoors"; 
    recommendationsAlgorithm3 = "Visit a park"; 
    recommendationsAlgorithm4 = "Walking"; 
    recommendationsAlgorithm5 = "Careful on roads"; 
    recommendationsAlgorithm6 = "Close windows"; 
  } else if (
    // bad quality, good weather, bad health
    weatherAlgorithm < 30 &&
    aqiLevel > 30 &&
    healthReportsData.readiness < 85 &&
    healthReportsData.sleep < 80
  ) {
    recommendationsAlgorithmImage1 = stayHome;
    recommendationsAlgorithmImage2 = nap;
    recommendationsAlgorithmImage3 = health;
    recommendationsAlgorithmImage4 = closeWindows; 
    recommendationsAlgorithmImage5 = limitActions;
    recommendationsAlgorithmImage6 = water;
    recommendationsAlgorithm1 = "Stay home"; 
    recommendationsAlgorithm2 = "Take a nap"; 
    recommendationsAlgorithm3 = "Check your health"; 
    recommendationsAlgorithm4 = "Close windows"; 
    recommendationsAlgorithm5 = "Limit activities"; 
    recommendationsAlgorithm6 = "Drink water"; 
  } else if (
    // good quality, bad weather, bad health
    weatherAlgorithm > 30 &&
    aqiLevel < 30 &&
    healthReportsData.readiness < 85 &&
    healthReportsData.sleep < 80
  ) {
    recommendationsAlgorithmImage1 = stayHome;
    recommendationsAlgorithmImage2 = roads;
    recommendationsAlgorithmImage3 = health;
    recommendationsAlgorithmImage4 = closeWindows; 
    recommendationsAlgorithmImage5 = meditation;
    recommendationsAlgorithmImage6 = nap;
    recommendationsAlgorithm1 = "Stay home"; 
    recommendationsAlgorithm2 = "Careful on roads"; 
    recommendationsAlgorithm3 = "Check your health"; 
    recommendationsAlgorithm4 = "Close windows"; 
    recommendationsAlgorithm5 = "Meditation"; 
    recommendationsAlgorithm6 = "Take a nap"; 
  }

  if (dayStatus <= 60) {
    TopSentence = (
      <span>
        Today is an{" "}
        <span style={{ color: "#00E0FF", fontWeight: "bold" }}>excellent</span>{" "}
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
        <span style={{ color: "#00E0FF", fontWeight: "bold" }}>excellent</span>{" "}
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
        <span style={{ color: "#FF2450", fontWeight: "bold" }}>bad day</span> to
        be outside!
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
        <div className="middle__box--content">
          <div className="top_box">
            <p className="middle__box--title">{TopSentence}</p>
            <p className="middle__box--subtitle">{TopSubtitle}</p>
            <img
              src={TopImg}
              className="middle__img"
              alt="recommendation img"
            />
          </div>
          <div className="param_recommen_wrapper">
            <div className="parameters__wrapper">
              <p className="parameters__title">Check the main parameters</p>
              <div className="parameters__content--wrapper">
                <div className="parameters__content">
                  <div className="circle_shape">
                    <img
                      className="circle__color"
                      src={ballColor}
                      alt="ball status"
                    />
                  </div>
                  <div className="curved_rec">
                    <p>Air Quality Index</p>
                  </div>
                </div>
                <div className="parameters__content">
                  <div className="circle_shape">
                    <img
                      className="circle__color"
                      src={aqiBallColor}
                      alt="ball status"
                    />
                  </div>
                  <div className="curved_rec">
                    <p>Weather</p>
                  </div>
                </div>
                <div className="parameters__content">
                  <div className="circle_shape">
                    <img
                      className="circle__color"
                      src={healthBallColor}
                      alt="ball status"
                    />
                  </div>
                  <div className="curved_rec">
                    <p>Health parameters</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle__box--division"></div>
            <div className="recommendations__wrapper">
              <p className="recommendations__title">Our Recommendations</p>
              <div className="recommendations__box--wrapper">
                <div className="recommendations__box">
                  <p className="recommendations__text">
                    <img src={recommendationsAlgorithmImage1} />
                    {recommendationsAlgorithm1}
                  </p>
                </div>
                <div className="recommendations__box">
                  <p className="recommendations__text">
                    <img src={recommendationsAlgorithmImage2} />
                    {recommendationsAlgorithm2}
                  </p>
                </div>
                <div className="recommendations__box">
                  <p className="recommendations__text">
                    <img src={recommendationsAlgorithmImage3} />
                    {recommendationsAlgorithm3}
                  </p>
                </div>
                <div className="recommendations__box">
                  <p className="recommendations__text">
                    <img src={recommendationsAlgorithmImage4} />
                    {recommendationsAlgorithm4}
                  </p>
                </div>
                <div className="recommendations__division"></div>
                <div className="recommendations__box">
                  <p className="recommendations__text">
                    <img src={recommendationsAlgorithmImage5} />
                    {recommendationsAlgorithm5}
                  </p>
                  <div className="recommendations__box">
                  <p className="recommendations__text">
                    <img src={recommendationsAlgorithmImage6} />
                    {recommendationsAlgorithm6}
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recommendation;
