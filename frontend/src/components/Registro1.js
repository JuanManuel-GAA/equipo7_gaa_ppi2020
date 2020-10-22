import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Registro1 = (props) => {
  const { history } = props;
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
            Nombre completo
          </label>
          <input
            type="name"
            id="inputName"
            className="form-control"
            placeholder="Nombre completo"
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
            onClick={() => history.push("/Registro2")}
          >
            Registrarse
          </button>
          <br></br>
          <button
            className="btn btn-lg Boton1 btn-block"
            type="submit"
            onClick={() => history.push("/IniciarFacebook")}
          >
            <img
              className="Icon"
              src="./imagenes_PPI/IconFacebook1.png"
              alt="Facebook"
            />
            Registrarse con Facebook
          </button>
          <button
            className="btn btn-lg Boton1 btn-block"
            type="submit"
            onClick={() => history.push("/RegistroGoogle")}
          >
            <img
              className="Icon"
              src="./imagenes_PPI/IconGoogle1.png"
              alt="Google"
            />
            Registrarse con Google
          </button>
          <p className="mb-3 text-muted py-5"> © Quality Travel, 2020</p>
        </form>
      </Container>
    </div>
  );
};

export default withRouter(Registro1);
