"use client";

import {MapContainer, TileLayer, Popup, Marker, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const issIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function RecenterMap({center}){
    const map = useMap();
    map.setView(center, map.getZoom(), {animate:true});
    return null;
}

export default function LiveMap({issPosition}){
    return(
        <>
          <MapContainer
          center={issPosition}
          zoom={4}
          scrollWheelZoom={true}
          className="w-full h-full rounded-lg z-10"
          >
            <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <Marker
            position={issPosition}
            icon={issIcon}
            >
                <Popup>
                    <span className="font-mono text-black">ISS Current Position 🛰️</span>
                </Popup>
            </Marker>
            <RecenterMap center={issPosition} />
          </MapContainer>
        </>
    )
}