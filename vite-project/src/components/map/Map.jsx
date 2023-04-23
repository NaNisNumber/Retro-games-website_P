import React, { useEffect } from "react";
import "./Map.css";
const Map = () => {
  useEffect(() => {
    let map;

    async function initMap() {
      // The location of Timisoara
      const position = { lat: 45.7589515, lng: 21.2194093 };
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

      // The map, centered at Timisoara
      map = new Map(document.getElementById("map"), {
        zoom: 13,
        center: position,
        mapId: "contact_map",
      });

      // The marker, positioned at Timisoara
      const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Timisoara",
      });
    }

    initMap();
  }, []);

  return <div className="test" id="map"></div>;
};

export default Map;
