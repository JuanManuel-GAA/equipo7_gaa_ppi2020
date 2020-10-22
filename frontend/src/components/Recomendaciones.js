import React from "react";
import "../style/Recomendaciones.css";
import { withRouter } from "react-router-dom";

import Menu2 from "./Menu2";

const Recomendaciones = () => {
  return (
    <div className="Header1">
      <Menu2 />
      <p className="recomendaciones">Recomendaciones</p>
      <h1 className="titulo">Tener vestimenta cómoda</h1>
      <h2 className="contenido">Ropa ancha, sudadera, zapatos cómodos.</h2>
      <div className="fondo">
        <h1 className="titulo">Llevar buena bebida</h1>
        <h2 className="contenido1">Agua, jugos y bebidas saludables.</h2>
      </div>

      <h1 className="titulo">Llevar buena comida</h1>
      <h2 className="contenido">
        Un buen almuerzo, un bocadillo, o una buena comida que te quite el
        hambre
      </h2>
      <div className="fondo">
        <h1 className="titulo">Acompañantes</h1>
        <h2 className="contenido">
          Amigos, padres, familia, son buenos para disfrutar mejor la
          experiencia.
        </h2>
      </div>
      <h1 className="titulo">Tener un buen estado físico</h1>
      <h2 className="contenido">
        Necesitas tener resistencia para los largos recorridos que hay en el
        camino
      </h2>
    </div>
  );
};

export default withRouter(Recomendaciones);
