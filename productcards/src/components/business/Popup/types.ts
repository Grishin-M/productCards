import { Media } from "../Card/types";

export type PopupItem = {
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
};

export type PopupProps = {
  popupItem: PopupItem;
};

export type PropsPopup = {
  letsOpenPopup: () => void;
  letsClosePopup: () => void;
  openPopup: boolean;
};
