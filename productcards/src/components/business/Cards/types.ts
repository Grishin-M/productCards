import { TCard } from "../Card/types";

export type CardsProps = {
  cards: TCard[];
  letsOpenPopup: (id: string) => void;
};
