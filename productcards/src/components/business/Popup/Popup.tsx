import { ReactElement } from "react";
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
  letsClosePopup,
  openPopup,
}: PropsPopup): ReactElement<PropsPopup> {
  return (
    <div>
      <BootstrapDialog
        onClose={letsClosePopup}
        aria-labelledby="customized-dialog-title"
        open={openPopup}
      >
        <div>
          <div className="popupTitleShoe">
            <h3>Title</h3>
          </div>
          <DialogContent dividers>
            <div className="popupDescription">
              <Typography gutterBottom>Some info...</Typography>
            </div>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
}
