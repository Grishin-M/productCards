import { Media } from "../Card/types";

export type TPopupItem = {
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
  popupItem: TPopupItem | null;
};

export type PropsPopup = {
  letsClosePopup: () => void;
  openPopup: boolean;
  currentShoe: TPopupItem | null;
};
