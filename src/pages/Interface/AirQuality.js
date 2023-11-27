// App.js
import React, { useState } from "react";
import AirQualityChart from "../../components/AirQualityChart";
import "./AirQuality.css";

const AirQuality = () => {
  const [selectedData, setSelectedData] = useState(null);

  const handleDataClick = (index) => {
    setSelectedData(index);
  };

  return (
    <div className="airQuality--wrapper" style={{}}>
      <div
        className="chart_airQuality--wrapper"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <AirQualityChart
          className="chart_airQuality"
          style={{}}
          handleClick={handleDataClick}
        />
      </div>
      {/* Add content for the selected data */}
    </div>
  );
};

export default AirQuality;
