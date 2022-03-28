import React from "react";
import NavBar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

function Scoreboard() {
  const currentScores = useSelector((state) => state.scoreboard.value);
  return (
    <>
      <NavBar />
      <div className="scoreboard-container" />
      <h1>Scoreboard</h1>
      {currentScores.map((scores, i) => (
        <div className="scores" key={i}>
          <h3>{scores.name}</h3>
          <h3>{scores.date}</h3>
        </div>
      ))}
      <div />
    </>
  );
}

export default Scoreboard;
