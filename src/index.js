import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./contexts/ThemeContext";

///////////////////Importing Fake Data

//importing from mockups file - Prifina provided mockup data
import { SleepData, SleepDataAsync, SleepSummary, SleepSummaryAsync, ActivitySummary, ActivitySummaryAsync, ReadinessSummary, ReadinessSummaryAsync } from "./mockups";

const Data = { SleepData, SleepDataAsync, SleepSummary, SleepSummaryAsync, ActivitySummary, ActivitySummaryAsync, ReadinessSummary, ReadinessSummaryAsync };

//console.log(SleepData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default Data;
