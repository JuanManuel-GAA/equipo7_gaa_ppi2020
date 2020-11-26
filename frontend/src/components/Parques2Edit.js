import React from "react";
import { withRouter } from "react-router-dom";


import Menu2 from "./Menu2";
const Parques2Edit = () => {
  return (
    <div className="Parques2Edit">
      <Menu2 />
      <div className=" text-center py-5">
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
                <tr>
                  <th scope="row">1</th>
                  <td>Cerro pan de azúcar</td>
                  <td>-75.5351811</td>
                  <td>6.2471351</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Parque de los Pies Descalzos</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Parque Natural Cerro El Volador</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Parque Ambiental El Romeral</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="accordion" id="accordionExample">
          <div class="card">
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
                  Insertar parque
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
                  onClick={() => history.push("/")}
                >
                  Añadir
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Actualizar Parque
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
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
                  onClick={() => history.push("/")}
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left titulo40"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Eliminar Parque
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
export default withRouter(Parques2Edit);