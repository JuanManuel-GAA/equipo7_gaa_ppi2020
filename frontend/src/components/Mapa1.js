import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { withRouter } from "react-router-dom";
import "../style/Mapa1.css";
import Menu2 from "./Menu2"

const Mapa1 = () => {
  return (
    <div>
      <Menu2/>
    <Map center={{ lat: "6.2470025", lng: "-75.537933" }} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='& amp; copiar <a href="http://osm.org/copyright"> OpenStreetMap </a> colaboradores'
      />
    </Map>
    </div>
  );
};
export default withRouter(Mapa1);
