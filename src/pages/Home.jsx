import NavbarTopBar from "../components/NavbarTopBar.jsx";
import { useEffect } from "react";
import { changePageSetting } from "../utils/mainFunctions.js";

import HomeSection from "../sections/HomeSection.jsx";
import Project from "../sections/Project.jsx";
import Departments from "../sections/Departments.jsx";

const Home = () => {
  useEffect(() => {
    changePageSetting("Home", "../../public/vite.svg");
    const wspBtn = document.getElementById("wsp-btn");
    return () => {
      wspBtn.removeEventListener("click", wspBtnClick);
    };
  }, []);

  const wspBtnClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5491169240551", "_blank");
  };

  useEffect(() => {
    const wspBtn = document.getElementById("wsp-btn");
    wspBtn.addEventListener("click", wspBtnClick);
  });
  return (
    <>
      <header className="main-header fade-in">
        <NavbarTopBar
          items={["Proyecto", "Departamentos", "Terminaciones", "Ubicacion"]}
        />
      </header>
      <button id="wsp-btn">
        <i className="fa-brands fa-whatsapp"></i>
      </button>
      <main className="fade-in">
        <section id="home">
          <HomeSection />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="departments">
          <Departments />
        </section>
      </main>
    </>
  );
};
export default Home;
