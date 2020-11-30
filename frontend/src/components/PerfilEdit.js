import React from "react";
import Menu2 from "./Menu2";
import "../style/PerfilEdit.css";

import { withRouter } from "react-router-dom";

const PerfilEdit = (props) => {
  const { history, location } = props;
  return (
    <div className="PerfilEdit ">
      <Menu2 />
      <form className="">
        <center>
          <div className="avatar">
            <img
              src="./imagenes_PPI/avatar.png"
              className="avatar mt-3 mb-4"
              alt="avatar"
            />
          </div>
          <br />
          <div className="mt-5">
          <input
              type="text"
              id=""
              className="form-control mb-2"
              placeholder="Correo electrónico"
              value={location.state.infoUsuario.correo}
            />
            <input
              type="email"
              id="inputName"
              className="form-control mb-2"
              placeholder="Nombre usuario"
              value={location.state.infoUsuario.nombre_usuario}
            />

            <input
              type="name"
              id="inputName"
              className="form-control mb-2"
              placeholder="País de origen"
              value={location.state.infoUsuario.pais_origen}
            />

            <input
              type="email"
              id="inputEmail"
              className="form-control mb-2"
              placeholder="Télefono"
              value={location.state.infoUsuario.telefono}
            />

            <input
              type="name"
              id="inputName"
              className="form-control mb-2"
              placeholder="Sexo "
              value={location.state.infoUsuario.sexo}
            />
          
          <input
              type="text"
              id="inputName"
              className="form-control mb-2"
              placeholder="Fecha de nacimiento"
              value={location.state.infoUsuario.fecha_nacimiento}
            />
            <input
              type="name"
              id="inputName"
              className="form-control mb-2"
              placeholder="Nombres"
              value={location.state.infoUsuario.nombre}
            />
            <input
              type="name"
              id="inputName"
              className="form-control mb-5"
              placeholder="Apellidos"
              value={location.state.infoUsuario.apellidos}
            />

            <button
              type="button"
              className="Boton3 btn mt-2"
              onClick={() => history.push("/")}
            >
              Actualizar datos
            </button>
          </div>
        </center>
      </form>
    </div>
  );
};
export default withRouter(PerfilEdit);
