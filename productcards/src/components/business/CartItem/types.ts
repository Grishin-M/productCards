import { Media } from "../Card/types";

export type CartItem = {
    brand: string;
    colorway: string;
    gender: string;
    id: string;
    media: Media;
    name: string;
    releaseDate: string;
    retailPrice: number;
    shoe: string;
    styleId: string;
    title: string;
    quantity: number;
}

export type CartProps = {
    cartItem: CartItem
}