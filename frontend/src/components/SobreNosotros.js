import React from "react";
import "../style/SobreNosotros.css";
import { withRouter } from "react-router-dom";

import { Menu1 } from "./Menu1";

const SobreNosotros = () => {
  return (
    <div className="SobreNosotros">
      <Menu1 />
      <h1 className="T_p mt-5 mb-5"> PROGRAMADORES </h1>
      <div className="nosotros">
        <div className="Des" id="M">
          <img
            className="Fto"
            src="./imagenes_PPI/Maricela_Botero.jpg"
            alt=""
          ></img>
        </div>
        <div className="Des" id="J">
          <img
            className="Fto"
            src="./imagenes_PPI/Manuel_Morales.png"
            alt=""
          ></img>
        </div>
        <div className="Des" id="C">
          <img
            className="Fto"
            src="./imagenes_PPI/Camilo_Marin.jpg"
            alt=""
          ></img>
        </div>
        <div className="Des" id="L">
          <img
            className="Fto"
            src="./imagenes_PPI/Leisy_Vasquez.jpg"
            alt=""
          ></img>
        </div>
        <div className="Des" id="S">
          <img
            className="Fto"
            src="./imagenes_PPI/Samuel_Sanchez.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SobreNosotros);
