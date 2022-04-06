import {
  addHelper,
  addHelperPop,
  passInfoToPopup,
  removeHelper,
} from "./helper";
import { AppAction, InitialAppState } from "./types";

// редюсер
export const reducer = (state: InitialAppState, action: AppAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: addHelper(state.cartItems, action.payload),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: removeHelper(state.cartItems, action.payload),
      };
    case "PASS_TO_POPUP":
      return {
        ...state,
        popupItems: passInfoToPopup(state.popupItems, action.payload),
      };
    case "ADD_TO_CART_FROM_POPUP":
      return {
        ...state,
        cartItems: addHelperPop(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
