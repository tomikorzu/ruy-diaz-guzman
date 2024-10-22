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

  // const units = [
  //   {
  //     avaible: true,
  //     dept: 12,
  //     floor: [8, 7],
  //     color: "#82c3ff",
  //     file: "",
  //     row: 2,
  //     col: 1,
  //   },
  //   {
  //     avaible: false,
  //     dept: 11,
  //     floor: [8, 7],
  //     color: "#8295ff",
  //     file: "",
  //     row: 2,
  //     col: 1,
  //   },
  //   {
  //     avaible: true,
  //     dept: 10,
  //     floor: [6],
  //     color: "#8295ff",
  //     file: "",
  //     row: 1,
  //     col: 1,
  //   },
  //   {
  //     avaible: true,
  //     dept: 9,
  //     floor: [6, 5],
  //     color: "#ae82ff",
  //     file: "",
  //     row: 2,
  //     col: 1,
  //   },
  //   {
  //     avaible: true,
  //     dept: 8,
  //     floor: [5],
  //     color: "#f082ff",
  //     file: "",
  //     row: 1,
  //     col: 1,
  //   },
  //   {
  //     avaible: false,
  //     dept: 7,
  //     floor: [4],
  //     color: "#ff82cb",
  //     file: "",
  //     row: 1,
  //     col: 2,
  //   },
  //   {
  //     avaible: false,
  //     dept: 6,
  //     floor: [3],
  //     color: "#ff8282",
  //     file: "",
  //     row: 1,
  //     col: 1,
  //   },
  //   {
  //     avaible: false,
  //     dept: 5,
  //     floor: [3],
  //     color: "#ff9f82",
  //     file: "",
  //     row: 1,
  //     col: 1,
  //   },
  //   {
  //     avaible: false,
  //     dept: 4,
  //     floor: [2],
  //     color: "#ff8282",
  //     file: "",
  //     row: 1,
  //     col: 1,
  //   },
  //   {
  //     avaible: false,
  //     dept: 3,
  //     floor: [2],
  //     color: "#ff9f82",
  //     file: "",
  //     row: 1,
  //     col: 1,
  //   },
  //   {
  //     avaible: false,
  //     dept: 2,
  //     floor: [1],
  //     color: "#ffd982",
  //     file: "",
  //     row: 1,
  //     col: 1,
  //   },
  //   {
  //     avaible: false,
  //     dept: 1,
  //     floor: [1],
  //     color: "#baff82",
  //     file: "",
  //     row: 1,
  //     col: 1,
  //   },
  // ];
  return (
    <>
      <header className="header-dept">
        <h2>Departamentos</h2>
      </header>
      <main className="main-dept">
        <img src={imgDepartments} alt="Imagen de departamentos" />
        <div className="parent">
          <div className="div1 floor"> 8</div>
          <div className="div2 floor"> 7</div>
          <div className="div3 floor"> 6</div>
          <div className="div4 floor"> 5</div>
          <div className="div5 floor"> 4</div>
          <div className="div6 floor"> 3</div>
          <div className="div7 floor"> 2</div>
          <div className="div8 floor"> 1</div>
          <div className="div9"></div>
          <div className="div10 bigger">11</div>
          <div className="div11"></div>
          <div className="div12 bigger">12</div>
          <div className="div13"></div>
          <div className="div14 bigger">09</div>
          <div className="div15 normal">10</div>
          <div className="div16 normal">08</div>
          <div className="div17"></div>
          <div className="div18 bigger">07</div>
          <div className="div19 normal">05 </div>
          <div className="div20 normal">06 </div>
          <div className="div21 normal">04 </div>
          <div className="div22 normal">03 </div>
          <div className="div23 normal">01 </div>
          <div className="div24 normal">02 </div>
        </div>
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
