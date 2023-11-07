import React, { createContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [weatherInformation, setWeatherInformation] = useState({})
  const [airInformation, setAirInformation] = useState({})

  return (
    <ApiContext.Provider value={{ weatherInformation, setWeatherInformation, airInformation, setAirInformation }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext};
