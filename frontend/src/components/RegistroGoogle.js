import React from "react";
import { withRouter } from "react-router-dom";

const RegistroGoogle = (props) => {
  const { history } = props;
  return (
    <div className="RegistroGoogle">
      <div className="text-center ">
        <div className="col-sm-8 main-section mt-0">
          <img
            className="Icon2 m-0"
            src="./imagenes_PPI/IconGoogle2.png"
            alt="Google"
          />
          <h5 className="mb-3">Registrate con tu cuenta de Google</h5>
          <div className="modal-content user-img col-13  mt-1 mr-1  mb-4">
            <img
              className=""
              src="./imagenes_PPI/IconGoogle1.png"
              alt="Google"
            />

            <form className="col-12" method="get">
              <div className="form-group" id="user-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo electrónico"
                  name="username"
                />
                <div className="form-group" id="contrasena-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn Boton1"
                  onClick={() => history.push("/Parques1")}
                >
                  Registrarse
                </button>
              </div>
            </form>

            <div className="col-12 forgot">
              <a href="/">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RegistroGoogle);
