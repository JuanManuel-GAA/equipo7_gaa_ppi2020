import React from "react";
import "../style/Historia1.css";
import { withRouter } from "react-router-dom";

import Menu2 from "./Menu2";

const Historia1 = () => {
  return (
    <div className="Historia1">
      <Menu2 />
      <h1 className="titulo3 mt-4 mb-4 text-center">Historia</h1>
      <p className="descripcion mt-2 mr-2 ml-2 mb-2">
        En el siglo XVII el cerro fue uno de los primeros contactos de Medellín
        con el mundo, este camino se haci­a llamar el camino de piedras blancas
        que llevaba directo al rio magdalena, a partir de este camino se crearon
        los primeros barrios vecinos, como lo es en el caso del barrio
        Llanaditas el cual fue creado en 1950.{" "}
      </p>
    </div>
  );
};
export default withRouter(Historia1);
