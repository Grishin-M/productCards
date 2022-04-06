export type TCard = {
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
};

export type Media = {
  imageUrl: string;
};

export type CardProps = {
  card: TCard;
  letsOpenPopup: (id: string) => void;
};
