import React from "react";
import "./Dropdown.css";

function Dropdown({ choseRobotFunction, value, options }) {
  return (
    <select value={value} onChange={choseRobotFunction}>
      {options &&
        options.map((item, i) => (
          <option value={item.name} key={i}>
            {item.name}
          </option>
        ))}
    </select>
  );
}

export default Dropdown;
