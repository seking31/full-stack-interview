import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Robots.css";

function RobotList() {
  const currentRobots = useSelector((state) => state.robots.value);

  return (
    <div className="robot-list">
      {currentRobots.map((robot, i) => (
        <div key={i}>
          <label>
            Name
            <input type="text" value={robot.name} readOnly />
          </label>
          <label>
            Color
            <input type="color" value={robot.color} readOnly />
          </label>
          <label>
            Attack
            <input type="text" value={robot.attack} readOnly />
          </label>
          <label>
            Defense
            <input type="text" value={robot.defense} readOnly />
          </label>
        </div>
      ))}
    </div>
  );
}

export default RobotList;
