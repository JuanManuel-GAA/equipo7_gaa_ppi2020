import React from "react";
import { Button, Navbar, Form, FormControl } from "react-bootstrap";
import "../style/Parques1Edit.css";
import { withRouter } from "react-router-dom";
import Menu2 from "./Menu2";

const Parques1Edit = (props) => {
  const { history } = props;
  return (
    <div className="Parques1Edit">
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
              <a title="" href="/">
                <img
                  className="buscar "
                  src="./imagenes_PPI/lupita.png"
                  alt="Los Tejos"
                />
              </a>
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
        <button
          className="btn play"
          onClick={() => history.push("/Parques2Edit")}
        >
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
      <Button className="Boton2 mt-1"> Calificar </Button>{" "}
      <div className="comentario1">
        <Form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1 ">
              Comentario:
              <img
                className="editar"
                src="./imagenes_PPI/editar.png"
                alt="Los Tejos"
              />
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
            ></textarea>
            <div className="leer">
              <a title="" href="/">
                Leer más{" "}
              </a>
            </div>
            <label for="exampleFormControlTextarea1"></label>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default withRouter(Parques1Edit);
