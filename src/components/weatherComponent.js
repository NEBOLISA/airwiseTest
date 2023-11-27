import "./recommWeather.css";

import clearD from "../assets/WeatherStatusImages/ClearD.png";
import clearN from "../assets/WeatherStatusImages/ClearN.png";
import fewCloudsD from "../assets/WeatherStatusImages/FewCloudsD.png";
import fewCloudsN from "../assets/WeatherStatusImages/FewCloudsN.png";
import ScaterredClouds from "../assets/WeatherStatusImages/ScaterredClouds.png";
import BrokenClouds from "../assets/WeatherStatusImages/BrokenClouds.png";
import ShowerRain from "../assets/WeatherStatusImages/ShowerRain.png";
import RainD from "../assets/WeatherStatusImages/RainD.png";
import RainN from "../assets/WeatherStatusImages/RainN.png";
import LightRain from "../assets/WeatherStatusImages/LightRain.png";
import Thunderstorm from "../assets/WeatherStatusImages/Thunderstorm.png";
import Snow from "../assets/WeatherStatusImages/Snow.png";
import Mist from "../assets/WeatherStatusImages/Mist.png";

import feels from "../assets/images/recommenWeather/feels.svg";
import feelsGray from "../assets/images/feels__gray.svg";
import wind from "../assets/images/recommenWeather/wind.svg";
import humidity from "../assets/images/recommenWeather/humidity.svg";
import windy from "../assets/images/recommenWeather/windy2.png";
import cloudy from "../assets/images/recommenWeather/cloudy2.svg";
import rainy from "../assets/images/recommenWeather/rainy2.svg";
import thunderrain from "../assets/images/recommenWeather/thunder-rain2.svg";
import sunny from "../assets/images/recommenWeather/sunny2.svg";
import location from "../assets/images/location.svg";
import danger from "../assets/images/recommenWeather/danger.svg";
import arrow from "../assets/images/recommenWeather/arrow.svg";
import downArrow from "../assets/images/recommenWeather/arrow_down.svg";
import arrowMid from '../assets/images/recommenWeather/arrow-mid.svg'
import info from "../assets/images/recommenWeather/info.svg";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import CircularProgress from "@mui/joy/CircularProgress";
import green from "../assets/images/green_bar.svg";
import yellow from "../assets/images/yellow_bar.svg";
import orange from "../assets/images/orange_bar.svg";
import red from "../assets/images/red_bar.svg";
import darkred from "../assets/images/darkred_bar.svg";

const API_weather_endpoint = "https://api.openweathermap.org/data/2.5/weather?"; // Weather API endpoint
const API_pollution_endpoint =
  "https://api.openweathermap.org/data/2.5/air_pollution?"; // Air pollution API endpoint
const API_forecast_endpoint =
  "https://api.openweathermap.org/data/2.5/forecast?"; // Forecast API endpoint
const API_key = "79cb096b547bbcc6543bf0b737909f6f"; //API key used for all API's from openweathermap

function WeatherComponent() {
  const [weatherInformation, setWeatherInformation] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [nowWeather, setNowWeather] = useState(null)
  const [longitude, setLongitude] = useState("");
  const [airPollutionData, setAirPollutionData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const {
    setWeatherAlgorithm,
    setAqiColorParameter,
    setAirPollutionConcentration,
    setAqiLevel,
    setLocationInformation,
  } = useContext(ApiContext);

  useEffect(() => {
    if (!latitude && !longitude) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get(
          `${API_weather_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`
        )
        .then((response) => {
          if (response) {
            setLocationData(response?.data.name);
            setNowWeather(response.data)
          }
          const receivedLatitude = response.data.coord.lat;
          const receivedLongitude = response.data.coord.lon;
          console.log("API Location");
          console.log(response?.data);

          // Fetch air pollution data using the retrieved latitude and longitude
          axios
            .get(
              `${API_pollution_endpoint}lat=${receivedLatitude}&lon=${receivedLongitude}&appid=${API_key}`
            )
            .then((airPollutionResponse) => {
              if (airPollutionResponse) {
                setAirPollutionData(airPollutionResponse?.data);
                setAirPollutionConcentration(airPollutionResponse?.data);
              }

              // Print air pollution data to the console
              console.log("Air Pollution Data:");
              console.log(airPollutionResponse.data);
            })
            .catch((airPollutionError) => {
              console.error(
                "Error fetching air pollution data: " + airPollutionError
              );
            });

          // Fetch weather forecast data using the retrieved latitude and longitude
          axios
            .get(
              `${API_forecast_endpoint}lat=${receivedLatitude}&lon=${receivedLongitude}&appid=${API_key}`
            )
            .then((forecastResponse) => {
              if (forecastResponse) {
                setWeatherInformation(forecastResponse?.data);
              }

              // Print forecast data to the console
              console.log("Weather Forecast Data:");
              console.log(forecastResponse?.data);
            })
            .catch((forecastError) => {
              console.error(
                "Error fetching weather forecast data: " + forecastError
              );
            });
        })
        .catch((error) => {
          console.error("Error fetching weather data: " + error);
        });
    }
  }, [latitude, longitude]);
  if (!longitude && !latitude) {
    return (
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress variant="solid" />
      </div>
    );
  }

  let arrowWeather;

  if (
    nowWeather?.main.feels_like >
    nowWeather?.main.temp
  ) {
    arrowWeather = arrow;
  } else if (
    nowWeather?.main.feels_like <
    nowWeather?.main.temp
  ) {
    arrowWeather = downArrow;
  } else {
    arrowWeather = arrowMid;
  }

  let weatherTopBoxStatus;
  let weatherCondition = nowWeather?.weather[0].description;

  if (
    weatherCondition === "clear sky" &&
    nowWeather?.weather[0].icon[2] === "n"
  ) {
    weatherTopBoxStatus = clearN;
  } else if (
    weatherCondition === "clear sky" &&
    nowWeather?.weather[0].icon[2] === "d"
  ) {
    weatherTopBoxStatus = clearD;
  } else if (
    weatherCondition === "few clouds" &&
    nowWeather?.weather[0].icon[2] === "n"
  ) {
    weatherTopBoxStatus = fewCloudsN;
  } else if (
    weatherCondition === "few clouds" &&
    nowWeather?.weather[0].icon[2] === "d"
  ) {
    weatherTopBoxStatus = fewCloudsD;
  } else if (weatherCondition === "scattered clouds") {
    weatherTopBoxStatus = ScaterredClouds;
  } else if (weatherCondition === "broken clouds") {
    weatherTopBoxStatus = BrokenClouds;
  } else if (weatherCondition === "shower rain") {
    weatherTopBoxStatus = ShowerRain;
  } else if (
    weatherCondition === "rain" &&
    nowWeather?.weather[0].icon[2] === "n"
  ) {
    weatherTopBoxStatus = RainN;
  } else if (
    weatherCondition === "rain" &&
    nowWeather?.weather[0].icon[2] === "d"
  ) {
    weatherTopBoxStatus = RainD;
  } else if (weatherCondition === "thunderstorm") {
    weatherTopBoxStatus = Thunderstorm;
  } else if (weatherCondition === "snow") {
    weatherTopBoxStatus = Snow;
  } else if (weatherCondition === "mist") {
    weatherTopBoxStatus = Mist;
  } else if (weatherCondition === "light rain") {
    weatherTopBoxStatus = LightRain;
  } else if (weatherCondition === "heavy intensity rain") {
    weatherTopBoxStatus = LightRain
  }

  const windSpeed = nowWeather?.wind.speed;
  let windCategory;
  let weatherAlgorithm;

  if (windSpeed >= 0 && windSpeed <= 1.5) {
    windCategory = "Calm";
    weatherAlgorithm = 0;
  } else if (windSpeed <= 3.3) {
    windCategory = "Light Air";
    weatherAlgorithm = 5;
  } else if (windSpeed <= 5.4) {
    windCategory = "Light Breeze";
    weatherAlgorithm = 10;
  } else if (windSpeed <= 7.9) {
    windCategory = "Gentle Breeze";
    weatherAlgorithm = 15;
  } else if (windSpeed <= 10.7) {
    windCategory = "Moderate Breeze";
    weatherAlgorithm = 20;
  } else if (windSpeed <= 13.8) {
    windCategory = "Fresh Breeze";
    weatherAlgorithm = 25;
  } else if (windSpeed <= 17.1) {
    windCategory = "Strong Breeze";
    weatherAlgorithm = 30;
  } else if (windSpeed <= 20.7) {
    windCategory = "Near Gale";
    weatherAlgorithm = 35;
  } else if (windSpeed <= 24.4) {
    windCategory = "Gale";
    weatherAlgorithm = 40;
  } else if (windSpeed <= 28.4) {
    windCategory = "Strong Gale";
    weatherAlgorithm = 45;
  } else if (windSpeed <= 32.6) {
    windCategory = "Storm";
    weatherAlgorithm = 50;
  } else if (windSpeed <= 36.9) {
    windCategory = "Violent Storm";
    weatherAlgorithm = 55;
  } else if (windSpeed < 37) {
    windCategory = "Hurricane Force";
    weatherAlgorithm = 60;
  }

  setLocationInformation(locationData);

  setWeatherAlgorithm(weatherAlgorithm);

  const aqi = airPollutionData?.list[0].main.aqi;
  let aqiLevel;
  let aqiColor;
  let aqiCode;

  if (aqi === 1) {
    aqiLevel = "Excellent";
    aqiColor = "green";
    aqiCode = "#4AE600";
  } else if (aqi === 2) {
    aqiLevel = "Good";
    aqiColor = "yellow";
    aqiCode = "#D9DD07";
  } else if (aqi === 3) {
    aqiLevel = "Moderate";
    aqiColor = "orange";
    aqiCode = "#FFA800";
  } else if (aqi === 4) {
    aqiLevel = "Poor";
    aqiColor = "red";
    aqiCode = "#FF2450";
  } else if (aqi === 5) {
    aqiLevel = "Hazardous";
    aqiColor = "darkred";
    aqiCode = "#9C0A08";
  }

  setAqiLevel({ aqiLevelStatus: aqiLevel, aqiCodeStatus: aqiCode });

  setAqiColorParameter(aqiColor, aqiColor);

  function convertTo12HourFormat(hours) {
    let period = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours %= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    return hours + " " + period;
  }

  let nowDate;
  let after3Hours;
  let after6Hours;
  let after9Hours;
  let after12Hours;

  const date = new Date();
  let hours = date.getHours();
  if (hours % 3 === 0) {
    nowDate = convertTo12HourFormat(hours);
    after3Hours = convertTo12HourFormat((hours + 6) % 24);
    after6Hours = convertTo12HourFormat((hours + 9) % 24);
    after9Hours = convertTo12HourFormat((hours + 12) % 24);
    after12Hours = convertTo12HourFormat((hours + 15) % 24);
  } else {
    let nowDateFinder = hours - (hours % 3);
    nowDate = convertTo12HourFormat(nowDateFinder);
    after3Hours = convertTo12HourFormat((nowDateFinder + 6) % 24);
    after6Hours = convertTo12HourFormat((nowDateFinder + 9) % 24);
    after9Hours = convertTo12HourFormat((nowDateFinder + 12) % 24);
    after12Hours = convertTo12HourFormat((nowDateFinder + 15) % 24);
  }

  return (
    <div className="right-side__wrapper">
      <div className="location__wrapper">
        <div className="location">
          <img className="location__icon" src={location} alt="location" />
          <p className="location__text truncate">{locationData}</p>
        </div>
      </div>
      <div className="weather__box">
        <div className="weather__header">
          <img
            className="weather__icon"
            src={weatherTopBoxStatus}
            alt="IconWeather"
          />
          <div className="weather__header--right">
            <p className="weather__number">
              {nowWeather
                ? Math.floor(nowWeather.main.temp - 273.15)
                : ""}
              °
            </p>
            <p className="weather__subtitle">
              {nowWeather
                ? nowWeather?.weather[0].description
                : ""}
            </p>
          </div>
        </div>
        <div className="weather__info--wrapper">
          <div className="weather__info__header">
            <img src={feels} alt="FeelsLike" />
            <p className="weather__info__title">feels like</p>
            <div className="weather__info--subtitle">
              <img
                className="weather__info--arrow"
                src={arrowWeather}
                alt="arrow"
              />
              <p>
                {Math.floor(
                  nowWeather?.main.feels_like - 273.15
                )}
                <b>°C</b>
              </p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src={wind} alt="Wind" />
            <p className="weather__info__title">wind</p>
            <div className="weather__info--subtitle">
              <p>{windCategory}</p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src={humidity} alt="Humidity" />
            <p className="weather__info__title">humidity</p>
            <div className="weather__info--subtitle">
              {/* <img className="weather__info--arrow" src={arrow} alt="arrow" /> */}
              <p>{nowWeather?.main.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="week__box">
        <div className="selected__box"></div>
        <div className="division__line"></div>
        <div className="dates__wrapper">
          <div className="dates__header--wrapper">
            <p className="dates__header">NOW</p>
            <img
              className="dates__icon--weather"
              src={sunny}
              alt="dates icon"
            />
            <p className="dates__number--weather">
              {nowWeather
                ? Math.floor(nowWeather?.main.temp - 273.15)
                : ""}
              °
            </p>
            <img src={feelsGray} alt="dates icon" />
            <p className="dates__number--weather feels__like">
              {Math.floor(weatherInformation?.list[0].main.feels_like - 273.15)}
              °
            </p>
          </div>
          <div className="dates__header--wrapper">
            <p className="dates__header">{after3Hours}</p>
            <img
              className="dates__icon--weather"
              src={rainy}
              alt="dates icon"
            />
            <p className="dates__number--weather">
              {weatherInformation
                ? Math.floor(weatherInformation?.list[1].main.temp - 273.15)
                : ""}
              °
            </p>
            <img src={feelsGray} alt="dates icon" />
            <p className="dates__number--weather feels__like">
              {Math.floor(weatherInformation?.list[2].main.temp - 273.15)}°
            </p>
          </div>
          <div className="dates__header--wrapper">
            <p className="dates__header">{after6Hours}</p>
            <img
              className="dates__icon--weather"
              src={cloudy}
              alt="dates icon"
            />
            <p className="dates__number--weather">
              {weatherInformation
                ? Math.floor(weatherInformation?.list[2].main.temp - 273.15)
                : ""}
              °
            </p>
            <img src={feelsGray} alt="dates icon" />
            <p className="dates__number--weather feels__like">
              {Math.floor(weatherInformation?.list[3].main.temp - 273.15)}°
            </p>
          </div>
          <div className="dates__header--wrapper">
            <p className="dates__header">{after9Hours}</p>
            <img
              className="dates__icon--weather"
              src={windy}
              alt="dates icon"
            />
            <p className="dates__number--weather">
              {weatherInformation
                ? Math.floor(weatherInformation?.list[3].main.temp - 273.15)
                : ""}
              °
            </p>
            <img src={feelsGray} alt="dates icon" />
            <p className="dates__number--weather feels__like">
              {Math.floor(weatherInformation?.list[4].main.temp - 273.15)}°
            </p>
          </div>
          <div className="dates__header--wrapper">
            <p className="dates__header">{after12Hours}</p>
            <img
              className="dates__icon--weather"
              src={thunderrain}
              alt="dates icon"
            />
            <p className="dates__number--weather">
              {weatherInformation
                ? Math.floor(weatherInformation?.list[4].main.temp - 273.15)
                : ""}
              °
            </p>
            <img src={feelsGray} alt="dates icon" />
            <p className="dates__number--weather feels__like">
              {Math.floor(weatherInformation?.list[1].main.temp - 273.15)}°
            </p>
          </div>
        </div>
      </div>
      <div className="air__box">
        <p className="air__title">Air Quality Index</p>
        <div className="air__box--wrapper">
          <p style={{ color: `${aqiCode}` }} className="air__box--title">
            {aqiLevel}
          </p>
        </div>
        <div className="air__subtitle--wrapper">
          <div className="line__wrapper">
            <img
              className={aqiColor === "green" ? "line" : "remove__line"}
              src={green}
              alt="aqi color"
              style={{ boxShadow: "0px 0px 15px green" }}
            ></img>
            <img
              className={aqiColor === "yellow" ? "line" : "remove__line"}
              src={yellow}
              alt="aqi color"
              style={{ boxShadow: "0px 0px 15px yellow" }}
            ></img>
            <img
              className={aqiColor === "orange" ? "line" : "remove__line"}
              src={orange}
              alt="aqi color"
              style={{ boxShadow: "0px 0px 15px orange" }}
            ></img>
            <img
              className={aqiColor === "red" ? "line" : "remove__line"}
              src={red}
              alt="aqi color"
              style={{ boxShadow: "0px 0px 15px red" }}
            ></img>
            <img
              className={aqiColor === "darkred" ? "line" : "remove__line"}
              src={darkred}
              alt="aqi color"
              style={{ boxShadow: "0px 0px 15px darkred" }}
            ></img>
          </div>
          <div className="pollution__btn">
            <div className="pollutants__wrapper">
              <img className="pollutants__icon" src={danger} alt="danger" />
              <p className="pollutants__text">Check Pollutants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherComponent;
