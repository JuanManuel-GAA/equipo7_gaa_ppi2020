import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../style/Menu2.css";

const Menu2 = (props) => {
  const { history } = props;
  return (
    <div className="Menu2">
      <nav className="navbar navbar-dark ">
        <button className="Back btn" onClick={() => history.goBack()}>
          <img
            className="mr-3"
            src="./imagenes_PPI/IconBack.png"
            width="40"
            height="40"
            alt="Logo"
            loading="lazy"
          />
          Quality Travel
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Navegación de palanca"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Inicio2">
                Inicio
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Parques1">
                Parques
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/Perfil"
                tabindex="-1"
                aria-disabled="true"
              >
                Mi perfil
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active"
                to="/Objetivo"
                tabindex="-1"
                aria-disabled="true"
              >
                Objetivo
              </Link>
              <Link
                className="nav-link active"
                to="/SobreNosotros"
                tabindex="-1"
                aria-disabled="true"
              >
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default withRouter(Menu2);
