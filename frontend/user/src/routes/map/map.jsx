import "./map.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { coordinates } from "./coordinates";

function Map() {
  const API = "AIzaSyA5ubGcRg6KNfpKyNFUUKVp6fWGf0RT-Co";
  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  const center = {
    lat: 41.387215180730614,
    lng: 2.1700301742293218,
  };
  return (
    <div className="mapContainer">
      <h1>En este mapa podrás ver los comercios asociados en los que canjear tus puntos:</h1>
      <LoadScript googleMapsApiKey={API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {/* MAP THROUGH COORDINATES */}
          {coordinates.map((position, index) => (
            <Marker key={index} position={position} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
