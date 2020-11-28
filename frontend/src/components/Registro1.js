import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";
const url = "http://localhost:3001/api/usuario/";

class Registro1 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalInsertar: false,
      modalEliminar: false,
      form: {
        id: "",
        ID_tipo_usuario: "",
        correo: "",
        nombre_usuario: "",
        pais_origen: "",
        telefono: "",
        contrasena: "",
        sexo: "",
        fecha_nacimiento: "",
        nombre: "",
        apellido: ""
      }
    };
  }
  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  //seleccionar usuario
  seleccionarUsuario = (Registro1) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        ID: Registro1.id,
        ID_tipo_usuario: Registro1.ID_tipo_usuario,
        correo: Registro1.correo,
        nombre_usuario: Registro1.nombre_usuario,
        pais_origen: Registro1.pais_origen,
        telefono: Registro1.telefono,
        contrasena: Registro1.contrasena,
        sexo: Registro1.sexo,
        fecha_nacimiento: Registro1.fecha_nacimiento,
        nombre: Registro1.nombre,
        apellido: Registro1.apellido
      }
    });
  };

  //Petición tipo GET
  peticionesGet = () => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response.data)
        //asignaremos al estado
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Petición tipo POST
  peticionesPost = async () => {
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionesGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Peticiones tipo PUT
  peticionesPut = () => {
    axios
      .put(url + this.state.form.id, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionesGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  PeticionesDelete = () => {
    axios
      .delete(url + this.state.form.id)
      .then((response) => {
        this.setState({ modalEliminar: false });
        this.peticionesGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //carpturar lo que el usuario inserte en las cajas de texto
  //como se ejecuta en segundo plano debe ser asíncrono
  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  };

  //primer ciclo de vida de los componentes

  componentDidMount() {
    this.peticionesGet();
  }

  render() {
    const { form } = this.state;
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
              onClick={() => form.push("/Registro2")}
            >
              Registrarse
            </button>
            <br></br>
            <button
              className="btn btn-lg Boton1 btn-block"
              type="submit"
              onClick={() => form.push("/IniciarFacebook")}
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
              onClick={() => form.push("/RegistroGoogle")}
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
  }
}
export default withRouter(Registro1);
