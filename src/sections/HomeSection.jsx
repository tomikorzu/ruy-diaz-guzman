import { useEffect } from "react";
import mainImage from "../assets/img/terraza-5to-piso-contrafrente.jpg";
import "./styles/home.css";

const HomeSection = () => {
  useEffect(() => {
    const data = [
      {
        author: "-le corbusier",
        phrase:
          "El diseño no es solo lo que se ve y se siente. El diseño es cómo funciona.",
      },
      {
        author: "-david chippierfield",
        phrase:
          "La arquitectura es el juego sabio, correcto y magnífico de los volúmenes bajo la luz.",
      },
      {
        author: "-ludwing miles van der rohe",
        phrase: "La arquitectura es el arte de gastar espacio.",
      },
      {
        author: "-rem koolhaas",
        phrase:
          "La arquitectura es el testigo menos adulterado de la historia.",
      },
      {
        author: "-norman foster",
        phrase: "La arquitectura es el arte de organizar el espacio.",
      },
    ];

    const animatedText = document.getElementById("animated-text");
    const authorText = document.querySelector(".author");

    let i = 0;
    const interval = setInterval(() => {
      animatedText.textContent = data[i].phrase;
      authorText.textContent = data[i].author;
      i++;
      if (i === data.length) i = 0;
    }, 5000);

    return () => clearInterval(interval);
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
