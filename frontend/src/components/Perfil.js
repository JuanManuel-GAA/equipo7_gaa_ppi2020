import React from "react";
import "../style/Perfil.css";
import Menu2 from "./Menu2";
import { withRouter } from "react-router-dom";

import api from "../axios/axios";

class Perfil extends React.Component {
  state = {
    usuarios: []
  };
  componentDidMount() {
    api.get(`usuario`).then((res) => {
      const usuarios = res.data;
      this.setState({ usuarios });
    });
  }
  render() {
    return (
      <div className="Perfil">
        <Menu2 />
        <div className="py-2">
          <form className="">
            <button
              type="button"
              className="btn boton2 mb-2"
              onClick={() => this.props.history.push("/ParquesGuardados")}
            >
              Parques guardados
            </button>
            {this.state.usuarios.map((usuario, index) => {
              return (
                <div className="py-3">
                  <button
                    type="button"
                    className="btn boton2 mb-5 "
                    onClick={() =>
                      this.props.history.push({
                        pathname: "/PerfilEdit",
                        state: { infoUsuario: usuario }
                      })
                    }
                  >
                    Editar perfil
                  </button>
                </div>
              );
            })}

            <div>
              <center>
                <div className="avatar mt-5 mb-5">
                  <img
                    src="./imagenes_PPI/avatar.png"
                    className="avatar"
                    alt="avatar"
                  />
                </div>
                {this.state.usuarios.map((usuario, index) => {
                  return (
                    <div className="Nombre mt-0">
                      <h3>
                        {usuario.nombre} {usuario.apellidos}
                      </h3>
                      <h4>{usuario.pais_origen}</h4>
                    </div>
                  );
                })}
                <div className="parques">
                  <div className="Izquierda">15 Parques guardados</div>
                  <div className="Derecha"> 10 parques visitados</div>
                </div>
              </center>
              <div className="segunda">
                <div id="abajo">
                  <img
                    src="./imagenes_PPI/CerroPanAzucar1.jpg"
                    className="cerro"
                    alt="cerro"
                  />
                </div>
                <div id="cali">
                  <h5>Cerro pan de azúcar</h5>
                  <h5>
                    Calificación 5{" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-star-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </h5>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Perfil);
