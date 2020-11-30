import React from "react";

import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import api from "../axios/axios";

class Registro1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NombreCompleto: "",
      NombreUsuario: "",
      FechaNacimiento: ""
    };
    this.Register = this.Register.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  Register(evento) {
    evento.preventDefault();
    api
      .post("usuario", {
        NombreCompleto: this.state.NombreCompleto,
        NombreUsuario: this.state.NombreUsuario,
        FechaNacimiento: this.state.FechaNacimiento
      })
      .then((respuesta) => {
        this.props.history.push("Registro2");
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
      <div className="Registro1">
        <div className="menu1">
          <Navbar expand="lg" variant="dark">
            <Container>
              <Navbar.Brand href="/">Registrate</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        <Container className="text-center mt-2">
          <form className="form-signin mt-4 py-1">
            <label for="inputName" className="sr-only">
              Nombre
            </label>
            <input
              type="name"
              id="inputName"
              className="form-control"
              placeholder="Nombre"
              required=""
              autofocus=""
            />
            <label for="inputNameUser" className="sr-only">
              Nombre de usuario
            </label>
            <input
              type="nameUser"
              id="inputNameUser"
              className="form-control"
              placeholder="Nombre de usuario"
              required=""
            />
            <label for="inputBirth" className="sr-only">
              Fecha de nacimiento
            </label>
            <input
              type="birth"
              id="inputBirth"
              className="form-control"
              placeholder="Fecha de nacimiento"
              required=""
            />
            <div className="checkbox mb-3"></div>
            <button
              className="btn btn-lg Boton1 btn-block mt-1 mb-3"
              type="submit"
              onClick={() => this.props.history.push("/Registro2")}
            >
              Registrarse
            </button>
            <p className="mb-3 text-muted py-5"> © Quality Travel, 2020</p>
          </form>
        </Container>
      </div>
    );
  }
}
export default withRouter(Registro1);
