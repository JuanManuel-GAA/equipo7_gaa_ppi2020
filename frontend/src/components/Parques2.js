import React from "react";
import Menu2 from "./Menu2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import "../style/Parques2.css";

const Parques2 = (props) => {
  const { history, location } = props;
  return (
    <div className="Parques2">
      <Menu2 />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
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
          <div className="carousel-item active ">
            <img
              className="d-block w-100"
              src="./imagenes_PPI/CerroPanAzucar8.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./imagenes_PPI/CerroPanAzucar5.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./imagenes_PPI/CerroPanAzucar6.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./imagenes_PPI/CerroPanAzucar7.jpg"
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
      <h3 className="text-center mb-3">{location.state.infoParque.nombre}</h3>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Información de transporte
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <h2 className=" contenido m-0">
                {location.state.infoParque.recomendaciones}.{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Historia
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <h2 className="contenido">
                {location.state.infoParque.historia}
              </h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <p class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Recomendaciones
              </button>
            </p>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <h2 className="contenido">
              {" "}
              {location.state.infoParque.recomendaciones}
            </h2>
          </div>
          <div className="text-center">
            <button className="btn mapa">
              <FontAwesomeIcon icon={["fas", "map-marked-alt"]} />
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Parques2);
