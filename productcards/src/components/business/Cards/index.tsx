import { Card } from "../Card";

function Cards(props: {
  cards: any;
  addToCardCounter: () => void;
  letsOpenPopup: () => void;
}) {
  const { cards, addToCardCounter, letsOpenPopup } = props;
  return (
    <div className="cards">
      {cards.map(
        (card: {
          id: string;
          brand: string;
          retailPrice: number;
          shoe: string;
          media: { imageUrl: any };
        }) => (
          <Card
            key={card.id}
            {...card}
            addToCardCounter={addToCardCounter}
            letsOpenPopup={letsOpenPopup}
          />
        )
      )}
    </div>
  );
}
export { Cards };
