import React, { useState } from "react";
import { addRobot } from "../../Store/robotSlice";
import { useDispatch } from "react-redux";

function NewRobot() {
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
  };

  const handleFormChange = (e) => {
    const updatedRobot = { ...newRobot };
    updatedRobot[e.target.name] = e.target.value;
    setNewRobot(updatedRobot);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
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
        type="number"
        onChange={handleFormChange}
        name="attack"
        value={newRobot.attack}
      />
      <input
        type="number"
        onChange={handleFormChange}
        name="defense"
        value={newRobot.defense}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewRobot;
