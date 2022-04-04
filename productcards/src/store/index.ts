import { addHelper } from "./helper";
import { AppAction, InitialAppState } from "./types";

// редюсер
export const reducer = (state: InitialAppState, action: AppAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: addHelper(state.cartItems, action.payload)
      };
    case 'REMOVE_FROM_CART':
      console.log('remove')
      console.log(action.payload);
      return {
        ...state,
      };
    default:
        return state
  }
};
