
import React from 'react'
import './leaflet.css'


import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'


const Map = () => {
  return (
    <MapContainer center={[-31.42822,-64.49550]} zoom={200} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-31.42822,-64.49550]}>
        <Popup>
          
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map



