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
  const [selectedData, setSelectedData] = useState(Math.floor(Math.random() * 4));
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

  console.log(selectedData)

  useEffect(() => {
    setComponents(airPollutionConcentration?.list[0].components);
  }, [airPollutionConcentration]);

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
  let airQualityColorSo2;
  let airQualityColorNo2;
  let airQualityColorPM10;
  let airQualityColorPM25;
  let airQualityColorO3;

  if (so2Value < 0) {
    airQualitySo2 = "Invalid values";
    airQualityColorSo2 = "white";
  } else if (so2Value < 20) {
    airQualitySo2 = "Excellent";
    airQualityColorSo2 = "#4AE600";
  } else if (so2Value < 80) {
    airQualitySo2 = "Good";
    airQualityColorSo2 = "#D9DD07";
  } else if (so2Value < 250) {
    airQualitySo2 = "Moderate";
    airQualityColorSo2 = "#FFA800";
  } else if (so2Value < 350) {
    airQualitySo2 = "Poor";
    airQualityColorSo2 = "#FF2450";
  } else {
    airQualitySo2 = "Hazardous";
    airQualityColorSo2 = "#9C0A08";
  }

  if (no2Value < 0) {
    airQualityNo2 = "Invalid values";
    airQualityColorNo2 = "white";
  } else if (no2Value < 20) {
    airQualityNo2 = "Excellent";
    airQualityColorNo2 = "#4AE600";
  } else if (no2Value < 70) {
    airQualityNo2 = "Good";
    airQualityColorNo2 = "#D9DD07";
  } else if (no2Value < 150) {
    airQualityNo2 = "Moderate";
    airQualityColorNo2 = "#FFA800";
  } else if (no2Value < 200) {
    airQualityNo2 = "Poor";
    airQualityColorNo2 = "#FF2450";
  } else {
    airQualityNo2 = "Hazardous";
    airQualityColorNo2 = "#9C0A08";
  }

  if (pm10Value < 0) {
    airQualityPM10 = "Invalid values";
    airQualityColorPM10 = "white";
  } else if (pm10Value < 40) {
    airQualityPM10 = "Excellent";
    airQualityColorPM10 = "#4AE600";
  } else if (pm10Value < 70) {
    airQualityPM10 = "Good";
    airQualityColorPM10 = "#D9DD07";
  } else if (pm10Value < 100) {
    airQualityPM10 = "Moderate";
    airQualityColorPM10 = "#FFA800";
  } else if (pm10Value < 200) {
    airQualityPM10 = "Poor";
    airQualityColorPM10 = "#FF2450";
  } else {
    airQualityPM10 = "Hazardous";
    airQualityColorPM10 = "#9C0A08";
  }

  if (pm25Value < 0) {
    airQualityPM25 = "Invalid values";
    airQualityColorPM25 = "white";
  } else if (pm25Value < 20) {
    airQualityPM25 = "Excellent";
    airQualityColorPM25 = "#4AE600";
  } else if (pm25Value < 50) {
    airQualityPM25 = "Good";
    airQualityColorPM25 = "#D9DD07";
  } else if (pm25Value < 50) {
    airQualityPM25 = "Moderate";
    airQualityColorPM25 = "#FFA800";
  } else if (pm25Value < 75) {
    airQualityPM25 = "Poor";
    airQualityColorPM25 = "#FF2450";
  } else {
    airQualityPM25 = "Hazardous";
    airQualityColorPM25 = "#9C0A08";
  }

  if (o3Value < 0) {
    airQualityO3 = "Invalid values";
    airQualityColorO3 = "white";
  } else if (o3Value < 60) {
    airQualityO3 = "Excellent";
    airQualityColorO3 = "#4AE600";
  } else if (o3Value < 100) {
    airQualityO3 = "Good";
    airQualityColorO3 = "#D9DD07";
  } else if (o3Value < 140) {
    airQualityO3 = "Moderate";
    airQualityColorO3 = "#FFA800";
  } else if (o3Value < 180) {
    airQualityO3 = "Poor";
    airQualityColorO3 = "#FF2450";
  } else {
    airQualityO3 = "Hazardous";
    airQualityColorO3 = "#9C0A08";
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
    topSubtitle =
      "The current air quality is deemed to be satisfactory, with minimal to no discernible risk posed by air pollution!";
    atRisk = "None";
  } else if (aqiLevel.aqiLevelStatus === "Good") {
    topSubtitle =
      "Air quality is within acceptable levels, and the presence of air pollution carries minimal to no discernible risk.";
    atRisk = "Sensitive Groups";
    sensitiveGroups = sensitiveIn;
  } else if (aqiLevel.aqiLevelStatus === "Moderate") {
    topSubtitle =
      "The current air quality falls within the moderate range, indicating a subtle level of risk associated with air pollution.";
    atRisk = "Sensitive Groups, seniors, outdoor workers ";
    sensitiveGroups = sensitiveIn;
    seniors = seniorsIn;
    outdoorWorkers = outdoorWIn;
  } else if (aqiLevel.aqiLevelStatus === "Poor") {
    topSubtitle =
      "The current air quality is assessed as poor, indicating a significant and notable risk emanating from air pollution.";
    atRisk = "Sensitive Groups, seniors, outdoor workers, children, pregnant";
    sensitiveGroups = sensitiveIn;
    seniors = seniorsIn;
    outdoorWorkers = outdoorWIn;
    children = childrenIn;
    pregnant = pregnantIn;
  } else if (aqiLevel.aqiLevelStatus === "Very Poor") {
    topSubtitle =
      "The air quality is characterized as very poor, signifying a substantial and noteworthy risk arising from air pollution.";
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
            className="inner_circle--content"
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
              hoverBackgroundColor: "red",
              hoverBorderColor: "white",
              borderWidth: 2,
              clip: false,
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
        <div className="bottom__leftSide">
          <div className="bottom__leftSide__wrapper">
            <div className="bottom__leftSide--content">
              <div
                style={{
                  backgroundColor: "#E7EB23",
                  boxShadow: "0px 0px 10px #E7EB23",
                }}
                className="pollutant__line"
              ></div>
              <p>PM2.5</p>
            </div>
            <div className="bottom__leftSide--content">
              <div
                style={{
                  backgroundColor: "#00DDD0",
                  boxShadow: "0px 0px 10px #00DDD0",
                }}
                className="pollutant__line"
              ></div>
              <p>O3</p>
            </div>
            <div className="bottom__leftSide--content">
              <div
                style={{
                  backgroundColor: "#FF2450",
                  boxShadow: "0px 0px 10px #FF2450",
                }}
                className="pollutant__line"
              ></div>
              <p>NO2</p>
            </div>
            <div className="bottom__leftSide--content">
              <div
                style={{
                  backgroundColor: "#035BE2",
                  boxShadow: "0px 0px 10px #035BE2",
                }}
                className="pollutant__line"
              ></div>
              <p>SO2</p>
            </div>
            <div className="bottom__leftSide--content">
              <div
                style={{
                  backgroundColor: "#FFA800",
                  boxShadow: "0px 0px 10px #FFA800",
                }}
                className="pollutant__line"
              ></div>
              <p>PM10</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="location__wrapper">
        <div className="location">
          <img className="location__icon" src={location} alt="location" />
          <p className="location__text truncate">{locationInformation}</p>
        </div>
      </div> */}
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="500"
        className="left__side--wrapper"
      >
        <div className="top__title--wrapper">
          <p
            className="top__title--airQuality"
            style={{ marginBottom: "5px", marginTop: "0" }}
          >
            Today's air quality
          </p>
          <p
            style={{ color: `${aqiLevel.aqiCodeStatus}` }}
            className="air__box--title box--title__airQuality"
          >
            {aqiLevel.aqiLevelStatus}
          </p>
          <p className="top__airQuality--subtitle">{topSubtitle}</p>
          <p className="top__airQuality--risk">
            At risk - <p className="atRisk">{atRisk}</p>
          </p>
        </div>
        <div className="atrisk_div">
          <div className="atrisk__wrapper">
            <img src={seniors} alt="" />
            <p className="atrisk__text">Seniors</p>
          </div>
          <div className="atrisk__wrapper">
            <img src={sensitiveGroups} alt="" />
            <p className="atrisk__text">Sentitive Groups</p>
          </div>
          <div className="atrisk__wrapper">
            <img src={outdoorWorkers} alt="" />
            <p className="atrisk__text">Outdoors</p>
          </div>
          <div className="atrisk__wrapper">
            <img src={adults} alt="" />
            <p className="atrisk__text">Adults</p>
          </div>
          <div className="atrisk__wrapper">
            <img src={children} alt="" />
            <p className="atrisk__text">Childrens</p>
          </div>
          <div className="atrisk__wrapper">
            <img src={pregnant} alt="" />
            <p className="atrisk__text">Pregnants</p>
          </div>
        </div>
        <div
          className="chart__airQuality--leftBox"
          style={{ flex: 1, padding: "20px 30px" }}
        >
           <div className="location__wrapper location__wrapper__airQuality">
        <div className="location">
          <img className="location__icon" src={location} alt="location" />
          <p className="location__text truncate">{locationInformation}</p>
        </div>
      </div>
          <div className="pollutant__wrapper">
            <div className="pollutant__box--wrapper">
              <p>Pollutants</p>
              <div className="pollutant__box">
                {selectedData === 0 && (
                  <div
                    data-aos="fade-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className="pollutant__content"
                  >
                    <div
                      style={{
                        backgroundColor: "#FF2450",
                        boxShadow: "0px 0px 10px #FF2450",
                      }}
                      className="pollutant__color"
                    ></div>
                    <h2 className="pollutant__title">NO2</h2>
                    <p className="pollutant__subtitle">(Nitrogen Dioxide)</p>
                  </div>
                )}
                {selectedData === 1 && (
                  <div
                    data-aos="fade-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className="pollutant__content"
                  >
                    <div
                      style={{
                        backgroundColor: "#00DDD0",
                        boxShadow: "0px 0px 10px #00DDD0",
                      }}
                      className="pollutant__color"
                    ></div>{" "}
                    <h2 className="pollutant__title">O3 </h2>
                    <p className="pollutant__subtitle">(Ozone)</p>
                  </div>
                )}
                {selectedData === 2 && (
                  <div
                    data-aos="fade-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className="pollutant__content"
                  >
                    <div
                      style={{
                        backgroundColor: "#E7EB23",
                        boxShadow: "0px 0px 10px #E7EB23",
                      }}
                      className="pollutant__color"
                    ></div>
                    <h2 className="pollutant__title">PM2.5 </h2>
                    <p className="pollutant__subtitle">(Fine Particulates)</p>
                  </div>
                )}
                {selectedData === 3 && (
                  <div
                    data-aos="fade-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className="pollutant__content"
                  >
                    <div
                      style={{
                        backgroundColor: "#FFA800",
                        boxShadow: "0px 0px 10px #FFA800",
                      }}
                      className="pollutant__color"
                    ></div>
                    <h2 className="pollutant__title">PM10 </h2>
                    <p className="pollutant__subtitle">(Particulate Matter)</p>
                  </div>
                )}
                {selectedData === 4 && (
                  <div
                    data-aos="fade-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className="pollutant__content"
                  >
                    <div
                      style={{
                        backgroundColor: "#035BE2",
                        boxShadow: "0px 0px 10px #035BE2",
                      }}
                      className="pollutant__color"
                    ></div>
                    <h2 className="pollutant__title">SO2</h2>
                    <p className="pollutant__subtitle">(Sulfur Dioxide)</p>
                  </div>
                )}
              </div>
            </div>
            {selectedData === 0 && (
              <div className="concentration__box--wrapper">
                <p>Pollutant concentration</p>
                <div className="concentration__box">
                  <div className="conc_reading_div">
                    <div
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      className="color__line-wrapper"
                    >
                      <p
                        style={{ color: airQualityColorNo2 }}
                        className="color__line"
                      >
                        {airQualityNo2}
                      </p>{" "}
                      <div className="lines">
                        <img
                          style={{ boxShadow: "0px 0px 15px green" }}
                          className={
                            airQualityNo2 === "Excellent"
                              ? "line"
                              : "remove__line"
                          }
                          src={green}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px yellow" }}
                          className={
                            airQualityNo2 === "Good" ? "line" : "remove__line"
                          }
                          src={yellow}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px orange" }}
                          className={
                            airQualityNo2 === "Moderate"
                              ? "line"
                              : "remove__line"
                          }
                          src={orange}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px red" }}
                          className={
                            airQualityNo2 === "Poor" ? "line" : "remove__line"
                          }
                          src={red}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px darkred" }}
                          className={
                            airQualityNo2 === "Hazardous"
                              ? "line"
                              : "remove__line"
                          }
                          src={darkred}
                        ></img>
                      </div>
                      <p className="color__subtitle">{no2Value}μg/m3</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedData === 1 && (
              <div className="concentration__box--wrapper">
                <p>Pollutant concentration</p>
                <div className="concentration__box">
                  <div className="conc_reading_div">
                    <div
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      className="color__line-wrapper"
                    >
                      <p
                        style={{ color: airQualityColorO3 }}
                        className="color__line"
                      >
                        {airQualityO3}
                      </p>{" "}
                      <div className="lines">
                        <img
                          style={{ boxShadow: "0px 0px 15px green" }}
                          className={
                            airQualityO3 === "Excellent"
                              ? "line"
                              : "remove__line"
                          }
                          src={green}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px yellow" }}
                          className={
                            airQualityO3 === "Good" ? "line" : "remove__line"
                          }
                          src={yellow}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px orange" }}
                          className={
                            airQualityO3 === "Moderate"
                              ? "line"
                              : "remove__line"
                          }
                          src={orange}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px red" }}
                          className={
                            airQualityO3 === "Poor" ? "line" : "remove__line"
                          }
                          src={red}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px darkred" }}
                          className={
                            airQualityO3 === "Hazardous"
                              ? "line"
                              : "remove__line"
                          }
                          src={darkred}
                        ></img>
                      </div>
                      <p className="color__subtitle">{o3Value}μg/m3</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedData === 2 && (
              <div className="concentration__box--wrapper">
                <p>Pollutant concentration</p>
                <div className="concentration__box">
                  <div className="conc_reading_div">
                    <div
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      className="color__line-wrapper"
                    >
                      <p
                        style={{ color: airQualityColorPM25 }}
                        className="color__line"
                      >
                        {airQualityPM25}
                      </p>{" "}
                      <div className="lines">
                        <img
                          style={{ boxShadow: "0px 0px 15px green" }}
                          className={
                            airQualityPM25 === "Excellent"
                              ? "line"
                              : "remove__line"
                          }
                          src={green}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px yellow" }}
                          className={
                            airQualityPM25 === "Good" ? "line" : "remove__line"
                          }
                          src={yellow}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px orange" }}
                          className={
                            airQualityPM25 === "Moderate"
                              ? "line"
                              : "remove__line"
                          }
                          src={orange}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px red" }}
                          className={
                            airQualityPM25 === "Poor" ? "line" : "remove__line"
                          }
                          src={red}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px darkred" }}
                          className={
                            airQualityPM25 === "Hazardous"
                              ? "line"
                              : "remove__line"
                          }
                          src={darkred}
                        ></img>
                      </div>
                      <p className="color__subtitle">{pm25Value}μg/m3</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedData === 3 && (
              <div className="concentration__box--wrapper">
                <p>Pollutant concentration</p>
                <div className="concentration__box">
                  <div className="conc_reading_div">
                    <div
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      className="color__line-wrapper"
                    >
                      <p
                        style={{ color: airQualityColorPM10 }}
                        className="color__line"
                      >
                        {airQualityPM10}
                      </p>{" "}
                      <div className="lines">
                        <img
                          style={{ boxShadow: "0px 0px 15px green" }}
                          className={
                            airQualityPM10 === "Excellent"
                              ? "line"
                              : "remove__line"
                          }
                          src={green}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px yellow" }}
                          className={
                            airQualityPM10 === "Good" ? "line" : "remove__line"
                          }
                          src={yellow}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px orange" }}
                          className={
                            airQualityPM10 === "Moderate"
                              ? "line"
                              : "remove__line"
                          }
                          src={orange}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px red" }}
                          className={
                            airQualityPM10 === "Poor" ? "line" : "remove__line"
                          }
                          src={red}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px darkred" }}
                          className={
                            airQualityPM10 === "Hazardous"
                              ? "line"
                              : "remove__line"
                          }
                          src={darkred}
                        ></img>
                      </div>
                      <p className="color__subtitle">{pm10Value}μg/m3</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedData === 4 && (
              <div className="concentration__box--wrapper">
                <p>Pollutant concentration</p>
                <div className="concentration__box">
                  <div className="conc_reading_div">
                    <div
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="500"
                      className="color__line-wrapper"
                    >
                      <p
                        style={{ color: airQualityColorSo2 }}
                        className="color__line"
                      >
                        {airQualitySo2}
                      </p>{" "}
                      <div className="lines">
                        <img
                          style={{ boxShadow: "0px 0px 15px green" }}
                          className={
                            airQualitySo2 === "Excellent"
                              ? "line"
                              : "remove__line"
                          }
                          src={green}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px yellow" }}
                          className={
                            airQualitySo2 === "Good" ? "line" : "remove__line"
                          }
                          src={yellow}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px orange" }}
                          className={
                            airQualitySo2 === "Moderate"
                              ? "line"
                              : "remove__line"
                          }
                          src={orange}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px red" }}
                          className={
                            airQualitySo2 === "Poor" ? "line" : "remove__line"
                          }
                          src={red}
                        ></img>
                        <img
                          style={{ boxShadow: "0px 0px 15px darkred" }}
                          className={
                            airQualitySo2 === "Hazardous"
                              ? "line"
                              : "remove__line"
                          }
                          src={darkred}
                        ></img>
                      </div>
                      <p className="color__subtitle">{so2Value}μg/m3</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQualityChart;
