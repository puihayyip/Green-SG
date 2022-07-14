import { AxiosResponse } from "axios";
import { IUser } from "../interfaces";
import PersonIcon from "@mui/icons-material/Person";

interface AppProps {
  user: IUser | AxiosResponse;
}

function DropdownList({ user }: AppProps) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <PersonIcon
        fontSize="large"
        sx={{
          border: "2px solid white",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
        }}
      />
      <p style={{ color: "white", fontWeight: "bolder", fontSize: "1.2rem" }}>
        {(user as IUser).firstName} {(user as IUser).lastName}
      </p>
    </div>
  );
}

export default DropdownList;
