import React from "react";
import "../style/Loading.css";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div className="App">
      
      <div className="Logo2">
      <img src= "./imagenes_PPI/Logo3.png" width="200" height="200"/>
</div>



      <div className="divpadre">
        <div className="divhijo">
          <Spinner color="primary" />
          </div>
      </div>
          
          
        
      <div className="eslogan">
        <h3 className="parrafo">
          Si un buen parque quieres visitar, Quality travel debes buscar
        </h3>
      </div>
    </div>
  );
}

export default Loading;