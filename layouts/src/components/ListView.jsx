import ShopItem from "./ShopItem";

function ListView({ items }) {
  const listItems = items.map((item, index) => (
    <ShopItem key={index} data={item} />
  ));

  return <div className="container list">{listItems}</div>;
}

export default ListView;
