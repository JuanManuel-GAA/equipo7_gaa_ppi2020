import React from "react";
import "../style/Inicio1.css";
import { withRouter } from "react-router-dom";

const Inicio1 = (props) => {
  const { history } = props;
  return (
    <div className="Inicio1 mt-3 mb-2">
      <img className="Logo1" src="./imagenes_PPI/Logo1.png" alt="Logo" />
      <button
        className="Boton2 py-2 btn"
        onClick={() => history.push("/IniciarSesion")}
      >
        {" "}
        Iniciar sesión{" "}
      </button>
      <button
        className="Boton2 py-2 btn"
        onClick={() => history.push("/Registro1")}
      >
        {" "}
        Registrarse{" "}
      </button>
    </div>
  );
};
export default withRouter(Inicio1);
