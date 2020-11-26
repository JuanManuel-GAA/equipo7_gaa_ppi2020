import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "../components/App";
import Loading from "../components/Loading";
import IniciarSesion from "../components/IniciarSesion";
import IniciarFacebook from "../components/IniciarFacebook";
import IniciarGoogle from "../components/IniciarGoogle";
import Registro1 from "../components/Registro1";
import RegistroFacebook from "../components/RegistroFacebook";
import RegistroGoogle from "../components/RegistroGoogle";
import Registro2 from "../components/Registro2";
import Parques1 from "../components/Parques1.js";
import Parques2 from "../components/Parques2.js";
import Calificar from "../components/Calificar";
import Comentarios from "../components/Comentarios";
import Mapa1 from "../components/Mapa1";
import Perfil from "../components/Perfil";
import ParquesGuardados from "../components/ParquesGuardados";
import PerfilEdit from "../components/PerfilEdit";
import Objetivo from "../components/Objetivo";
import SobreNosotros from "../components/SobreNosotros";

import Parques1Edit from "../components/Parques1Edit";
import Parques2Edit from "../components/Parques2Edit.js";
import HistoriaEdit from "../components/HistoriaEdit";


export default function Ppicontainer1() {
  return (
    <div className="Ppicontainer">
      <BrowserRouter>
        <React.Fragment>
          <Route path="/Loading" exact component={Loading} />
          <Route path="/" exact component={App} />
          <Route path="/IniciarSesion" exact component={IniciarSesion} />
          <Route path="/IniciarGoogle" exact component={IniciarGoogle} />
          <Route path="/Registro1" exact component={Registro1} />
          <Route path="/Registro2" exact component={Registro2} />
          <Route path="/RegistroGoogle" exact component={RegistroGoogle} />
          <Route path="/Objetivo" exact component={Objetivo} />
          <Route path="/Parques1" exact component={Parques1} />
          <Route path="/Parques1Edit" exact component={Parques1Edit} />
          <Route path="/Parques2" exact component={Parques2} />
          <Route path="/Parques2Edit" exact component={Parques2Edit} />
      
         
          <Route path="/HistoriaEdit" exact component={HistoriaEdit} />
          <Route path="/Perfil" exact component={Perfil} />
          <Route path="/PerfilEdit" exact component={PerfilEdit} />
          <Route path="/Mapa1" exact component={Mapa1} />
          <Route path="/SobreNosotros" exact component={SobreNosotros} />
          <Route path="/ParquesGuardados" exact component={ParquesGuardados} />
          <Route path="/Calificar" exact component={Calificar} />
          <Route path="/IniciarFacebook" exact component={IniciarFacebook} />
          <Route path="/RegistroFacebook" exact component={RegistroFacebook} />
          
          <Route path="/Comentarios" exact component={Comentarios} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}
