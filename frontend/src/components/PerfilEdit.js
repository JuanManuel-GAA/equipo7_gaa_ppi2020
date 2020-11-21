import React from "react";
import Menu2 from "./Menu2";
import "../style/PerfilEdit.css";

import { withRouter } from "react-router-dom";

const PerfilEdit = () => {
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
          <div className="Nombre mt-5">
          <h3> 
          <label for="inputName" className="sr-only">
            Nombre usuario
          </label>
          <input
            type="name"
            id="inputName"
            className="form-control"
            placeholder="Nombre usuario"
            required=""
            autofocus=""
          />
              </h3>
              <h3>
              <label for="inputName" className="sr-only">
            Edad
          </label>
          <input
            type="name"
            id="inputName"
            className="form-control"
            placeholder="Edad"
            required=""
            autofocus=""
          />
           </h3>
           <h3>
              <label for="inputEmail" class="sr-only">
            Correo electrónico
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Correo electrónico"
            required=""
          />
            </h3>
           <h3> 
              <label for="inputName" className="sr-only">
            Cuidad- Municipio
          </label>
          <input
            type="name"
            id="inputName"
            className="form-control"
            placeholder="Ciudad-Municipio"
            required=""
            autofocus=""
          />
            </h3>
            <br/>
            <button
      type="button"
      className="Boton3 btn"
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