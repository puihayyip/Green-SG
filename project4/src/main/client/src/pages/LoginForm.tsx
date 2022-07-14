import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function LoginForm(props: any) {
  const open: boolean = props.open;
  const setOpen = props.setOpen;

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
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
            margin="dense"
            id="name"
            label="Password"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
