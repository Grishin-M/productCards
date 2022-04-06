import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { PropsPopup } from "../Popup/types";
import "./popup.css";
import PopupItem from "./PopupItem";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs = ({ letsClosePopup, openPopup, currentShoe }: PropsPopup) => {
  return (
    <div>
      <BootstrapDialog
        onClose={() => letsClosePopup() }
        aria-labelledby="customized-dialog-title"
        open={openPopup}
      >
        <div>
          <DialogContent dividers>
            <div className="popupDescription">
              <PopupItem popupItem={currentShoe} key={currentShoe?.id} />
            </div>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};
export default CustomizedDialogs;
