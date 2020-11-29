import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "../style/IniciarSesion.css";
import { withRouter } from "react-router-dom";
import api from "../axios/axios";

class IniciarSesion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      contrasena: ""
    };
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  login(evento) {
    evento.preventDefault();
    api
      .post("usuario/login", {
        correo: this.state.correo,
        contrasena: this.state.contrasena
      })
      .then((respuesta) => {
       
        localStorage.setItem("idUsuario", respuesta.data.idUsuario);
        this.props.history.push("/Parques1");
      });
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
      <div className="IniciarSesion">
        <div className="menu3">
          <Navbar expand="lg" variant="dark" bg="">
            <Container>
              <Navbar.Brand href="/">Iniciar sesión</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        <Container className="text-center">
          <form onSubmit={this.login} className="form-signin mt-5 py-4">
            <label for="inputEmail" className="sr-only">
              {" "}
              Correo electrónico
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Correo electrónico"
              required=""
              autofocus=""
              name="correo"
              onChange={this.handleInputChange}

            />
            <label for="inputPassword" className="sr-only">
              Contraseña
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Contraseña"
              required=""
              name="contrasena"
              onChange={this.handleInputChange}

            />
            <div className="checkbox mb-3"></div>
            <button
              className="btn btn-lg Boton1 btn-block mt-0 mb-2"
              type="submit"
            >
              Iniciar sesión
            </button>
            <br></br>

            <button
              className="btn btn-lg Boton1 btn-block mt-5 mb-2"
              onClick={() => this.props.history.push("/Registro1")}
            >
              {" "}
              Registrarse{" "}
            </button>
            <p className="mb-3 py-5 text-muted"> © Quality Travel, 2020</p>
          </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(IniciarSesion);
