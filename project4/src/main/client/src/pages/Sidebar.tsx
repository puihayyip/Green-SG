import { IMscp } from "../interfaces";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import "../App.css";

function Sidebar(props: any) {
  const data = props.data;
  const setData = props.setData;
  const newData = findDetails(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data.map((location: IMscp, index: number) => {
        return (
          <div
            style={{
              borderBottom: "1px black solid",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            <p key={index}>
              {location.block} {location.street}, {location.postal}
            </p>
            <p>
              <DriveEtaIcon color="primary" /> {location.carsAvail}, Parking
              spots: {location.parkingAvail}
            </p>
          </div>
        );
      })}
    </div>
  );
}

const findDetails = (data: IMscp[]) => {
  for (const location of data) {
    let num = 0;
    if (location.spot1) num++;
    if (location.spot2) num++;
    if (location.spot3) num++;
    if (location.spot4) num++;
    location.carsAvail = num;
    location.parkingAvail = 4 - num;
  }
  return data;
};

export default Sidebar;
