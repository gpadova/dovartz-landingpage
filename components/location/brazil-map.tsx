"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DivIcon, LatLngExpression } from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";

const position: LatLngExpression = [-27.59537, -48.54805];
import { renderToString } from "react-dom/server";
import { MapPin } from "lucide-react";

const customIcon = new DivIcon({
  html: renderToString(
    <MapPin color="white" size={30} fill="gold" />

    // <div
    //   style={{
    //     backgroundColor: "gold",
    //     borderRadius: "50% 50% 50% 0",
    //     transform: "rotate(-45deg)",
    //     width: "30px",
    //     height: "30px",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     border: "2px solid white",
    //   }}
    // >
    //   <div style={{ transform: "rotate(45deg)" }}>
    //     <MapPin color="white" size={20} />
    //   </div>
    // </div>
  ),
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -20],
});
export function BrazilMap() {
  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ height: "500px", width: "500px" }}
      //   className="map-container"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <FaMapMarkerAlt />
        <Popup>
          <b>Dovartz Automação Residencial</b> <br /> Atendemos toda a região de
          Florianópolis.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
