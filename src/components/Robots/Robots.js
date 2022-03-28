import React, { useState } from "react";
import RobotList from "./RobotsList";
import NewRobot from "./NewRobot";
import NavBar from "../Navbar/Navbar";
import "./Robots.css";

function Robots() {
  const [makeNewRobot, setmakeNewRobot] = useState(false);

  return (
    <div>
      <NavBar />
      <h1>Robots</h1>
      <button onClick={() => setmakeNewRobot(!makeNewRobot)}>
        {" "}
        Make New Robot
      </button>
      <div className="robot-container">
        <RobotList />
        {makeNewRobot && <NewRobot handelMakeNewRobot={setmakeNewRobot} />}
      </div>
    </div>
  );
}

export default Robots;
