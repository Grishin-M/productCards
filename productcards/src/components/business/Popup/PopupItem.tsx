import { PopupProps } from "./types";
import { Button } from "@mui/material";
import { ADD_TO_CART } from "../../../store/actions";
import { CardProps } from "../Card/types";
import { useContext } from "react";
import { AppContext } from "../../../contexts";

const PopupItem = ({ popupItem }: PopupProps, { card }: CardProps) => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="popup_items">
      <img
        src={popupItem.media.imageUrl}
        className="product-img"
        alt="product-img"
      />
      <p>{popupItem.title}</p>
      <div>
        <p>Brand: {popupItem.brand}</p>
        <p>Gender: {popupItem.gender}</p>
        <p>Release Data: {popupItem.releaseDate}</p>
      </div>
      <div>
        <p>Price: $ {popupItem.retailPrice}</p>
        <Button
          size="small"
          disableElevation
          variant="outlined"
          color="success"
          // onClick={() => dispatch(ADD_TO_CART(card))}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default PopupItem;
