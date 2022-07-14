import { AxiosResponse } from "axios";
import { IUser } from "../interfaces";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import { randomInt } from "crypto";

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      cursor: "pointer",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

interface AppProps {
  user: IUser | AxiosResponse;
}
function DropdownList({ user }: AppProps) {
  const fullName: string =
    (user as IUser).firstName + " " + (user as IUser).lastName;
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Avatar {...stringAvatar(fullName)} />
      <p style={{ color: "white", fontWeight: "bolder", fontSize: "1.2rem" }}>
        {(user as IUser).firstName} {(user as IUser).lastName}
      </p>
    </div>
  );
}

export default DropdownList;
