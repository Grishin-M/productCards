function Card(props: {
  id: string;
  brand: string;
  retailPrice: number;
  shoe: string;
  media: { imageUrl: any };
  addToCardCounter: () => void;
}) {
  const {
    id,
    brand,
    retailPrice,
    shoe,
    media: { imageUrl },
    addToCardCounter,
  } = props;

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
          <button className="AddToCard-btn" onClick={addToCardCounter}>
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}

export { Card };
