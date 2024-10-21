import "./styles/navbar-topbar.css";
import React, { useEffect } from "react";

const NavbarTopBar = ({ items }) => {
  useEffect(() => {
    const toggleBtn = document.getElementById("toggle-menu");
    const navbarMenu = document.getElementById("navbar-menu");
    const toggleActive = () => {
      toggleBtn.classList.toggle("active");
      navbarMenu.classList.toggle("active");
    };

    toggleBtn.addEventListener("click", toggleActive);

    return () => {
      toggleBtn.removeEventListener("click", toggleActive);
    };
  });

  return (
    <>
      <ul className="navbar-topbar">
        <li>
          <i className="fa-brands fa-whatsapp"></i>
          <span>+54 11 6924-0551</span>
        </li>
        <li>
          <i className="fa-regular fa-envelope"></i>
          <span>info@terrazasdeguzman.com.ar</span>
        </li>
      </ul>
      <nav className="navbar">
        <ul id="navbar-menu">
          {items.map((item, index) => (
            <li key={index}>
              <button className="btn-link">{item}</button>
            </li>
          ))}
        </ul>
        <button id="toggle-menu">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </button>
      </nav>
    </>
  );
};

export default NavbarTopBar;
