import { Media } from "../Card/types";

export type PopupItem = {
  brand: string;
  gender: string;
  id: string;
  media: Media;
  releaseDate: string;
  retailPrice: number;
  title: string;
};

export type PopupProps = {
  PopupItem: PopupItem;
};

export type PropsPopup = {
  letsOpenPopup: () => void;
  letsClosePopup: () => void;
  openPopup: boolean;
};
