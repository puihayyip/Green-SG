import axios from "axios";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import { IMscp } from "../interfaces";
import MapPopup from "./MapPopup";

function Map(props: any) {
  const selection: { lat: number; lng: number } = props.selection;
  const [marker, setMarker] = useState<IMscp[]>([]);

  useEffect(() => {
    axios
      .get<Array<IMscp>>("http://localhost:8080/api/mscps")
      .then((res: any) => {
        setMarker(res.data);
      });
  }, []);

  const HandleClickMap = () => {
    const map = useMapEvent("keypress", () => {
      map.flyTo({ lat: selection.lat, lng: selection.lng }, 18);
    });

    return null;
  };

  return (
    <MapContainer
      center={[1.3676879846236816, 103.82805893537059]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <HandleClickMap />
      {marker.map((eachPoint, index) => {
        return (
          <Marker
            position={[eachPoint.latitude, eachPoint.longtitude]}
            key={index}
          >
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
