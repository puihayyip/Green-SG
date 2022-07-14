import { Paper, Table, TableContainer } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import * as React from "react";

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

const CurrentBooking: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

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
    if (openMenu.currentBooking) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openMenu.currentBooking]);

  ///////////////////////////////////////////////////////
  const user = JSON.parse(localStorage.getItem("User") as string);
  const car = user.car;
  function createData(
    Car: string,
    StartTime: string,
    Elapsed: number,
    Cost: number
  ) {
    return { Car, StartTime, Elapsed, Cost };
  }
  const numeral = require("numeral");

  let rows = [createData("0", "0", 0, 0)];
  if (car) {
    const startTime: any = moment(car.startTime, "HH:mm:ss");
    const nowTime: any = moment(Date.now(), "x");
    const elaspedTime: number =
      (nowTime.hour() - startTime.hour()) * 60 +
      (nowTime.minute() - startTime.minute());
    rows = [
      createData(car.carplate, car.startTime, elaspedTime, elaspedTime * 0.42),
    ];
  }
  ///////////////////////////////////////////////////////

  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={openMenu.currentBooking}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Current booking</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {car ? (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Car</TableCell>
                      <TableCell align="right">Start time</TableCell>
                      <TableCell align="right">Elapsed time</TableCell>
                      <TableCell align="right">Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.Car}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.Car}
                        </TableCell>
                        <TableCell align="right">{row.StartTime}</TableCell>
                        <TableCell align="right">{row.Elapsed} min</TableCell>
                        <TableCell align="right">
                          {numeral(row.Cost).format("$0,0.00")}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <p>You have not booked a car. Pick 1 and drive now!</p>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CurrentBooking;
