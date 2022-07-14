import SearchIcon from "@mui/icons-material/Search";
import { TextField, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMscp } from "../interfaces";
import { theme } from "./Home";
import LoginForm from "./LoginForm";
import PersonIcon from "@mui/icons-material/Person";

interface AppProps {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  user: string;
  data: IMscp[];
  setData: React.Dispatch<React.SetStateAction<IMscp[]>>;
  setSelection: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

export default function Head({
  data,
  setData,
  setSelection,
  setUser,
  user,
}: AppProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [field, setField] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (data.length === 1) {
      setSelection({ lat: data[0].latitude, lng: data[0].longtitude });
      setField("");
    }
  };

  useEffect(() => {
    axios
      .get<Array<IMscp>>(`http://localhost:8080/api/mscp/search?field=${field}`)
      .then((res: any) => setData(res.data));
  }, [field]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary" sx={{ height: 100 }}>
          <Toolbar
            sx={{
              marginTop: "auto",
              marginBottom: "auto",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: "bold",
              }}
              align="left"
              color="white"
            >
              GreenSG
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div style={{ display: "flex", gap: "10px" }}>
                <TextField
                  id="outlined-basic"
                  placeholder="Street/Block/Postal code"
                  sx={{
                    input: { color: "white" },
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                  value={field}
                  variant="outlined"
                  color="secondary"
                  focused
                  onChange={(event) => {
                    setField(event.target.value);
                  }}
                />

                <button
                  type="submit"
                  style={{ background: "none", padding: "0px", border: "none" }}
                >
                  <SearchIcon
                    fontSize="large"
                    sx={{
                      alignSelf: "center",
                      color: "white",
                      border: "2px solid white",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                </button>
              </div>
            </form>
            {user ? (
              <div style={{ marginLeft: "41px" }}>
                <Button
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    border: "1px white solid",
                  }}
                  onClick={() => setOpen(true)}
                >
                  Login
                </Button>
                <Button
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    border: "1px white solid",
                    marginLeft: "10px",
                  }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </div>
            ) : (
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
              </div>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <LoginForm open={open} setOpen={setOpen} setUser={setUser} />
    </Box>
  );
}
