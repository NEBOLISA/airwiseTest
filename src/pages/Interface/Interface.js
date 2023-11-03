import React from "react";
import "./interface.css";
import Sidebar from "../../components/sidebar";
import { Outlet } from "react-router-dom";

export default function Interface() {
  return (
    <div className="interface" style={{ color: "white" }}>
      <Sidebar />
      <Outlet />
      {/* <Home /> */}
    </div>
  );
}
