import React from "react";
import "../style/HistoriaEdit.css";
import { withRouter } from "react-router-dom";

import Menu2 from "./Menu2";
const HistoriaEdit = () => {
  return (
    <div className="HistoriaEdit">
      <Menu2 />
      <div className=" text-center py-5">
        <h2>Editar titulo </h2>
        <input type="text" name="titulo" />
        <br />
        <br />
        <h2>Editar historia </h2>
        <textarea name="comentarios" rows="10" cols="40">
          Escribe aquí{" "}
        </textarea>
        <br />
      </div>
    </div>
  );
};
export default withRouter(HistoriaEdit);
