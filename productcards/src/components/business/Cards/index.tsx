import { Card } from "../Card";

function Cards(props: { cards: any }) {
  const { cards } = props;
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
          <Card key={card.id} {...card} />
        )
      )}
      {/* {cards.map((card: (JSX.IntrinsicAttributes & { id: string; brand: string; retailPrice: number; shoe: string; media: { imageUrl: any; }; })) => (
         <Card key={ card.id } {...card} />
      )).slice(0,9)} */}
    </div>
  );
}
export { Cards };
