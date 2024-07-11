import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Paper } from "@mui/material";

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

const Message: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
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
    if (openMenu.message) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openMenu.message]);

  return (
    <div>
      <Dialog
        maxWidth="md"
        open={openMenu.message}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Messages</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)].map(() => (
              <Paper elevation={3} sx={{ marginBottom: "20px" }}>
                <div style={{ margin: "10px" }}>
                  <h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Error, sed!
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perferendis natus ratione ipsum unde dolore doloribus nemo
                    in possimus! Placeat, eveniet non. Quis odit totam deserunt
                    veritatis at culpa eius. Ipsum iste incidunt laborum ipsam
                    dicta iure beatae fugiat eius, dolorem, sed nobis optio
                    accusamus perspiciatis repellat in. Fugiat suscipit ducimus
                    labore est facilis unde, qui eaque, rerum maiores, pariatur
                    cum mollitia sint officiis beatae eum voluptatem facere
                    itaque rem veniam. Recusandae, aspernatur cum. Est rem
                    eveniet optio quisquam quasi repudiandae quos quibusdam.
                    Minima aperiam repellat, reiciendis in dolores deserunt
                    perferendis vitae optio alias, aut omnis autem quae, id
                    adipisci et.
                  </p>
                </div>
              </Paper>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Message;
