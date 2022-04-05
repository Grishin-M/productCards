// import { useContext } from "react";
import { CartProps } from "./types";
import { Button } from "@mui/material";
// import { AppContext } from "../../../contexts";
// import { ADD_TO_CART, REMOVE_FROM_CART } from "../../../store/actions";
import "./styles.css";

const CartItem = ({ cartItem }: CartProps) => {
  // const { dispatch } = useContext(AppContext);
  return (
    <div className="cart_items">
      <div className="cart_item_information">
        <div className="cart_item_img">
          <img
            src={cartItem.media.imageUrl}
            className="cart_item_product_img"
            alt="product-img"
          />
          <p>Amount</p>
          <span>$ {(cartItem.quantity * cartItem.retailPrice).toFixed(2)}</span>
        </div>
        <div className="cart_item_name">
          <p>Item:</p>
          <span>{cartItem.title}</span>
          <div className="cart_item_quantity">
            <Button
              size="small"
              disableElevation
              variant="outlined"
              color="error"
              // onClick={() => dispatch(REMOVE_FROM_CART(cartItem.id))}
            >
              -
            </Button>
            <div className="qty">
              <p>Quantity</p>
              <span>{cartItem.quantity}</span>
            </div>
            <Button
              size="small"
              disableElevation
              variant="outlined"
              color="success"
              // onClick={() => dispatch(ADD_TO_CART(cartItem))}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
