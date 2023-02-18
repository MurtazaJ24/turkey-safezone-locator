"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import React from "react";

const Map = ({ data }) => {
  return (
    <div>
      <MapContainer
        className="w-2/3 aspect-video mx-auto bg-red-100"
        center={[38, 38]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.features.map((feature) => (
          <Marker position={feature.geometry.coordinates} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
