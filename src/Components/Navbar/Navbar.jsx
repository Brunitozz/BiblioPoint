import React, { useEffect } from "react";
import "./Navabar.css";
import logo from "../../assets/Bibliopoint-Logo.png";

export const Navbar = () => {
  /*useEffect(() => {
    const button = document.getElementById("avatar-navbar");
    const closeButton = document.querySelector(".close-button");
    const navigationMenu = document.querySelector(".navigation__menu");

    const handleButtonClick = () => {
      navigationMenu.classList.remove("none");
      navigationMenu.classList.remove("hide");
    };

    const handleCloseButtonClick = () => {
      navigationMenu.classList.add("hide");
    };

    button.addEventListener("click", handleButtonClick);
    closeButton.addEventListener("click", handleCloseButtonClick);

    return () => {
      button.removeEventListener("click", handleButtonClick);
      closeButton.removeEventListener("click", handleCloseButtonClick);
    };
  }, []);
*/
  return (
    <>
      <div className="background">
        <nav className="menu__wrapper">
          <div className="logo__wrapper">
            {/* logo */}
            <img className="logo__image" src={logo} alt="BiblioPoint" />
            <a href="#" className="page__title">
              BIBLIOPOINT
            </a>
          </div>
          <div className="action-buttons">
            <button className="action-button">{/* svg */}</button>
            <button className="action-button">{/* svg */}</button>
            {/* more buttons */}
          </div>
        </nav>
        <div className="navigation__menu none">
          <div className="avatar-wrapper">
            <img className="avatar-profile" src={logo} alt="Profile" />
            <div className="avatar-name-wrapper">
              <div className="avatar-name-alias">a7v8x</div>
              <div className="avatar-name">David Mraz</div>
            </div>
            <div className="close-button"></div>
          </div>
          <ul className="navigation__menu__items">
            <li>🚀 Maximizing the reward function</li>
            <li className="separator">
              <hr />
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};
