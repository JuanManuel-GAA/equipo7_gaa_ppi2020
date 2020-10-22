import React from "react";
import { withRouter } from "react-router-dom";
import "../style/Menu2.css";


const Menu2 = (props) => {
  const { history } = props;
  return (
    <div className="Menu2">
      <nav className="navbar navbar-dark ">
        <button className="Back btn" 
        onClick={()=> history.goBack()} >
          <img
            className="mr-3"
            src="./imagenes_PPI/IconBack.png"
            width="40"
            height="40"
            alt="Logo"
            loading="lazy"
          />
         Quality Travel
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="true"
          aria-label="Navegación de palanca"
          onClick={()=>history.goBack()}
        >
          
          <span>
          
            <img
              src="./imagenes_PPI/Logo2.png"
              width="50"
              height="50"
              alt="Logo"
              loading="lazy"
             /> 
          </span>
        </button>
      </nav>
    </div>
  );
};
export default withRouter(Menu2);