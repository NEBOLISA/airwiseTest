// App.js
import React, { useState } from 'react';
import AirQualityChart from '../../components/AirQualityChart'
import './AirQuality.css'

const AirQuality = () => {
  const [selectedData, setSelectedData] = useState(null);

  const handleDataClick = (index) => {
    setSelectedData(index);
  };

  return (
    <div className='airQuality--wrapper' style={{ display: 'flex' }}>
      <div>
        <AirQualityChart className= "chart_airQuality" style={{width: '500px'}} handleClick={handleDataClick} />
      </div>
            {/* Add content for the selected data */}
    </div>
  );
};

export default AirQuality;