import { useState } from "react";
import { IMscp } from "../interfaces";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";

function Main() {
  const [data, setData] = useState<IMscp[]>([]);

  return (
    <>
      <header>
        <MainHeader data={data} setData={setData} />
      </header>
      <div
        style={{
          display: "grid",
          height: "calc(100vh - 100px)",
          gridTemplateColumns: "1fr 4fr",
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
          {/* <h1>Sidebar</h1> */}
          <Sidebar data={data} setData={setData} />
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
