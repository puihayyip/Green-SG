import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IMscp } from "../interfaces";
import MapPopup from "./MapPopup";

function Map() {
  const [marker, setMarker] = useState<IMscp[]>([]);

  useEffect(() => {
    axios
      .get<Array<IMscp>>("http://localhost:8080/api/mscps")
      .then((res: any) => {
        setMarker(res.data);
      });
  }, []);

  return (
    <MapContainer
      center={[1.3676879846236816, 103.81805893537059]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker.map((eachPoint, index) => {
        return (
          <Marker position={[eachPoint.latitude, eachPoint.longtitude]}>
            <Popup position={[eachPoint.latitude, eachPoint.longtitude]}>
              <MapPopup eachPoint={eachPoint} />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
