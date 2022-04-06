import Card from "../Card";
import { TCard } from "../Card/types";
import { CardsProps } from "./types";

function Cards({ cards, letsOpenPopup }: CardsProps) {
  return (
    <div className="cards">
      {cards.map((card: TCard) => (
        <Card key={card.id} card={card} letsOpenPopup={letsOpenPopup} />
      ))}
    </div>
  );
}
export default Cards;
