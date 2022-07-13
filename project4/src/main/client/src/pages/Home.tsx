import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <div
        style={{
          display: "grid",
          minHeight: "calc(100vh - 100px)",
          gridTemplateColumns: "1fr 4fr",
          gridTemplateRows: "5fr 1fr",
        }}
      >
        <div style={{ border: "1px solid red", gridColumn: "1" }}>
          {/* <h1>Sidebar</h1> */}
          <Sidebar />
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
