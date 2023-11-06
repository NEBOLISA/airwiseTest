import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Interface from "./pages/Interface/Interface";
import Home from "./pages/Interface/Home";
import AirQuality from "./pages/Interface/AirQuality";
import Settings from "./pages/Interface/Settings";
import QandA from "./pages/Interface/Q&A";

///////////////////Importing APIs - Geolocation API - Forecast API - Air Quality API
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_weather_endpoint = 'https://api.openweathermap.org/data/2.5/weather?'; // Weather API endpoint
const API_pollution_endpoint = 'http://api.openweathermap.org/data/2.5/air_pollution?'; // Air pollution API endpoint
const API_forecast_endpoint = 'http://api.openweathermap.org/data/2.5/forecast?'; // Forecast API endpoint
const API_key = '79cb096b547bbcc6543bf0b737909f6f'; //API key used for all API's from openweathermap

AOS.init();

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [airPollutionData, setAirPollutionData] = useState(null);
  const [forecastData, setForecastData] = useState(null); // State to hold forecast data

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (latitude !== '' && longitude !== '') {
      axios
        .get(`${API_weather_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`)
        .then((response) => {
          const receivedLatitude = response.data.coord.lat;
          const receivedLongitude = response.data.coord.lon;
       //   console.log("API Location:");
       //   console.log(response.data);

          // Fetch air pollution data using the retrieved latitude and longitude
          axios
            .get(`${API_pollution_endpoint}lat=${receivedLatitude}&lon=${receivedLongitude}&appid=${API_key}`)
            .then((airPollutionResponse) => {
              setAirPollutionData(airPollutionResponse.data);

              // Print air pollution data to the console
           //   console.log("Air Pollution Data:");
           //   console.log(airPollutionResponse.data);
            })
            .catch((airPollutionError) => {
              console.error("Error fetching air pollution data: " + airPollutionError);
            });

          // Fetch weather forecast data using the retrieved latitude and longitude
          axios
            .get(`${API_forecast_endpoint}lat=${receivedLatitude}&lon=${receivedLongitude}&appid=${API_key}`)
            .then((forecastResponse) => {
              setForecastData(forecastResponse.data);

              // Print forecast data to the console
           //   console.log("Weather Forecast Data:");
           //   console.log(forecastResponse.data);
            })
            .catch((forecastError) => {
              console.error("Error fetching weather forecast data: " + forecastError);
            });
        })
        .catch((error) => {
          console.error("Error fetching weather data: " + error);
        });
    }
  }, [latitude, longitude]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/interface" element={<Interface />}>
          <Route index element={<Home />} />
          <Route path="airQuality" element={<AirQuality />} />
          <Route path="settings" element={<Settings />} />
          <Route path="Q&A" element={<QandA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;