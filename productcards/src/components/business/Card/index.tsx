import { useContext } from "react";
import { AppContext } from "../../../contexts";
import { ADD_TO_CART, PASS_TO_POPUP } from "../../../store/actions";
import { CardProps } from "./types";

function Card({ card, letsOpenPopup }: CardProps) {
  const { dispatch } = useContext(AppContext);
  const {
    id,
    media: { imageUrl },
    shoe,
    retailPrice,
  } = card;
  return (
    <div id={id} className="product-card">
      <div className="cards-image">
        <img
          src={imageUrl}
          className="product-img"
          alt="product-img"
          onClick={letsOpenPopup}
          onChange={() => dispatch({ type: "PASS_TO_POPUP", payload: card })}
        />
      </div>
      <div className="card-content">
        <p className="card-title">{shoe}</p>
        <div className="AddToCard">
          {retailPrice === 0 ? (
            <span className="card-title N-A">Out off stock</span>
          ) : (
            <span className="card-title">{retailPrice}$</span>
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
