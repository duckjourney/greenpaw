import "./map.css";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { coordinates } from "./coordinates";

function Map() {

  const API = "AIzaSyA5ubGcRg6KNfpKyNFUUKVp6fWGf0RT-Co"
  const containerStyle = {
    width: "60%",
    height: "80vh",
  };

  const center = {
    lat: 41.387215180730614,
    lng: 2.1700301742293218,
  };
  return (
    <Fragment>
      <Navbar />
      <div className="mapContainer">
        <LoadScript googleMapsApiKey={API}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            {/* MAP THROUGH COORDINATES */}
            {coordinates.map((position, index) => (
              <Marker key={index} position={position} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </Fragment>
  );
}

export default Map;
