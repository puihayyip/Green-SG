import React, { useEffect, useState } from "react";
import { IMscp } from "../interfaces";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Home";
import Button from "@mui/material/Button";
import axios from "axios";

function MapPopup(props: any) {
  const eachPoint: IMscp = props.eachPoint;
  const setReload: React.Dispatch<React.SetStateAction<boolean>> =
    props.setReload;
  const [carId, setCarId] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);

  const arr: string[] = [
    eachPoint.spot1,
    eachPoint.spot2,
    eachPoint.spot3,
    eachPoint.spot4,
  ];

  const handleBook = () => {
    const user = JSON.parse(localStorage.getItem("User") as string);
    setUserId(user.id);
    for (let each of arr) {
      if (each !== null) {
        axios
          .get("http://localhost:8080/api/car", {
            params: {
              carplate: each,
            },
          })
          .then((data) => {
            setCarId(data.data.id);
            console.log(data.data.id);
          })
          .then(() => {
            axios
              .put(
                `http://localhost:8080/api/users/book?userId=${userId}&carId=${carId}`
              )
              .then((data) =>
                localStorage.setItem("User", JSON.stringify(data.data))
              );
          });
        return;
      }
    }
  };

  const handleEnd = () => {
    const user = JSON.parse(localStorage.getItem("User") as string);
    console.log(typeof user.id);
    setUserId(user.id);
    axios
      .put(
        `http://localhost:8080/api/users/end?userId=${
          user.id
        }&mscp=${eachPoint.postal.toString()}`
      )
      .then((data) => localStorage.setItem("User", JSON.stringify(data.data)));
    return;
  };
  const buttonArr: any = [];
  if (
    localStorage.getItem("User") &&
    JSON.parse(localStorage.getItem("User") as string).id !== 0
  ) {
    !JSON.parse(localStorage.getItem("User") as string).car
      ? buttonArr.push(
          <Button
            variant="contained"
            size="small"
            onClick={handleBook}
            disabled={eachPoint.carsAvail ? false : true}
          >
            Book
          </Button>
        )
      : buttonArr.push(
          <Button
            variant="contained"
            size="small"
            onClick={handleEnd}
            disabled={eachPoint.parkingAvail ? false : true}
          >
            End
          </Button>
        );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="inside-popup">
        <div className="inside-1">
          <DriveEtaIcon color="primary" />
        </div>
        <div className="inside-2">
          <LocalParkingIcon color="primary" />
        </div>
        <div className="inside-3">{eachPoint.carsAvail}</div>
        <div className="inside-4">{eachPoint.parkingAvail}</div>
        <div className="inside-5">{buttonArr}</div>
      </div>
    </ThemeProvider>
  );
}

export default MapPopup;
