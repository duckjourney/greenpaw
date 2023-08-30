import React from 'react';
import "./map.css";
import coordinates from './coordinates.json';

function Map() {
  return (
    <div className="mapContainer">
      <h1>En este mapa podrás ver los comercios asociados en los que canjear tus puntos:</h1>
      <gmp-map center="41.387447357177734,2.169898271560669" zoom="13" map-id="MAP_ID">
        {coordinates.map((coord, index) => (
          <gmp-advanced-marker key={index} position={`${coord.lat},${coord.lng}`}></gmp-advanced-marker>
        ))}
      </gmp-map>
    </div>
  );
}

export default Map;
