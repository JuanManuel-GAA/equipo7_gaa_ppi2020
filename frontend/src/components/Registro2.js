import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import api from "../axios/axios";

class Registro2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correoElectonico: "",
      Contrasena: "",
      VerificarContrasena: ""
    };
    this.Register2 = this.Register2.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  Register2(evento) {
    evento.preventDefault();
    api
      .post("usuario/Register2", {
        correoElectonico: this.state.correoElectonico,
        Contrasena: this.state.Contrasena,
        VerificarContrasena: this.state.VerificarContrasena
      })
      .then((respuesta) => {
        this.props.history.push("/IniciarSesion");
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
      <div className="Registro2">
        <div className="menu1 mb-5">
          <Navbar expand="lg" variant="dark">
            <Container>
              <Navbar.Brand href="/">Registrate</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        <Container className="text-center mb-5 mt-5">
          <form onSubmit={this.Register2} className="form-signin mt-4 py-2">
            <label for="inputEmail" class="sr-only">
              Correo electrónico
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Correo electrónico"
              required=""
              onChange={this.handleInputChange}
            />
            <label for="inputPassword" class="sr-only">
              Contraseña
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Contraseña"
              required=""
              onChange={this.handleInputChange}
            />
            <label for="inputVerificationPassword" class="sr-only">
              Verificar contraseña
            </label>
            <input
              type="password"
              id="inputVerificationPassword"
              className="form-control"
              placeholder="Verificar contraseña"
              required=""
              onChange={this.handleInputChange}
            />
            <div className="checkbox mb-3"></div>
            <button
              className="btn btn-lg Boton1 btn-block mt-5 mb-5"
              type="submit"
              onClick={() => this.props.history.push("/IniciarSesion")}
            >
              Registrarse
            </button>
            <br></br>
            <p class=" mt-4 text-muted py-5"> © Quality Travel, 2020</p>
          </form>
        </Container>
      </div>
    );
  }
}
export default withRouter(Registro2);
