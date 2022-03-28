import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import NavBar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { addWiningRobot } from "../../Store/scoreboardSlice";
import { useDispatch } from "react-redux";
import "./Fight.css";

function Fight() {
  const dispatch = useDispatch();
  const currentRobots = useSelector((state) => state.robots.value);
  const [firstRobot, setFirstRobot] = useState("joe");
  const [secondRobot, setSecondRobot] = useState("joe");
  const [winner, setWinner] = useState("joe");

  const handelWinner = () => {
    Math.random() < 0.5 ? setWinner(firstRobot) : setWinner(secondRobot);
    dispatch(addWiningRobot(winner));
  };

  const handleFight = () => {
    handelWinner();
    alert(`winner is ${winner}`);
  };

  const handleSetFirstRobot = (e) => {
    setFirstRobot(e.target.value);
  };

  const handleSetSecondRobot = (e) => {
    setSecondRobot(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="dropdown-container">
        <Dropdown
          options={currentRobots}
          choseRobotFunction={handleSetFirstRobot}
          value={firstRobot}
        />
        <h3>Vs.</h3>
        <Dropdown
          options={currentRobots}
          choseRobotFunction={handleSetSecondRobot}
          value={secondRobot}
        />
      </div>
      <button onClick={() => handleFight()}>Fight</button>
    </>
  );
}

export default Fight;
