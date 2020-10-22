import React from "react";
import Menu2 from "./Menu2";
import "../style/Parques2.css";
import { withRouter } from "react-router-dom";

const Parques2 = (props) => {
  const { history } = props;
  return (
    <div className="Parques2">
      <Menu2 />
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-2"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="carousel  "
              src="./imagenes_PPI/CerroPanAzucar1.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel "
              src="./imagenes_PPI/CerroPanAzucar2.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel"
              src="./imagenes_PPI/CerroPanAzucar3.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="carousel"
              src="./imagenes_PPI/CerroPanAzucar4.jpg"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Siguiente</span>
        </a>
      </div>
      <h3 className="text-center mb-3">Cerro Pan de Azucar</h3>
      <div className="container-fluid text-center">
        <p className="Transporte1 m-0">Precio pasaje: 5.000</p>
        <p className="Transporte2 m-0">Linea A-San Antonio</p>
        <p className="Transporte1 m-0">Linea AT-Miraflores</p>
        <p className="Transporte2 m-0">Linea N-Trece de Noviembre</p>

        <div className="Botones">
          <button
            type="button"
            className="btn Boton4 mr-4 inline-flex"
            onClick={() => history.push("/Mapa1")}
          >
            Mapa
          </button>
          <button type="button" className="btn inline-flex" onClick={()=> history.push("/Historia1")}>
            <img
              className="Libro ml-3 mr-4"
              src="./imagenes_PPI/IconLibro.png"
              alt="Libro"
            />
          </button>
          <button type="button" className="btn Boton4 inline-flex" onClick={()=> history.push("/Recomendaciones")}>
            Recomendaciones
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Parques2);
