import React from "react";
import "../style/Comentarios.css";
import Menu2 from "./Menu2";
import { withRouter } from "react-router-dom";

import api from "../axios/axios";

class Comentarios extends React.Component {
  state = {
    calificacion: [],
  };
  componentDidMount() {
    api.get(`parque_calificado`).then((res) => {
      const calificacion = res.data;
      this.setState({ calificacion });
    });
  }

  render() {
    return (
      <div className="Comentarios">
        <Menu2 />
        {this.state.calificacion.map((parque_calificado, index) => {
          return (
            <div className="row comentarios justify-content-center">
              <div className="col-10">
                <br />
                <div className="media">
                  <img
                    src="./imagenes_PPI/Avatar2.jpg"
                    width="64"
                    height="64"
                    alt=""
                  />
                  <div className="media-body">
                    <p className="nombre">
                      Usuario {parque_calificado.ID_usuario}
                    </p>

                    <p className="comentario">{parque_calificado.comentario}</p>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Comentarios);
