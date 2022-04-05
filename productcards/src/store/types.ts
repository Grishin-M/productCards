import { Dispatch } from "react";
import { CartItem } from "../components/business/CartItem/types";
import { PopupItem } from "../components/business/Popup/types";

export type InitialAppState = {
  // cards: Array<string>;
  // loading: boolean;
  // error: string;
  // pagination: Pagination;
  cartItems: CartItem[]; // было CartItem[] | [] и ругалось на reduce
  popupItems: PopupItem[];
  onOpenPopup: boolean;
  dispatch: Dispatch<AppAction>;
};

// type Pagination = {
//   page: number;
//   size: number;
// };

export type AppAction = {
  type: string;
  payload: any;
};
