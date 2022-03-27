import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="nav-container">
        <li className="link">
          <Link to="/robots">Robots</Link>
        </li>
        <li className="link">
          <Link to="/scoreboard">Scoreboard</Link>
        </li>
        <li className="link">
          <Link to="/fight">Fight</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
