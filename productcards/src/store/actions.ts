import { TCard } from "../components/business/Card/types";

// Добавление
export const ADD_TO_CART = (payload: TCard) => ({
  type: "ADD_TO_CART",
  payload,
});

// Добавление
export const ADD_TO_CART_FROM_POPUP = (payload: TCard) => ({
  type: "ADD_TO_CART_FROM_POPUP",
  payload,
});

// Удаление
export const REMOVE_FROM_CART = (payload: string) => ({
  type: "REMOVE_FROM_CART",
  payload,
});

// Popup
export const PASS_TO_POPUP = (payload: TCard) => ({
  type: "PASS_TO_POPUP",
  payload,
});
