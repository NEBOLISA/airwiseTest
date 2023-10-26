import React from "react";
import "./interface.css";
import Sidebar from "../../components/sidebar";
import HealthReport from "../../components/HealthReport/healthReport";
import Home from "./Home";

export default function Interface() {
  return (
    <div className="interface" style={{ color: "white" }}>
      <Sidebar />
      <Home />
    </div>
  );
}
