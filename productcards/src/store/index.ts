import {
  addHelper,
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
    default:
      return state;
  }
};
