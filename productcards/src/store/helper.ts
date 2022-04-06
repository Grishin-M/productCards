import { CartItem } from "../components/business/CartItem/types";
import { PopupItem } from "../components/business/Popup/types";

/** Функция по добавлению элемента в корзину */
export const addHelper = (items: CartItem[], current: CartItem) => {
  const foundElement = items.find((el) => el.id === current.id);
  if (foundElement) {
    return items.map((el) => {
      return el.id === current.id ? { ...el, quantity: el.quantity + 1 } : el;
    });
  }
  return [...items, { ...current, quantity: 1 }];
};
/** Функция по добавлению элемента в корзину из popup */
export const addHelperPop = (items: PopupItem[], current: CartItem) => {
  const foundElement = items.find((el) => el.id === current.id);
  if (foundElement) {
    return items.map((el) => {
      return el.id === current.id ? { ...el, quantity: el.quantity + 1 } : el;
    });
  }
  return [...items, { ...current, quantity: 1 }];
};

/** Функция по удалению элемента из корзины */
export const removeHelper = (items: CartItem[], id: string) => {
  return items.reduce((newItems: CartItem[], currItem: CartItem) => {
    if (currItem.id === id) {
      if (currItem.quantity === 1) return newItems;
      return [...newItems, { ...currItem, quantity: currItem.quantity - 1 }];
    } else {
      return [...newItems, currItem];
    }
  }, []);
};

export const passInfoToPopup = (items: PopupItem[], current: CartItem) => {
  return [...items, { ...current }];
};
