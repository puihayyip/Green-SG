import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { IUser } from "../../interfaces";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface IState {
  currentBooking: boolean;
  bills: boolean;
  editProfile: boolean;
  message: boolean;
}
interface MenuProps {
  openMenu: IState;
  setOpenMenu: React.Dispatch<React.SetStateAction<IState>>;
}

const EditProfile: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleClose = () => {
    setOpenMenu({
      currentBooking: false,
      bills: false,
      editProfile: false,
      message: false,
    });
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (openMenu.editProfile) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openMenu.editProfile]);

  const [visible, setVisible] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setVisible(!visible);
  };

  const user: IUser = JSON.parse(localStorage.getItem("User") as string);

  return (
    <div>
      <Dialog
        open={openMenu.editProfile}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Change details</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Username" {...a11yProps(0)} />
                  <Tab label="Email" {...a11yProps(1)} />
                  <Tab label="Name" {...a11yProps(2)} />
                  <Tab label="Password" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <form
                  onSubmit={(e: any) => {
                    e.preventDefault();
                    axios
                      .put<any>(
                        "https://green-sg.herokuapp.com/api/users/change/",
                        {
                          id: user.id,
                          password: e.target[1].value,
                        },
                        {
                          params: {
                            field: "username",
                            value: e.target[0].value,
                          },
                        }
                      )
                      .then((data) =>
                        localStorage.setItem("User", JSON.stringify(data.data))
                      );
                  }}
                >
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    fullWidth
                    variant="standard"
                    type={visible ? "text" : "password"}
                    label="Confirm password"
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
                  <DialogActions sx={{ marginTop: "20px" }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} type="submit">
                      Submit
                    </Button>
                  </DialogActions>
                </form>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <form
                  onSubmit={(e: any) => {
                    e.preventDefault();
                    axios.put<any>(
                      "https://green-sg.herokuapp.com/api/users/change/",
                      {
                        id: user.id,
                        password: e.target[1].value,
                      },
                      {
                        params: {
                          field: "email",
                          value: e.target[0].value,
                        },
                      }
                    );
                  }}
                >
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    fullWidth
                    variant="standard"
                    type={visible ? "text" : "password"}
                    label="Confirm password"
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
                  <DialogActions sx={{ marginTop: "20px" }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} type="submit">
                      Submit
                    </Button>
                  </DialogActions>
                </form>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <form
                  onSubmit={(e: any) => {
                    e.preventDefault();
                    axios
                      .put<any>(
                        "https://green-sg.herokuapp.com/api/users/change-name/",
                        {
                          id: user.id,
                          password: e.target[2].value,
                        },
                        {
                          params: {
                            first: e.target[0].value,
                            last: e.target[1].value,
                          },
                        }
                      )
                      .then((data) =>
                        localStorage.setItem("User", JSON.stringify(data.data))
                      );
                  }}
                >
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="First name"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Last name"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    fullWidth
                    variant="standard"
                    type={visible ? "text" : "password"}
                    label="Confirm password"
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
                  <DialogActions sx={{ marginTop: "20px" }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} type="submit">
                      Submit
                    </Button>
                  </DialogActions>
                </form>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <form
                  onSubmit={(e: any) => {
                    e.preventDefault();
                    axios
                      .put<any>(
                        "https://green-sg.herokuapp.com/api/users/change/",
                        {
                          id: user.id,
                          password: e.target[0].value,
                        },
                        {
                          params: {
                            field: "password",
                            value: e.target[2].value,
                          },
                        }
                      )
                      .then((data) =>
                        localStorage.setItem("User", JSON.stringify(data.data))
                      );
                  }}
                >
                  <TextField
                    fullWidth
                    variant="standard"
                    type={visible ? "text" : "password"}
                    label="Old password"
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
                  <TextField
                    fullWidth
                    variant="standard"
                    type={visible ? "text" : "password"}
                    label="New password"
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
                  <TextField
                    fullWidth
                    variant="standard"
                    type={visible ? "text" : "password"}
                    label="Confirm new password"
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
                  <DialogActions sx={{ marginTop: "20px" }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} type="submit">
                      Submit
                    </Button>
                  </DialogActions>
                </form>
              </TabPanel>
            </Box>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions sx={{marginTop:"20px"}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} type="submit">
            Submit
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default EditProfile;
