import "./styles/departments.css";

import React from "react";

import imgDepartments from "../assets/img/render-principal-edificio.jpg";

import { footerData, units } from "../utils/variables.js";

const Departments = () => {
  return (
    <>
      <header className="header-dept">
        <h2>Departamentos</h2>
      </header>
      <main className="main-dept">
        <img src={imgDepartments} alt="Imagen de departamentos" />
        <div className="parent">
          {[8, 7, 6, 5, 4, 3, 2, 1].map((floor, index) => (
            <React.Fragment key={`floor-${index}`}>
              {/* Mostrar el número de piso */}
              <div className="floor">{floor}</div>

              {/* Mostrar las unidades correspondientes a ese piso */}
              {units
                .filter((unit) => unit.floor.includes(floor))
                .map((unit) => (
                  <div
                    key={`unit-${unit.dept}`}
                    className={`unit ${
                      unit.row === 2 || unit.col === 2 ? "bigger" : "normal"
                    }`}
                    style={{
                      gridRow: `span ${unit.row}`,
                      gridColumn: `span ${unit.col}`,
                      width: "100%",
                      cursor: "pointer",
                      transition: "all .4s",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = unit.color;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "";
                    }}
                    onClick={() => {
                      window.open(unit.file, "_blank");
                    }}
                  >
                    <h4 className={unit.avaible ? "" : "no-stock"}>
                      {unit.dept}
                    </h4>
                    <label>{unit.avaible ? "" : "no disponible"}</label>
                    <div
                      className="circle-unit"
                      style={{ backgroundColor: unit.color }}
                    ></div>
                  </div>
                ))}
            </React.Fragment>
          ))}
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
