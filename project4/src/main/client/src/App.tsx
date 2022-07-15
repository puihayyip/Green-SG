import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { IUser } from "./interfaces";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";

function App() {
  const [user, setUser] = useState<IUser | AxiosResponse>({
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    car: {
      id: 0,
      carplate: "",
      location: 0,
      startTime: "",
      endTime: "",
    },
  });
  const [selection, setSelection] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setUser={setUser}
                user={user}
                selection={selection}
                setSelection={setSelection}
              />
            }
          />
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
