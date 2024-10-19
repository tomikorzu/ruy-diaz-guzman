import "../assets/styles/home.css";
import NavbarTopBar from "../components/NavbarTopBar.jsx";
import React, { useEffect, useState } from "react";
import { changePageSetting } from "../utils/mainFunctions.js";

const Home = () => {
  useEffect(() => {
    changePageSetting("Home", "../../public/vite.svg");
  });
  return (
    <>
      <header>
        <NavbarTopBar
          items={["Proyecto", "Departamentos", "Terminaciones", "Ubicacion"]}
        />
      </header>
      <main className="fade-in">
        <h1>Home Page</h1>
      </main>
    </>
  );
};
export default Home;
