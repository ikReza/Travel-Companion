import GoogleMapReact from "google-map-react";
import { LocationOn } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { MapContainer } from "./styles";

const Map = () => {
  const isMobile = useMediaQuery("min-width: 600px");
  console.log(isMobile);

  const coordinates = { lat: 0, lng: 0 };

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAVnUjTAM4xENjz7gWjbJZaHzA9qWnrjmA" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
