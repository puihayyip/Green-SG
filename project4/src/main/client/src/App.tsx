import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import axios from "axios";
import Home from "./pages/HomePage/Home";

function App() {
  // axios
  //   .get<Array<IUser>>("http://localhost:8080/api/getusers")
  //   .then((res: any) => console.log(res.data));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
