import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./AirQualityChart.css";
import { ApiContext } from "../contexts/ApiContext";
import location from "../assets/images/location.svg";

const AirQualityChart = () => {
  const [selectedData, setSelectedData] = useState(null);
  const { airPollutionConcentration, aqiLevel, locationInformation } = useContext(ApiContext);
  const [components, setComponents] = useState(null);
  const [totalComponents, setTotalComponents] = useState(null);
  const [co, setCo] = useState(null);
  const [no2, setNo2] = useState(null);
  const [o3, setO3] = useState(null);
  const [pm25, setPm25] = useState(null);
  const [pm10, setPm10] = useState(null);
  const [so2, setSo2] = useState(null);

  const handleDataClick = (_, chartElements) => {
    if (chartElements.length > 0) {
      const dataIndex = chartElements[0].index;
      setSelectedData(dataIndex);
    }
  };

  useEffect(() => {
    console.log(airPollutionConcentration);
    setComponents(airPollutionConcentration?.list[0].components);
  }, [airPollutionConcentration]);

  console.log(components);

  console.log(airPollutionConcentration?.list[0].components.co);

  useEffect(() => {
    if (airPollutionConcentration?.list[0].components.co) {
      setTotalComponents(
        airPollutionConcentration?.list[0].components.co +
          airPollutionConcentration?.list[0].components.no2 +
          airPollutionConcentration?.list[0].components.o3 +
          airPollutionConcentration?.list[0].components.pm2_5 +
          airPollutionConcentration?.list[0].components.pm10 +
          airPollutionConcentration?.list[0].components.so2
      );
      setNo2(
        (airPollutionConcentration?.list[0].components.no2 / totalComponents) *
          100
      );
      setO3(
        (airPollutionConcentration?.list[0].components.o3 / totalComponents) *
          100
      );
      setPm25(
        (airPollutionConcentration?.list[0].components.pm2_5 /
          totalComponents) *
          100
      );
      setPm10(
        (airPollutionConcentration?.list[0].components.pm10 / totalComponents) *
          100
      );
      setSo2(
        (airPollutionConcentration?.list[0].components.so2 / totalComponents) *
          100
      );
    }
  }, [components]);

  console.log(totalComponents);

  const data = {
    labels: ["NO2", "O3", "PM2.5", "PM10", "SO2"],
    datasets: [
      {
        data: [no2, o3, pm25, pm10, so2],
        backgroundColor: [
          "#FF2450",
          "#00DDD0",
          "#E7EB23",
          "#FFA800",
          "#035BE2",
          "#7E2FFF",
        ],
        hoverBackgroundColor: [
          "#FF2450",
          "#00DDD0",
          "#E7EB23",
          "#FFA800",
          "#035BE2",
          "#7E2FFF",
        ],
      },
    ],
  };

  // if (aqiLevel === Excellent) {
  //   aqiLevel = "Excellent";
  //   aqiColor = "green";
  //   aqiCode = "#4AE600";
  // } else if (aqi === 2) {
  //   aqiLevel = "Good";
  //   aqiColor = "yellow";
  //   aqiCode = "#D9DD07";
  // } else if (aqi === 3) {
  //   aqiLevel = "Moderate";
  //   aqiColor = "orange";
  //   aqiCode = "#FFA800";
  // } else if (aqi === 4) {
  //   aqiLevel = "Poor";
  //   aqiColor = "red";
  //   aqiCode = "#FF2450";
  // } else if (aqi === 5) {
  //   aqiLevel = "Hazardous";
  //   aqiColor = "darkred";
  //   aqiCode = "#9C0A08";
  // }

  return (
    <div className="air_quality__chart--wrapper" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Doughnut
          className="chart__airQuality"
          style={{ width: "450px" }}
          data={data}
          options={{
            borderColor: "black",
            hoverBackgroundColor: "#1D1127",
            borderRadius: 15,
            spacing: 15,
            weight: 5,
            onClick: handleDataClick,
            plugins: {
              legend: {
                display: false
              },
            },
          }}
        />
      </div>
      <div className="location__wrapper">
        <div className="location">
          <img className="location__icon" src={location} alt="location" />
          <p className="location__text truncate">{locationInformation }</p>
        </div>
      </div>
      <div className="top__box--airQuality">
        <p className="top__box--airQuality--title">Air Quality Index</p>
        <p style={{color: `${aqiLevel.aqiCodeStatus}`}} className="air__box--title">{aqiLevel.aqiLevelStatus}</p>
      </div>
      <div
        className="chart__airQuality--leftBox"
        style={{ flex: 1, padding: "20px" }}
      >
        {selectedData !== null && (
          <div>
            <h2>Data {selectedData + 1} Details</h2>
            <p>This is the content for Data {selectedData + 1}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirQualityChart;
