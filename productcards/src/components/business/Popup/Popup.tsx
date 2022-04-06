import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { PropsPopup } from "../Popup/types";
import "./popup.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts";
import PopupItem from "./PopupItem";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs = ({ letsClosePopup, openPopup }: PropsPopup) => {
  const { popupItems } = useContext(AppContext);
  return (
    <div>
      <BootstrapDialog
        onClose={() => {
          letsClosePopup();
          popupItems.pop();
        }}
        aria-labelledby="customized-dialog-title"
        open={openPopup}
      >
        <div>
          <DialogContent dividers>
            <div className="popupDescription">
              {popupItems.map((popupItem) => (
                <PopupItem popupItem={popupItem} key={popupItem.id} />
              ))}
            </div>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};
export default CustomizedDialogs;
