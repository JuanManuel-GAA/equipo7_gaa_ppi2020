import React from "react";
import Menu2 from "./Menu2";
import "../style/Parques2.css";
import "../style/Recomendaciones.css";
import { withRouter } from "react-router-dom";

const Parques2 = (props) => {
  const { history } = props;
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
          <div className="carousel-item active">
            <img
              className="d-block w-100  "
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
      <h3 className="text-center mb-3">Cerro Pan de Azucar</h3>
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
                Precio pasaje: 5.000<br></br>Linea A-San Antonio<br></br>Linea
                AT-Miraflores<br></br>Linea N-Trece de Noviembre
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
                En el siglo XVII el cerro fue uno de los primeros contactos de
                Medellín con el mundo, este camino se haci­a llamar el camino de
                piedras blancas que llevaba directo al rio magdalena, a partir
                de este camino se crearon los primeros barrios vecinos, como lo
                es en el caso del barrio Llanaditas el cual fue creado en 1950.{" "}
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
            <div class="card-body">
              <h1 className="titulo">Tener vestimenta cómoda</h1>
              <h2 className="contenido">
                Ropa ancha, sudadera, zapatos cómodos.
              </h2>
              <div>
                <h1 className="titulo">Llevar buena bebida</h1>
                <h2 className="contenido">Agua, jugos y bebidas saludables.</h2>
              </div>

              <h1 className="titulo">Llevar buena comida</h1>
              <h2 className="contenido">
                Un buen almuerzo, un bocadillo, o una buena comida que te quite
                el hambre
              </h2>
              <div>
                <h1 className="titulo">Acompañantes</h1>
                <h2 className="contenido">
                  Amigos, padres, familia, son buenos para disfrutar mejor la
                  experiencia.
                </h2>
              </div>
              <h1 className="titulo">Tener un buen estado físico</h1>
              <h2 className="contenido">
                Necesitas tener resistencia para los largos recorridos que hay
                en el camino
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Parques2);
