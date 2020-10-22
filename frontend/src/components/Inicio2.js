import React from "react";
import "../style/Inicio2.css";
import { Menu1 } from "./Menu1";


import { withRouter } from "react-router-dom";


const Inicio2 = (props) => {
  const { history } = props;
  return (
    <div className="Inicio2">
      <Menu1 />
      <img className="Logo2" src="./imagenes_PPI/Logo1.png" alt="Logo" />
      <button
      type="button"
      className="Boton3 btn"
      onClick={() => history.push("/Parques1")}
    >
      Parques
    </button>
    </div>
  );
};

export default withRouter(Inicio2);
