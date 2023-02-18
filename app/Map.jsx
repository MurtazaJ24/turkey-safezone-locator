"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useState } from "react";

const marker = new Icon({
  iconUrl: "/marker.svg",
  iconSize: [30, 30],
});

const Map = ({ data }) => {
  const [selectedLoc, setSelectedLoc] = useState(null);

  return (
    <div className="bg-white px-6 lg:px-8 py-8 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-8 lg:pb-12">
        <h1 class="text-2xl text-center font-semibold tracking-tight text-gray-600 sm:text-4xl md:text-left">
          Recent Earthquakes
        </h1>
      </div>
      <MapContainer
        className="w-11/12 max-w-7xl aspect-video mx-auto rounded-xl shadow-xl"
        center={[38, 38]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.features.map((feature) => (
          <Marker
            key={feature.id}
            autoPanOnFocus={true}
            position={feature.geometry.coordinates}
            icon={marker}
            onClick={() => setSelectedLoc(feature)}
          >
            <Popup
              position={feature.geometry.coordinates}
              onClose={() => setSelectedLoc(null)}
            >
              <div>
                <h2 className="font-semibold text-base">
                  {feature.properties.place.normalize()}
                </h2>
                <p>
                  <span className="font-semibold text-sm"> Magnitude:</span>{" "}
                  {feature.properties.mag} <br />
                  <span className="font-semibold text-sm"> Time:</span>{" "}
                  {new Date(feature.properties.time).toUTCString()}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
