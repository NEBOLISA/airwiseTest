import "./healthReport.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { useState } from "react";
import WeekTab from "./Tabs/weekTab";
import MonthTab from "./Tabs/monthTab";
import TodayTab from "./Tabs/todayTab";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function HealthReport() {
  const [activeTab, setActiveTab] = useState("today");

  const options = {
    scales: {
      y: {
        ticks: {
          color: "#AAAFB4",
        },
        beginAtZero: true,
      },
      x: {
        ticks: {
          color: "#AAAFB4",
        },
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        borderWidth: 1,
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
    },
  };
  const options2 = {
    scales: {
      y: {
        ticks: {
          color: "#AAAFB4",
        },
        beginAtZero: true,
      },
      x: {
        ticks: {
          color: "#AAAFB4",
        },
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
    },
  };
  const handleTabClick = (tabName) => {
    switch (tabName) {
      case "today":
        setActiveTab("today");
        break;
      case "week":
        setActiveTab("week");
        break;
      case "month":
        setActiveTab("month");
        break;
      default:
        break;
    }
  };

  return (
    <div className="healthReport">
      <h2 className="health_report_header">Health Reports</h2>
      <ul className="selection_ul">
        <li
          className={activeTab === "today" ? "selection active" : "selection"}
          onClick={() => {
            handleTabClick("today");
          }}
        >
          <p className="time">Today</p>
        </li>
        <li
          className={activeTab === "week" ? "selection active" : "selection"}
          onClick={() => {
            handleTabClick("week");
          }}
        >
          <p className="time">Week</p>
        </li>
        <li
          className={activeTab === "month" ? "selection active" : "selection"}
          onClick={() => {
            handleTabClick("month");
          }}
        >
          <p className="time">Month</p>
        </li>
      </ul>
      <div className="tabs">
        {activeTab === "today" && <TodayTab activeTab={activeTab} />}

        {activeTab === "week" && (
          <WeekTab Line={Line} options={options} options2={options2} />
        )}
        {activeTab === "month" && <MonthTab />}
      </div>
    </div>
  );
}
export default HealthReport;
