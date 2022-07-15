import { colors, createTheme } from "@mui/material";
import { useState } from "react";
import { IMscp, IUser } from "../interfaces";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
import Map from "./Map";
import { AxiosResponse } from "axios";
import Footer from "./Footer";

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
interface ISelection {
  lat: number;
  lng: number;
}
interface AppProps {
  setUser: React.Dispatch<React.SetStateAction<IUser | AxiosResponse>>;
  user: IUser | AxiosResponse;
  selection: ISelection;
  setSelection: React.Dispatch<React.SetStateAction<ISelection>>;
}

function Main({ setUser, user, setSelection, selection }: AppProps) {
  const [data, setData] = useState<IMscp[]>([]); //selected MSCP

  return (
    <>
      <header>
        <MainHeader
          data={data}
          setData={setData}
          setSelection={setSelection}
          setUser={setUser}
          user={user}
        />
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
            gridColumn: "1",
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          <Sidebar data={data} setData={setData} setSelection={setSelection} />
        </div>
        <div
          style={{
            gridColumn: "2",
          }}
        >
          <Map selection={selection} />
        </div>
        <div
          style={{
            gridColumn: "1/3",
            gridRow: "2",
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
