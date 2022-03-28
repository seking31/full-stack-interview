import React, { useState } from "react";
import { addRobot } from "../../Store/robotSlice";
import { useDispatch } from "react-redux";
import "./Robots.css";

function NewRobot({ handelMakeNewRobot }) {
  const dispatch = useDispatch();
  const [newRobot, setNewRobot] = useState({
    name: "",
    color: "#000000",
    attack: "",
    defense: "",
    id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRobot(newRobot));
    setNewRobot({
      name: "",
      color: "#000000",
      attack: "",
      defense: "",
      id: "",
    });
    handelMakeNewRobot(false);
  };

  const handleFormChange = (e) => {
    const updatedRobot = { ...newRobot };
    updatedRobot[e.target.name] = e.target.value;
    setNewRobot(updatedRobot);
  };

  return (
    <div className="new-robot-container">
      <h3>Make New Robot:</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          onChange={handleFormChange}
          name="name"
          value={newRobot.name}
        />
        <input
          type="color"
          onChange={handleFormChange}
          name="color"
          value={newRobot.color}
        />
        <input
          placeholder="attack"
          type="number"
          onChange={handleFormChange}
          name="attack"
          value={newRobot.attack}
        />
        <input
          placeholder="defense"
          type="number"
          onChange={handleFormChange}
          name="defense"
          value={newRobot.defense}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewRobot;
