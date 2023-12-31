import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ApiProvider } from "./contexts/ApiContext";

//importing from mockups file - Prifina provided mockup data
import {
  SleepData,
  SleepDataAsync,
  SleepSummary,
  SleepSummaryAsync,
  ActivitySummary,
  ActivitySummaryAsync,
  ReadinessSummary,
  ReadinessSummaryAsync,
} from "./mockups";

const Data = {
  SleepData,
  SleepDataAsync,
  SleepSummary,
  SleepSummaryAsync,
  ActivitySummary,
  ActivitySummaryAsync,
  ReadinessSummary,
  ReadinessSummaryAsync,
};

//sleepData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
