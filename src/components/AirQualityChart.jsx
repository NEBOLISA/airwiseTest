// DoughnutChart.js
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./AirQualityChart.css";

const data = {
  labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"],
  datasets: [
    {
      data: [30, 20, 10, 10, 10, 10],
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

const AirQualityChart = () => {
  const [selectedData, setSelectedData] = useState(null);

  const handleDataClick = (_, chartElements) => {
    if (chartElements.length > 0) {
      const dataIndex = chartElements[0].index;
      setSelectedData(dataIndex);
    }
  };

  return (
    <div className="air_quality__chart--wrapper" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Doughnut
		className="chart__airQuality"
          style={{ width: "450px" }}
          data={data}
          options={{
			plugins: {legend: { display : false,}},
            onClick: handleDataClick,
          }}
		  
        />
      </div>
      <div className="chart__airQuality--leftBox" style={{ flex: 1, padding: "20px" }}>
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
