// import { useContext } from "react";
// import { AppContext } from "../contexts";

function Card(props: {
  id: string;
  brand: string;
  retailPrice: number;
  shoe: string;
  media: { imageUrl: any };
}) {
  const {
    id,
    brand,
    retailPrice,
    shoe,
    media: { imageUrl },
  } = props;

  // const { pagination } = useContext(AppContext);

  return (
    <div id={id} className="product-card">
      <div className="cards-image">
        <img src={imageUrl} className="product-img" alt="product-img" />
      </div>
      <div className="card-content">
        <p className="card-title">{shoe}</p>
        <div className="AddToCard">
          {retailPrice === 0 ? (
            <span className="card-title N-A">Out off stock</span>
          ) : (
            <span className="card-title">{retailPrice}$</span>
          )}
          <button className="AddToCard-btn">Add to Card</button>
        </div>
      </div>
    </div>
  );
}

export { Card };
