import React from "react";
import "../style/Calificar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu2 from "./Menu2";
import { withRouter } from "react-router-dom";

const Calificar = (props) => {
  const { history } = props;
  return (
    <div className="">
      <Menu2 />
      <h1 className="com">Tu valoración es muy importante para nosotros</h1>
      <div className="container container1">
        <div className="post">
          <div className="text">¡Gracias por valorarlo!</div>
          <div className="edit">BACK</div>
        </div>
        <div className="star-widget">
          <input type="radio" name="rate" id="rate-5" />
          <label htmlFor="rate-5">
            <FontAwesomeIcon icon={["fas", "star"]} />
          </label>
          <input type="radio" name="rate" id="rate-4" />
          <label htmlFor="rate-4">
            <FontAwesomeIcon icon={["fas", "star"]} />
          </label>
          <input type="radio" name="rate" id="rate-3" />
          <label htmlFor="rate-3">
            <FontAwesomeIcon icon={["fas", "star"]} />
          </label>
          <input type="radio" name="rate" id="rate-2" />
          <label htmlFor="rate-2">
            <FontAwesomeIcon icon={["fas", "star"]} />
          </label>
          <input type="radio" name="rate" id="rate-1" />
          <label htmlFor="rate-1">
            <FontAwesomeIcon icon={["fas", "star"]} />
          </label>

          <form action="/">
            <header></header>
            <div className="textarea">
              <textarea
                cols="30"
                placeholder="Describe tu experiencia.."
              ></textarea>
            </div>
            <div className="btn1">
              <button
                className="BR"
                type="submit"
                onClick={() => history.push("/VerificacionCalificar")}
              >
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Calificar);
