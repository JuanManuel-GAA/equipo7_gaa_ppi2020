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
              
              </div>
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
        </div>

  );
};
export default withRouter(Parques2Edit);