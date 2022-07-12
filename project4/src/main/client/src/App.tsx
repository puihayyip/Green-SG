import "./App.css";
import axios from "axios";

interface IMscp {
  id?: any | null;
  block: string;
  street: string;
  postal: number;
  spot1: string;
  spot2: string;
  spot3: string;
  spot4: string;
}

interface ICar {
  id?: any | null;
  carplate: string;
  location: number;
  startTime: string;
  endTime: string;
}

interface IUser {
  id?: any | null;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  car: ICar;
}

function App() {
  axios
    .get<Array<IUser>>("http://localhost:8080/api/getusers")
    .then((res: any) => console.log(res.data));

  return (
    <div className="App">
      <h1>Hello react</h1>
    </div>
  );
}

export default App;
