import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeRobot } from "../../Store/robotSlice";
import { useDispatch } from "react-redux";
import "./Robots.css";

function RobotList() {
  const dispatch = useDispatch();
  const currentRobots = useSelector((state) => state.robots.value);
  const [currentID, setRobotID] = useState(null);

  const handleDelete = (id) => {
    dispatch(removeRobot(id));
  };

  const handleSeeRobotClick = (id) => {
    setRobotID(id);
  };

  return (
    <div className="robot-list">
      {currentRobots.map((robot, i) => (
        <div key={i}>
          <div>
            <h4>Name: {robot.name} </h4>
            <FontAwesomeIcon
              onClick={() => handleSeeRobotClick(robot.id)}
              icon={faEye}
            />
          </div>
          {robot.id === currentID && (
            <React.Fragment>
              <div className="color-box">
                <h4>
                  Color:
                  <input type="color" value={robot.color} readOnly />
                </h4>
              </div>
              <h4>Attack: {robot.attack} </h4>
              <h4>Defense: {robot.defense} </h4>
              <FontAwesomeIcon
                onClick={() => handleDelete(robot.id)}
                icon={faTrash}
              />
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
}

export default RobotList;
