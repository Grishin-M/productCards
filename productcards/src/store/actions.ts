import { TCard } from "../components/business/Card/types";

// Добавление
export const ADD_TO_CART = (payload: TCard) => ({
  type: "ADD_TO_CART",
  payload,
});

// Удаление
export const REMOVE_FROM_CART = (payload: string) => ({
  type: "REMOVE_FROM_CART",
  payload,
});