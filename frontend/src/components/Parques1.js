import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Form, FormControl } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../style/Parques1.css";
import "../style/Calificar.css";

import Menu2 from "./Menu2";

import api from "../axios/axios";

class Parques1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parques: [],
      ID_parque: "",
      calificacion: "",
      comentario: ""
    };
    this.calificar = this.calificar.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    api.get(`parque`).then((res) => {
      const parques = res.data;
      this.setState({ parques });
    });
  }

  calificar(evento) {
    evento.preventDefault();

    api
      .post("parque_calificado", {
        ID_parque: this.state.ID_parque,
        ID_usuario: localStorage.getItem("idUsuario"),
        calificacion: this.state.calificacion,
        comentario: this.state.comentario
      })
      .then((respuesta) => {});
  }

  handleInputChange(evento) {
    const target = evento.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Parques1">
        <Menu2 />
        <Navbar className="bg-light mb-5">
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
        <div>
          {this.state.parques.map((parque, index) => {
            return (
              <div>
                <div className="tarjeta mt-3">
                  <div className="card mt-3">
                    <div className="card-image">
                      <img
                        className="cerro2"
                        src={parque.imagen1}
                        alt="Cerro"
                      />
                    </div>
                    <div className="col-md-4 offset-md-4">
                      <button className="btn guardar">
                        {/* ICONO GUARDAR */}
                        <FontAwesomeIcon icon={["fas", "bookmark"]} />
                      </button>
                      <button
                        className="btn play"
                        onClick={() =>
                          this.props.history.push({
                            pathname: "/Parques2",
                            state: { infoParque: parque }
                          })
                        }
                      >
                        <FontAwesomeIcon icon={["fas", "play-circle"]} />
                      </button>
                      {/* ICONO PLAY */}
                    </div>
                    <h4 className="titulo">{parque.nombre}</h4>

                    <div className="rating" data-rating="2">
                      <div className="fa fa-star rating-star"></div>

                      <span className="fa fa-star rating-star"></span>

                      <span className="fa fa-star rating-star"></span>

                      <span className="fa fa-star rating-star"></span>

                      <span className="fa fa-star rating-star"></span>
                    </div>


                
                    <button
                      type="button"
                      class="Boton2 btn-primary btn"
                      data-toggle="modal"
                      data-target="#Estrellas"
                      onClick={() => this.setState({ ID_parque: parque.ID })}
                    >
                      Calificar
                    </button>
                    <div className="comentario1 mb-4 mt-3">
                      <Form>
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1 ">
                            Comentario:
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="1"
                          ></textarea>
                          <div className="leer">
                            <Link
                              to="/Comentarios"
                              onClick={() =>
                                this.props.history.push({
                                  pathname: "/Comentarios",
                                  
                                })
                              }
                            >
                              Leer más
                            </Link>
                          </div>
                          <label for="exampleFormControlTextarea1"></label>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
                <div
                  class="modal fade"
                  id="Estrellas"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div className="">
                          <h1 className="com">
                            Tu valoración es muy importante para nosotros
                          </h1>

                          <form onSubmit={this.calificar}>
                            <div className="container container1">
                              <div className="post">
                                <div className="text">
                                  ¡Gracias por valorarlo!
                                </div>

                                <div className="edit">BACK</div>
                              </div>
                              <div className="star-widget">
                                <input
                                  type="radio"
                                  name="calificacion"
                                  id="rate-5"
                                  value="5"
                                  onChange={this.handleInputChange}
                                />
                                <label for="rate-5">
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                </label>
                                <input
                                  type="radio"
                                  name="calificacion"
                                  id="rate-4"
                                  value="4"
                                  onChange={this.handleInputChange}
                                />
                                <label htmlFor="rate-4">
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                </label>
                                <input
                                  type="radio"
                                  name="calificacion"
                                  id="rate-3"
                                  value="3"
                                  onChange={this.handleInputChange}
                                />
                                <label for="rate-3">
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                </label>
                                <input
                                  type="radio"
                                  name="calificacion"
                                  id="rate-2"
                                  value="2"
                                  onChange={this.handleInputChange}
                                />
                                <label for="rate-2">
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                </label>
                                <input
                                  type="radio"
                                  name="calificacion"
                                  id="rate-1"
                                  value="1"
                                  onChange={this.handleInputChange}
                                />
                                <label for="rate-1">
                                  <FontAwesomeIcon icon={["fas", "star"]} />
                                </label>
                                <header></header>
                                <div className="textarea">
                                  <textarea
                                    name="comentario"
                                    onChange={this.handleInputChange}
                                    cols="30"
                                    placeholder="Describe tu experiencia.."
                                  ></textarea>
                                </div>
                                <div className="btn1">
                                  <button
                                    type="submit"
                                    class="BR"
                                    data-toggle="modal"
                                    data-target="#Calificar"
                                  >
                                    PUBLICAR
                                  </button>

                                  <div
                                    class="modal fade"
                                    id="Calificar"
                                    tabindex="-1"
                                    role="dialog"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div class="modal-dialog" role="document">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5
                                            class="modal-title"
                                            id="exampleModalLabel"
                                          >
                                            ¡Muchas gracias!
                                          </h5>
                                          <button
                                            type="button"
                                            class="close"
                                            data-dismiss="Estrellas"
                                            aria-label="Close"
                                          >
                                            <span aria-hidden="true">
                                              &times;
                                            </span>
                                          </button>
                                        </div>
                                        <div class="modal-body">
                                          Tu calificación se ha enviado
                                          satisfactoriamente
                                        </div>
                                        <div class="modal-footer">
                                          <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal"
                                            onClick={() =>
                                              this.props.history.push(
                                                "/Parques1"
                                              )
                                            }
                                          >
                                            Cerrar
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Parques1);
