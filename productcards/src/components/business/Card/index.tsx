import { useContext } from "react";
import { AppContext } from "../../../contexts";
import { ADD_TO_CART } from "../../../store/actions";
import { CardProps } from "./types";

function Card({ card, letsOpenPopup }: CardProps) {
  const { dispatch } = useContext(AppContext);
  return (
    <div id={card.id} className="product-card">
      <div className="cards-image">
        <img
          src={card.media.imageUrl}
          className="product-img"
          alt="product-img"
          onClick={ () => letsOpenPopup(card.id) }
        />
      </div>
      <div className="card-content">
        <p
          className="card-title"
          onClick={() => letsOpenPopup(card.id) }
        >
          {card.shoe}
        </p>
        <div className="AddToCard">
          {card.retailPrice === 0 ? (
            <span className="card-title N-A">Out off stock</span>
          ) : (
            <span className="card-title">{card.retailPrice}$</span>
          )}
          <button
            className="AddToCard-btn"
            onClick={() => dispatch(ADD_TO_CART(card))}
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
