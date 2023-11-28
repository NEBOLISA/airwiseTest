import React, { createContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [weatherInformation, setWeatherInformation] = useState({});
  const [airInformation, setAirInformation] = useState({});
  const [weatherAlgorithm, setWeatherAlgorithm] = useState();
  const [aqiColorParameter, setAqiColorParameter] = useState();
  const [healthReportsData, setHealthReportsData] = useState({
    sleep: "",
    readiness: "",
    heartRate: "",
  });
  const [airPollutionConcentration, setAirPollutionConcentration] = useState();
  const [aqiLevel, setAqiLevel] = useState({
    aqiLevelStatus: "",
    aqiCodeStatus: "",
  });
  const [locationInformation, setLocationInformation] = useState();
  const [scaleSelection, setScaleSelection] = useState(
    localStorage.getItem("scaleSelection") || "celsius"
  );
  const [isLoading, setIsLoading] = useState(true);

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
        setHealthReportsData,
        airPollutionConcentration,
        setAirPollutionConcentration,
        aqiLevel,
        setAqiLevel,
        locationInformation,
        setLocationInformation,
        scaleSelection,
        setScaleSelection,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
