import SearchIcon from "@mui/icons-material/Search";
import { colors, createTheme, TextField, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green[500],
    },
    secondary: {
      main: colors.grey[50],
    },
  },
});

export default function Head() {
  const [field, setField] = useState("");

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setField("");
                console.log(field);
              }}
            >
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
            <Button
              sx={{
                fontWeight: "bold",
                color: "white",
                border: "1px white solid",
                marginLeft: "144px",
              }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
