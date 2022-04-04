import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import CartItem from "../CartItem/";
import { AppContext } from "../../../contexts";
import { DrawerProps } from "./types";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function TemporaryDrawer({ addToCardItem }: DrawerProps) {
  const [open, setOpen] = useState(false);
  const { cartItems } = useContext(AppContext);

  // const toggleDrawer =
    // (open: boolean) => (event: React.KeyboardEvent) => {
    //   if (
    //     event.type === "keydown" &&
    //     ((event as React.KeyboardEvent).key === "Tab" ||
    //       (event as React.KeyboardEvent).key === "Shift")
    //   ) {
    //     return;
    //   }
    //   setState(open);
    // };

  const onToggle = (val: boolean) => setOpen(val);

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge
          badgeContent={addToCardItem}
          color="success"
          onClick={() => onToggle(true)}
        >
          <ShoppingCartIcon />
        </StyledBadge>
        <Drawer anchor="right" open={open} onClose={() => onToggle(false)}>
          <Box
            sx={{ width: "40vw" }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(false)}
          >
            {cartItems.map((cartItem) => <CartItem cartItem={cartItem}/>)}
          </Box>
        </Drawer>
      </IconButton>
    </div>
  );
}