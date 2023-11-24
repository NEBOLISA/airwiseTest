import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./AirQualityChart.css";
import { ApiContext } from "../contexts/ApiContext";
import location from "../assets/images/location.svg";
import green from "../assets/images/green_bar.svg";
import yellow from "../assets/images/yellow_bar.svg";
import orange from "../assets/images/orange_bar.svg";
import red from "../assets/images/red_bar.svg";
import darkred from "../assets/images/darkred_bar.svg";
import adultsIn from "../assets/groups/adults.svg";
import adultsUn from "../assets/groups/adults-un.svg";
import childrenIn from "../assets/groups/children.svg";
import childrenUn from "../assets/groups/children-un.svg";
import outdoorWIn from "../assets/groups/outdoorW.svg";
import outdoorWUn from "../assets/groups/outdoorW-un.svg";
import pregnantIn from "../assets/groups/pregnant.svg";
import pregnantUn from "../assets/groups/pregnant-un.svg";
import seniorsIn from "../assets/groups/seniors.svg";
import seniorsUn from "../assets/groups/seniors-un.svg";
import sensitiveIn from "../assets/groups/sensitive.svg";
import sensitiveUn from "../assets/groups/sensitive-un.svg";

const AirQualityChart = () => {
  const [selectedData, setSelectedData] = useState(null);
  const { airPollutionConcentration, aqiLevel, locationInformation } =
    useContext(ApiContext);
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
        ],
        hoverBackgroundColor: [
          "#FF2450",
          "#00DDD0",
          "#E7EB23",
          "#FFA800",
          "#035BE2",
        ],
      },
    ],
  };

  let so2Value = airPollutionConcentration?.list[0].components.so2;
  let no2Value = airPollutionConcentration?.list[0].components.no2;
  let pm10Value = airPollutionConcentration?.list[0].components.pm10;
  let pm25Value = airPollutionConcentration?.list[0].components.pm2_5;
  let o3Value = airPollutionConcentration?.list[0].components.o3;
  let airQualitySo2;
  let airQualityNo2;
  let airQualityPM10;
  let airQualityPM25;
  let airQualityO3;
  if (so2Value < 0) {
    airQualitySo2 = "Invalid values";
  } else if (so2Value < 20) {
    airQualitySo2 = "Excellent";
  } else if (so2Value < 80) {
    airQualitySo2 = "Good";
  } else if (so2Value < 250) {
    airQualitySo2 = "Moderate";
  } else if (so2Value < 350) {
    airQualitySo2 = "Poor";
  } else {
    airQualitySo2 = "Very Poor";
  }

  if (no2Value < 0) {
    airQualityNo2 = "Invalid values";
  } else if (no2Value < 20) {
    airQualityNo2 = "Excellent";
  } else if (no2Value < 70) {
    airQualityNo2 = "Good";
  } else if (no2Value < 150) {
    airQualityNo2 = "Moderate";
  } else if (no2Value < 200) {
    airQualityNo2 = "Poor";
  } else {
    airQualityNo2 = "Very Poor";
  }

  if (pm10Value < 0) {
    airQualityPM10 = "Invalid values";
  } else if (pm10Value < 40) {
    airQualityPM10 = "Excellent";
  } else if (pm10Value < 70) {
    airQualityPM10 = "Good";
  } else if (pm10Value < 100) {
    airQualityPM10 = "Moderate";
  } else if (pm10Value < 200) {
    airQualityPM10 = "Poor";
  } else {
    airQualityPM10 = "Very Poor";
  }

  if (pm25Value < 0) {
    airQualityPM25 = "Invalid values";
  } else if (pm25Value < 20) {
    airQualityPM25 = "Excellent";
  } else if (pm25Value < 50) {
    airQualityPM25 = "Good";
  } else if (pm25Value < 50) {
    airQualityPM25 = "Moderate";
  } else if (pm25Value < 75) {
    airQualityPM25 = "Poor";
  } else {
    airQualityPM25 = "Very Poor";
  }

  if (o3Value < 0) {
    airQualityO3 = "Invalid values";
  } else if (o3Value < 60) {
    airQualityO3 = "Excellent";
  } else if (o3Value < 100) {
    airQualityO3 = "Good";
  } else if (o3Value < 140) {
    airQualityO3 = "Moderate";
  } else if (o3Value < 180) {
    airQualityO3 = "Poor";
  } else {
    airQualityO3 = "Very Poor";
  }

  let topSubtitle;
  let seniors = seniorsUn;
  let sensitiveGroups = sensitiveUn;
  let children = childrenUn;
  let adults = adultsUn;
  let pregnant = pregnantUn;
  let outdoorWorkers = outdoorWUn;
  let atRisk;

  if (aqiLevel.aqiLevelStatus === "Excellent") {
    topSubtitle = "Very Good";
    atRisk = "None";
  } else if (aqiLevel.aqiLevelStatus === "Good") {
    topSubtitle = "Good";
    atRisk = "Sensitive Groups";
    sensitiveGroups = sensitiveIn;
  } else if (aqiLevel.aqiLevelStatus === "Moderate") {
    topSubtitle = "Moderate Situation";
    atRisk = "Sensitive Groups, seniors, outdoor workers ";
    sensitiveGroups = sensitiveIn;
    seniors = seniorsIn;
    outdoorWorkers = outdoorWIn;
  } else if (aqiLevel.aqiLevelStatus === "Poor") {
    topSubtitle = "Poor situation";
    atRisk = "Sensitive Groups, seniors, outdoor workers, children, pregnant";
    sensitiveGroups = sensitiveIn;
    seniors = seniorsIn;
    outdoorWorkers = outdoorWIn;
    children = childrenIn;
    pregnant = pregnantIn;
  } else if (aqiLevel.aqiLevelStatus === "Very Poor") {
    topSubtitle = "Terrible situation";
    atRisk =
      "Sensitive Groups, seniors, outdoor workers, children, pregnant, adults";
    sensitiveGroups = sensitiveIn;
    seniors = seniorsIn;
    outdoorWorkers = outdoorWIn;
    children = childrenIn;
    pregnant = pregnantIn;
    adults = adultsIn;
  }

  return (
    <div className="air_quality__chart--wrapper">
      <div className="chart__airQuality">
        <div className="doughnut_wrapper">
          <div className="inner_circle">pollutants</div>
          <Doughnut
            style={{}}
            data={data}
            options={{
              animations: {
                tension: {
                  duration: 1000,
                  easing: "linear",
                  from: 1,
                  to: 0,
                  loop: true,
                },
              },
              cutout: 130,
              responsive: true,
              maintainAspectRatio: true,
              borderColor: "#1D1127",
              hoverBackgroundColor: "#1D1127",
              borderWidth: 2,

              borderRadius: 15,
              spacing: 10,
              weight: 5,
              onClick: handleDataClick,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
      {/* <div className="location__wrapper">
        <div className="location">
          <img className="location__icon" src={location} alt="location" />
          <p className="location__text truncate">{locationInformation}</p>
        </div>
      </div> */}
      <div className="left__side--wrapper">
        <div className="top__title--wrapper">
          <p style={{ marginBottom: "5px", marginTop: "0" }}>
            Today's air quality
          </p>
          <p
            style={{ color: `${aqiLevel.aqiCodeStatus}` }}
            className="air__box--title"
          >
            {aqiLevel.aqiLevelStatus}
          </p>
          <p>{topSubtitle}</p>
          <p>At risk - {atRisk}</p>
        </div>
        <div className="atrisk_div">
          <img src={seniors} alt="" />
          <img src={sensitiveGroups} alt="" />
          <img src={outdoorWorkers} alt="" />
          <img src={adults} alt="" />
          <img src={children} alt="" />
          <img src={pregnant} alt="" />
        </div>
        <div
          className="chart__airQuality--leftBox"
          style={{ flex: 1, padding: "20px" }}
        >
          <div className="pollutant__wrapper">
            <div className="pollutant__box--wrapper">
              <p>Pollutants</p>
              <div className="pollutant__box">
                {selectedData === 0 && (
                  <div className="pollutant__content">
                    <div
                      style={{ backgroundColor: "#FF2450" }}
                      className="pollutant__color"
                    ></div>
                    <h2 className="pollutant__title">NO2</h2>
                    <p className="pollutant__subtitle">(Nitrogen Dioxide)</p>
                  </div>
                )}
                {selectedData === 1 && (
                  <div className="pollutant__content">
                    <div
                      style={{ backgroundColor: "#00DDD0" }}
                      className="pollutant__color"
                    ></div>{" "}
                    <h2 className="pollutant__title">O3 </h2>
                    <p className="pollutant__subtitle">(Ozone)</p>
                  </div>
                )}
                {selectedData === 2 && (
                  <div className="pollutant__content">
                    <div
                      style={{ backgroundColor: "#E7EB23" }}
                      className="pollutant__color"
                    ></div>
                    <h2 className="pollutant__title">PM2.5 </h2>
                    <p className="pollutant__subtitle">(Fine Particulates)</p>
                  </div>
                )}
                {selectedData === 3 && (
                  <div className="pollutant__content">
                    <div
                      style={{ backgroundColor: "#FFA800" }}
                      className="pollutant__color"
                    ></div>
                    <h2 className="pollutant__title">PM10 </h2>
                    <p className="pollutant__subtitle">(Particulate Matter)</p>
                  </div>
                )}
                {selectedData === 4 && (
                  <div className="pollutant__content">
                    <div
                      style={{ backgroundColor: "#035BE2" }}
                      className="pollutant__color"
                    ></div>
                    <h2 className="pollutant__title">SO2</h2>
                    <p className="pollutant__subtitle">(Sulfur Dioxide)</p>
                  </div>
                )}
              </div>
            </div>
            <div className="concentration__box--wrapper">
              <p>Pollutant concentration</p>
              <div className="concentration__box">
                {selectedData === 0 && (
                  <div className="conc_reading_div">
                    {no2Value}μg/m3 <p>{airQualityNo2}</p>{" "}
                    <div className="color__line-wrapper">
                      <img src={green}></img>
                      <img src={yellow}></img>
                      <img src={orange}></img>
                      <img src={red}></img>
                      <img src={darkred}></img>
                    </div>
                  </div>
                )}
                {selectedData === 1 && (
                  <div className="conc_reading_div">
                    {o3Value}μg/m3 <p>{airQualityO3}</p>{" "}
                    <div className="color__line-wrapper">
                      <img src={green}></img>
                      <img src={yellow}></img>
                      <img src={orange}></img>
                      <img src={red}></img>
                      <img src={darkred}></img>
                    </div>
                  </div>
                )}
                {selectedData === 2 && (
                  <div className="conc_reading_div">
                    {pm25Value}μg/m3 <p>{airQualityPM25}</p>{" "}
                    <div className="color__line-wrapper">
                      <img src={green}></img>
                      <img src={yellow}></img>
                      <img src={orange}></img>
                      <img src={red}></img>
                      <img src={darkred}></img>
                    </div>
                  </div>
                )}
                {selectedData === 3 && (
                  <div className="conc_reading_div">
                    {pm10Value}μg/m3 <p>{airQualityPM10}</p>{" "}
                    <div className="color__line-wrapper">
                      <img src={green}></img>
                      <img src={yellow}></img>
                      <img src={orange}></img>
                      <img src={red}></img>
                      <img src={darkred}></img>
                    </div>
                  </div>
                )}
                {selectedData === 4 && (
                  <div className="conc_reading_div">
                    {so2Value}μg/m3 <p>{airQualitySo2}</p>{" "}
                    <div className="color__line-wrapper">
                      <img src={green}></img>
                      <img src={yellow}></img>
                      <img src={orange}></img>
                      <img src={red}></img>
                      <img src={darkred}></img>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQualityChart;
