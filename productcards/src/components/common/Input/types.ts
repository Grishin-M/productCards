import { SyntheticEvent } from "react";

export type Props = {
  filterValue: string;
  onChange: (event: SyntheticEvent) => void;
  addToCardItem: number;
};
