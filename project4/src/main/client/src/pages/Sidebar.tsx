import { IMscp } from "../interfaces";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import "../App.css";
import { theme } from "./Home";
import { ThemeProvider } from "@emotion/react";

function Sidebar(props: any) {
  const data = props.data;
  const setData = props.setData;
  const setSelection = props.setSelection;

  const newData = findDetails(data);
  return (
    <ThemeProvider theme={theme}>
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
                borderBottom: "1px grey solid",
                paddingBottom: "10px",
                paddingTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => setSelection(location.postal)}
            >
              <p
                key={index}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bolder",
                  marginBottom: "12px",
                }}
              >
                {location.block} {location.street}, S{location.postal}
              </p>
              <div
                style={{
                  display: "flex",
                  alignContent: "baseline",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <div className="sidebar-stats">
                  <DriveEtaIcon color="primary" /> {location.carsAvail}
                </div>
                <div className="sidebar-stats">
                  <LocalParkingIcon color="primary" />
                  {location.parkingAvail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ThemeProvider>
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
