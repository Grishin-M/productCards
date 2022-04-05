import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { PopupProps, PropsPopup } from "../Popup/types";
import "./popup.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs = (
  { letsClosePopup, openPopup }: PropsPopup,
  { PopupItem }: PopupProps
) => {
  return (
    <div>
      <BootstrapDialog
        onClose={letsClosePopup}
        aria-labelledby="customized-dialog-title"
        open={openPopup}
      >
        <div>
          <DialogContent dividers>
            <div className="popupDescription">
              <Typography gutterBottom>
                {/* <img
                  src={PopupItem.media.imageUrl}
                  className="product-img"
                  alt="product-img"
                />
                <p>{PopupItem.title}</p>
                <div>
                  <p>Brand: {PopupItem.brand}</p>
                  <p>Gender: {PopupItem.gender}</p>
                  <p>Release Data: {PopupItem.releaseDate}</p>
                </div>
                <div>
                  <p>Price: $ {PopupItem.retailPrice}</p>
                </div> */}
              </Typography>
            </div>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};
export default CustomizedDialogs;
