import { Dispatch } from "react";
import { CartItem } from "../components/business/CartItem/types";

export type InitialAppState = {
    cards: Array<string>,
    loading: boolean,
    error: string,
    pagination: Pagination
    cartItems: CartItem[] | []
    dispatch: Dispatch<AppAction>;
}

type Pagination = {
    page: number;
    size: number;
}

export type AppAction = {
    type: string;
    payload: any;
}