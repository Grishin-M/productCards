import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import CartItem from "../CartItem/";
import { AppContext } from "../../../contexts";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useContext(AppContext);

  const onToggle = (val: boolean) => setOpen(val);
  const totalPrice = cartItems.reduce(
    (sum: number, cartItem: { quantity: number; retailPrice: number }) => {
      return sum + cartItem.quantity * cartItem.retailPrice;
    },
    0
  );
  const totalPcsInCart = cartItems.reduce(
    (sum: number, cartItem: { quantity: number }) => {
      return sum + cartItem.quantity;
    },
    0
  );

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge
          badgeContent={totalPcsInCart}
          color="default"
          onClick={() => onToggle(true)}
        >
          <ShoppingCartIcon />
        </StyledBadge>
        <Drawer anchor="right" open={open} onClose={() => onToggle(false)}>
          <Box sx={{ width: "40vw" }} role="presentation">
            <h2 className="CartH2">Your cart</h2>
            {cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
          </Box>
          <div className="total_cart">
            <h3>Total: $ {totalPrice}</h3>
          </div>
        </Drawer>
      </IconButton>
    </div>
  );
}
