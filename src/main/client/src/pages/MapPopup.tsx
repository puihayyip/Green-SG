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

  const arr: string[] = [
    eachPoint.spot1,
    eachPoint.spot2,
    eachPoint.spot3,
    eachPoint.spot4,
  ];

  const handleBook = () => {
    const user = JSON.parse(localStorage.getItem("User") as string);
    for (let each of arr) {
      if (each !== null) {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/car`, {
            params: {
              carplate: each,
            },
          })
          .then((data) => {
            axios
              .put(
                `${process.env.REACT_APP_BACKEND_URL}/users/book?userId=${user.id}&carId=${data.data.id}`
              )
              .then((data) => {
                localStorage.setItem("User", JSON.stringify(data.data));
                setReload((reload) => !reload);
              });
          });
        return;
      }
    }
  };

  const handleEnd = () => {
    const user = JSON.parse(localStorage.getItem("User") as string);
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/users/end?userId=${
          user.id
        }&mscp=${eachPoint.postal.toString()}`
      )
      .then((data) => {
        localStorage.setItem("User", JSON.stringify(data.data));
        setReload((reload) => !reload);
      });
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
      <div className="inside-name">
        {eachPoint.block} {eachPoint.street}
      </div>
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
