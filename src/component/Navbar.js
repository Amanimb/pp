import React, { useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  
  return (
    <div id="black">
      <div className="navbar">
        <ul>
          <Link
            to="/" >
            <li>Acceuil</li>
          </Link>
          <Link
            to="/About">
            <li>À propos</li>
          </Link>
          <Link to="/Categories">
            <li>Magasin</li>
          </Link>
        </ul>
        <Link to="/">
          <img src="/benzide_BPS.png" alt="logo" />
        </Link>
        <Link to="/Contact">
          <h4 className="cc">Contact</h4>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
