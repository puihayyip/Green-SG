import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, IconButton, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useState } from "react";

interface AppProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export default function LoginForm({ open, setOpen, setUser }: AppProps) {
  const [alert, setAlert] = useState<boolean>();
  const [visible, setVisible] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      setAlert(false);
    }, 10000);

    return () => {
      clearTimeout(timeId);
    };
  }, [alert]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", {
        password: e.target[1].value,
        username: e.target[0].value,
        email: e.target[0].value,
      })
      .then((data) => {
        setUser(data.data.username);
        setOpen(false);
      })
      .catch(function (error) {
        setAlert(true);
      });
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        {alert ? (
          <Alert
            severity="error"
            onClose={() => {
              setAlert(false);
            }}
          >
            Email address/username or password is invalid. Access denied.
          </Alert>
        ) : (
          <></>
        )}
        <form onSubmit={(e) => handleLogin(e)}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To enjoy cheap car sharing without the guilt of contributing to
              climate change, please log in with your email address or username.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email/Username"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              fullWidth
              variant="standard"
              type={visible ? "text" : "password"}
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {!visible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Login</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
