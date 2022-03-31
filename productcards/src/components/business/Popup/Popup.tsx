import { ReactElement } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { PropsPopup } from "../Popup/types";
import "./popup.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({
  letsOpenPopup,
  letsClosePopup,
  openPopup,
}: PropsPopup): ReactElement<PropsPopup> {
  return (
    <div>
      <Button variant="outlined" onClick={letsOpenPopup}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={letsClosePopup}
        aria-labelledby="customized-dialog-title"
        open={openPopup}
      >
        <div>
          <div className="popupTitleShoe">
            <h3>shoe</h3>
          </div>
          <DialogContent dividers>
            <div className="popupDescription">
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
            </div>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
}
