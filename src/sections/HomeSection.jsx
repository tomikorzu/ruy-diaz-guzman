import { useEffect } from "react";
import mainImage from "../assets/img/terraza-5to-piso-contrafrente.jpg";
import "./styles/home.css";

const HomeSection = () => {
  useEffect(() => {
    const data = [
      {
        author: "-le corbusier",
        phrase:
          '“El diseño no es solo lo que se ve y se siente. El diseño es cómo funciona.”',
      },
    ];

    const animatedText = document.getElementById("animated-text");
    const authorText = document.querySelector(".author");

    data.map((item) => {
      animatedText.textContent = item.phrase;
      authorText.textContent = item.author;
    });
  }, []);

  return (
    <>
      <img src={mainImage} alt="" className="main-image" />
      <div className="text-container">
        <h2 className="author"></h2>
        <h3 id="animated-text"></h3>
      </div>
    </>
  );
};

export default HomeSection;
