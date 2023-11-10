import React, { createContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [weatherInformation, setWeatherInformation] = useState({});
  const [airInformation, setAirInformation] = useState({});
  const [weatherAlgorithm, setWeatherAlgorithm] = useState();
  const [aqiColorParameter, setAqiColorParameter] = useState();
  const [healthReportsData, setHealthReportsData] = useState({sleep: '', readiness: '', heartRate: ''})

  return (
    <ApiContext.Provider
      value={{
        weatherInformation,
        setWeatherInformation,
        airInformation,
        setAirInformation,
        weatherAlgorithm,
        setWeatherAlgorithm,
        aqiColorParameter,
        setAqiColorParameter,
        healthReportsData,
        setHealthReportsData
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
