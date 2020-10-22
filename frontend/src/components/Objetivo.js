import React from "react";
import "../style/Objetivo.css";
import { withRouter } from "react-router-dom";

import { Menu1 } from "./Menu1";

const Objetivo = () => {
  return (
    <div className="Objetivo">
      <Menu1 />
      <h1 className="titulo2 py-2 mt-3">Objetivo</h1>

      <h1 className="Descripcion mt-5 mb-5">
        Crear una aplicación web progresiva, enfocada a dispositivos moviles,
        que ayude al usuario a tomar la mejor elección a la hora de visitar los
        parques públicos y privados en el área metropolitana del Valle de
        Aburrá.{" "}
      </h1>
    </div>
  );
};
export default withRouter(Objetivo);
