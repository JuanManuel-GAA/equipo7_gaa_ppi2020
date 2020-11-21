import React from "react";
import "../style/IniciarFacebook.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu1 } from "./Menu1";
import { withRouter } from "react-router-dom";

const RegistroFacebook = (props) => {
  const { history } = props;
  return (
    <div>
      <Menu1 />
      <div className="ContinuarFacebook">
        <div className="IconFacebook2 mt-2">
          <img
            className="IconFacebook2 mt-1"
            src="./imagenes_PPI/IconFacebook2.png"
            alt="Facebook logo"
          />
        </div>
        <div className="text-center">
          <h5 className="mb-3 mt-3">Continuar como Juan Morales</h5>
          <div className="aviso1 mt-5">
            <h6 className="gris">
              <p>
                Quality Travel recibirá <br /> su perfil público
              </p>
            </h6>
          </div>

          <div>
            <h6 className="negro">
              <FontAwesomeIcon icon={["fas", "edit"]} /> Leer más
            </h6>
          </div>
        </div>

        <div>
          <div className="btn">
            <button
              type="button"
              className="btn mt-4"
              onClick={() => history.push("/Parques1")}
            >
              Continuar
            </button>
          </div>

          <br />
          <br />

          <div className="negro2">
            <p>
              <FontAwesomeIcon icon={["fas", "lock"]} /> Esto no permite que la
              aplicación <br /> publique en Facebook
            </p>
          </div>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default withRouter(RegistroFacebook);
