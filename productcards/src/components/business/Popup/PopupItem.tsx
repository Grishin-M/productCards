import { PopupProps } from "./types";
import { ADD_TO_CART_FROM_POPUP } from "../../../store/actions";
import { CardProps } from "../Card/types";
import { useContext } from "react";
import { AppContext } from "../../../contexts";

const PopupItem = ({ popupItem }: PopupProps, { card }: CardProps) => {
  const { dispatch } = useContext(AppContext);
  console.log(popupItem);
  return (
    <div className="popup_items">
      <img
        src={popupItem.media.imageUrl}
        className="popup_items_img"
        alt="product-img"
      />
      <p className="popup_items_title">{popupItem.title}</p>
      <div className="popup_items_wrapper">
        <div className="popup_items_description popup_items_left">
          <p>Brand: {popupItem.brand}</p>
          <p>Gender: {popupItem.gender}</p>
          <p>Release Data: {popupItem.releaseDate}</p>
        </div>
        <div className="popup_items_right">
          <p className="popup_items_price">Price: $ {popupItem.retailPrice}</p>
          <button
            className="AddToCard-btn"
            onClick={() => dispatch(ADD_TO_CART_FROM_POPUP(popupItem))}
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupItem;
