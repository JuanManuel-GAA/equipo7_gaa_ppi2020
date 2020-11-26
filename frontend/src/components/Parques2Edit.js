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
              </div>
              </div>
</div>
  );
};
export default withRouter(Parques2Edit);