import React from "react";
import "../style/RecomendacionesEdit.css";
import { withRouter } from "react-router-dom";
import Menu2 from "./Menu2";

const RecomendacionesEdit = () => {
  return (
    <div className="Header1">
      <Menu2 />
      <p className="recomendaciones">Recomendaciones</p>
      <h1 className="titulo">Tener vestimenta cómoda</h1>
      <h2 className="contenido">Ropa ancha, sudadera, zapatos cómodos.</h2>
      <a href="paginaweb.html">
        <img
          className="lapiz"
          src="./imagenes_PPI/lapiz.png"
          width="25"
          height="20"
          alt="texto alternativo de la imagen"
        />
      </a>
      <div className="fondo">
        <h1 className="titulo">Llevar buena bebida</h1>
        <h2 className="contenido1">Agua, jugos y bebidas saludables.</h2>
      </div>
      <a href="paginaweb.html">
        <img
          className="lapiz"
          src="./imagenes_PPI/lapiz.png"
          width="25"
          height="20"
          alt="texto alternativo de la imagen"
        />
      </a>

      <div className="fondo1"></div>
      <a href="paginaweb.html">
        <img
          className="lapiz"
          src="./imagenes_PPI/mas.png"
          width="25"
          height="20"
          alt="texto alternativo de la imagen"
        />
      </a>
      <div className="fondo">
        <h1 className="titulo">Acompañantes</h1>
        <h2 className="contenido">
          Amigos, padres, familia, son buenos para disfrutar mejor la
          experiencia.
        </h2>
        <a href="paginaweb.html">
          <img
            className="lapiz"
            src="./imagenes_PPI/lapiz.png"
            width="25"
            height="20"
            alt="texto alternativo de la imagen"
          />
        </a>
      </div>
      <div className="fondo1"></div>
      <a href="paginaweb.html">
        <img
          className="lapiz"
          src="./imagenes_PPI/mas.png"
          width="25"
          height="20"
          alt="texto alternativo de la imagen"
        />
      </a>
    </div>
  );
};
export default withRouter(RecomendacionesEdit);
