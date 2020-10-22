import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../style/Parques1.css";

import Menu2 from "./Menu2";

const Parques1 = (props) => {
  const { history } = props;
  return (
    <div className="Parques1">
      <Menu2 />
      <Navbar className="bg-light">
        <div className="w-100">
          <Form>
            <FormControl
              type="text"
              placeholder="Buscar parque"
              class="form-group col-md-10"
            />
            <div>
              <Link title="" to="/Parques1Edit">
                <img
                  className="buscar "
                  src="./imagenes_PPI/lupita.png"
                  alt="Los Tejos"
                />
              </Link>
            </div>
          </Form>
        </div>
      </Navbar>
      <img
        className="cerro2"
        src="./imagenes_PPI/CerroPanAzucar1.jpg"
        alt="Cerro"
      />
      <div className="col-md-4 offset-md-4">
        <button className="btn">
          <img
            className="guardar"
            src="./imagenes_PPI/icono-guardar.PNG"
            alt="guardar"
          />
        </button>
        <button className="btn play" onClick={() => history.push("/Parques2")}>
          <img className="play" src="./imagenes_PPI/play.png" alt="play"></img>
        </button>
      </div>
      <p className="titulo">Cerro Pan de Azúcar</p>
      <div className="col-md-3 offset-md-4">
        <img
          className="star"
          src="./imagenes_PPI/Estrella.png"
          alt="estrella"
        ></img>
        <img
          className="star2"
          src="./imagenes_PPI/Estrella.png"
          alt="estrella"
        ></img>
        <img
          className="star2"
          src="./imagenes_PPI/Estrella.png"
          alt="estrella"
        ></img>
        <img
          className="star2"
          src="./imagenes_PPI/Estrella.png"
          alt="estrella"
        ></img>
        <img
          className="star2"
          src="./imagenes_PPI/Estrella.png"
          alt="estrella"
        ></img>
      </div>
      <button
        className="Boton2 mt-1 btn"
        onClick={() => history.push("/Calificar")}
      >
        {" "}
        Calificar{" "}
      </button>
      <div className="comentario1">
        <Form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1 ">Comentario:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
            ></textarea>
            <div className="leer">
              <Link to="/Comentarios">Leer más</Link>
            </div>
            <label for="exampleFormControlTextarea1"></label>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(Parques1);
