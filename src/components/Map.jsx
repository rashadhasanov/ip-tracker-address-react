import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function Map({ country }) {
  const { latitude, longitude, continent_name } = country;

  function SetViewOnChange({ coords }) {
    const map = useMap();
    useEffect(() => {
      map.setView(coords, map.getZoom());
    }, [coords]);
    return null;
  }

  return (
    <div className="map-container">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "75vh" }}
        zoomControl={false}
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{continent_name}</Popup>
        </Marker>
        <SetViewOnChange coords={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
}

export default Map;
