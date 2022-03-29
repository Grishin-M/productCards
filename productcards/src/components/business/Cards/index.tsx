import { Card } from "../Card";

function Cards(props: { cards: any }) {
  const { cards } = props;
  console.log(cards);
  return (
    <div className="cards">
      {
        cards.map(
          (card: {
            id: string;
            brand: string;
            retailPrice: number;
            shoe: string;
            media: { imageUrl: any };
          }) => (
            <Card key={card.id} {...card} />
          )
        )
        // .slice(0, 9)
      }
    </div>
  );
}
export { Cards };
