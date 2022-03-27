import { Key } from 'react';
import { Card } from './Card'

function Cards (props: { cards: any; }) {
  const { cards } = props;

  return (
    <div className="cards">
      {cards.map((card: (JSX.IntrinsicAttributes & { id: string; brand: string; retailPrice: number; shoe: string; media: { imageUrl: any; }; })) => (
         <Card key={ card.id } {...card} />
      ))}
    </div>
  )
}
export { Cards }