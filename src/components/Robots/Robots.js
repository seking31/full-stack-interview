import React, { useState } from "react";
import RobotList from "./RobotsList";
import NavBar from "../Navbar/Navbar";
import "./Robots.css";

function Robots() {
  return (
    <div>
      <NavBar />
      <h1>Robots</h1>
      <div className="robot-container">
        <RobotList />
      </div>
    </div>
  );
}

export default Robots;
