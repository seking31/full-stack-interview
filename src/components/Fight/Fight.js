import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import NavBar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { addWiningRobot } from "../../Store/scoreboardSlice";
import { useDispatch } from "react-redux";
import "./Fight.css";

function Fight() {
  const dispatch = useDispatch();
  const currentRobots = useSelector((state) => state.robots.value);
  const [firstRobot, setFirstRobot] = useState(currentRobots[0].name);
  const [secondRobot, setSecondRobot] = useState(currentRobots[0].name);
  const [clicked, setclicked] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (clicked) {
      alert(`winner is ${winner}`);
    }
  }, [winner]);

  const handelWinner = () => {
    dispatch(addWiningRobot(winner));
  };

  const handleFight = () => {
    setclicked(true);
    Math.random() < 0.5 ? setWinner(firstRobot) : setWinner(secondRobot);
    handelWinner();
  };

  const handleSetFirstRobot = (e) => {
    const newFirstRobotPick = e.target.value;
    setFirstRobot(newFirstRobotPick);
  };

  const handleSetSecondRobot = (e) => {
    const newSecondRobotPick = e.target.value;
    setSecondRobot(newSecondRobotPick);
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
      <button onClick={handleFight}>Fight</button>
    </>
  );
}

export default Fight;
