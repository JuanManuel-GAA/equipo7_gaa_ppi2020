import React from "react";
import "../style/Comentarios.css";
import Menu2 from "./Menu2";
import { withRouter } from "react-router-dom";

import api from "../axios/axios";

class Comentarios extends React.Component {
  state = {
    calificacion: []
  };
  componentDidMount() {
    api.get(`parque_calificado`).then((res) => {
      const calificacion = res.data;
      this.setState({ calificacion });
    });
  }

  render() {
    return (
      <div className="">
        <Menu2 />
        <div className="row comentarios justify-content-center">
          <div className="col-10">
            <br />
            return(
            <div className="media">
              <img
                src="./imagenes_PPI/Playa.jpg"
                width="64"
                height="64"
                alt=""
              />
              <div className="media-body">
                <p className="nombre">
                  Fernando <span>6:47pm, Ayer</span>
                </p>
                <p className="comentario">
                Excelente lugar para divisar todo el centro de medellín y la
                zona Sur del Valle de Aburrá.
                </p>
              </div>
            </div>
            );
            <br />

            <div className="media">
              <img
                src="./imagenes_PPI/Room.jpg"
                width="64"
                height="64"
                alt=""
              />
              <div className="media-body">
                <p className="nombre">
                  Karen Arango <span>8:30pm, Hoy</span>
                </p>
                <p className="comentario">
                  El cerro pan de azúcar es un lugar excelente el cual se puede
                  ver desde casi cualquier parte de la ciudad, tiene hermosas
                  vistas y muy buenas rutas de acceso inclusive ya puedes ir por
                  medio de el tranvía y luego metro cable en la estación
                  Miraflores. Tiene hermosos senderos, ideal para disfrutar con
                  amigos o familia.
                </p>
              </div>
            </div>

            <br />

            <div className="media">
              <img
                src="./imagenes_PPI/Rocas.jpg"
                width="64"
                height="64"
                alt=""
              />
              <div className="media-body">
                <p className="nombre">
                  Juan Pablo <span>Hace 5 días</span>
                </p>
                <p className="comentario">
                  Ven y disfruta de un lugar en el cual puedes encontrar varios
                  rincones los cuales pueden ser mágicos. Disfruta de paz,
                  tranquilidad, aire puro. Aparte de una majestuosa vista a la
                  ciudad
                </p>
              </div>
            </div>

            <br />

            <div className="media">
              <img
                src="./imagenes_PPI/Egipto.jpg"
                width="64"
                height="64"
                alt=""
              />
              <div className="media-body">
                <p className="nombre">
                  José García <span>Hace un mes</span>
                </p>
                <p className="comentario">
                  Desde la cima de logra una maravillosa vista de la ciudad.
                  Tiene caminos preciosos y lugares para fotos muy buenos
                </p>
              </div>
            </div>

            <br />

            <div className="media">
              <img
                src="./imagenes_PPI/Foto.jpg"
                width="64"
                height="64"
                alt=""
              />
              <div className="media-body">
                <p className="nombre">
                  Luisa <span>Hace una semana</span>
                </p>
                <p className="comentario">
                  Es un lugar cómodo para conectar con la naturaleza. Cerca del
                  centro de la ciudad y de fácil acceso. Se nota que es muy
                  concurrido y los fines se semana por la mañana van muchas
                  personas a realizar actividad física. Al parecer lo están
                  cuidando para que las personas respeten la naturaleza, pero
                  falta mucha educación.
                </p>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Comentarios);
