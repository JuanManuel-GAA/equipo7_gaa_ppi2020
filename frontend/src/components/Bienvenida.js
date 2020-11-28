import React from "react";
import "../style/Bienvenida.css";
import { withRouter } from "react-router-dom";

const Bienvenida = (props) => {
  const { history } = props;
  return (
    <div className="Bienvenida">
      <img className="Logo1" src="./imagenes_PPI/Logo1.png" alt="Logo" />
      <h3 className="titulo1">Bienvenido</h3>
      <br></br>
      <h3 className="titulo1">
        Si a un buen parque quieres llegar, Quality Travel debes buscar
      </h3>
      <button
        type="button"
        className="btn Boton1 mt-1"
        onClick={() => history.push("/IniciarSesion")}      >
        Continuar
      </button>
    </div>
  );
};

export default withRouter(Bienvenida);