import { CartItem } from "../components/business/CartItem/types";

export const addHelper = (items: CartItem[], current: CartItem) => {
  const mapped =  items.map((item) => {
    if (item.id === current.id) {
      return {
        ...item,
        quantity: item.quantity++,
      };
    } else {
      return {
        ...item,
        quantity: 1,
      };
    }
  });
  console.log(mapped , '=> ddf')
};
