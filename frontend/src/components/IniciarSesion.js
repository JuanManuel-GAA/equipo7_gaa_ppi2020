import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "../style/IniciarSesion.css";
import { withRouter } from "react-router-dom";

const IniciarSesion = (props) => {
  const { history } = props;
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
        <form className="form-signin mt-5 py-4">
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
          />
          <div className="checkbox mb-3"></div>
          <button
            className="btn btn-lg Boton1 btn-block mt-0 mb-2"
            type="submit"
            onClick={() => history.push("/Inicio2")}
          >
            Iniciar sesión
          </button>
          <br></br>
          <button
            className="btn btn-lg Boton1 btn-block py-2 "
            type="submit"
            onClick={() => history.push("/IniciarFacebook")}
          >
            <img
              className="Icon"
              src="./imagenes_PPI/IconFacebook1.png"
              alt="Facebook"
            />
            Iniciar sesión con Facebook
          </button>
          <button
            className="btn btn-lg Boton1 btn-block py-2"
            type="submit"
            onClick={() => history.push("/IniciarGoogle")}
          >
            <img
              className="Icon"
              alt="Google"
              src="./imagenes_PPI/IconGoogle1.png"
            />
            Iniciar sesión con Google
          </button>
          <p className="mb-3 py-5 text-muted"> © Quality Travel, 2020</p>
        </form>
      </Container>
    </div>
  );
};
export default withRouter(IniciarSesion);
