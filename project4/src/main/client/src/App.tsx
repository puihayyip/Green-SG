import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import axios from "axios";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
