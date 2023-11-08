import "./recommWeather.css";
import sun from "../assets/images/recommenWeather/sun.svg";
import feels from "../assets/images/recommenWeather/feels.svg";
import wind from "../assets/images/recommenWeather/wind.svg";
import humidity from "../assets/images/recommenWeather/humidity.svg";
import pressure from "../assets/images/recommenWeather/pressure.svg";
import windy from "../assets/images/recommenWeather/windy2.png";
import cloudy from "../assets/images/recommenWeather/cloudy2.svg";
import rainy from "../assets/images/recommenWeather/rainy2.svg";
import thunderrain from "../assets/images/recommenWeather/thunder-rain2.svg";
import sunny from "../assets/images/recommenWeather/sunny2.svg";
import line from "../assets/images/recommenWeather/line.png";
import danger from "../assets/images/recommenWeather/danger.svg";
import arrow from "../assets/images/recommenWeather/arrow.svg";
import info from "../assets/images/recommenWeather/info.svg";
import point from "../assets/images/recommenWeather/point.png";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import axios from "axios";
import CircularProgress from "@mui/joy/CircularProgress";

const API_weather_endpoint = "https://api.openweathermap.org/data/2.5/weather?"; // Weather API endpoint
const API_pollution_endpoint =
  "https://api.openweathermap.org/data/2.5/air_pollution?"; // Air pollution API endpoint
const API_forecast_endpoint =
  "https://api.openweathermap.org/data/2.5/forecast?"; // Forecast API endpoint
const API_key = "79cb096b547bbcc6543bf0b737909f6f"; //API key used for all API's from openweathermap

function WeatherComponent() {
  const [weatherInformation, setWeatherInformation] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [airPollutionData, setAirPollutionData] = useState(null);

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
          const receivedLatitude = response.data.coord.lat;
          const receivedLongitude = response.data.coord.lon;
          //  console.log("API Location:");
          //  console.log(response.data);

          // Fetch air pollution data using the retrieved latitude and longitude
          axios
            .get(
              `${API_pollution_endpoint}lat=${receivedLatitude}&lon=${receivedLongitude}&appid=${API_key}`
            )
            .then((airPollutionResponse) => {
              if (airPollutionResponse) {
                setAirPollutionData(airPollutionResponse?.data);
              }

              // Print air pollution data to the console
              //  console.log("Air Pollution Data:");
              //   console.log(airPollutionResponse.data);
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
              //   console.log("Weather Forecast Data:");
              //   console.log(forecastResponse?.data.list[0].weather[0].main);
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
  console.log(weatherInformation);

  const windSpeed = weatherInformation?.list[0].wind.speed;

  let windCategory;

  if (windSpeed >= 0 && windSpeed <= 1.5) {
    windCategory = "Calm";
  } else if (windSpeed <= 3.3) {
    windCategory = "Light Air";
  } else if (windSpeed <= 5.4) {
    windCategory = "Light Breeze";
  } else if (windSpeed <= 7.9) {
    windCategory = "Gentle Breeze";
  } else if (windSpeed <= 10.7) {
    windCategory = "Moderate Breeze";
  } else if (windSpeed <= 13.8) {
    windCategory = "Fresh Breeze";
  } else if (windSpeed <= 17.1) {
    windCategory = "Strong Breeze";
  } else if (windSpeed <= 20.7) {
    windCategory = "Near Gale";
  } else if (windSpeed <= 24.4) {
    windCategory = "Gale";
  } else if (windSpeed <= 28.4) {
    windCategory = "Strong Gale";
  } else if (windSpeed <= 32.6) {
    windCategory = "Storm";
  } else if (windSpeed <= 36.9) {
    windCategory = "Violent Storm";
  } else {
    windCategory = "Hurricane Force";
  }

  const aqi = airPollutionData?.list[0].main.aqi;
  let aqiLevel;
  let aqiColor;

  if (aqi === 1) {
    aqiLevel = "Excellent";
    aqiColor = "Light Blue";
  } else if (aqi === 2) {
    aqiLevel = "Good";
    aqiColor = "Green";
  } else if (aqi === 3) {
    aqiLevel = "Moderate";
    aqiColor = "Yellow";
  } else if (aqi === 4) {
    aqiLevel = "Poor";
    aqiColor = "Orange";
  } else if (aqi === 5) {
    aqiLevel = "Hazardous";
    aqiColor = "Red";
  }

  return (
    <div className="right-side__wrapper">
      <div className="weather__box">
        <div className="weather__header">
          <img className="weather__icon" src={sun} alt="IconWeather" />
          <div className="weather__header--right">
            <p className="weather__number">
              {weatherInformation
                ? Math.floor(weatherInformation?.list[0].main.temp - 273.15)
                : ""}
              °
            </p>
            <p className="weather__subtitle">
              {weatherInformation
                ? weatherInformation?.list[0].weather[0].description
                : ""}
            </p>
          </div>
        </div>
        <div className="weather__info--wrapper">
          <div className="weather__info__header">
            <img src={feels} alt="FeelsLike" />
            <p className="weather__info__title">feels like</p>
            <div className="weather__info--subtitle">
              <img className="weather__info--arrow" src={arrow} alt="" />
              <p>
                {Math.floor(
                  weatherInformation?.list[0].main.feels_like - 273.15
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
              <img className="weather__info--arrow" src={arrow} alt="" />
              <p>{weatherInformation?.list[0].main.humidity}%</p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src={pressure} alt="" />
            <p className="weather__info__title">pressure</p>
            <div className="weather__info--subtitle">
              <p>{weatherInformation?.list[0].main.pressure} Pa</p>
            </div>
          </div>
        </div>
      </div>
      <div className="week__box">
        <div className="dates__wrapper">
          <div className="dates__header--wrapper">
            <p style={{ color: "#0084FF" }} className="dates__header">
              MON
            </p>
            <img className="dates__icon--weather" src={sunny} alt="" />
            <p className="dates__number--weather">16°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">TUE</p>
            <img className="dates__icon--weather" src={rainy} alt="" />
            <p className="dates__number--weather">13°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">WED</p>
            <img className="dates__icon--weather" src={cloudy} alt="" />
            <p className="dates__number--weather">13°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">THU</p>
            <img className="dates__icon--weather" src={windy} alt="" />
            <p className="dates__number--weather">8°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">FRI</p>
            <img className="dates__icon--weather" src={thunderrain} alt="" />
            <p className="dates__number--weather">4°</p>
          </div>
        </div>
      </div>
      <div className="air__box">
        <p className="air__title">Air Quality Index</p>
        <img className="info__icon" src={info} alt="" />
        <div className="air__box--wrapper">
          <p className="air__box--number">{aqi}</p>
          <p className="air__box--title">{aqiLevel}</p>
        </div>
        <div className="air__subtitle--wrapper">
          <div className="line__wrapper">
            <img src={line} className="air__line" alt="" />
            <img className="air__point" src={point} alt="" />
          </div>
          <p className="air__box--subtitle">
            Air quality is considered satisfactory, and air pollution poses
            little or no risk
          </p>
        </div>
      </div>
      <div className="pollution__btn">
        <div className="pollutants__wrapper">
          <img className="pollutants__icon" src={danger} alt="" />
          <p className="pollutants__text">Check Pollutants</p>
        </div>
      </div>
    </div>
  );
}
export default WeatherComponent;
