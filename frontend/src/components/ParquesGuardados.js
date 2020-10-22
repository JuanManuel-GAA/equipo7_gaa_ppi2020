import React from "react";
import { PG } from "../PG.json";
import Menu2 from "./Menu2";
import { withRouter } from "react-router-dom";

const ParquesGuardados = () => {
  return (
    <div>
      <Menu2 />

      <div className=" container text-center">
        <div className="card-deck mb-3 text-center">
          {PG.map((item, index) => {
            return (
              <div key={`Data-${index}`}>
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder:Img"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="45%" y="50%" fill="#eceeef" dy=".3em">
                    {item.Nombre_Parque}
                  </text>
                </svg>
                <div className="card-body">
                  <p className="Definicion">{item.Descripcion}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default withRouter(ParquesGuardados);
