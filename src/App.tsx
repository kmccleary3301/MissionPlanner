import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
//import { Icon } from "leaflet";
//import * as parkData from "./data/skateboard-parks.json";

function App() {
  return (
    <MapContainer center={[40.712776, -74.005974]} zoom={12}scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default App;
