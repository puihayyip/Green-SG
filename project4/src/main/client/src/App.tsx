import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";

function App() {
  const [user, setUser] = useState<string>("");
  useEffect(() => {
    localStorage.setItem("Username", user);
  }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setUser={setUser} user={user} />} />
          <Route
            path="/register"
            element={<RegisterForm setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
