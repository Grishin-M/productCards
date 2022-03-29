import { ACTION_1, ACTION_2 } from "./actions";
import { InitialAppState } from "./types";

type AppAction = {
  type: string;
  // payload: T;
};

export const reducer = (state: InitialAppState, action: AppAction) => {
  switch (action.type) {
    case ACTION_1:
      return {
        ...state,
        loading: true,
      };
    case ACTION_2:
      return {
        ...state,
        cards: [],
      };
    default:
        return state
  }
};
