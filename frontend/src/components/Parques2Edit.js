import React from "react";
import { withRouter } from "react-router-dom";
import "../style/Parques2Edit.css";
import Menu2 from "./Menu2";

import api from "../axios/axios";

class Parques2Edit extends React.Component {
  state = {
    parques2: []
  };

  componentDidMount() {
    api.get(`parque`).then((res) => {
      const parques2 = res.data;
      this.setState({ parques2 });
    });
  }
  peticionesPost = async () => {
    await api.post(`parque`, this.state.parques2).then((res) => {
        this.modalInsertar();
        this.componentDidMount();
    });
}

peticionesPut = () => {
  api.put( `parque` + this.state.parques2.ID, this.state.parques2).then((res) => {
      //this.modalInsertar();
      this.componentDidMount();
  });
}

PeticionesDelete = () => {
  api.delete(`parque` + this.state.parques2.ID).then((res) => {
      this.setState({ modalEliminar: false });
      this.componentDidMount();
  });
}

handleChange= async e=>{
  e.persist();
  await this.setState({
    form:{
      ...this.state.parques2,
      [e.target.name]: e.target.value
    }
  });
  console.log(this.state.parques2)
  }
 
  render() {
    const {parques2}=this.state;

    return (
    <div className="Parques2Edit">
      <Menu2 />
      <div className=" text-center py-5">
      <div className="accordion" id="accordionExample">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Tabla de información
            </button>
          </h2>
        </div>

        
         
             <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
          <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Longitud</th>
                  <th scope="col">Latitud</th>
                </tr>
              </thead>
              <tbody>
              {this.state.parques2.map((parque, index) => {
           return (
                <tr>
                  <th scope="row">{parque.ID}</th>
                  <td>{parque.nombre}</td>
                  <td>{parque.longitud}</td>
                  <td>{parque.latitud}</td>
                </tr>
                 ); 
                })}
              </tbody>
            </table>
          </div>
        </div>
          

        
          <div class="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapse"
                >
                  Insertar parque
                </button>
              </h2>
            </div>

            <div
              id="collapseTwo"
              className="collapse show"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <h3>
                  <label for="inputName" className="sr-only">
                    Nombre parque
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Nombre parque"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Comentario
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Comentario"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputEmail" class="sr-only">
                    Transporte
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Transporte"
                    required=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Recomendaciones
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Recomendaciones"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Historia
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Historia"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Dirección
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Dirección"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Longitud
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Longitud"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Latitud
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Latitud"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 1
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Imagen 1"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 2
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Imagen 2"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 3
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Imagen 3"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 4
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Imagen 4"
                    required=""
                    autofocus=""
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 5
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Imagen 5"
                    required=""
                    autofocus=""
                  />
                </h3>
                <br />
                <button
                  type="button"
                  className="Boton3 btn"
                  onClick={()=>this.peticionesPost()}
                >
                  Insertar
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Actualizar Parque
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              
              <div className="card-body">
                <h3>
                  <label for="inputName" className="sr-only">
                    ID
                  </label>
                  <input
                    type="name"
                    name="ID"
                    id="ID"
                    className="form-control"
                    placeholder="Ingrese ID"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.ID:''}
                
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Nombre parque
                  </label>
                  <input
                    type="name"
                    name="nombre"
                    id="nombre"
                    className="form-control"
                    placeholder="Nombre parque"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.nombre:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Comentario
                  </label>
                  <input
                    type="name"
                    name="comentario"
                    id="comentario"
                    className="form-control"
                    placeholder="Comentario"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.comentario:''}
                  />
                </h3>
                <h3>
                  <label for="inputEmail" class="sr-only">
                    Transporte
                  </label>
                  <input
                    type="name"
                    name="transporte"
                    id="transporte"
                    className="form-control"
                    placeholder="Transporte"
                    required=""
                    onChange={this.handleChange} value={ parques2 ? parques2.transporte:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Recomendaciones
                  </label>
                  <input
                    type="name"
                    name="recomendaciones"
                    id="recomendaciones"
                    className="form-control"
                    placeholder="Recomendaciones"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.recomendaciones:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Historia
                  </label>
                  <input
                    type="name"
                    name="historia"
                    id="historia"
                    className="form-control"
                    placeholder="Historia"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.historia:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Dirección
                  </label>
                  <input
                    type="name"
                    name="direccion"
                    id="direccion"
                    className="form-control"
                    placeholder="Dirección"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.direccion:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Longitud
                  </label>
                  <input
                    type="name"
                    name="longitud"
                    id="longitud"
                    className="form-control"
                    placeholder="Longitud"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.longitud:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Latitud
                  </label>
                  <input
                    type="name"
                    name="latitud"
                    id="latitud"
                    className="form-control"
                    placeholder="Latitud"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.latitud:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 1
                  </label>
                  <input
                    type="name"
                    name="imagen1"
                    id="imagen1"
                    className="form-control"
                    placeholder="Imagen 1"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.imagen1:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 2
                  </label>
                  <input
                    type="name"
                    name="imagen2"
                    id="imagen2"
                    className="form-control"
                    placeholder="Imagen 2"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.imagen2:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 3
                  </label>
                  <input
                    type="name"
                    name="imagen3"
                    id="imagen3"
                    className="form-control"
                    placeholder="Imagen 3"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.imagen3:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 4
                  </label>
                  <input
                    type="name"
                    name="imagen4"
                    id="imagen4"
                    className="form-control"
                    placeholder="Imagen 4"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.imagen4:''}
                  />
                </h3>
                <h3>
                  <label for="inputName" className="sr-only">
                    Imagen 5
                  </label>
                  <input
                    type="name"
                    name="imagen5"
                    id="imagen5"
                    className="form-control"
                    placeholder="Imagen 5"
                    required=""
                    autofocus=""
                    onChange={this.handleChange} value={ parques2 ? parques2.imagen5:''}
                  />
                </h3>
                <br />
                <button
                  type="button"
                  className="Boton3 btn"
                  onClick={()=>this.peticionesPut()}
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left titulo40"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Eliminar Parque
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <h3>
                  <label for="inputName" className="sr-only">
                    ID
                  </label>
                  <input
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Ingrese ID"
                    required=""
                    autofocus=""
                  />
                </h3>
                <br />
                <button
                  type="button"
                  className="Boton3 btn"
                  onClick={() => history.push("/")}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
                 
};
};
export default withRouter(Parques2Edit);