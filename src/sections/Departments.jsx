import "./styles/departments.css";

import imgDepartments from "../assets/img/render-principal-edificio.jpg";

const Departments = () => {
  const footerData = [
    [
      { color: "#baff82", text: "3 ambientes, frente con 1 patio" },
      { color: "#ffd982", text: "3 ambientes, contrafrente con 2 patios" },
      { color: "#ff9f82", text: "3 ambientes, frente con balcón" },
      { color: "#82fbff", text: "Duplex 3 ambientes con 2 balcones​" },
    ],
    [
      { color: "#ff8282", text: "3 ambientes, contrafrente con balcón" },
      { color: "#ff82cb", text: "4 ambientes con terraza y 2 balcones" },
      { color: "#f082ff", text: "2 ambientes con terraza y balcón" },
    ],
    [
      { color: "#ae82ff", text: "2 ambientes con balcón" },
      { color: "#8295ff", text: "Duplex 3 ambientes con Terraza y Balcón" },
      { color: "#82c3ff", text: "Duplex 2 ambientes con Terraza y Balcón" },
    ],
  ];
  return (
    <>
      <header className="header-dept">
        <h2>Departamentos</h2>
      </header>
      <main className="main-dept">
        <img src={imgDepartments} alt="Imagen de departamentos" />
        <article>
          <ul></ul>
        </article>
      </main>
      <footer>
        {footerData.map((group, groupIndex) => (
          <ul key={groupIndex}>
            {group.map((data, index) => (
              <li key={index}>
                <div
                  style={{
                    backgroundColor: data.color,
                    borderRadius: "100%",
                    height: "15px",
                    width: "15px",
                  }}
                ></div>
                <p>{data.text}</p>
              </li>
            ))}
          </ul>
        ))}
      </footer>
    </>
  );
};

export default Departments;
