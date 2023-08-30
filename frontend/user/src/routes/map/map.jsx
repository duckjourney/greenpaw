import "./map.css";

function Map() {
  return (
    <div className="mapContainer">
      <h1>En este mapa podrás ver los comercios asociados en los que canjear tus puntos:</h1>
      <gmp-map center="41.387447357177734,2.169898271560669" zoom="14" map-id="DEMO_MAP_ID">
      <gmp-advanced-marker position="41.3875,2.1709">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.3858, 2.1727">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.3888,2.1689">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.3861,2.1733">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.3908,2.1771">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.3822,2.1699">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.383,2.1635">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.3766,2.1589">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.3773,2.099">
      </gmp-advanced-marker>
      <gmp-advanced-marker position="41.4102,2.2172">
      </gmp-advanced-marker>
    </gmp-map>
    </div>
  );
}

export default Map;
