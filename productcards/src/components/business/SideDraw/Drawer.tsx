import React, {
  useState,
  ReactElement,
  useContext
} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import CartItem from "../CartItem/";
import { AppContext } from "../../../contexts";

interface Props {
  addToCardItem: number;
}
export default function TemporaryDrawer({
  addToCardItem,
}: Props): ReactElement<Props> {
  const [state, setState] = useState(false);
  const { cartItems } = useContext(AppContext);
  
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge
          badgeContent={addToCardItem}
          color="success"
          onClick={toggleDrawer(true)}
        >
          <ShoppingCartIcon />
        </StyledBadge>
        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: "40vw" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {cartItems.map((cartItem) => <CartItem cartItem={cartItem}/>)}
          </Box>
        </Drawer>
      </IconButton>
    </div>
  );
}

{
  /* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        </List> */
}
