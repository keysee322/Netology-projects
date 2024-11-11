import ShopCard from "./ShopCard";

function CardsView({ cards }) {
  const cardItems = cards.map((item, index) => (
    <ShopCard key={index} data={item} />
  ));

  return <div className="container">{cardItems}</div>;
}

export default CardsView;
