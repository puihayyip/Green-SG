import { colors, createTheme } from "@mui/material";
import { useState } from "react";
import { IMscp } from "../interfaces";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.green[500],
    },
    secondary: {
      main: colors.grey[50],
    },
  },
});

function Main() {
  const [data, setData] = useState<IMscp[]>([]); //selected MSCP
  const [selection, setSelection] = useState<number>(0); //selected MSCP

  return (
    <>
      <header>
        <MainHeader data={data} setData={setData} setSelection={setSelection} />
      </header>
      <div
        style={{
          display: "grid",
          height: "calc(100vh - 100px)",
          gridTemplateColumns: "1fr 3fr",
          gridTemplateRows: "5fr 1fr",
        }}
      >
        <div
          style={{
            border: "1px solid red",
            gridColumn: "1",
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          <Sidebar data={data} setData={setData} setSelection={setSelection} />
        </div>
        <div
          style={{
            border: "1px solid blue",
            gridColumn: "2",
          }}
        >
          <h1>Main</h1>
        </div>
        <div
          style={{
            border: "1px solid pink",
            gridColumn: "1/3",
            gridRow: "2",
          }}
        >
          <h1>Footer</h1>
        </div>
      </div>
    </>
  );
}

export default Main;
