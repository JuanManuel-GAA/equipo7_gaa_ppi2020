import React from "react";
import "../style/VerificacionCalificar.css";

import { withRouter } from "react-router-dom";
import Menu2 from "./Menu2";

const VerificacionCalificar = (props) => {
  const { history } = props;
  return (
    <div className="VerificacionCalificar">
      <Menu2 />
      <div className="AlertaE row aling-items-center justify-content-center ">
        <div className="alert alert-secondary text-center" role="alert">
          <h4 className="alert-heading"> ¡Muchas Gracias! </h4>
          <p>Tu calificación se ha enviado satisfactoriamente</p>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => history.push("/Parques1")}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
export default withRouter(VerificacionCalificar);
