"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DivIcon, LatLngExpression } from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";
import { MapPin } from "lucide-react";

const position: LatLngExpression = [-27.59537, -48.54805];

const customIcon = new DivIcon({
  html: renderToString(<MapPin color="white" size={30} fill="gold" />),
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -20],
});

const MapComponent = () => {
  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ height: "500px", width: "500px" }}
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
};

export default MapComponent;
