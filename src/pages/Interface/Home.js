import { useContext, useEffect, useState } from "react";
import HealthReport from "../../components/HealthReport/healthReport";
import HomeHeader from "../../components/homeHeader";
import Recommendation from "../../components/recommendation";
import WeatherComponent from "../../components/weatherComponent";
import CircularProgress from "@mui/joy/CircularProgress";
import "./Home.css";
import axios from "axios";
import { ApiContext } from "../../contexts/ApiContext";
const API_weather_endpoint = "https://api.openweathermap.org/data/2.5/weather?"; // Weather API endpoint
const API_pollution_endpoint =
  "https://api.openweathermap.org/data/2.5/air_pollution?"; // Air pollution API endpoint
const API_forecast_endpoint =
  "https://api.openweathermap.org/data/2.5/forecast?"; // Forecast API endpoint
const API_key = "79cb096b547bbcc6543bf0b737909f6f"; //API key used for all API's from openweathermap

function Home() {
  const { isLoading, setIsLoading } = useContext(ApiContext);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [nowWeather, setNowWeather] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [airPollutionData, setAirPollutionData] = useState(null);
  const [weatherInformation, setWeatherInformation] = useState(null);
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
            setNowWeather(response.data);
            localStorage.setItem("locationData", response?.data.name);
            localStorage.setItem("nowWeather", JSON.stringify(response?.data));
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
                // setAirPollutionConcentration(airPollutionResponse?.data);
                localStorage.setItem(
                  "airpollutiondata",
                  JSON.stringify(airPollutionResponse?.data)
                );
              }

              // Print air pollution data to the console
              console.log("Air Pollution Data:");
              console.log(airPollutionResponse.data);
            })
            .catch((airPollutionError) => {
              console.error(
                "Error fetching air pollution data: " + airPollutionError
              );
              setIsLoading(false);
            });

          // Fetch weather forecast data using the retrieved latitude and longitude
          axios
            .get(
              `${API_forecast_endpoint}lat=${receivedLatitude}&lon=${receivedLongitude}&appid=${API_key}`
            )
            .then((forecastResponse) => {
              if (forecastResponse) {
                setWeatherInformation(forecastResponse?.data);
                localStorage.setItem(
                  "weatherInformation",
                  JSON.stringify(forecastResponse?.data)
                );
                setIsLoading(false);
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
          setIsLoading(false);
        });
    }
  }, [latitude, longitude]);
  console.log(isLoading);
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-once="true"
      className="Home"
    >
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress variant="solid" />
        </div>
      ) : (
        <>
          <HealthReport />
          <Recommendation />
          <WeatherComponent
            nowWeather={nowWeather}
            locationData={locationData}
            airPollutionData={airPollutionData}
            weatherInformation={weatherInformation}
          />
        </>
      )}
      {/* <HomeHeader /> */}
    </div>
  );
}
export default Home;
