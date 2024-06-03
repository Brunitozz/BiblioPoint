import React from "react";
import "./Navabar.css";
export default function Navabar() {
  return (
    <div className="menu__wrapper">
      <div className="menu__bar">
        <a href="#" title="Logo">
          <img
            className="logo"
            src="assets/atheros_learning_logo.png"
            title="Logo"
            alt="Logo"
          />
        </a>
        <img
          className="menu-icon"
          src="assets/burger-menu.svg"
          title="Burger Menu"
          alt="Burger Menu"
          onclick="toggleMenu(this)"
        />
        <ul className="navigation">
          <li>Platform</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
