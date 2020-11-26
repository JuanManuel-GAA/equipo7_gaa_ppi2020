import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";


import PpiContainer from "./containers/Ppicontainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faEdit, faLock, faBookmark, faPlayCircle, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faEdit, faLock, faBookmark, faPlayCircle, faMapMarkedAlt);

const rootElement = document.getElementById("root");
ReactDOM.render(<PpiContainer />, rootElement);
