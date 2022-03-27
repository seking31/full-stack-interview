import React from "react";
import NavBar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

function Robots() {
  const currentRobots = useSelector((state) => state.robots.value);
  return (
    <div className="Robots">
      <NavBar />
      <h1>Robots</h1>
      {currentRobots.map((robot, i) => (
        <div key={i}>
          <h1>{robot.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Robots;
