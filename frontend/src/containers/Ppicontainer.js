import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Bienvenida  from "../components/Bienvenida";


export default function Ppicontainer1() {
  return (
    <div className="Ppicontainer">
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={Bienvenida} />
          
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}
