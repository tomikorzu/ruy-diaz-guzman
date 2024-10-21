import "./styles/project.css";

import img1 from "../assets/img/render-principal-edificio.jpg";
import img2 from "../assets/img/croquis-implantacion.jpg";
import img3 from "../assets/img/dpto-7mo-piso-frente.jpg";
import img4 from "../assets/img/living-5to-piso-y-7mo-piso-contrafrente.jpg";
import img5 from "../assets/img/terraza-5to-piso-contrafrente.jpg";
import img6 from "../assets/img/terraza-9no.jpg";

const Project = () => {
  const images = [
    { name: "Render Principal Edificio", src: img1 },
    { name: "Croquis Implantación", src: img2 },
    { name: "Dpto 7mo Piso Frente", src: img3 },
    { name: "Living 5to Piso y 7mo Piso Contrafrente", src: img4 },
    { name: "Terraza 5to Piso Contrafrente", src: img5 },
    { name: "Terraza 9no", src: img6 },
  ];
  return (
    <>
      <img src="" alt="" />
      <h2>Terrazas de Guzmán</h2>
      <p>Ruy Diaz de Guzmán 185</p>
      <p>Projecto y Dirección Arquitecto Carlos Korzusehec</p>
      <p>12 exclusivos departamentos para que elijas en cual querés vivir…</p>
      <article className="img-container">
        {images.map((img) => {
          return <img src={img.src} alt={img.name} key={img.name} />;
        })}
      </article>
    </>
  );
};

export default Project;
