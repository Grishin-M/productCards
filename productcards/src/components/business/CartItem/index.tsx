import { useContext } from "react";
import { CartProps } from "./types";
import { Button } from "@mui/material";
import { AppContext } from "../../../contexts";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../../store/actions";
import './styles.css';

const CartItem = ({ cartItem }: CartProps) => {
  const { dispatch } = useContext(AppContext);
  return (
    <div>
      <div className="cart_item_information">
        <p>Price: ${cartItem.title}</p>
        <p>Total: ${(cartItem.quantity * cartItem.retailPrice).toFixed(2)}</p>
      </div>
      <div className="cart_item_buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => dispatch(REMOVE_FROM_CART(cartItem.id))}
        >
          -
        </Button>
        <p>{cartItem.quantity}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => dispatch(ADD_TO_CART(cartItem))}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
