/**
 * FouL06.github.io - All rights reserved (c) 2024
 * Maintainers: Ashton Foulger
 */

// Import Modules
import React from "react";

// Import CSS
import "../../styles/navbar.css";
import logo from "../../images/Logo.svg";

const NavBar = () => {
  return (
    <div id="nav-container">
      <img src={logo} alt="FouL" height={40} width={40} />
      <div id="nav-links-container">
        <div className="line" />
        <a href="#nav-container">Home</a>
        <div className="line" />
        <a href="/">Projects</a>
        <div className="line" />
        <a href="/">Experience</a>
        <div className="line" />
        <a href="/">About</a>
        <div className="line" />
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
